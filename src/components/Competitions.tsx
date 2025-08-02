import React from 'react';
import { Trophy, Target, Zap, Box, Wind, Globe } from 'lucide-react';
import { motion, Variants, Easing } from 'framer-motion';

const easeOutExpo: Easing = [0.25, 0.1, 0.25, 1];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: easeOutExpo,
    },
  }),
};

const Competitions = () => {
  const competitions = [
    {
      name: "Panjat Pinang",
      icon: Trophy,
      description: "Lomba tradisional panjat pinang yang menguji kekompakan tim",
      bgColor: "from-red-500/20 to-red-600/20",
      iconColor: "text-red-500",
      borderColor: "border-red-500/30",
    },
    {
      name: "Pukul Bantal",
      icon: Target,
      description: "Pertarungan seru di atas balok kayu dengan bantal sebagai senjata",
      bgColor: "from-yellow-500/20 to-yellow-600/20",
      iconColor: "text-yellow-500",
      borderColor: "border-yellow-500/30",
    },
    {
      name: "Mengaitkan Kawat Ketali",
      icon: Zap,
      description: "Lomba keterampilan mengaitkan kawat dengan ketepatan tinggi",
      bgColor: "from-blue-500/20 to-blue-600/20",
      iconColor: "text-blue-500",
      borderColor: "border-blue-500/30",
    },
    {
      name: "Mengeluarkan Bola dalam Karton",
      icon: Box,
      description: "Tantangan mengeluarkan bola dari dalam karton dengan strategi cerdik",
      bgColor: "from-green-500/20 to-green-600/20",
      iconColor: "text-green-500",
      borderColor: "border-green-500/30",
    },
    {
      name: "Estafet Tepung",
      icon: Wind,
      description: "Lomba estafet menggunakan tepung yang menguji koordinasi tim",
      bgColor: "from-purple-500/20 to-purple-600/20",
      iconColor: "text-purple-500",
      borderColor: "border-purple-500/30",
    },
    {
      name: "Tiup Gelas",
      icon: Globe,
      description: "Lomba meniup gelas hingga bergerak sejauh mungkin dengan napas",
      bgColor: "from-orange-500/20 to-orange-600/20",
      iconColor: "text-orange-500",
      borderColor: "border-orange-500/30",
    },
  ];

  return (
    <section id="jenis-lomba" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Jenis <span className="text-yellow-400">Lomba</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto mb-8" />
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Berbagai lomba tradisional dan modern yang akan memeriahkan perayaan HUT RI ke-80.
            Mari berpartisipasi dan tunjukkan semangat sportivitas!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competitions.map((competition, index) => {
            const IconComponent = competition.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={cardVariants}
                className={`group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border ${competition.borderColor} hover:border-opacity-60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl`}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${competition.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${competition.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${competition.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                    {competition.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {competition.description}
                  </p>
                </div>

                {/* Decorative */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/5 to-transparent rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/5 to-transparent rounded-bl-2xl" />
              </motion.div>
            );
          })}
        </div>

        {/* Info Pendaftaran */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600">
            <h3 className="text-2xl font-bold text-white mb-4">Informasi Pendaftaran</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-red-500 mb-2">GRATIS</div>
                <p className="text-gray-300 text-sm">Biaya Pendaftaran</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-500 mb-2">17 AUG</div>
                <p className="text-gray-300 text-sm">Batas Pendaftaran</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-500 mb-2">Individu & Tim</div>
                <p className="text-gray-300 text-sm">Sesuai Aturan Lomba</p>
              </div>
            </div>
            <div className="mt-6">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-300" onClick={() => window.open('https://wa.me/6285342181132?text=Halo,%20saya%20ingin%20mendaftar%20lomba%20HUT%20RI%2080', '_blank')}>
                Daftar Sekarang
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Competitions;
