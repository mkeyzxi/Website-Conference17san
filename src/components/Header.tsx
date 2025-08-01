import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import HUTRI80Logo from '../../public/img/HUTRI80.png'; // Jalur relatif yang Anda minta

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const navLinks = [
		{ name: 'Beranda', href: '#' },
		{ name: 'Tentang Acara', href: '#tentang-acara' },
		{ name: 'Jenis Lomba', href: '#jenis-lomba' },
		{ name: 'Pendaftaran', href: '#pendaftaran' },
		{ name: 'Jadwal & Lokasi', href: '#jadwal-lokasi' },
		{ name: 'Dokumentasi', href: '#dokumentasi' },
		{ name: 'Support', href: '#support' },
	];

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md shadow-lg">
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				{/* Logo */}
				<div className="flex-shrink-0">
					<a href="#" className="flex items-center space-x-2">
						<img
							src={HUTRI80Logo}
							alt="Logo HUT RI 80"
							className="h-12 w-auto"
						/>
						{/* <span className="text-white text-2xl font-bold hidden sm:block">HUT RI ke-80</span> */}
					</a>
				</div>

				{/* Desktop Navigation */}
				<nav className="hidden md:block">
					<ul className="flex space-x-8">
						{navLinks.map((link) => (
							<li key={link.name}>
								<a
									href={link.href}
									className="text-gray-300 hover:text-red-500 font-medium transition duration-300"
								>
									{link.name}
								</a>
							</li>
						))}
					</ul>
				</nav>

				{/* Mobile Menu Button */}
				<div className="md:hidden">
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className="text-white focus:outline-none"
					>
						{isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<nav
				className={`md:hidden bg-gray-900/90 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
					}`}
			>
				<ul className="flex flex-col space-y-4 px-6 py-4">
					{navLinks.map((link) => (
						<li key={link.name}>
							<a
								href={link.href}
								onClick={() => setIsMobileMenuOpen(false)}
								className="block text-gray-300 hover:text-red-500 text-lg font-medium py-2 border-b border-gray-700 last:border-b-0"
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