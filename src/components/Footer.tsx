import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { PhoneIcon, MailIcon } from 'lucide-react';
import logo from "../assets/logo.png";
export function Footer() {
  const { t } = useLanguage();
  const quickLinks = [
  {
    label: t.nav.why,
    href: '#why'
  },
  {
    label: t.nav.howItWorks,
    href: '#how-it-works'
  },
  {
    label: t.nav.team,
    href: '#team'
  },
  {
    label: t.nav.contact,
    href: '#contact'
  }];

  const services = [
  t.why.features.realtime.title,
  t.why.features.multilingual.title,
  t.why.features.easySearch.title,
  t.why.features.reliable.title];

  return (
    <footer className="relative w-full bg-[var(--bg-secondary)] border-t border-[var(--border-color)] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-14 h-14 ">
                <img src={logo} alt="Sri Maps logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-2xl font-heading font-bold gradient-text">
                Sri Maps
              </span>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-bold text-[var(--text-primary)] mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) =>
              <li key={index}>
                  <a
                  href={link.href}
                  className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">

                    {link.label}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-bold text-[var(--text-primary)] mb-4">
              {t.footer.services}
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) =>
              <li key={index} className="text-[var(--text-secondary)]">
                  {service}
                </li>
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-bold text-[var(--text-primary)] mb-4">
              {t.footer.contactInfo}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-[var(--text-secondary)]">
                <PhoneIcon className="w-5 h-5 text-[var(--accent-primary)]" />
                <span>{t.footer.phone}</span>
              </li>
              <li className="flex items-center space-x-3 text-[var(--text-secondary)]">
                <MailIcon className="w-5 h-5 text-[var(--accent-primary)]" />
                <span>{t.footer.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border-color)] text-center">
          <p className="text-[var(--text-secondary)]">{t.footer.rights}</p>
        </div>
      </div>
    </footer>);

}
