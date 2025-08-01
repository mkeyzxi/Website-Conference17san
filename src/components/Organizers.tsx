// import React from 'react';
// import { User, Award, MapPin } from 'lucide-react';
import { User } from 'lucide-react';
import handleWA from '../utils/handleWa'; // Pastikan jalur impor sudah benar

const Organizers = () => {
    const organizers = [
        {
            name: "Paharuddin, SE.MM",
            role: " ",
            icon: User,
            bgColor: "from-red-500/20 to-red-600/20",
            iconColor: "text-red-500"
        },
        {
            name: "Rosmiati, SE.MM",
            role: " ",
            icon: User,
            bgColor: "from-yellow-500/20 to-yellow-600/20",
            iconColor: "text-yellow-500"
        },
        {
            name: "Rasbiana Muis, S.Ip",
            role: "Ketua RT III Karema Utara",
            icon: User,
            bgColor: "from-blue-500/20 to-blue-600/20",
            iconColor: "text-blue-500"
        }
    ];

    const handleHubungiPanitia = () => {
        const waUrl = handleWA();
        window.open(waUrl, '_blank'); // Buka di tab baru
        // Atau: window.location.href = waUrl; // Buka di tab yang sama
    };

    return (
        <section className="py-20 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Penanggung <span className="text-yellow-400">Jawab</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto mb-8"></div>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Tim yang bertanggung jawab atas suksesnya penyelenggaraan perayaan HUT RI ke-80 di RT III Karema Utara
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {organizers.map((organizer, index) => {
                        const IconComponent = organizer.icon;
                        return (
                            <div
                                key={index}
                                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${organizer.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                <div className="relative z-10">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${organizer.bgColor} rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                                        <IconComponent className={`w-8 h-8 ${organizer.iconColor}`} />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                                            {organizer.name}
                                        </h3>
                                        <p className="text-gray-400 text-sm font-medium uppercase tracking-wide">
                                            {organizer.role}
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-yellow-500/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-red-500/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
                        <h3 className="text-2xl font-bold text-white mb-4">Mari Bersama Sukseskan Acara Ini</h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Dengan dukungan dan partisipasi aktif dari seluruh warga, mari kita wujudkan perayaan kemerdekaan yang meriah dan berkesan.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button 
                                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-300"
                                onClick={handleHubungiPanitia}
                            >
                                Hubungi Panitia
                            </button>
                            <button className="bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                                Info Lengkap
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Organizers;