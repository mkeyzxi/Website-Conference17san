import  { useState } from 'react';
// import { Camera, ChevronLeft, ChevronRight, Play, Heart } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Documentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const photos = [
    {
      url: "../../public/img/documentation/bendera-panjat-pinang.webp",
      title: "Upacara Bendera HUT RI ke-79",
      description: "Momen khidmat pengibaran bendera tahun lalu"
    },
    {
      url: "../../public/img/documentation/laut-panjat-pinang.webp",
      title: "Lomba Panjat Pinang",
      description: "Antusiasme peserta dalam lomba panjat pinang"
    },
    {
      url: "../../public/img/documentation/pemuda-karema.webp",
      title: "Kebersamaan Warga",
      // description: "Semangat gotong royong dalam persiapan acara"
      description: "Pemuda Karema Utara berpartisipasi aktif"
    },
    {
      url: "../../public/img/documentation/bendera-panjat-pinang.webp",
      title: "Hiburan Rakyat",
      description: "Pertunjukan seni budaya lokal yang memukau"
    },
    {
      url: "../../public/img/documentation/bendera-panjat-pinang.webp",
      title: "Pembagian Hadiah",
      description: "Momen bahagia para pemenang lomba"
    },
    {
      url: "../../public/img/documentation/bendera-panjat-pinang.webp",
      title: "Penutupan Acara",
      description: "Doa bersama dan foto keluarga besar"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dokumentasi <span className="text-yellow-400">Tahun Sebelumnya</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Kenangan indah perayaan HUT RI ke-79 yang telah berlalu. Mari ciptakan momen baru yang tak terlupakan tahun ini!
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative mb-16">
          <div className="relative overflow-hidden rounded-3xl bg-gray-800 border border-gray-700">
            <div className="relative h-96 md:h-[500px]">
              <img 
                src={photos[currentSlide].url}
                alt={photos[currentSlide].title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="max-w-2xl">
                  <h3 className="text-3xl font-bold text-white mb-3">{photos[currentSlide].title}</h3>
                  <p className="text-gray-200 text-lg">{photos[currentSlide].description}</p>
                  
                  {/* Slide Indicator */}
                  <div className="flex gap-2 mt-6">
                    {photos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                          index === currentSlide ? 'bg-red-500' : 'bg-gray-600 hover:bg-gray-500'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative group overflow-hidden rounded-xl transition-all duration-300 ${
                index === currentSlide 
                  ? 'ring-2 ring-red-500 scale-105' 
                  : 'hover:scale-105 hover:ring-2 hover:ring-gray-500'
              }`}
            >
              <img 
                src={photo.url}
                alt={photo.title}
                className="w-full h-24 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
            </button>
          ))}
        </div>

        {/* Call to Action
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Camera className="w-8 h-8 text-yellow-500" />
              <h3 className="text-2xl font-bold text-white">Ingin Melihat Dokumentasi Terbaru?</h3>
            </div>
            
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Ikuti media sosial kami atau hubungi langsung tim dokumentasi untuk mendapatkan foto dan video terbaru dari acara perayaan HUT RI ke-80.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-red-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Camera className="w-8 h-8 text-red-500" />
                </div>
                <h4 className="text-white font-semibold mb-1">Foto Resmi</h4>
                <p className="text-gray-400 text-sm">Dokumentasi lengkap setiap acara</p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Play className="w-8 h-8 text-yellow-500" />
                </div>
                <h4 className="text-white font-semibold mb-1">Video Highlight</h4>
                <p className="text-gray-400 text-sm">Cuplikan moment terbaik</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-blue-500" />
                </div>
                <h4 className="text-white font-semibold mb-1">Kenangan Indah</h4>
                <p className="text-gray-400 text-sm">Berbagi cerita dan kebahagiaan</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-300 flex items-center gap-2">
                <Camera className="w-5 h-5" />
                Lihat Galeri Lengkap
              </button>
              <button className="bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                Follow Instagram
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Documentation;