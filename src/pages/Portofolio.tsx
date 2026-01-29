import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Portofolio: React.FC = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Tropis Modern", "Minimalis", "Villa", "Townhouse"];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(p => p.style.includes(filter) || p.type.includes(filter));

  return (
    <>
      <Helmet>
        <title>Portfolio | Arsiteku Studio</title>
        <meta name="description" content="Koleksi karya desain dan bangun rumah tinggal Arsiteku." />
      </Helmet>

      <main className="pt-24 pb-16 lg:pt-32 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
              Portfolio
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Kumpulan karya terpilih yang merepresentasikan dedikasi kami pada detail dan fungsionalitas.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {filteredProjects.map((project, index) => (
              <Link to={`/portofolio/${project.slug}`} key={project.slug} className="group block">
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="h-full"
                >
                  <div className="aspect-[16/10] overflow-hidden rounded-xl bg-neutral-200 mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors mb-2">
                        {project.title}
                      </h3>
                      <p className="text-neutral-500 font-medium">{project.type}</p>
                    </div>
                    <span className="text-neutral-400 text-sm hidden sm:block">{project.location}</span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Portofolio;