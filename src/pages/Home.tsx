import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Home: React.FC = () => {
  const whatsappNumber = "628123456789";
  const whatsappMessage = "Halo Arsiteku, saya tertarik untuk konsultasi desain rumah.";

  return (
    <>
      <Helmet>
        <title>Arsiteku | Studio Arsitektur Rumah Tinggal Modern Minimalis</title>
        <meta name="description" content="Jasa Arsitek Desain & Bangun Rumah Tinggal. Pendekatan personal, eksklusif, melayani seluruh Indonesia." />
      </Helmet>

      <main>
        {/* 1. HERO SECTION */}
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero.png"
              alt="Premium Modern House"
              className="w-full h-full object-cover brightness-[0.4]"
            />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-heading font-light leading-tight mb-8"
            >
              Studio Arsitektur <br />
              <span className="font-bold">Rumah Tinggal Modern Minimalis</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl font-light text-white/90 mb-12 max-w-3xl mx-auto"
            >
              Desain & Bangun | Pendekatan Personal | Seluruh Indonesia
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300"
              >
                <span>Diskusikan Proyek Anda via WhatsApp</span>
                <Phone className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* 2. PHILOSOPHY */}
        <section className="py-32 lg:py-40 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl lg:text-3xl font-heading leading-loose text-neutral-800"
            >
              "Kami percaya bahwa rumah bukan sekadar bangunan,
              melainkan cerminan karakter penghuninya. Setiap garis desain kami
              bertujuan menciptakan ketenangan, fungsionalitas, dan estetika yang tak lekang oleh waktu."
            </motion.p>
          </div>
        </section>

        {/* 3. SELECTED WORKS */}
        <section className="py-32 lg:py-40 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-2">Our Selected Works</h2>
                <p className="text-neutral-500">Karya pilihan dengan detail yang terukur</p>
              </div>
              <Link to="/portofolio" className="hidden lg:flex items-center space-x-2 text-primary hover:text-accent transition-colors group">
                <span>Lihat Semua Portfolio</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.slice(0, 3).map((project, index) => (
                <Link to={`/portofolio/${project.slug}`} key={project.slug} className="group block">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 saturate-[0.85] group-hover:saturate-100"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-neutral-500">{project.type} • {project.location}</p>
                  </motion.div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center lg:hidden">
              <Link to="/portofolio" className="inline-flex items-center space-x-2 text-primary font-medium">
                <span>Lihat Semua Portfolio</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 4. PROCESS TEASER (New) */}
        <section className="py-32 lg:py-40 bg-primary text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.pexels.com/photos/313691/pexels-photo-313691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Background Pattern"
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-5xl font-heading font-light leading-tight mb-8">
                  Pendekatan Personal <br />
                  <span className="font-bold">Yang Terstruktur</span>
                </h2>
                <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-lg">
                  Kami percaya transparansi adalah kunci ketenangan hati. Pelajari bagaimana kami membawa ide Anda dari sketsa kasar hingga menjadi hunian nyata yang presisi.
                </p>
                <Link
                  to="/proses"
                  className="inline-flex items-center space-x-3 bg-white text-primary px-8 py-4 rounded-full text-lg font-medium hover:bg-neutral-200 transition-colors"
                >
                  <span>Pelajari Alur Kerja Kami</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="hidden lg:block relative">
                <div className="aspect-square border border-white/20 rounded-full flex items-center justify-center p-12">
                  <div className="text-center">
                    <div className="text-6xl font-heading font-bold text-white/10 mb-2">01</div>
                    <div className="text-lg font-medium mb-1">Konsultasi</div>
                    <div className="w-px h-8 bg-white/20 mx-auto my-4"></div>
                    <div className="text-6xl font-heading font-bold text-white/10 mb-2">02</div>
                    <div className="text-lg font-medium mb-1">Konsep</div>
                    <div className="w-px h-8 bg-white/20 mx-auto my-4"></div>
                    <div className="text-6xl font-heading font-bold text-white/10 mb-2">03</div>
                    <div className="text-lg font-medium">Eksekusi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SERVICES OVERVIEW */}

        <section className="py-32 lg:py-40 bg-white border-t border-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">Layanan Kami</h2>
              <p className="text-neutral-500 max-w-2xl mx-auto">Pendekatan komprehensif untuk mewujudkan hunian impian Anda.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Service 1 */}
              <div className="group">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-neutral-100">
                  <img
                    src="/images/service-design.png"
                    alt="Desain Arsitektur"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Desain Arsitektur</h3>
                <p className="text-neutral-600 leading-loose text-sm lg:text-base">
                  Perancangan konsep hunian mendalam yang detail, mulai dari layout, fasad, hingga material,
                  disesuaikan dengan gaya hidup Anda.
                </p>
              </div>

              {/* Service 2 */}
              <div className="group">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-neutral-100">
                  <img
                    src="/images/service-build.png"
                    alt="Design & Build"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Design & Build</h3>
                <p className="text-neutral-600 leading-loose text-sm lg:text-base">
                  Layanan terintegrasi satu pintu. Kami mendesain dan membangun rumah Anda dengan
                  pengawasan ketat agar hasil sesuai ekspektasi.
                </p>
              </div>

              {/* Service 3 */}
              <div className="group">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-neutral-100">
                  <img
                    src="/images/service-consultation.png"
                    alt="Konsultasi Awal"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Konsultasi Awal</h3>
                <p className="text-neutral-600 leading-loose text-sm lg:text-base">
                  Diskusi gratis untuk membedah potensi lahan, kebutuhan ruang, dan estimasi budget
                  sebelum Anda memulai proyek.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;