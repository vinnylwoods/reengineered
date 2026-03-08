import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { Logo } from './ui/Logo';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Recommendations', href: '#recommendations' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/80 backdrop-blur-md shadow-lg shadow-green-900/10 border-b border-white/5' : 'bg-transparent'}`}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <Logo className="text-white" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-300 hover:text-green-400 transition-colors relative group">
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button variant="primary" size="sm" onClick={() => window.location.href = '#contact'} className="shadow-lg shadow-green-900/20 hover:shadow-green-500/20 transition-all border border-green-500/20">
              Get in touch
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm transition-opacity" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-[60] w-full overflow-y-auto bg-gray-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10 border-l border-white/10 slide-in-from-right animate-in duration-300">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <Logo className="text-white" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-700/50">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-800 hover:text-green-400 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <Button className="w-full justify-center" onClick={() => {
                    setMobileMenuOpen(false);
                    window.location.href = '#contact';
                  }}>
                    Get in touch
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
