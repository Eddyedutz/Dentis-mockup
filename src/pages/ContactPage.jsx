import React, { useEffect, useState } from 'react';
import { Phone, MapPin, Clock, MessageCircle, Navigation, ArrowRight } from 'lucide-react';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    nume: '',
    telefon: '',
    serviciu: 'Consultație generală',
    mesaj: ''
  });

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const text = `Bună ziua! Mă numesc ${formData.nume}. \nServiciu: ${formData.serviciu} \nDetalii: ${formData.mesaj}`;
    window.open(`https://wa.me/40752103861?text=${encodeURIComponent(text)}`, '_top');
  };

  return (
    <div className="w-full bg-white">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-light text-zinc-900 mb-6 italic">Hai să stăm de vorbă.</h1>
        <p className="text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed">
          Suntem aici pentru a-ți oferi cele mai bune soluții stomatologice. Programează o vizită sau cere detalii despre tratamentele noastre.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 pb-24">
        
        {/* COLOANA STÂNGĂ */}
        <div className="space-y-10">
          
          {/* Locație Interactivă */}
          <a 
            href="https://maps.app.goo.gl/xxxxx" // Aici pui linkul scurt de Share pt cand dau click pe text
            target="_blank" 
            rel="noreferrer"
            className="flex items-start group p-4 -ml-4 rounded-3xl hover:bg-zinc-50 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-white border border-zinc-200 rounded-2xl flex items-center justify-center text-zinc-800 mr-6 shrink-0 group-hover:bg-[#a8e4a0] group-hover:border-transparent group-hover:shadow-lg transition-all">
              <MapPin size={32} />
            </div>
            <div>
              <h4 className="font-medium text-xl text-zinc-900 mb-1 group-hover:text-zinc-600 transition-colors">Locația Noastră</h4>
              <p className="text-zinc-500 leading-relaxed">
                Strada Progresului B12, sc. C<br/>Târgu Neamț, cod 615200
              </p>
              <span className="text-xs font-bold text-[#84c97c] uppercase tracking-widest mt-3 block">Vezi pe hartă</span>
            </div>
          </a>

          {/* Indicații Orientare Detaliate */}
          <div className="bg-[#a8e4a0]/10 border border-[#a8e4a0]/30 rounded-[2rem] p-8 shadow-sm">
            <div className="flex items-start space-x-5">
              <div className="bg-white p-3 rounded-xl shadow-sm shrink-0">
                <Navigation size={24} className="text-[#84c97c]" />
              </div>
              <div className="text-zinc-600 leading-relaxed">
                <h5 className="font-bold text-zinc-900 text-lg mb-3">Repere pentru orientare:</h5>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#a8e4a0] rounded-full"></span>
                    <span>Aproape de <strong>Biserica Adormirea Maicii Domnului</strong>.</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#a8e4a0] rounded-full"></span>
                    <span>Lângă <strong>Parchetul de pe lângă Judecătoria Târgu Neamț</strong>.</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#a8e4a0] rounded-full"></span>
                    <span>În spatele <strong>Biroului Notarial David</strong>.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Telefon */}
          <a 
            href="tel:+40752103861" 
            className="flex items-start group p-4 -ml-4 rounded-3xl hover:bg-zinc-50 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-white border border-zinc-200 rounded-2xl flex items-center justify-center text-zinc-800 mr-6 shrink-0 group-hover:bg-[#a8e4a0] group-hover:border-transparent group-hover:shadow-lg transition-all">
              <Phone size={32} />
            </div>
            <div>
              <h4 className="font-medium text-xl text-zinc-900 mb-1 group-hover:text-zinc-600 transition-colors">Contact Rapid</h4>
              <p className="text-zinc-500 text-2xl font-light">+40 752 103 861</p>
              <p className="text-xs text-zinc-400 mt-1 uppercase tracking-tighter">Disponibili și pe WhatsApp</p>
            </div>
          </a>

          {/* Programul */}
          <div className="flex items-start p-4 -ml-4">
            <div className="w-16 h-16 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center text-zinc-300 mr-6 shrink-0">
              <Clock size={32} />
            </div>
            <div>
              <h4 className="font-medium text-xl text-zinc-900 mb-1">Program Clinică</h4>
              <p className="text-zinc-500">Luni - Sâmbătă: 09:00 - 17:00</p>
              <p className="text-zinc-400 text-sm italic">Duminică: Închis pentru urgențe</p>
            </div>
          </div>
        </div>

        {/* COLOANA DREAPTĂ - FORMULAR */}
        <div className="bg-zinc-50 rounded-[3rem] p-10 md:p-14 border border-zinc-100 shadow-inner">
          <div className="flex items-center space-x-5 mb-10">
            <div className="bg-[#a8e4a0] p-4 rounded-2xl shadow-md">
              <MessageCircle className="text-zinc-900" size={28} />
            </div>
            <h4 className="text-3xl font-light text-zinc-900">Scrie-ne acum</h4>
          </div>
          
          <form className="space-y-8" onSubmit={handleWhatsAppSubmit}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-1">Numele Tău</label>
                <input 
                  type="text" required value={formData.nume}
                  onChange={(e) => setFormData({...formData, nume: e.target.value})}
                  className="w-full bg-white border border-zinc-200 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-[#a8e4a0] transition-all shadow-sm" 
                  placeholder="Ex: Popescu Ion" 
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-1">Telefon</label>
                <input 
                  type="tel" required value={formData.telefon}
                  onChange={(e) => setFormData({...formData, telefon: e.target.value})}
                  className="w-full bg-white border border-zinc-200 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-[#a8e4a0] transition-all shadow-sm" 
                  placeholder="07xx xxx xxx" 
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-1">Ce serviciu te interesează?</label>
              <select 
                value={formData.serviciu}
                onChange={(e) => setFormData({...formData, serviciu: e.target.value})}
                className="w-full bg-white border border-zinc-200 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-[#a8e4a0] transition-all text-zinc-600 appearance-none shadow-sm cursor-pointer"
              >
                <option>Consultație generală</option>
                <option>Implantologie</option>
                <option>Estetică Dentară / Fațete</option>
                <option>Ortodonție (Aparat)</option>
                <option>Igienizare / Albire</option>
              </select>
            </div>
            <div className="space-y-3">
              <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-1">Mesajul tău</label>
              <textarea 
                rows="4" required value={formData.mesaj}
                onChange={(e) => setFormData({...formData, mesaj: e.target.value})}
                className="w-full bg-white border border-zinc-200 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-[#a8e4a0] transition-all resize-none shadow-sm" 
                placeholder="Spune-ne pe scurt cum te putem ajuta..."
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-[#a8e4a0] text-zinc-900 rounded-2xl py-6 font-bold hover:bg-[#96d18f] hover:shadow-xl transition-all flex items-center justify-center space-x-4 group shadow-lg">
              <span className="text-lg">Trimite Mesajul pe WhatsApp</span>
              <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>
        </div>
      </div>

      {/* HARTA GOOGLE MAPS - Acum are un link valid de Embed */}
      <div className="w-full px-6 pb-24 max-w-7xl mx-auto">
        <div className="w-full h-[550px] rounded-[3.5rem] overflow-hidden border border-zinc-200 shadow-2xl bg-zinc-100 relative group">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.496816119877!2d26.36431449999999!3d47.206860500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47354725dce210a7%3A0x7e69e357d739ce50!2sDentis%20-%20Clinic%C4%83%20stomatologic%C4%83!5e0!3m2!1sen!2sro!4v1775566286025!5m2!1sen!2sro" 
            className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-700" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Harta Dentis Center"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;