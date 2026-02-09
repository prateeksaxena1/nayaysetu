import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '../UI/Button';
import ThemeToggle from '../UI/ThemeToggle';
import LanguageToggle from '../UI/LanguageToggle';
import ConsultationForm from '../UI/ConsultationForm';

import { useLanguage } from '../../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveSubmenu(null);
  }, [location]);

  const toggleSubmenu = (menu: string) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  const navigationItems = [
    { name: t('nav.home'), link: '/' },
    {
      name: t('nav.about'),
      submenu: [
        { name: t('nav.ourFirm'), link: '/about' },
        { name: t('nav.ourTeam'), link: '/team' },
      ]
    },
    { name: t('nav.caseStudies'), link: '/case-studies' },
    { name: t('nav.resources'), link: '/resources' },
    { name: t('nav.contact'), link: '/contact' },
  ];

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-bg-default/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Nayaysetu Logo"
                className="h-16 w-auto rounded-lg shadow-md"
              />
              <span className={`font-poppins font-semibold text-2xl tracking-[0.2em] ${isScrolled ? 'text-primary' : 'text-text-inverted'}`}>
                NYAYASETU
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <ul className="flex space-x-8">
                {navigationItems.map((item, index) => (
                  <li key={index} className="relative group">
                    {item.submenu ? (
                      <div className="flex items-center cursor-pointer">
                        <span
                          className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-primary hover:text-accent' : 'text-text-inverted hover:text-accent'}`}
                          onClick={() => toggleSubmenu(item.name)}
                        >
                          {item.name}
                        </span>
                        <ChevronDown className={`ml-1 w-4 h-4 transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-text-inverted'}`} />

                        <div className="absolute top-full left-0 mt-2 w-48 bg-bg-default rounded-md shadow-lg overflow-hidden transform scale-0 group-hover:scale-100 transition-transform origin-top-left z-50">
                          <ul>
                            {item.submenu.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  to={subItem.link}
                                  className="block px-4 py-2 text-sm text-primary hover:bg-primary hover:text-text-inverted"
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.link}
                        className={`font-medium transition-colors duration-300 ${isScrolled
                          ? 'text-primary hover:text-accent'
                          : 'text-text-inverted hover:text-accent'
                          } ${location.pathname === item.link ? 'text-accent font-semibold' : ''}`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <div className="ml-8 flex items-center space-x-4">
                <LanguageToggle />
                <ThemeToggle />
                <Button size="small" onClick={() => setShowConsultationForm(true)}>{t('common.freeConsultation')}</Button>
              </div>
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-primary' : 'text-text-inverted'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-primary' : 'text-text-inverted'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 shadow-lg absolute top-full left-0 right-0 border-t dark:border-gray-700">
            <ul className="px-4 py-2">
              {navigationItems.map((item, index) => (
                <li key={index} className="py-2">
                  {item.submenu ? (
                    <div>
                      <div
                        className="flex items-center justify-between py-2 px-4 text-nayaysetu dark:text-gray-200 hover:text-nayaysetu-gold cursor-pointer"
                        onClick={() => toggleSubmenu(item.name)}
                      >
                        <span className="font-medium">{item.name}</span>
                        <ChevronDown className={`w-4 h-4 ${activeSubmenu === item.name ? 'transform rotate-180' : ''}`} />
                      </div>

                      {activeSubmenu === item.name && (
                        <ul className="pl-4 pb-2">
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                to={subItem.link}
                                className="block py-2 px-4 text-sm text-nayaysetu dark:text-gray-200 hover:text-nayaysetu-gold"
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.link}
                      className={`block py-2 px-4 text-nayaysetu dark:text-gray-200 hover:text-nayaysetu-gold ${location.pathname === item.link ? 'font-semibold text-nayaysetu-gold' : ''
                        }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
              <li className="py-2 px-4 flex justify-between items-center">
                <span className="text-nayaysetu dark:text-gray-200">{t('common.theme')}</span>
                <ThemeToggle />
              </li>
              <li className="py-2 px-4 flex justify-between items-center">
                <span className="text-nayaysetu dark:text-gray-200">{t('common.language')}</span>
                <LanguageToggle />
              </li>
              <li className="py-2 px-4">
                <Button className="w-full" onClick={() => setShowConsultationForm(true)}>{t('common.freeConsultation')}</Button>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Consultation Modal */}
      {showConsultationForm && (
        <ConsultationForm onClose={() => setShowConsultationForm(false)} />
      )}
    </>
  );
};

export default Header;