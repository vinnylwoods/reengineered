import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Recommendations() {
  const { t } = useTranslation();

  const images = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  ];

  const testimonials = [
    {
      body: t('recommendations.items.0.body'),
      author: {
        name: t('recommendations.items.0.author.name'),
        role: t('recommendations.items.0.author.role'),
        imageUrl: images[0],
      },
    },
    {
      body: t('recommendations.items.1.body'),
      author: {
        name: t('recommendations.items.1.author.name'),
        role: t('recommendations.items.1.author.role'),
        imageUrl: images[1],
      },
    },
    {
      body: t('recommendations.items.2.body'),
      author: {
        name: t('recommendations.items.2.author.name'),
        role: t('recommendations.items.2.author.role'),
        imageUrl: images[2],
      },
    },
  ];

  return (
    <section id="recommendations" className="py-24 bg-secondary relative isolate overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-20">
          <svg
            className="absolute left-[50%] top-0 h-[48rem] w-[128rem] -translate-x-1/2 stroke-primary/10 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
          </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-base font-semibold leading-7 text-accent-strong font-mono tracking-wide">{t('recommendations.badge')}</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {t('recommendations.title')}
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.name} className="flex flex-col justify-between bg-background p-8 shadow-xl ring-1 ring-muted/70 rounded-2xl relative border border-muted/70 hover:border-accent/40 transition-all duration-300">
                <Quote className="absolute top-6 right-6 text-primary/10 w-12 h-12 -z-0" />
                <div className="z-10 relative">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-text/70 text-lg leading-relaxed font-mono text-sm">
                    <p>"{testimonial.body}"</p>
                  </blockquote>
                </div>
                <div className="mt-8 flex items-center gap-x-4 border-t border-muted/70 pt-6">
                  <img className="h-12 w-12 rounded-full bg-secondary ring-2 ring-accent/40" src={testimonial.author.imageUrl} alt="" />
                  <div>
                    <div className="font-semibold text-primary font-mono">{testimonial.author.name}</div>
                    <div className="text-text/60 text-xs font-mono">{testimonial.author.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
