import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getProjectBySlug } from '../data/projects';

const ProyekDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || '');
  const whatsappNumber = "628123456789";
  const whatsappMessage = `Halo Arsiteku, saya tertarik dengan desain proyek ${project?.title}. Apakah bisa konsultasi untuk proyek serupa?`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <Navigate to="/portofolio" />;
  }

  return (
    <>
      <Helmet>
        <title>{`${project.title} | Arsiteku Studio`}</title>
        <meta name="description" content={project.summary} />
      </Helmet>

      <main className="pt-24 pb-16 lg:pt-32 bg-white min-h-screen">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <Link to="/portofolio" className="inline-flex items-center text-neutral-500 hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Kembali ke Portfolio
            </Link>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-primary mb-4">
              {project.title}
            </h1>
            <div className="flex items-center text-neutral-600">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{project.location}</span>
            </div>
          </div>

          {/* Main Image */}
          <div className="w-full aspect-video rounded-2xl overflow-hidden mb-16 bg-neutral-100">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>

          {/* Project Info & Story */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-20">

            {/* Sidebar Info */}
            <div className="lg:col-span-4 space-y-8">
              <div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-100">
                <h3 className="font-bold text-primary mb-6 text-lg">Detail Proyek</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="block text-neutral-500 mb-1">Tipe Bangunan</span>
                    <span className="font-medium text-primary">{project.type}</span>
                  </div>
                  <div>
                    <span className="block text-neutral-500 mb-1">Luas Bangunan</span>
                    <span className="font-medium text-primary">{project.area}</span>
                  </div>
                  <div>
                    <span className="block text-neutral-500 mb-1">Tahun</span>
                    <span className="font-medium text-primary">{project.year}</span>
                  </div>
                  <div>
                    <span className="block text-neutral-500 mb-1">Lingkup Pekerjaan</span>
                    <span className="font-medium text-primary">Desain & Bangun</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="lg:col-span-8 space-y-12">
              {/* Kebutuhan / Summary */}
              <section>
                <h3 className="text-2xl font-bold text-primary mb-4">Kebutuhan Klien</h3>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  {project.summary}
                  {/* Mocking generic needs text if specific needs aren't in data structure, but summary usually covers it. */}
                  {' '}Klien menginginkan hunian yang tidak hanya estetis tetapi memfasilitasi gaya hidup modern mereka.
                </p>
              </section>

              {/* Tantangan */}
              <section>
                <h3 className="text-2xl font-bold text-primary mb-4">Tantangan Desain</h3>
                <ul className="list-disc pl-5 space-y-2 text-neutral-600 text-lg">
                  {project.challenges.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* Solusi */}
              <section>
                <h3 className="text-2xl font-bold text-primary mb-4">Solusi Arsitektur</h3>
                <ul className="list-disc pl-5 space-y-2 text-neutral-600 text-lg">
                  {project.solutions.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
            {project.gallery.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`rounded-xl overflow-hidden bg-neutral-100 ${idx % 3 === 0 ? 'md:col-span-2 aspect-[2/1]' : 'aspect-square'}`}
              >
                <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-primary text-white rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 pattern-grid opacity-20" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
                Tertarik dengan Konsep Seperti Ini?
              </h2>
              <p className="text-white/80 text-lg mb-10">
                Mari diskusikan bagaimana kami bisa mengadaptasi pendekatan desain ini untuk rumah impian Anda.
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-neutral-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Konsultasikan Proyek Serupa</span>
              </a>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default ProyekDetail;