import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Tentang: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Tentang Studio | Arsiteku Studio</title>
        <meta name="description" content="Filosofi dan cerita di balik Arsiteku Studio." />
      </Helmet>

      <main className="pt-24 pb-16 lg:pt-32 bg-white min-h-screen">
        {/* Intro */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-primary mb-8">
              Menciptakan Ruang yang Bernyawa
            </h1>
            <p className="text-xl lg:text-2xl font-light text-neutral-600 leading-relaxed">
              Arsiteku didirikan atas dasar keyakinan bahwa arsitektur yang baik harus mampu
              meningkatkan kualitas hidup penghuninya, bukan sekadar memuaskan ego visual.
            </p>
          </motion.div>
        </section>

        {/* Studio Story Image */}
        <section className="w-full h-[60vh] bg-neutral-100 mb-24 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Studio Atmosphere"
            className="w-full h-full object-cover"
          />
        </section>

        {/* Narrative */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-primary">Cerita Studio</h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Perjalanan kami dimulai 8 tahun lalu, dari sebuah proyek renovasi kecil yang mengajarkan kami
                betapa pentingnya mendengar. Kami belajar bahwa setiap klien memiliki "bahasa" hidup yang unik,
                dan tugas kami sebagai arsitek adalah menerjemahkannya ke dalam ruang.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Kini, Arsiteku telah berkembang menjadi studio kolaboratif yang menangani berbagai skala proyek
                rumah tinggal di seluruh Indonesia, namun kami tetap memegang teguh prinsip awal kami:
                personal dan mendetail.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Kontekstual</h3>
                <p className="text-neutral-600">Desain kami selalu merespons iklim tropis, arah matahari, dan lingkungan sekitar.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Timeless</h3>
                <p className="text-neutral-600">Menghindari tren sesaat. Kami mengejar estetika yang tetap relevan bertahun-tahun ke depan.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Craftsmanship</h3>
                <p className="text-neutral-600">Penghargaan tinggi terhadap material dan detail konstruksi.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Behind Scenes Gallery */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <h2 className="text-3xl font-heading font-bold text-primary mb-12 text-center">Behind The Scenes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-square bg-neutral-100 rounded-lg overflow-hidden">
              <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Sketching" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-neutral-100 rounded-lg overflow-hidden">
              <img src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Site Visit" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-neutral-100 rounded-lg overflow-hidden">
              <img src="https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Material Selection" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default Tentang;