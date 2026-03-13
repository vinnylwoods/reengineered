import { Compass, Settings, ClipboardCheck, Users, Handshake, ArrowRight, Check, Search, Route, Rocket, RefreshCw, Presentation } from 'lucide-react';
import { Button } from './ui/Button';
import { useTranslation, Trans } from 'react-i18next';

export function Services() {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.items.advisoryMentoring.title'),
      description: t('services.items.advisoryMentoring.description'),
      icon: Handshake,
      features: t('services.items.advisoryMentoring.features', { returnObjects: true }) as string[]
    },
    {
      title: t('services.items.workshops.title'),
      description: t('services.items.workshops.description'),
      icon: Presentation,
      features: t('services.items.workshops.features', { returnObjects: true }) as string[]
    },
    {
      title: t('services.items.contentStrategy.title'),
      description: t('services.items.contentStrategy.description'),
      icon: Compass,
      features: t('services.items.contentStrategy.features', { returnObjects: true }) as string[]
    },
    {
      title: t('services.items.businessConsulting.title'),
      description: t('services.items.businessConsulting.description'),
      icon: Settings,
      features: t('services.items.businessConsulting.features', { returnObjects: true }) as string[]
    },
    {
      title: t('services.items.brandDevelopment.title'),
      description: t('services.items.brandDevelopment.description'),
      icon: ClipboardCheck,
      features: t('services.items.brandDevelopment.features', { returnObjects: true }) as string[]
    },
    {
      title: t('services.items.communityManagement.title'),
      description: t('services.items.communityManagement.description'),
      icon: Users,
      features: t('services.items.communityManagement.features', { returnObjects: true }) as string[]
    }
  ];

  const process = [
    { step: '01', title: t('services.process.steps.discovery.title'), description: t('services.process.steps.discovery.description'), icon: Search },
    { step: '02', title: t('services.process.steps.strategy.title'), description: t('services.process.steps.strategy.description'), icon: Route },
    { step: '03', title: t('services.process.steps.execution.title'), description: t('services.process.steps.execution.description'), icon: Rocket },
    { step: '04', title: t('services.process.steps.optimisation.title'), description: t('services.process.steps.optimisation.description'), icon: RefreshCw },
  ];

  return (
    <section id="services" className="py-24 bg-background relative isolate">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 -z-10" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-accent-strong font-mono tracking-wide">{t('services.badge')}</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {t('services.title')}
          </p>
          <p className="mt-6 text-lg leading-8 text-text/70">
            <Trans
              i18nKey="services.description"
              components={{
                1: <span className="text-green-500 font-bold" />,
              }}
            />
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col bg-secondary rounded-2xl p-8 shadow-xl ring-1 ring-muted/70 transition-all duration-300 group border border-muted/70 hover:border-accent/40 hover:shadow-accent/10">
              <div className="flex items-center gap-x-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background transition-colors duration-300 ring-1 ring-muted/70 group-hover:ring-accent/40">
                  <service.icon className="h-6 w-6 text-accent transition-colors duration-300" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold leading-7 text-primary font-mono">{service.title}</h3>
              </div>
              <p className="flex-auto text-base leading-7 text-text/70 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-text/70">
                    <Check className="h-4 w-4 text-accent mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Button variant="outline" size="sm" className="w-full justify-between">
                  {t('services.learnMore')} <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mx-auto mt-20 overflow-hidden rounded-3xl bg-primary text-background shadow-xl ring-1 ring-background/10">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_0%,rgba(44,166,164,0.22),transparent_62%)]" />
          <div className="relative px-6 py-10 sm:px-10 lg:px-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-4">
                <h3 className="text-2xl font-bold tracking-tight text-background sm:text-3xl font-mono">
                  {t('services.process.title')}
                </h3>
                <p className="mt-3 text-sm leading-6 text-background/70">
                  {t('services.process.description')}
                </p>

                <div className="mt-6">
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full sm:w-auto justify-center gap-2"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {t('hero.initialiseProject')} <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {process.map((step) => (
                    <div
                      key={step.step}
                      className="relative rounded-2xl bg-background/5 p-5 ring-1 ring-background/10 backdrop-blur"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-accent/10 ring-1 ring-accent/20">
                          <step.icon className="h-4 w-4 text-accent" aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-baseline gap-2">
                            <span className="text-xs font-bold font-mono text-accent">{step.step}</span>
                            <div className="min-w-0 font-semibold text-background font-mono leading-snug">{step.title}</div>
                          </div>
                          <div className="mt-2 text-sm leading-6 text-background/65 break-words hyphens-auto">
                            {step.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
