// import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const Schedule = () => {
 const scheduleData = [
  {
    day: "Jumat",
    date: "17 Agustus 2025",
    events: [
      { time: "16:00", activity: "Lomba Tiup Gelas", location: "Area Lomba" },
      { time: "17:00", activity: "Lomba Estafet Tepung", location: "Area Lomba" },
    ]
  },
  {
    day: "Sabtu",
    date: "18 Agustus 2025",
    events: [
      { time: "08:00", activity: "Lomba Tiup Gelas", location: "Area Lomba" },
      { time: "09:30", activity: "Lomba Estafet Tepung", location: "Area Lomba" },
      { time: "16:00", activity: "Lomba Mengaitkan Kawat Ketali", location: "Area Lomba" },
      { time: "17:00", activity: "Lomba Mengeluarkan Bola dalam Karton", location: "Area Lomba" }
    ]
  },
  {
    day: "Minggu",
    date: "19 Agustus 2025",
    events: [
      { time: "10:00", activity: "Lomba Pukul Bantal", location: "Area Lomba" },
      { time: "17:10", activity: "Lomba Panjat Pinang", location: "Area Lomba" }
    ]
  }
];


  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Jadwal & <span className="text-yellow-400">Lokasi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Rangkaian acara perayaan HUT RI ke-80 selama tiga hari penuh dengan berbagai kegiatan menarik
          </p>
        </div>

        {/* Location Info */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 mb-16 border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <MapPin className="w-8 h-8 text-red-500" />
                Lokasi Acara
              </h3>
              <p className="text-xl text-yellow-400 font-semibold mb-2">Lorong Landaang Karema Utara</p>
              <p className="text-gray-300 mb-4">RT III, Karema Utara, Mamuju</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full">Lomba Seru</span>
                <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full">Hiburan Rakyat</span>
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">Suasana Kekeluargaan</span>
              </div>
            </div>
            <div className="relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d996.3610883907199!2d118.87387376952896!3d-2.6831100998309005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1754058431127!5m2!1sid!2sid"
                className="w-full h-48 rounded-xl"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl pointer-events-none" />
            </div>

          </div>
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {scheduleData.map((day, dayIndex) => (
            <div key={dayIndex} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden">
              {/* Day Header */}
              <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-1">{day.day}</h3>
                <p className="text-red-100 text-sm">{day.date}</p>
              </div>

              {/* Events List */}
              <div className="p-6 space-y-4">
                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="group hover:bg-gray-800/50 rounded-xl p-4 transition-colors duration-300">
                    <div className="flex items-start gap-4">
                      <div className="bg-yellow-500/20 rounded-lg p-2 flex-shrink-0">
                        <Clock className="w-4 h-4 text-yellow-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-yellow-400 font-bold text-sm">{event.time}</span>
                        </div>
                        <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-yellow-400 transition-colors duration-300">
                          {event.activity}
                        </h4>
                        <p className="text-gray-400 text-xs flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {event.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gray-900/50 rounded-xl p-6 text-center border border-gray-700">
            <Calendar className="w-8 h-8 text-red-500 mx-auto mb-3" />
            <h4 className="text-white font-semibold mb-1">Durasi</h4>
            <p className="text-gray-400 text-sm">3 Hari Penuh</p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 text-center border border-gray-700">
            <Clock className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <h4 className="text-white font-semibold mb-1">Waktu</h4>
            <p className="text-gray-400 text-sm">08:00 - 16:00 WITA</p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 text-center border border-gray-700">
            <Users className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h4 className="text-white font-semibold mb-1">Peserta</h4>
            <p className="text-gray-400 text-sm">Seluruh Warga</p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 text-center border border-gray-700">
            <MapPin className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <h4 className="text-white font-semibold mb-1">Akses</h4>
            <p className="text-gray-400 text-sm">Mudah Dijangkau</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;