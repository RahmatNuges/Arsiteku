import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Determine if we should show the solid navbar (white bg)
  // Show if: Scrolled OR Not on Homepage
  const showSolidNav = isScrolled || location.pathname !== '/';

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/portofolio', label: 'Portfolio' },
    { to: '/layanan', label: 'Layanan' },
    { to: '/proses', label: 'Proses' },
    { to: '/tentang', label: 'Tentang Studio' },
    { to: '/tim', label: 'Tim' },
    { to: '/kontak', label: 'Kontak' },
  ];

  const whatsappNumber = "628123456789";
  const whatsappMessage = "Halo Arsiteku, saya tertarik untuk konsultasi desain rumah.";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showSolidNav
      ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-neutral-100'
      : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden">
              <img src="/images/logo.png" alt="Arsiteku Logo" className="w-full h-full object-cover" />
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-xl font-heading font-bold transition-colors ${showSolidNav ? 'text-primary' : 'text-white'
                }`}>
                ARSITEKU
              </h1>
              <p className={`text-xs transition-colors ${showSolidNav ? 'text-neutral-600' : 'text-white/80'
                }`}>
                Studio Arsitektur
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-body text-sm font-medium transition-colors relative group ${location.pathname === link.to
                  ? showSolidNav ? 'text-primary' : 'text-white'
                  : showSolidNav ? 'text-neutral-700 hover:text-primary' : 'text-white/90 hover:text-white'
                  }`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <div className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${showSolidNav ? 'bg-primary' : 'bg-white'
                    }`} />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${showSolidNav
                ? 'bg-primary text-white hover:bg-primary/90'
                : 'bg-white text-primary hover:bg-white/90'
                }`}
            >
              <Phone className="w-4 h-4" />
              <span>Konsultasi via WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${showSolidNav ? 'text-neutral-700' : 'text-white'
              }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-neutral-200 shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block py-2 font-body text-base transition-colors ${location.pathname === link.to
                    ? 'text-primary font-medium'
                    : 'text-neutral-700 hover:text-primary'
                    }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-4 border-t border-neutral-200 space-y-3">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-primary hover:bg-primary/5 p-3 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">WhatsApp Konsultasi</span>
                </a>
                <Link
                  to="/kontak"
                  className="flex items-center space-x-3 bg-accent text-white p-3 rounded-lg hover:bg-accent/90 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">Kirim Brief Email</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;