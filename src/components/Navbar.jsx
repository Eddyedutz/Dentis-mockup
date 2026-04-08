import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = ({ setBookingModalOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/50 ${isScrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center relative">
        <div className="w-full flex justify-center items-center">
          <div className="relative flex items-center">
            {/* Logo duce acum mereu pe Home ("/") */}
            <Link to="/" onClick={scrollToTop} className="cursor-pointer flex items-center">
              <img 
                src={`${import.meta.env.BASE_URL}logo_white.svg`} 
                alt="Dentis Center Logo" 
                className={`transform-gpu w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-16 md:h-20' : 'h-20 md:h-28'}`}
              />
            </Link>

            <button 
              aria-label="Deschide meniul cu toate paginile din website"
			  className="md:hidden absolute -right-14 p-2 rounded-xl transition-colors text-zinc-300 hover:bg-zinc-800/50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <div className={`hidden md:flex items-center space-x-8 transition-all duration-300 ${isScrolled ? 'mt-1' : 'mt-2'}`}>
          {/* Linkurile folosesc acum React Router */}
		  <Link to="/" className={`text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-[#a8e4a0]' : 'text-zinc-300 hover:text-[#a8e4a0]'}`}>Acasă</Link>
          <Link to="/tratamente" className={`text-sm font-medium transition-colors ${location.pathname.includes('/tratamente') ? 'text-[#a8e4a0]' : 'text-zinc-300 hover:text-[#a8e4a0]'}`}>Tratamente</Link>
          <Link to="/tarife" className={`text-sm font-medium transition-colors ${location.pathname === '/tarife' ? 'text-[#a8e4a0]' : 'text-zinc-300 hover:text-[#a8e4a0]'}`}>Tarife</Link>
          <Link to="/contact" className={`text-sm font-medium transition-colors ${location.pathname === '/contact' ? 'text-[#a8e4a0]' : 'text-zinc-300 hover:text-[#a8e4a0]'}`}>Contact</Link>
          
          <button 
            onClick={() => setBookingModalOpen(true)}
            className="px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-xl ml-4 bg-[#a8e4a0] text-zinc-900 hover:bg-[#96d18f]"
          >
            Programare Online
          </button>
        </div>
      </div>

      {/* Meniul de Mobil */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full shadow-xl py-6 px-6 flex flex-col space-y-4 md:hidden backdrop-blur-md bg-zinc-950/85 border-b border-zinc-800">
		  <Link to="/" className={`text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-[#a8e4a0]' : 'text-zinc-300 hover:text-[#a8e4a0]'}`}>Acasă</Link>
          <Link to="/tratamente" className={`text-sm font-medium transition-colors ${location.pathname.includes('/tratamente') ? 'text-[#a8e4a0]' : 'text-zinc-300 hover:text-[#a8e4a0]'}`}>Tratamente</Link>
          <Link to="/tarife" className={`text-sm font-medium transition-colors ${location.pathname === '/tarife' ? 'text-[#a8e4a0]' : 'text-zinc-300 hover:text-[#a8e4a0]'}`}>Tarife</Link>
          <Link to="/contact" className={`text-sm font-medium transition-colors ${location.pathname === '/contact' ? 'text-[#a8e4a0]' : 'text-zinc-300 hover:text-[#a8e4a0]'}`}>Contact</Link>
          <button 
            onClick={() => { setMobileMenuOpen(false); setBookingModalOpen(true); }}
            className="bg-[#a8e4a0] text-zinc-900 w-full py-3 rounded-xl font-medium mt-4 hover:bg-[#96d18f] transition-colors"
          >
            Programare Online
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;