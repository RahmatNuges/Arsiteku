import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock } from 'lucide-react';

const Kontak: React.FC = () => {
  const whatsappNumber = "628123456789";
  const whatsappMessage = "Halo Arsiteku, saya ingin mendiskusikan rencana rumah saya.";

  return (
    <>
      <Helmet>
        <title>Kontak | Arsiteku Studio</title>
        <meta name="description" content="Hubungi kami untuk konsultasi rencana rumah Anda." />
      </Helmet>

      <main className="pt-24 pb-16 lg:pt-32 bg-white min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-primary mb-8">
              Siap Mewujudkan <br />Rumah Impian?
            </h1>
            <p className="text-xl text-neutral-600 mb-12 leading-relaxed">
              Kami siap mendengarkan cerita dan kebutuhan Anda. <br />
              Konsultasi awal gratis dan tanpa tekanan.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-primary text-white px-10 py-5 rounded-full text-xl font-bold border border-primary hover:bg-white hover:text-primary transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              <Phone className="w-6 h-6" />
              <span>Chat via WhatsApp</span>
            </a>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="p-8 bg-neutral-50 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-2">Studio Yogyakarta</h3>
                    <p className="text-neutral-600">
                      Jl. Kaliurang Km 5.5, Sleman<br />
                      Yogyakarta, Indonesia 55281
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-neutral-50 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-2">Jam Respons</h3>
                    <p className="text-neutral-600">
                      Senin - Jumat: 09.00 - 17.00<br />
                      Sabtu: 09.00 - 14.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Kontak;