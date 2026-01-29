import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { MessageSquare, PenTool, Layers, HardHat, Key } from 'lucide-react';

const steps = [
    {
        number: "01",
        title: "Diskusi Awal",
        description: "Kami mendengarkan impian, kebutuhan, dan budget Anda. Tahap ini krusial untuk memahami visi Anda tentang hunian ideal.",
        icon: MessageSquare
    },
    {
        number: "02",
        title: "Konsep Desain",
        description: "Tim kami menerjemahkan keinginan Anda ke dalam sketsa dan layout awal. Kami mengeksplorasi potensi lahan dan pencahayaan.",
        icon: PenTool
    },
    {
        number: "03",
        title: "Pengembangan Desain",
        description: "Detailing teknis, pemilihan material, dan visualisasi 3D yang realistis. Anda akan melihat rumah Anda sebelum dibangun.",
        icon: Layers
    },
    {
        number: "04",
        title: "Konstruksi & Pengawasan",
        description: "Eksekusi pembangunan dengan standar kualitas tinggi. Tim kami melakukan pengawasan berkala untuk memastikan kesesuaian dengan desain.",
        icon: HardHat
    },
    {
        number: "05",
        title: "Serah Terima",
        description: "Rumah siap huni diserahkan kepada Anda. Kami memastikan setiap detail telah sempurna sebelum Anda menempatinya.",
        icon: Key
    }
];

const Proses: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Proses Kerja | Arsiteku Studio</title>
                <meta name="description" content="Tahapan kerja profesional Arsiteku dari konsep hingga serah terima kunci." />
            </Helmet>

            <main className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white min-h-screen">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
                            Proses Kerja
                        </h1>
                        <p className="text-lg text-neutral-600 leading-relaxed">
                            Transparansi dan kejelasan adalah kunci kepuasan klien kami.
                            Berikut adalah tahapan perjalanan mewujudkan rumah impian Anda.
                        </p>
                    </motion.div>

                    <div className="space-y-12 lg:space-y-20 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute left-[27px] top-8 bottom-8 w-0.5 bg-neutral-200" />

                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative flex gap-8 lg:gap-12"
                            >
                                {/* Number Badge */}
                                <div className="flex-shrink-0 relative z-10">
                                    <div className="w-14 h-14 rounded-full bg-white border-2 border-primary/10 flex items-center justify-center text-xl font-heading font-bold text-primary shadow-sm group-hover:border-accent transition-colors">
                                        {step.number}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="pt-2">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <step.icon className="w-6 h-6 text-accent" />
                                        <h3 className="text-2xl font-bold text-primary">{step.title}</h3>
                                    </div>
                                    <p className="text-neutral-600 leading-relaxed text-lg">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Proses;
