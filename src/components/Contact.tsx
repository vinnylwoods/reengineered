import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Mail, MapPin, Send, Phone } from 'lucide-react';
import { Button } from './ui/Button';

export function Contact() {
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
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        }).toString()
      });

      if (!response.ok) throw new Error('Failed to submit');

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
    <section id="contact" className="relative isolate py-24 sm:py-32 bg-gray-950">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 -z-10" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-green-500 font-mono tracking-wide">/ CONTACT</h2>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Let's work together</h2>
          <p className="mt-2 text-lg leading-8 text-gray-400">
            Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you as soon as possible.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-xl bg-gray-900/50 backdrop-blur ring-1 ring-white/10" />
            <h3 className="text-2xl font-bold tracking-tight text-white font-mono">Contact Information</h3>
            <p className="mt-6 text-base leading-7 text-gray-400">
              Prefer to reach out directly? Here's how you can find us.
            </p>
            <dl className="mt-8 space-y-6 text-base leading-7 text-gray-400">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <div className="rounded-lg bg-gray-800 p-2 ring-1 ring-white/10">
                    <Mail className="h-5 w-5 text-green-500" aria-hidden="true" />
                  </div>
                </dt>
                <dd className="py-1.5">
                  <a className="font-semibold text-white hover:text-green-500 transition-colors font-mono" href="mailto:hello@example.com">
                    hello@example.com
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Phone</span>
                  <div className="rounded-lg bg-gray-800 p-2 ring-1 ring-white/10">
                    <Phone className="h-5 w-5 text-green-500" aria-hidden="true" />
                  </div>
                </dt>
                <dd className="py-1.5">
                  <a className="font-semibold text-white hover:text-green-500 transition-colors font-mono" href="tel:+1 (555) 234-5678">
                    +1 (555) 234-5678
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <div className="rounded-lg bg-gray-800 p-2 ring-1 ring-white/10">
                    <MapPin className="h-5 w-5 text-green-500" aria-hidden="true" />
                  </div>
                </dt>
                <dd className="py-1.5 text-gray-300 font-mono text-sm">
                  123 Business Avenue, Suite 100<br />
                  New York, NY 10001
                </dd>
              </div>
            </dl>
          </div>
          
          <form 
            name="contact" 
            method="POST" 
            data-netlify="true"
            onSubmit={handleSubmit} 
            className="flex flex-col gap-y-6 bg-gray-900/50 backdrop-blur p-8 shadow-lg ring-1 ring-white/10 rounded-2xl"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-white font-mono">
                  Name
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
                    className="block w-full rounded-md border-0 bg-gray-950/50 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6 transition-shadow font-mono"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white font-mono">
                  Email
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
                    className="block w-full rounded-md border-0 bg-gray-950/50 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6 transition-shadow font-mono"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white font-mono">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-gray-950/50 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6 transition-shadow resize-none font-mono"
                    placeholder="Tell us about your project..."
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
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            {status === 'success' && (
              <div className="rounded-md bg-green-500/10 p-4 mt-2 ring-1 ring-green-500/20">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-400 font-mono">Message sent successfully! We'll be in touch shortly.</p>
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
                    <p className="text-sm font-medium text-red-400 font-mono">Failed to send message. Please try again later.</p>

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
