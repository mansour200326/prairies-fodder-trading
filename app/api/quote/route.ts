import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

interface QuotePayload {
  name: string;
  company?: string;
  contact: string;
  animal?: string;
  message?: string;
  locale?: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request: Request) {
  let body: QuotePayload;
  try {
    body = (await request.json()) as QuotePayload;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 });
  }

  const name = body.name?.trim();
  const contact = body.contact?.trim();

  // Server-side validation mirrors the client.
  if (!name || !contact) {
    return NextResponse.json(
      { error: 'Name and a contact method are required.' },
      { status: 422 },
    );
  }

  const company = body.company?.trim() || '—';
  const animal = body.animal?.trim() || '—';
  const message = body.message?.trim() || '—';
  const locale = body.locale === 'ar' ? 'ar' : 'en';

  const toEmail = process.env.QUOTE_TO_EMAIL || 'hello@prairiesfodder.ae';
  const fromEmail =
    process.env.QUOTE_FROM_EMAIL || 'Prairies Fodder <onboarding@resend.dev>';
  const apiKey = process.env.RESEND_API_KEY;

  const summary = [
    `New quote request (${locale.toUpperCase()})`,
    '',
    `Name:    ${name}`,
    `Company: ${company}`,
    `Contact: ${contact}`,
    `Animal:  ${animal}`,
    '',
    'Message:',
    message,
  ].join('\n');

  // Graceful no-op when no API key is configured (local dev / preview).
  if (!apiKey) {
    console.info(
      '[quote] RESEND_API_KEY not set — logging submission:\n',
      summary,
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(apiKey);
    const html = `
      <h2>New quote request</h2>
      <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif">
        <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
        <tr><td><strong>Company / farm</strong></td><td>${escapeHtml(company)}</td></tr>
        <tr><td><strong>Email / WhatsApp</strong></td><td>${escapeHtml(contact)}</td></tr>
        <tr><td><strong>Animal type</strong></td><td>${escapeHtml(animal)}</td></tr>
        <tr><td valign="top"><strong>Message</strong></td><td>${escapeHtml(message).replace(/\n/g, '<br>')}</td></tr>
        <tr><td><strong>Locale</strong></td><td>${locale}</td></tr>
      </table>
    `;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: contact.includes('@') ? contact : undefined,
      subject: `Quote request — ${name}${company !== '—' ? ` (${company})` : ''}`,
      text: summary,
      html,
    });

    if (error) {
      console.error('[quote] Resend error:', error);
      return NextResponse.json(
        { error: 'Could not send your request. Please try again.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error('[quote] Unexpected error:', err);
    return NextResponse.json(
      { error: 'Could not send your request. Please try again.' },
      { status: 500 },
    );
  }
}
