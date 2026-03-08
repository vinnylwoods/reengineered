import { Briefcase, PenTool, TrendingUp, Users, ArrowRight, Check } from 'lucide-react';
import { Button } from './ui/Button';

const services = [
  {
    title: 'Content Strategy',
    description: 'Data-driven content plans aligned with your business goals to drive engagement, retention, and conversion across all channels.',
    icon: PenTool,
    features: ['Audience Analysis', 'Content Calendar', 'SEO Optimization']
  },
  {
    title: 'Business Consulting',
    description: 'Strategic advice to optimize your operations, identify new growth opportunities, and streamline your workflow.',
    icon: TrendingUp,
    features: ['Market Research', 'Competitor Analysis', 'Growth Hacking']
  },
  {
    title: 'Brand Development',
    description: 'Building a strong, recognizable brand identity that resonates with your target audience and stands out in the market.',
    icon: Briefcase,
    features: ['Visual Identity', 'Tone of Voice', 'Brand Guidelines']
  },
  {
    title: 'Community Management',
    description: 'Nurturing your community to foster loyalty and advocacy for your brand, turning followers into superfans.',
    icon: Users,
    features: ['Engagement Strategy', 'Crisis Management', 'User Feedback']
  }
];

const process = [
  { step: '01', title: 'Discovery', description: 'We start by understanding your business, goals, and audience.' },
  { step: '02', title: 'Strategy', description: 'I develop a tailored roadmap to achieve your objectives.' },
  { step: '03', title: 'Execution', description: 'We implement the strategy with precision and creativity.' },
  { step: '04', title: 'Optimization', description: 'We track results and refine the approach for maximum impact.' },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-950 relative isolate">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 -z-10" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-green-500 font-mono tracking-wide">/ SERVICES</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Services designed for growth
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            I offer a comprehensive range of services tailored to meet the unique needs of content creators and forward-thinking businesses.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col bg-gray-900/50 backdrop-blur rounded-2xl p-8 shadow-xl ring-1 ring-white/10 hover:ring-green-500/50 transition-all duration-300 group border border-transparent hover:border-green-500/20">
              <div className="flex items-center gap-x-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-800 group-hover:bg-green-600 transition-colors duration-300 ring-1 ring-white/10">
                  <service.icon className="h-6 w-6 text-green-500 group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold leading-7 text-white font-mono">{service.title}</h3>
              </div>
              <p className="flex-auto text-base leading-7 text-gray-400 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-500">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Button variant="outline" size="sm" className="w-full justify-between border-gray-700 text-gray-300 hover:text-white hover:border-green-500 hover:bg-gray-800">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-mono">My Process</h2>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              A simple, transparent approach to delivering results.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {process.map((step) => (
              <div key={step.step} className="relative pl-9 group">
                <dt className="inline font-semibold text-white">
                  <span className="absolute left-1 top-1 h-5 w-5 text-green-500 text-xs font-bold font-mono group-hover:text-green-400 transition-colors">{step.step}</span>
                  {step.title}
                </dt>
                <dd className="mt-2 text-sm text-gray-500 group-hover:text-gray-400 transition-colors">{step.description}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
