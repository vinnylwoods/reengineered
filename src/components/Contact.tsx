import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Mail, MapPin, Send, Phone } from 'lucide-react';
import { Button } from './ui/Button';
import { useTranslation, Trans } from 'react-i18next';

export function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const submitToNetlifyForms = async () => {
        return fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            'form-name': 'contact',
            'bot-field': '',
            ...formData
          }).toString()
        });
      };

      const isLocalDev =
        import.meta.env.DEV &&
        (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

      if (isLocalDev) {
        try {
          const emailResponse = await fetch('http://localhost:3001/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          });

          if (!emailResponse.ok) {
            throw new Error('Failed to send email');
          }

          // Best-effort: also persist the submission locally
          await fetch('http://localhost:3001/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          });

          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setStatus('idle'), 3000);
          return;
        } catch {
          throw new Error('Local contact server is not running');
        }
      }

      if (!import.meta.env.DEV) {
        const response = await fetch('/.netlify/functions/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setStatus('idle'), 3000);
          return;
        }
      }

      const fallbackResponse = await submitToNetlifyForms();
      if (!fallbackResponse.ok) {
        const isDevRouteNotHandled = fallbackResponse.status === 404 || fallbackResponse.status === 405;

        if (!(isLocalDev && isDevRouteNotHandled)) {
          throw new Error('Failed to submit');
        }
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative isolate py-24 sm:py-32 bg-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 -z-10" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-accent-strong font-mono tracking-wide">{t('contact.badge')}</h2>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">{t('contact.title')}</h2>
          <p className="mt-2 text-lg leading-8 text-text/70">
            {t('contact.description')}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-xl bg-secondary/80 backdrop-blur ring-1 ring-muted/70" />
            <h3 className="text-2xl font-bold tracking-tight text-primary font-mono">{t('contact.infoTitle')}</h3>
            <p className="mt-6 text-base leading-7 text-text/70">
              {t('contact.infoDesc')}
            </p>
            <dl className="mt-8 space-y-6 text-base leading-7 text-text/70">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <div className="rounded-lg bg-background p-2 ring-1 ring-muted/70">
                    <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>
                </dt>
                <dd className="py-1.5">
                  <a className="font-semibold text-primary hover:text-accent transition-colors font-mono" href="mailto:vinny@reengineered.com.au">
                    vinny@reengineered.com.au
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Phone</span>
                  <div className="rounded-lg bg-background p-2 ring-1 ring-muted/70">
                    <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>
                </dt>
                <dd className="py-1.5">
                  <a className="font-semibold text-primary hover:text-accent transition-colors font-mono" href="tel:+61 (0)401 590 258">
                    +61 (0)401 590 258
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <div className="rounded-lg bg-background p-2 ring-1 ring-muted/70">
                    <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>
                </dt>
                <dd className="py-1.5 text-text font-semibold">
                  <Trans i18nKey="contact.address" components={{ br: <br /> }} />
                </dd>
              </div>
            </dl>
          </div>
          
          <form 
            name="contact" 
            method="POST" 
            data-netlify="true"
            onSubmit={handleSubmit} 
            className="flex flex-col gap-y-6 glass-panel rounded-2xl p-8 ring-1 ring-muted/70 border border-muted/70 border-l-4 border-l-accent/80"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-primary font-mono">
                  {t('contact.form.name')}
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-background px-3.5 py-2 text-text shadow-sm ring-1 ring-inset ring-muted/70 placeholder:text-text/50 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 transition-shadow font-mono"
                    placeholder={t('contact.form.placeholders.name')}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-primary font-mono">
                  {t('contact.form.email')}
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-background px-3.5 py-2 text-text shadow-sm ring-1 ring-inset ring-muted/70 placeholder:text-text/50 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 transition-shadow font-mono"
                    placeholder={t('contact.form.placeholders.email')}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-primary font-mono">
                  {t('contact.form.message')}
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-background px-3.5 py-2 text-text shadow-sm ring-1 ring-inset ring-muted/70 placeholder:text-text/50 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 transition-shadow resize-none font-mono"
                    placeholder={t('contact.form.placeholders.message')}
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Button 
                type="submit" 
                className="w-full flex justify-center items-center gap-2 group font-mono" 
                disabled={status === 'submitting'}
                variant="primary"
              >
                {status === 'submitting' ? t('contact.form.submitting') : t('contact.form.submit')}
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            {status === 'success' && (
              <div className="rounded-md bg-accent/10 p-4 mt-2 ring-1 ring-accent/20">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-accent/90" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-accent/90 font-mono">{t('contact.form.success')}</p>
                  </div>
                </div>
              </div>
            )}
            {status === 'error' && (
              <div className="rounded-md bg-red-500/10 p-4 mt-2 ring-1 ring-red-500/20">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-red-400 font-mono">{t('contact.form.error')}</p>

                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
