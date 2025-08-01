// import React from 'react';
// import { Heart, DollarSign, Users, Gift, MessageCircle, HandHeart } from 'lucide-react';
import { Heart, DollarSign, Users, Gift, MessageCircle } from 'lucide-react';
import handleWA from '../utils/handleWa';

const Support = () => {
  const handleHubungiPanitia = () => {
          const waUrl = handleWA();
          window.open(waUrl, '_blank'); // Buka di tab baru
          // Atau: window.location.href = waUrl; // Buka di tab yang sama
      };

  return (
    <section className="py-20 bg-gray-800">
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
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 border border-gray-700 mb-16 relative overflow-hidden">
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

              {/* Donation Goals
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Target Donasi</span>
                  <span className="text-yellow-400 font-semibold">Rp 10.000.000</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-red-500 to-yellow-500 h-3 rounded-full w-3/5 relative">
                    <div className="absolute right-0 top-0 w-3 h-3 bg-white rounded-full shadow-lg"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Terkumpul: Rp 6.000.000</span>
                  <span className="text-green-400 font-semibold">60%</span>
                </div>
              </div> */}

              <button className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3" onClick={handleHubungiPanitia}>
                <MessageCircle className="w-6 h-6" />
                Donasi via WhatsApp
              </button>
            </div>

            <div className="relative">
              <img 
                src="../../public/img/Documentation/bendera-panjat-pinang.webp"
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
        </div>

        {/* Donation Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 text-center hover:border-red-500/50 transition-all duration-300 group">
            <div className="bg-red-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <DollarSign className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Donasi Uang</h3>
            <p className="text-gray-400 text-sm mb-6">
              Kontribusi dana untuk mendukung berbagai kebutuhan acara seperti hadiah, dekorasi, dan konsumsi.
            </p>
            {/* <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition-colors duration-300">
              Donasi Sekarang
            </button> */}
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 text-center hover:border-yellow-500/50 transition-all duration-300 group">
            <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Gift className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Donasi Barang</h3>
            <p className="text-gray-400 text-sm mb-6">
              Sumbangan berupa hadiah lomba, peralatan acara, atau barang lainnya yang mendukung acara.
            </p>
            {/* <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-xl font-semibold transition-colors duration-300">
              Hubungi Panitia
            </button> */}
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 text-center hover:border-blue-500/50 transition-all duration-300 group">
            <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Jadi Volunteer</h3>
            <p className="text-gray-400 text-sm mb-6">
              Bergabunglah sebagai relawan untuk membantu persiapan dan pelaksanaan acara.
            </p>
            {/* <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-colors duration-300">
              Daftar Volunteer
            </button> */}
          </div>
        </div>

        {/* Supporters Recognition
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HandHeart className="w-8 h-8 text-yellow-500" />
              <h3 className="text-2xl font-bold text-white">Terima Kasih Para Donatur</h3>
            </div>
            <p className="text-gray-300">Penghargaan untuk para donatur yang telah mendukung acara kami</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-gray-800/50 rounded-xl p-4">
              <div className="text-2xl font-bold text-red-500 mb-1">25+</div>
              <p className="text-gray-400 text-sm">Donatur Aktif</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4">
              <div className="text-2xl font-bold text-yellow-500 mb-1">60%</div>
              <p className="text-gray-400 text-sm">Target Tercapai</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4">
              <div className="text-2xl font-bold text-blue-500 mb-1">15</div>
              <p className="text-gray-400 text-sm">Hari Tersisa</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4">
              <div className="text-2xl font-bold text-green-500 mb-1">100%</div>
              <p className="text-gray-400 text-sm">Transparansi</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm mb-4">
              Laporan penggunaan dana akan dipublikasikan secara transparan setelah acara berakhir
            </p>
            <button className="bg-transparent border-2 border-gray-600 text-gray-300 hover:border-yellow-500 hover:text-yellow-500 px-6 py-2 rounded-xl font-semibold transition-all duration-300">
              Lihat Laporan Keuangan
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Support;