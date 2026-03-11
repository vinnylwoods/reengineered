import { Award, UserCheck, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-accent font-mono tracking-wide">{t('about.badge')}</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {t('about.title')}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                {t('about.p1')}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                {t('about.p2')}
              </p>
              
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-white">
                    <Award className="absolute left-1 top-1 h-5 w-5 text-accent" aria-hidden="true" />
                    {t('about.certifiedExpert')}
                  </dt>
                  <dd className="inline">{t('about.certifiedExpertDesc')}</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-white">
                    <UserCheck className="absolute left-1 top-1 h-5 w-5 text-accent" aria-hidden="true" />
                    {t('about.continuousLearner')}
                  </dt>
                  <dd className="inline">{t('about.continuousLearnerDesc')}</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-white">
                    <ShieldCheck className="absolute left-1 top-1 h-5 w-5 text-accent" aria-hidden="true" />
                    {t('about.coffeeEnthusiast')}
                  </dt>
                  <dd className="inline">{t('about.coffeeEnthusiastDesc')}</dd>
                </div>
              </dl>
            </div>
          </div>
          
          <div className="lg:order-last lg:pt-4 lg:justify-self-center">
             <div className="relative glass-panel rounded-3xl p-8 md:p-10 w-full max-w-lg mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 mb-6 text-center sm:text-left">
                  <img
                    src="/profile_image.jpg?v=1"
                    alt="Profile"
                    onError={(e) => {
                      const el = e.currentTarget as HTMLImageElement;
                      if (el.src.includes('profile_image.jpg')) {
                        el.src = '/profile.jpg?v=1';
                        return;
                      }
                      const svg = encodeURIComponent(
                        '<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320" viewBox="0 0 320 320"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#106EBE" stop-opacity="0.85"/><stop offset="1" stop-color="#0FFCBE" stop-opacity="0.85"/></linearGradient></defs><rect width="320" height="320" rx="24" fill="url(#g)"/><circle cx="160" cy="120" r="64" fill="#0b132b" fill-opacity="0.35"/><path d="M40 304c8-60 60-96 120-96s112 36 120 96" fill="#0b132b" fill-opacity="0.25"/></svg>'
                      );
                      el.src = `data:image/svg+xml,${svg}`;
                    }}
                    loading="lazy"
                    className="h-40 w-40 mx-auto sm:mx-0 rounded-2xl object-cover ring-1 ring-white/10 shadow-lg shadow-primary/20"
                  />
                  <h3 className="text-2xl font-bold tracking-tight text-white font-mono">{t('about.whoIAm')}</h3>
                </div>
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-gray-300 mt-4 leading-relaxed text-balance">
                    {t('about.whoIAmDesc1')}
                  </p>
                  <p className="text-gray-300 mt-4 leading-relaxed text-balance">
                    {t('about.whoIAmDesc2')}
                  </p>
                </div>
             </div>
             
             {/* Decorative blob */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl opacity-50" />
          </div>

        </div>
      </div>
    </section>
  );
}
