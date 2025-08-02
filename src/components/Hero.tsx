import React, { useState, useEffect } from "react";
import { Calendar, MapPin, Users } from "lucide-react";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-08-17T00:00:00");

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        // Jika sudah lewat tanggalnya
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="beranda"
      className=" relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden pt-24 md:pt-8"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/indonesia-flag.jpg"
          alt="Indonesia Flag"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/60" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-4 leading-tight">
            Peringatan
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              HUT RI ke-80
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-6" />
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Bersatu Berdaulat Rakyat Sejahtera Indonesia Maju
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-6">
            Countdown Menuju Kemerdekaan
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
              >
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
                  {value}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">
                  {unit === "days"
                    ? "Hari"
                    : unit === "hours"
                      ? "Jam"
                      : unit === "minutes"
                        ? "Menit"
                        : "Detik"}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-gray-300">
            <Calendar className="w-5 h-5 text-red-500" />
            <span>17-19 Agustus 2025</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-gray-300">
            <MapPin className="w-5 h-5 text-yellow-500" />
            <span>Lorong Landaang Karema Utara</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-gray-300">
            <Users className="w-5 h-5 text-blue-500" />
            <span>Pemuda RT III Karema Utara</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
