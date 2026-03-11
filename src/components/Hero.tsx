import { ArrowRight } from 'lucide-react';
import { useEffect, useState, useRef, type ReactNode } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Button } from './ui/Button';

export function Hero() {
  const { t } = useTranslation();
  const [replay, setReplay] = useState(false);

  useEffect(() => {
    const totalCycleMs = 10000; // extended to accommodate typewriter + 2s pause
    const interval = setInterval(() => {
      setReplay(prev => !prev);
    }, totalCycleMs);
    return () => clearInterval(interval);
  }, []);

  function Typewriter({
    children,
    delay,
    durationSec = 1.2,
    className,
  }: {
    children: ReactNode;
    delay?: string;
    durationSec?: number;
    className?: string;
  }) {
    const ref = useRef<HTMLSpanElement>(null);
    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const txt = (el.textContent || '').trim();
      const len = Math.max(txt.length, 1);
      el.style.setProperty('--type-steps', String(len));
      el.style.setProperty('--type-ch', `${len}ch`);
      el.style.setProperty('--type-duration', `${durationSec}s`);
      if (delay) el.style.animationDelay = delay;
    }, [children, delay, durationSec]);
    return (
      <span ref={ref} className={`typewriter ${className ?? ''}`}>
        {children}
      </span>
    );
  }

  return (
    <section id="home" className="relative isolate pt-14 lg:pt-0 min-h-screen flex items-center overflow-hidden bg-gray-950">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] opacity-40"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-36">
        {/* Left Content */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
           <h1 className="max-w-lg text-4xl font-bold tracking-tight text-white sm:text-6xl text-balance font-oswald">
             <Trans 
               i18nKey="hero.title" 
               components={{ 
                 1: <span className="text-accent" />, 
                 2: <span className="text-gray-500" /> 
               }} 
             />
           </h1>
           
           <p className="mt-5 text-lg leading-8 text-gray-400 max-w-xl">
             {t('hero.description')}
           </p>
           
           {/* Buttons */}
           <div className="mt-8 flex items-center gap-x-6">
             <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 border border-primary/50" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
               {t('hero.initialiseProject')}
             </Button>
             <a href="#about" className="text-sm font-semibold leading-6 text-white hover:text-accent/90 transition-colors flex items-center gap-2 group">
               {t('hero.viewDocumentation')} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
             </a>
           </div>
        </div>
        
        {/* Right Content - Terminal Window */}
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow w-full max-w-lg mx-auto lg:mx-0">
          <div
            className={`relative rounded-xl bg-gray-900/90 border border-gray-800 backdrop-blur-xl shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-500 group ${replay ? 'replay' : ''}`}
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-gray-950/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 group-hover:bg-red-500 transition-colors animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 group-hover:bg-yellow-500 transition-colors animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-3 h-3 rounded-full bg-accent/80 group-hover:bg-accent transition-colors animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              </div>
              <div className="text-xs text-gray-500 font-mono animate-line" style={{ animationDelay: '0.2s' }}>{t('hero.terminal.header')}</div>
            </div>
            
            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm text-gray-300 space-y-4 min-h-[300px]">
              <div className="flex animate-line" style={{ animationDelay: '0.4s' }}>
                <span className="text-accent mr-2">➜</span>
                <span className="text-primary mr-2">~</span>
                <span className="text-gray-100">{t('hero.terminal.command')}</span>
              </div>
              
              <div className="space-y-1 text-gray-400">
                <div className="flex items-center gap-2 animate-line" style={{ animationDelay: '0.8s' }}>
                   <span className="text-accent">✔</span> {t('hero.terminal.loadingCore')}
                </div>
                <div className="flex items-center gap-2 animate-line" style={{ animationDelay: '1.2s' }}>
                   <span className="text-accent">✔</span> {t('hero.terminal.analysingBusiness')}
                </div>
                <div className="flex items-center gap-2 animate-line" style={{ animationDelay: '1.6s' }}>
                   <span className="text-accent">✔</span> {t('hero.terminal.optimisingPerformance')}
                </div>
                <div className="flex items-center gap-2 animate-line" style={{ animationDelay: '2.0s' }}>
                   <span className="text-accent">✔</span> {t('hero.terminal.generatingRevenue')}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-800/50 animate-line" style={{ animationDelay: '3.6s' }}>
                <div className="text-gray-400 mb-2 animate-line flex items-baseline font-mono" style={{ animationDelay: '4.0s' }}>
                  <span className="inline-block w-3 text-right mr-2 text-gray-500 select-none">&gt;</span>
                  <Typewriter delay="4.0s" durationSec={1.5}><Trans i18nKey="hero.terminal.strategyCompiled" components={[<span key="0" className="text-primary" />]} /></Typewriter>
                </div>
                <div className="text-gray-400 mb-2 animate-line flex items-baseline font-mono" style={{ animationDelay: '5.7s' }}>
                  <span className="inline-block w-3 text-right mr-2 text-gray-500 select-none">&gt;</span>
                  <Typewriter delay="5.7s" durationSec={1.5}><Trans i18nKey="hero.terminal.growthVector" components={[<span key="0" className="text-primary" />]} /></Typewriter>
                </div>
                <div className="text-gray-400 mb-2 animate-line flex items-baseline font-mono" style={{ animationDelay: '7.4s' }}>
                  <span className="inline-block w-3 text-right mr-2 text-gray-500 select-none">&gt;</span>
                  <Typewriter delay="7.4s" durationSec={1.5}><span className="text-accent/90">{t('hero.terminal.readyToDeploy')}</span></Typewriter>
                </div>
              </div>
              
              <div className="flex pt-2 animate-line" style={{ animationDelay: '9.0s' }}>
                 <span className="text-accent mr-2">➜</span>
                 <span className="text-primary mr-2">~</span>
                 <span className="w-2.5 h-5 bg-gray-500 animate-pulse block"></span>
              </div>
            </div>
            
            {/* Background Glow inside terminal */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-accent/5 rounded-full blur-[50px] pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
