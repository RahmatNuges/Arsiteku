import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();


  const email = "hello@arsiteku.com";
  const address = "Jl. Kaliurang Km 5.5, Sleman, DIY 55281";

  const services = [
    { to: "/layanan", label: "Desain Arsitektur" },
    { to: "/layanan", label: "Design & Build" },
    { to: "/layanan", label: "Konsultasi Awal" },
  ];

  const company = [
    { to: "/tentang", label: "Tentang Studio" },
    { to: "/tim", label: "Tim Kami" },
    { to: "/proses", label: "Proses Kerja" },
    { to: "/portofolio", label: "Portfolio" },
    { to: "/kontak", label: "Kontak" },
  ];

  const legal = [
    { to: "/privasi", label: "Kebijakan Privasi" },
    { to: "/syarat-ketentuan", label: "Syarat & Ketentuan" },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                <img src="/images/logo.png" alt="Arsiteku Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-xl font-heading font-bold">ARSITEKU</h2>
                <p className="text-sm text-white/80">Premium Architecture Studio</p>
              </div>
            </Link>

            <p className="text-white/80 leading-relaxed font-light">
              Mewujudkan rumah tinggal modern minimalis yang personal, eksklusif, dan timeless di seluruh Indonesia.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              {[Facebook, Instagram, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon className="w-5 h-5 text-white/80" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6">Menu</h3>
            <nav className="space-y-3">
              {company.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="block text-sm text-white/70 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6">Layanan</h3>
            <nav className="space-y-3">
              {services.map((service) => (
                <Link
                  key={service.label}
                  to={service.to}
                  className="block text-sm text-white/70 hover:text-white transition-colors"
                >
                  {service.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6">Kontak</h3>
            <div className="space-y-4 text-sm text-white/70">
              <p className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0" />
                {address}
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                +62 812 3456 7890
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                {email}
              </p>
              <p className="flex items-center">
                <Clock className="w-5 h-5 mr-3 flex-shrink-0" />
                Senin - Jumat: 09.00 - 17.00
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>© {currentYear} Arsiteku Studio.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {legal.map(l => (
              <Link key={l.label} to={l.to} className="hover:text-white transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;