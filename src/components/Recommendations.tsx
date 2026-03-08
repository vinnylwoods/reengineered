import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    body: 'Working with this team was a game-changer for our business. The content strategy provided was clear, actionable, and delivered immediate results.',
    author: {
      name: 'Sarah Johnson',
      role: 'CEO at TechStart',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'I highly recommend their services to anyone looking to elevate their brand. Professional, creative, and truly dedicated to client success.',
    author: {
      name: 'Michael Chen',
      role: 'Founder of GreenLife',
      imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'The attention to detail and understanding of our niche was impressive. A fantastic partner for our growth journey.',
    author: {
      name: 'Emily Davis',
      role: 'Marketing Director',
      imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

export function Recommendations() {
  return (
    <section id="recommendations" className="py-24 bg-gray-950 relative isolate overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-20">
          <svg
            className="absolute left-[50%] top-0 h-[48rem] w-[128rem] -translate-x-1/2 stroke-gray-800 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
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
          <h2 className="text-base font-semibold leading-7 text-green-500 font-mono tracking-wide">/ TESTIMONIALS</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted by clients worldwide
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.name} className="flex flex-col justify-between bg-gray-900/50 backdrop-blur p-8 shadow-xl ring-1 ring-white/10 rounded-2xl relative border border-transparent hover:border-green-500/20 transition-all duration-300">
                <Quote className="absolute top-6 right-6 text-green-900/20 w-12 h-12 -z-0" />
                <div className="z-10 relative">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-green-500 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 text-lg leading-relaxed font-mono text-sm">
                    <p>"{testimonial.body}"</p>
                  </blockquote>
                </div>
                <div className="mt-8 flex items-center gap-x-4 border-t border-gray-800 pt-6">
                  <img className="h-12 w-12 rounded-full bg-gray-800 ring-2 ring-green-500/50" src={testimonial.author.imageUrl} alt="" />
                  <div>
                    <div className="font-semibold text-white font-mono">{testimonial.author.name}</div>
                    <div className="text-green-500 text-xs font-mono">{testimonial.author.role}</div>
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
