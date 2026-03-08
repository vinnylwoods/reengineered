import { useState } from 'react';
import { Github, Twitter, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Logo } from './ui/Logo';

export function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white border-t border-white/10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Logo className="text-white" />
            <p className="text-sm leading-6 text-gray-400 font-mono">
              Building digital experiences that matter. Focused on performance, accessibility, and modern design.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-green-500 transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-green-500 transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-green-500 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:hello@example.com" className="text-gray-500 hover:text-green-500 transition-colors">
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white font-mono">Navigation</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {['Home', 'About', 'Services', 'Recommendations', 'Contact'].map((item) => (
                    <li key={item}>
                      <a href={`#${item.toLowerCase()}`} className="text-sm leading-6 text-gray-400 hover:text-green-500 transition-colors font-mono">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="font-semibold leading-6 text-white font-mono">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <button onClick={() => setShowPrivacy(!showPrivacy)} className="text-sm leading-6 text-gray-400 hover:text-green-500 transition-colors text-left font-mono">
                      Privacy Policy
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setShowTerms(!showTerms)} className="text-sm leading-6 text-gray-400 hover:text-green-500 transition-colors text-left font-mono">
                      Terms & Conditions
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Expandable Legal Content */}
        {(showPrivacy || showTerms) && (
          <div className="mt-12 border-t border-white/10 pt-8">
            {showPrivacy && (
              <div className="mb-8 rounded-xl bg-gray-900/50 p-6 ring-1 ring-white/10 animate-in fade-in slide-in-from-top-4 backdrop-blur">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-white font-mono">Privacy Policy</h3>
                  <button onClick={() => setShowPrivacy(false)} className="text-gray-400 hover:text-green-500">✕</button>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed font-mono">
                  We value your privacy and are committed to protecting your personal data. 
                  We only collect information necessary to provide our services and improve your experience. 
                  We do not sell your data to third parties. Any data submitted via the contact form is stored securely and used only for communication purposes.
                </p>
              </div>
            )}
            {showTerms && (
              <div className="mb-8 rounded-xl bg-gray-900/50 p-6 ring-1 ring-white/10 animate-in fade-in slide-in-from-top-4 backdrop-blur">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-white font-mono">Terms & Conditions</h3>
                  <button onClick={() => setShowTerms(false)} className="text-gray-400 hover:text-green-500">✕</button>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed font-mono">
                  By using this website, you agree to comply with and be bound by the following terms and conditions of use.
                  Content on this site is for general information only and is subject to change without notice.
                  We strive for accuracy but cannot guarantee that all information is perfectly up to date at all times.
                </p>
              </div>
            )}
          </div>
        )}

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} r(e)ngineered. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-gray-400 hover:text-green-400 transition-colors"
          >
            Back to top <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
