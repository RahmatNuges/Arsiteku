import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { PenTool, Hammer, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: "desain",
    title: "Desain Arsitektur",
    icon: PenTool,
    description: "Layanan perancangan komprehensif untuk menciptakan hunian yang estetis, fungsional, dan personal.",
    approach: "Kami memulai dengan mendalami kebiasaan dan impian Anda, lalu menerjemahkannya ke dalam garis desain yang presisi.",
    forWho: "Cocok untuk Anda yang sudah memiliki kontraktor sendiri atau berencana membangun secara bertahap.",
  },
  {
    id: "build",
    title: "Design & Build",
    icon: Hammer,
    description: "Solusi satu pintu yang mengintegrasikan perencanaan dan konstruksi untuk hasil yang sempurna.",
    approach: "Sinergi tim desain dan konstruksi memastikan setiap detail gambar terbangun akurat dengan budget yang terkontrol.",
    forWho: "Ideal untuk profesional sibuk yang menginginkan kemudahan, jaminan kualitas, dan satu penanggung jawab tunggal.",
  },
  {
    id: "konsultasi",
    title: "Konsultasi Awal",
    icon: MessageCircle,
    description: "Sesi diskusi mendalam untuk membedah potensi lahan dan kelayakan proyek sebelum Anda berkomitmen.",
    approach: "Analisis jujur mengenai regulasi, budget, dan kemungkinan desain pada lahan Anda.",
    forWho: "Bagi Anda yang masih dalam tahap penjajakan atau ragu dengan potensi lahan yang dimiliki.",
  }
];

const Layanan: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Layanan | Arsiteku Studio</title>
        <meta name="description" content="Layanan arsitektur profesional: Desain, Design & Build, dan Konsultasi." />
      </Helmet>

      <main className="pt-24 pb-16 lg:pt-32 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
              Layanan Kami
            </h1>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Pendekatan terukur untuk setiap skala proyek, memastikan investasi Anda menghasilkan kualitas hunian terbaik.
            </p>
          </motion.div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Visual / Icon Area */}
                <div className="flex-1 w-full">
                  <div className="bg-neutral-50 rounded-3xl p-12 lg:p-20 flex items-center justify-center border border-neutral-100">
                    <service.icon className="w-32 h-32 text-primary/80" strokeWidth={1} />
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 space-y-8">
                  <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary">
                    {service.title}
                  </h2>
                  <p className="text-xl text-neutral-600 leading-relaxed font-light">
                    {service.description}
                  </p>

                  <div className="space-y-6 pt-4 border-t border-neutral-100">
                    <div>
                      <h4 className="font-bold text-primary mb-2">Pendekatan Kami</h4>
                      <p className="text-neutral-600">{service.approach}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-2">Untuk Siapa?</h4>
                      <p className="text-neutral-600">{service.forWho}</p>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link
                      to="/kontak"
                      className="inline-flex items-center space-x-2 text-primary font-bold hover:text-accent transition-colors border-b-2 border-primary hover:border-accent pb-1"
                    >
                      <span>Diskusikan Layanan Ini</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Layanan;