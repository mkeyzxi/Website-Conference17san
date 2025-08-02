// Support.tsx
import { motion, Variants, Transition } from 'framer-motion';
import { Heart, DollarSign, Users, Gift, MessageCircle } from 'lucide-react';
import handleWA from '../utils/handleWa';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring" as Transition["type"]
    }
  }
};

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
};

const Support = () => {
  const handleHubungiPanitia = () => {
    const waUrl = handleWA();
    window.open(waUrl, '_blank');
  };

  return (
    <section id='support' className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dukung <span className="text-yellow-400">Acara Kami</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Mari bantu sukseskan perayaan kemerdekaan ini dengan berdonasi. 
            Setiap kontribusi Anda sangat berarti bagi masyarakat sekitar.
          </p>
        </div>

        {/* Main Support Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 border border-gray-700 mb-16 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 bg-red-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-500 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-500/20 p-3 rounded-xl">
                  <Heart className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-3xl font-bold text-white">Mari Berdonasi</h3>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Dukungan Anda akan membantu menyediakan hadiah lomba, dekorasi acara, konsumsi panitia, 
                dan berbagai kebutuhan lainnya untuk membuat perayaan HUT RI ke-80 menjadi lebih meriah dan berkesan.
              </p>

              <button
                className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3"
                onClick={handleHubungiPanitia}
              >
                <MessageCircle className="w-6 h-6" />
                Donasi via WhatsApp
              </button>
            </div>

            <div className="relative">
              <img
                src="/img/documentation/bendera-panjat-pinang.webp"
                alt="Community Support"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-white text-xl font-bold mb-2">Kebersamaan untuk Indonesia</h4>
                <p className="text-gray-200 text-sm">Setiap kontribusi adalah wujud cinta tanah air</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Donation Options */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              icon: <DollarSign className="w-8 h-8 text-red-500" />,
              bg: "bg-red-500/20",
              border: "hover:border-red-500/50",
              title: "Donasi Uang",
              desc: "Kontribusi dana untuk mendukung berbagai kebutuhan acara seperti hadiah, dekorasi, dan konsumsi."
            },
            {
              icon: <Gift className="w-8 h-8 text-yellow-500" />,
              bg: "bg-yellow-500/20",
              border: "hover:border-yellow-500/50",
              title: "Donasi Barang",
              desc: "Sumbangan berupa hadiah lomba, peralatan acara, atau barang lainnya yang mendukung acara."
            },
            {
              icon: <Users className="w-8 h-8 text-blue-500" />,
              bg: "bg-blue-500/20",
              border: "hover:border-blue-500/50",
              title: "Jadi Volunteer",
              desc: "Bergabunglah sebagai relawan untuk membantu persiapan dan pelaksanaan acara."
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 text-center ${item.border} transition-all duration-300 group`}
            >
              <div className={`${item.bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-6">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Support;
