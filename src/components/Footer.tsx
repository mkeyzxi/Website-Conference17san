// import React from 'react';
// import { Flag, Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { Flag, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-red-500 to-red-600 p-3 rounded-xl">
                <Flag className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">HUT RI ke-80</h3>
                <p className="text-red-400 text-sm">Pemuda RT III Karema Utara</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
              Bersama-sama merayakan kemerdekaan Indonesia dengan semangat persatuan,
              kedaulatan rakyat, dan cita-cita Indonesia yang sejahtera dan maju.
            </p>

            {/* <div className="flex gap-4">
              <a href="#" className="bg-gray-800 hover:bg-red-600 p-3 rounded-xl transition-colors duration-300 group">
                <Instagram svgClass="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-xl transition-colors duration-300 group">
                <Facebook svgClass="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-yellow-600 p-3 rounded-xl transition-colors duration-300 group">
                <Mail svgClass="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Menu Cepat</h4>
            <ul className="space-y-3">
              <li>
                <a href="#beranda" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#tentang-acara" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm">
                  Tentang Acara
                </a>
              </li>
              <li>
                <a href="#jenis-lomba" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm">
                  Jenis Lomba
                </a>
              </li>
              <li>
                <a href="#jadwal-lokasi" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm">
                  Jadwal & Lokasi
                </a>
              </li>
              <li>
                <a href="#dokumentasi" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm">
                  Dokumentasi
                </a>
              </li>
              <li>
                <a href="#support" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm">
                  Dukung Kami
                </a>
              </li>

            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Kontak</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Lorong Landaang Karema Utara</p>
                  <p className="text-gray-500 text-xs">RT III, Kel. Karema, Mamuju</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <p className="text-gray-400 text-sm">+62 853-4218-1132</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <p className="text-gray-400 text-sm">muhmakbul6@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Patriotic Message */}
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-red-500 mb-2">
                "MERDEKA!"
              </h3>
              <p className="text-gray-300 text-sm italic">
                "Bersatu Berdaulat Rakyat Sejahtera Indonesia Maju"
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-gray-500 text-sm">
              © 2025 Muhammad Makbul N
            </p>

            <div className="flex items-center gap-4 text-xs text-gray-600">
              <span>Made with ❤️ for Indonesia</span>
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <span>17 Agustus 1945 - 2025</span>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-red-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-yellow-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;