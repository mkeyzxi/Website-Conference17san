import React from "react";
import { motion, Variants, Easing } from "framer-motion";
import { Flag, Heart, Star } from "lucide-react";

// Definisikan easing sebagai konstanta bertipe Easing
const easeOutExpo: Easing = [0.25, 0.1, 0.25, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

const About: React.FC = () => {
  const nilaiNilai = [
    {
      icon: <Flag className="w-8 h-8 text-red-500" />,
      title: "Semangat Persatuan",
      desc: "Mempererat tali persaudaraan antar warga",
      bg: "bg-red-600/20",
    },
    {
      icon: <Heart className="w-8 h-8 text-yellow-500" />,
      title: "Gotong Royong",
      desc: "Menjaga tradisi kebersamaan Indonesia",
      bg: "bg-yellow-600/20",
    },
    {
      icon: <Star className="w-8 h-8 text-blue-500" />,
      title: "Indonesia Maju",
      desc: "Optimisme untuk masa depan bangsa",
      bg: "bg-blue-600/20",
    },
  ];

  return (
    <section id="tentang-acara" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tentang <span className="text-yellow-400">Acara</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text + Values */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="prose prose-lg prose-invert">
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Peringatan HUT RI ke-80 tahun ini mengusung tema "Bersatu
                Berdaulat Rakyat Sejahtera Indonesia Maju" sebagai refleksi
                semangat perjuangan para pahlawan yang telah mempersembahkan
                kemerdekaan bagi bangsa Indonesia.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Acara ini bertujuan untuk mempererat tali persaudaraan,
                melestarikan nilai-nilai Pancasila, dan membangun semangat
                gotong royong di antara masyarakat RT III Karema Utara.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {nilaiNilai.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="text-center"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={zoomIn}
                >
                  <div
                    className={`${item.bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: easeOutExpo }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/img/Proklamasi-1945.jpg"
                alt="Indonesian Independence Celebration"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-xl font-bold mb-2">
                  Kemerdekaan Indonesia
                </h3>
                <p className="text-gray-200 text-sm">
                  17 Agustus 1945 - Proklamasi Kemerdekaan Republik Indonesia
                </p>
              </div>
            </div>
            {/* Decorative blur */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-red-500/20 to-yellow-500/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
