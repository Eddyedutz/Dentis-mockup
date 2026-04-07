import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 mb-12">
        
        {/* Logo & Descriere */}
        <div className="col-span-1 md:col-span-2">
           <Link to="/" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="mb-6 inline-block">
            <img 
              src={`${import.meta.env.BASE_URL}logo_white.svg`} 
              alt="Dentis Center Logo" 
              className="transform-gpu h-10 md:h-14 w-auto object-contain hover:opacity-80 transition-opacity"
            />
          </Link>
          <p className="max-w-sm leading-relaxed">
            Clinică stomatologică premium dedicată sănătății și esteticii zâmbetului tău, folosind tehnologii de ultimă generație și materiale de excepție.
          </p>
        </div>

        {/* Informații Legale (Înlocuiește vechiul Meniu) */}
        <div>
          <h4 className="text-white font-medium mb-4">Informații Legale</h4>
          <ul className="space-y-3">
            <li><Link to="/termeni" className="hover:text-[#a8e4a0] transition-colors text-sm">Termeni și Condiții</Link></li>
            <li><Link to="/gdpr" className="hover:text-[#a8e4a0] transition-colors text-sm">Politică de Confidențialitate (GDPR)</Link></li>
            <li><Link to="/cookies" className="hover:text-[#a8e4a0] transition-colors text-sm">Politică de Cookies</Link></li>
          </ul>
        </div>

        {/* Contact rapid */}
        <div>
          <h4 className="text-white font-medium mb-4">Contact rapid</h4>
          <ul className="space-y-3">
            <li><a href="tel:+40752103861" className="hover:text-[#a8e4a0] transition-colors text-sm">+40 752 103 861</a></li>
            <li><a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87131.70512683058!2d26.290521360150937!3d47.20365737330765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473536c4b26c2e33%3A0xc6081e6cb1308331!2sT%C3%A2rgu%20Neam%C8%9B!5e0!3m2!1sen!2sro!4v1715000000000!5m2!1sen!2sro" target="_blank" rel="noreferrer" className="hover:text-[#a8e4a0] transition-colors text-sm">Vezi locația pe hartă</a></li>
          </ul>
        </div>
      </div>

      {/* Zona de Jos: Copyright & ANPC */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-sm text-center md:text-left">
          <p>© {new Date().getFullYear()} Dentis Center. Toate drepturile rezervate.</p>
        </div>
        
        {/* Banners ANPC & SOL - OBLIGATORII RO */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a 
            href="https://anpc.ro/ce-este-sal/" 
            target="_blank" 
            rel="noreferrer" 
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <img 
              src="https://magazin.agrii.ro/static/version1775557960/frontend/Zitec/agrii/default/images/footer-anpc-sal.png" 
              alt="ANPC SAL" 
              className="h-10 w-auto object-contain" 
            />
          </a>
          <a 
            href="https://consumer-redress.ec.europa.eu/index_ro" 
            target="_blank" 
            rel="noreferrer" 
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <img 
              src="https://magazin.agrii.ro/static/version1775557960/frontend/Zitec/agrii/default/images/footer-anpc-sol.png" 
              alt="ANPC SOL" 
              className="h-10 w-auto object-contain" 
            />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;