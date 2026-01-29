import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const teamMembers = [
    {
        name: "Ir. Adi Nugroho, IAI",
        role: "Principal Architect",
        image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
        bio: "Berpengalaman 12+ tahun dalam desain hunian tropis modern. Percaya bahwa rumah harus menjadi oase yang menenangkan bagi penghuninya."
    },
    {
        name: "Sarah Wijaya, S.Ars",
        role: "Senior Interior Designer",
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
        bio: "Spesialis dalam menciptakan ruang interior yang fungsional dengan sentuhan estetika 'warm minimalism'."
    },
    {
        name: "Budi Santoso, ST",
        role: "Project Manager",
        image: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=400",
        bio: "Memastikan setiap detail konstruksi tereksekusi dengan presisi dan proyek berjalan tepat waktu."
    }
];

const Tim: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Tim Kami | Arsiteku Studio</title>
                <meta name="description" content="Tim arsitek dan desainer profesional di balik setiap karya Arsiteku." />
            </Helmet>

            <main className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-neutral-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
                            Di Balik Karya
                        </h1>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                            Kami adalah tim kecil yang solid, bekerja dengan pendekatan personal dan kolaboratif
                            untuk mewujudkan rumah impian Anda.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="aspect-[3/4] overflow-hidden rounded-xl bg-neutral-200 mb-6 relative">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                                <p className="text-accent font-medium mb-3">{member.role}</p>
                                <p className="text-neutral-600 leading-relaxed text-sm">
                                    {member.bio}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Tim;
