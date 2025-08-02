import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  {
    url: "/img/documentation/bendera-panjat-pinang.webp",
    title: "Upacara Bendera HUT RI ke-79",
    description: "Momen khidmat pengibaran bendera tahun lalu",
  },
  {
    url: "/img/documentation/laut-panjat-pinang.webp",
    title: "Lomba Panjat Pinang",
    description: "Antusiasme peserta dalam lomba panjat pinang",
  },
  {
    url: "/img/documentation/pemuda-karema.webp",
    title: "Kebersamaan Warga",
    description: "Pemuda Karema Utara berpartisipasi aktif",
  },
  {
    url: "/img/documentation/pemuda-merah-putih.jpg",
    title: "Hiburan Rakyat",
    description: "Pertunjukan seni budaya lokal yang memukau",
  },
  {
    url: "/img/documentation/pemuda-merah-putih-dua.jpg",
    title: "Pembagian Hadiah",
    description: "Momen bahagia para pemenang lomba",
  },
  {
    url: "/img/documentation/bendera-panjat-pinang.webp",
    title: "Penutupan Acara",
    description: "Doa bersama dan foto keluarga besar",
  },
];

// Custom direction animation variants
const slideVariants: Variants = {
  initial: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.4, ease: "easeIn" },
  }),
};

const Documentation: React.FC = () => {
  const [[currentSlide, direction], setCurrentSlide] = useState<
    [number, number]
  >([0, 0]);

  const paginate = (newDirection: number) => {
    setCurrentSlide(([prev]) => [
      (prev + newDirection + photos.length) % photos.length,
      newDirection,
    ]);
  };

  return (
    <section id="dokumentasi" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dokumentasi{" "}
            <span className="text-yellow-400">Tahun Sebelumnya</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto mb-8" />
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Kenangan indah perayaan HUT RI ke-79 yang telah berlalu. Mari
            ciptakan momen baru yang tak terlupakan tahun ini!
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mb-16">
          <div className="relative overflow-hidden rounded-3xl bg-gray-800 border border-gray-700 h-96 md:h-[500px]">
            <AnimatePresence custom={direction} initial={false}>
              <motion.img
                key={currentSlide}
                src={photos[currentSlide].url}
                alt={photos[currentSlide].title}
                className="absolute top-0 left-0 w-full h-full object-cover"
                custom={direction}
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <div className="max-w-2xl">
                <h3 className="text-3xl font-bold text-white mb-3">
                  {photos[currentSlide].title}
                </h3>
                <p className="text-gray-200 text-lg">
                  {photos[currentSlide].description}
                </p>
                <div className="flex gap-2 mt-6">
                  {photos.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() =>
                        setCurrentSlide([idx, idx > currentSlide ? 1 : -1])
                      }
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        idx === currentSlide
                          ? "bg-red-500"
                          : "bg-gray-600 hover:bg-gray-500"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-30 transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-30 transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {photos.map((photo, idx) => (
            <button
              key={idx}
              onClick={() =>
                setCurrentSlide([idx, idx > currentSlide ? 1 : -1])
              }
              className={`relative group overflow-hidden rounded-xl transition-all duration-300 ${
                idx === currentSlide
                  ? "ring-2 ring-red-500 scale-105"
                  : "hover:scale-105 hover:ring-2 hover:ring-gray-500"
              }`}
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-24 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documentation;
