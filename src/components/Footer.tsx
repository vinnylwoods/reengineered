import { useState } from 'react';
import { Github, Twitter, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Logo } from './ui/Logo';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background text-text border-t border-muted/70" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Logo className="text-primary" />
            <p className="text-sm leading-6 text-text/70 font-mono">
              {t('footer.description')}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-text/60 hover:text-accent transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-text/60 hover:text-accent transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-text/60 hover:text-accent transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:vinny@reengineered.com.au" className="text-text/60 hover:text-accent transition-colors">
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-primary font-mono">{t('footer.navigation')}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {['Home', 'About', 'Services', 'Recommendations'].map((item) => (
                    <li key={item}>
                      <a href={`#${item.toLowerCase()}`} className="text-sm leading-6 text-text/70 hover:text-accent transition-colors font-mono">
                        {t(`nav.${item.toLowerCase()}`)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="font-semibold leading-6 text-primary font-mono">{t('footer.legal')}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <button onClick={() => setShowPrivacy(!showPrivacy)} className="text-sm leading-6 text-text/70 hover:text-accent transition-colors text-left font-mono">
                      {t('footer.privacyPolicy')}
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setShowTerms(!showTerms)} className="text-sm leading-6 text-text/70 hover:text-accent transition-colors text-left font-mono">
                      {t('footer.termsConditions')}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Expandable Legal Content */}
        {(showPrivacy || showTerms) && (
          <div className="mt-12 border-t border-muted/70 pt-8">
            {showPrivacy && (
              <div className="mb-8 rounded-xl bg-secondary p-6 ring-1 ring-muted/70 animate-in fade-in slide-in-from-top-4 backdrop-blur border border-muted/70">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-primary font-mono">{t('footer.privacyPolicy')}</h3>
                  <button onClick={() => setShowPrivacy(false)} className="text-text/60 hover:text-accent">✕</button>
                </div>
                <p className="text-text/70 text-sm leading-relaxed font-mono">
                  {t('footer.privacyContent')}
                </p>
              </div>
            )}
            {showTerms && (
              <div className="mb-8 rounded-xl bg-secondary p-6 ring-1 ring-muted/70 animate-in fade-in slide-in-from-top-4 backdrop-blur border border-muted/70">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-primary font-mono">{t('footer.termsConditions')}</h3>
                  <button onClick={() => setShowTerms(false)} className="text-text/60 hover:text-accent">✕</button>
                </div>
                <p className="text-text/70 text-sm leading-relaxed font-mono">
                  {t('footer.termsContent')}
                </p>
              </div>
            )}
          </div>
        )}

        <div className="mt-12 border-t border-muted/70 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs leading-5 text-text/60">
            &copy; {new Date().getFullYear()} <span className="font-oswald"><span className="font-bold text-accent">(re)</span>ngineered</span>. {t('footer.rights')}
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-text/60 hover:text-accent transition-colors"
          >
            {t('footer.backToTop')} <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
