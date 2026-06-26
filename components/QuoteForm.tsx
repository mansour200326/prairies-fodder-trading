'use client';

import { useRef, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { CheckIcon } from './icons';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const animals = ['horses', 'livestock', 'camels', 'poultry', 'mixed'] as const;

export function QuoteForm() {
  const t = useTranslations('quote.form');
  const locale = useLocale();
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<{ name?: boolean; contact?: boolean }>(
    {},
  );
  const [formError, setFormError] = useState<string | null>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = (data.get('name') as string)?.trim();
    const contact = (data.get('contact') as string)?.trim();

    const nextErrors = { name: !name, contact: !contact };
    setErrors(nextErrors);
    if (nextErrors.name || nextErrors.contact) {
      setStatus('error');
      setFormError(nextErrors.name ? t('errorName') : t('errorContact'));
      return;
    }

    setStatus('submitting');
    setFormError(null);

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          company: (data.get('company') as string)?.trim() || '',
          contact,
          animal: data.get('animal') as string,
          message: (data.get('message') as string)?.trim() || '',
          locale,
        }),
      });

      if (!res.ok) throw new Error('Request failed');

      setStatus('success');
      form.reset();
      requestAnimationFrame(() =>
        successRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        }),
      );
    } catch {
      setStatus('error');
      setFormError(t('errorGeneric'));
    }
  };

  if (status === 'success') {
    return (
      <div className="form-ok card" ref={successRef} role="status">
        <div className="check" aria-hidden="true">
          <CheckIcon width={32} height={32} />
        </div>
        <h3>{t('successTitle')}</h3>
        <p>{t('successBody')}</p>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => setStatus('idle')}
        >
          {t('successAgain')}
        </button>
      </div>
    );
  }

  return (
    <form className="card" onSubmit={handleSubmit} noValidate>
      {formError && (
        <p className="form-alert" role="alert">
          {formError}
        </p>
      )}

      <div className="row2">
        <div className="field">
          <label htmlFor="qf-name">{t('name')}</label>
          <input
            id="qf-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={errors.name || undefined}
            aria-describedby={errors.name ? 'qf-name-err' : undefined}
            onChange={() =>
              errors.name && setErrors((s) => ({ ...s, name: false }))
            }
          />
          {errors.name && (
            <span className="field-error" id="qf-name-err">
              {t('errorName')}
            </span>
          )}
        </div>
        <div className="field">
          <label htmlFor="qf-company">{t('company')}</label>
          <input
            id="qf-company"
            name="company"
            type="text"
            autoComplete="organization"
          />
        </div>
      </div>

      <div className="row2">
        <div className="field">
          <label htmlFor="qf-contact">{t('contact')}</label>
          <input
            id="qf-contact"
            name="contact"
            type="text"
            inputMode="email"
            required
            aria-invalid={errors.contact || undefined}
            aria-describedby={errors.contact ? 'qf-contact-err' : undefined}
            onChange={() =>
              errors.contact && setErrors((s) => ({ ...s, contact: false }))
            }
          />
          {errors.contact && (
            <span className="field-error" id="qf-contact-err">
              {t('errorContact')}
            </span>
          )}
        </div>
        <div className="field">
          <label htmlFor="qf-animal">{t('animal')}</label>
          <select id="qf-animal" name="animal" defaultValue="horses">
            {animals.map((a) => (
              <option key={a} value={a}>
                {t(`animals.${a}`)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="qf-message">{t('message')}</label>
        <textarea id="qf-message" name="message" rows={4} />
      </div>

      <button
        type="submit"
        className="btn btn-gold"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? t('sending') : t('submit')}
        {status !== 'submitting' && <span className="arrow">→</span>}
      </button>
      <p className="form-note">{t('note')}</p>
    </form>
  );
}
