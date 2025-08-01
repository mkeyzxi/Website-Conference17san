import React from 'react';
import { Flag, Heart, Star } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tentang <span className="text-yellow-400">Acara</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="prose prose-lg prose-invert">
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Peringatan HUT RI ke-80 tahun ini mengusung tema "Bersatu Berdaulat Rakyat Sejahtera Indonesia Maju" 
                sebagai refleksi semangat perjuangan para pahlawan yang telah mempersembahkan kemerdekaan bagi bangsa Indonesia.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Acara ini bertujuan untuk mempererat tali persaudaraan, melestarikan nilai-nilai Pancasila, 
                dan membangun semangat gotong royong di antara masyarakat RT III Karema Utara. 
                Melalui berbagai lomba tradisional dan kegiatan bersama, kita merayakan kemerdekaan 
                dengan penuh kebanggaan dan optimisme untuk Indonesia yang lebih maju.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-red-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Flag className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-white font-semibold mb-2">Semangat Persatuan</h3>
                <p className="text-gray-400 text-sm">Mempererat tali persaudaraan antar warga</p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="text-white font-semibold mb-2">Gotong Royong</h3>
                <p className="text-gray-400 text-sm">Menjaga tradisi kebersamaan Indonesia</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-white font-semibold mb-2">Indonesia Maju</h3>
                <p className="text-gray-400 text-sm">Optimisme untuk masa depan bangsa</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="../../public/img/Proklamasi-1945.jpg"
                alt="Indonesian Independence Celebration"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-xl font-bold mb-2">Kemerdekaan Indonesia</h3>
                <p className="text-gray-200 text-sm">17 Agustus 1945 - Proklamasi Kemerdekaan Republik Indonesia</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-red-500/20 to-yellow-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;