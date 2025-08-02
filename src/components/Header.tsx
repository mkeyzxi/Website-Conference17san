import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import HUTRI80Logo from "/img/HUTRI80.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("beranda");

  const navLinks = [
    { name: "Beranda", href: "beranda" },
    { name: "Penanggung Jawab", href: "penanggung-jawab" },
    { name: "Jenis Lomba", href: "jenis-lomba" },
    { name: "Jadwal & Lokasi", href: "jadwal-lokasi" },
    { name: "Dokumentasi", href: "dokumentasi" },
    { name: "Support", href: "support" },
  ];

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scrollspy observer
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "beranda";
      for (const link of navLinks) {
        const section = document.getElementById(link.href);
        if (section) {
          const { top } = section.getBoundingClientRect();
          if (top <= 80) {
            currentSection = link.href;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger sekali saat mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-white p-0 lg:px-10 ${
        isScrolled ? "bg-gray-900/90 shadow-lg" : "bg-transparent"
      } backdrop-blur`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between  items-center">
        {/* Logo */}
        <a href="#beranda" className="flex items-center space-x-2">
          <img src={HUTRI80Logo} alt="Logo HUT RI 80" className="h-10 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={`#${link.href}`}
                  className={`transition duration-300 font-light ${
                    activeSection === link.href
                      ? "text-yellow-400 border-b-2 border-yellow-400"
                      : "text-white hover:text-red-500"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <nav
        className={`md:hidden bg-gray-900/90 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6 py-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={`#${link.href}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 border-b border-gray-700 last:border-b-0 transition duration-300 ${
                  activeSection === link.href
                    ? "text-yellow-400"
                    : "text-white hover:text-red-500"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
