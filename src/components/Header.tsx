import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from '../hooks/useTheme';
import { useLanguage, Language } from '../hooks/useLanguage';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from 'lucide-react';
import gsap from 'gsap';
import logo from "../assets/logo.png";
export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (headerRef.current && logoRef.current) {
      gsap.fromTo(
        headerRef.current,
        {
          y: -100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.2
        }
      );
      gsap.fromTo(
        logoRef.current,
        {
          scale: 0,
          rotation: -180
        },
        {
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: 'elastic.out(1, 0.5)',
          delay: 0.5
        }
      );
    }
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };
  const handleThemeToggle = () => {
    const button = document.querySelector('[data-theme-toggle]');
    if (button) {
      gsap.to(button, {
        rotation: 360,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: toggleTheme
      });
    } else {
      toggleTheme();
    }
  };
  const languages: {
    code: Language;
    label: string;
  }[] = [
  {
    code: 'en',
    label: 'EN'
  },
  {
    code: 'si',
    label: 'සිං'
  },
  {
    code: 'ta',
    label: 'த'
  }];

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-[var(--border-color)]">

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div
            ref={logoRef}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection('hero')}>

            <div className="w-16 h-16 ">
                <img src={logo} alt="Sri Maps logo" className="w-full h-full object-cover" />
              </div>
            <span className="text-xl md:text-2xl font-heading font-bold gradient-text">
              Sri Maps
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('why')}
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors font-medium">

              {t.nav.why}
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors font-medium">

              {t.nav.howItWorks}
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors font-medium">

              {t.nav.team}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors font-medium">

              {t.nav.contact}
            </button>
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="hidden sm:flex items-center space-x-1 bg-[var(--bg-secondary)] rounded-lg p-1">
              {languages.map((lang) =>
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${language === lang.code ? 'bg-[var(--accent-primary)] text-white shadow-glow-primary' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
                aria-label={`Switch to ${lang.label}`}>

                  {lang.label}
                </button>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              data-theme-toggle
              onClick={handleThemeToggle}
              className="p-2 rounded-lg bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] transition-colors"
              aria-label="Toggle theme">

              {theme === 'light' ?
              <MoonIcon className="w-5 h-5" /> :

              <SunIcon className="w-5 h-5" />
              }
            </button>

            {/* Launch App Button */}
            <button className="hidden md:block px-6 py-2.5 bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-glow-lg transition-all transform hover:scale-105">
              {t.nav.launchApp}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-[var(--bg-secondary)] text-[var(--text-primary)]"
              aria-label="Toggle menu">

              {isMenuOpen ?
              <XIcon className="w-6 h-6" /> :

              <MenuIcon className="w-6 h-6" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen &&
        <div className="md:hidden py-4 border-t border-[var(--border-color)]">
            <div className="flex flex-col space-y-3">
              <button
              onClick={() => scrollToSection('why')}
              className="text-left px-4 py-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] rounded-lg transition-colors">

                {t.nav.why}
              </button>
              <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-left px-4 py-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] rounded-lg transition-colors">

                {t.nav.howItWorks}
              </button>
              <button
              onClick={() => scrollToSection('team')}
              className="text-left px-4 py-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] rounded-lg transition-colors">

                {t.nav.team}
              </button>
              <button
              onClick={() => scrollToSection('contact')}
              className="text-left px-4 py-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] rounded-lg transition-colors">

                {t.nav.contact}
              </button>

              {/* Mobile Language Selector */}
              <div className="flex items-center space-x-2 px-4 pt-2">
                {languages.map((lang) =>
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${language === lang.code ? 'bg-[var(--accent-primary)] text-white' : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)]'}`}>

                    {lang.label}
                  </button>
              )}
              </div>

              <button className="mx-4 mt-2 px-6 py-3 bg-gradient-primary text-white rounded-lg font-semibold">
                {t.nav.launchApp}
              </button>
            </div>
          </div>
        }
      </nav>
    </header>);

}
