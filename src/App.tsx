import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CTAFloat from './components/layout/CTAFloat';
import BackToTop from './components/common/BackToTop';

// Pages
// Pages
import Home from './pages/Home';
import Layanan from './pages/Layanan';
import LayananDetail from './pages/LayananDetail';
import Portofolio from './pages/Portofolio';
import ProyekDetail from './pages/ProyekDetail';
import Tentang from './pages/Tentang';
import Tim from './pages/Tim';
import Proses from './pages/Proses';
// import Artikel from './pages/Artikel';
// import ArtikelDetail from './pages/ArtikelDetail';
// import FAQ from './pages/FAQ';
import Kontak from './pages/Kontak';
import Estimasi from './pages/Estimasi';
import LegalPrivacy from './pages/LegalPrivacy';
import LegalTerms from './pages/LegalTerms';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/layanan/:slug" element={<LayananDetail />} />
          <Route path="/portofolio" element={<Portofolio />} />
          <Route path="/portofolio/:slug" element={<ProyekDetail />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/tim" element={<Tim />} />
          <Route path="/proses" element={<Proses />} />
          {/* <Route path="/artikel" element={<Artikel />} /> */}
          {/* <Route path="/artikel/:slug" element={<ArtikelDetail />} /> */}
          {/* <Route path="/faq" element={<FAQ />} /> */}
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/estimasi" element={<Estimasi />} />
          <Route path="/privasi" element={<LegalPrivacy />} />
          <Route path="/syarat-ketentuan" element={<LegalTerms />} />
        </Routes>
      </AnimatePresence>

      <CTAFloat />
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;