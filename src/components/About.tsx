import { User, Award, BookOpen, Coffee } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '10+' },
  { label: 'Projects Delivered', value: '50+' },
  { label: 'Happy Clients', value: '100%' },
  { label: 'Coffees Consumed', value: '∞' },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-green-500 font-mono tracking-wide">/ ABOUT_ME</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Passionate about meaningful content & strategy
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                My journey began in digital marketing, where I realized that authentic content is the key to building lasting relationships with customers. 
                I believe in transparency, quality, and results-driven strategies.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                I've worked with startups, non-profits, and Fortune 500 companies to refine their messaging and amplify their reach.
                When I'm not strategizing, you can find me hiking the nearest trail or experimenting with new coffee brews.
              </p>
              
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-white">
                    <Award className="absolute left-1 top-1 h-5 w-5 text-green-500" aria-hidden="true" />
                    Certified Expert
                  </dt>
                  <dd className="inline"> in Digital Marketing and Content Strategy.</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-white">
                    <BookOpen className="absolute left-1 top-1 h-5 w-5 text-green-500" aria-hidden="true" />
                    Continuous Learner
                  </dt>
                  <dd className="inline"> always staying ahead of industry trends.</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-white">
                    <Coffee className="absolute left-1 top-1 h-5 w-5 text-green-500" aria-hidden="true" />
                    Coffee Enthusiast
                  </dt>
                  <dd className="inline"> fueled by quality beans and good conversation.</dd>
                </div>
              </dl>
            </div>
          </div>
          
          <div className="lg:order-last">
             <div className="relative pl-6 pt-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl ring-1 ring-white/10 p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500 border border-gray-700">
                <div className="absolute -top-4 -left-4 bg-green-600 rounded-xl p-4 shadow-lg shadow-green-900/50">
                  <User className="text-white w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-4 text-white font-mono">Who I Am</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  With over a decade of experience, I help entrepreneurs find their voice and scale their impact. 
                  I don't just deliver reports; I partner with you to implement changes that matter.
                </p>
                
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-700">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <span className="block text-3xl font-bold text-green-400 mb-1 font-mono">{stat.value}</span>
                      <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</span>
                    </div>
                  ))}
                </div>
             </div>
             
             {/* Decorative blob */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[120%] h-[120%] bg-gradient-to-tr from-green-900/20 to-emerald-900/20 rounded-full blur-3xl opacity-50" />
          </div>

        </div>
      </div>
    </section>
  );
}
