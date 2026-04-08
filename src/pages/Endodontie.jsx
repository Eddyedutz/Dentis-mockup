import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Search, Shield, Clock, CheckCircle2, HeartPulse, Crosshair } from 'lucide-react';

const Endodontie = ({ setBookingModalOpen }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white pt-8 pb-24">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <Link to="/tratamente" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-[#84c97c] transition-colors mb-8">
          <ArrowLeft size={16} className="mr-2" />
          Înapoi la toate tratamentele
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#a8e4a0]/20 text-[#60a855] text-sm font-bold tracking-wide uppercase mb-6">
              <Search size={16} />
              <span>Precizie Absolută</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-zinc-900 mb-6 leading-tight">
              Endodonție <br/><span className="font-medium italic">Microscopică</span>
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed mb-8">
              Salvează-ți dintele natural! Tratamentul de canal (scoaterea nervului) realizat sub microscopul dentar garantează curățarea perfectă a infecției, fără durere, prevenind extracția.
            </p>
            <button 
              onClick={() => setBookingModalOpen(true)}
              className="bg-[#a8e4a0] text-zinc-900 px-8 py-4 rounded-2xl font-bold hover:bg-[#96d18f] transition-all inline-flex items-center space-x-3 shadow-md"
            >
              <span>Tratează infecția acum</span>
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="relative h-[250px] md:h-[400px] mt-8 lg:mt-0 rounded-[3rem] overflow-hidden shadow-2xl border border-zinc-100">
            <img 
              src="https://www.dentiscenter.ro/wp-content/uploads/2023/07/Microscop-Omega-Omnident.jpg?auto=format&fit=crop&q=80&w=800" 
              alt="Medic folosind microscopul dentar" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* BENEFICII */}
      <div className="bg-zinc-50 border-y border-zinc-100 py-24 mb-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#84c97c] mb-6 shadow-sm border border-zinc-100">
              <Crosshair size={28} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Mărire de până la 25x</h3>
            <p className="text-zinc-500 leading-relaxed">Microscopul ne permite să vedem detalii invizibile cu ochiul liber. Putem descoperi canale ascunse sau fisuri minuscule, asigurând o curățare completă a rădăcinii.</p>
          </div>
          <div>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#84c97c] mb-6 shadow-sm border border-zinc-100">
              <Shield size={28} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Evitarea Extracției</h3>
            <p className="text-zinc-500 leading-relaxed">Niciun implant nu se compară cu dintele tău natural. Endodonția la microscop salvează adesea dinți considerați pierduți sau "condamnați" la extracție.</p>
          </div>
          <div>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#84c97c] mb-6 shadow-sm border border-zinc-100">
              <HeartPulse size={28} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Tratament Fără Durere</h3>
            <p className="text-zinc-500 leading-relaxed">Anestezia modernă izolează complet dintele. Pacienții noștri sunt atât de relaxați în timpul procedurii sub microscop încât unii chiar adorm în scaun.</p>
          </div>
        </div>
      </div>

      {/* CUM SE DESFĂȘOARĂ */}
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-light text-zinc-900 mb-12 text-center">Cum decurge tratamentul la microscop?</h2>
        
        <div className="space-y-6">
          {[
            { step: '01', title: 'Anestezia și Izolarea', desc: 'Amorțim complet zona și montăm diga dentară (o barieră din latex) care menține dintele perfect uscat și te protejează de soluțiile dezinfectante.' },
            { step: '02', title: 'Explorarea sub Microscop', desc: 'Medicul privește prin obiectivul microscopului pentru a găsi și elibera toate canalele din interiorul rădăcinii dintelui tău, eliminând nervul inflamat sau infectat.' },
            { step: '03', title: 'Curățarea Laser/Mecanică', desc: 'Canalele sunt lărgite și spălate cu soluții antibacteriene. Deseori folosim și laserul pentru a steriliza 100% peretele rădăcinii.' },
            { step: '04', title: 'Sigilarea 3D', desc: 'La final, interiorul dintelui este umplut etanș cu un material biocompatibil cald, care previne orice reinfectare pe viitor.' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-start bg-white p-6 md:p-8 rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
              <div className="text-4xl font-light text-zinc-200 mb-4 sm:mb-0 sm:mr-6 group-hover:text-[#a8e4a0] transition-colors shrink-0">{item.step}</div>
              <div className="pr-4">
                <h4 className="text-xl font-bold text-zinc-900 mb-2">{item.title}</h4>
                <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto px-6 mb-24">
        <h2 className="text-2xl font-bold text-zinc-900 mb-8 text-center">Întrebări Frecvente</h2>
        <div className="space-y-4">
          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
            <h5 className="font-bold text-zinc-900 flex items-center mb-2"><HeartPulse size={18} className="text-[#84c97c] mr-2"/> Chiar nu doare "scoaterea nervului"?</h5>
            <p className="text-zinc-600 text-sm leading-relaxed">Mitul durerii a rămas din trecut. Astăzi, grație substanțelor anestezice puternice, dintele este complet amorțit. Nu vei simți absolut nicio durere pe parcursul tratamentului.</p>
          </div>
          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
            <h5 className="font-bold text-zinc-900 flex items-center mb-2"><CheckCircle2 size={18} className="text-[#84c97c] mr-2"/> De ce e mai scump tratamentul la microscop?</h5>
            <p className="text-zinc-600 text-sm leading-relaxed">Endodonția microscopică folosește aparatură de înaltă precizie (microscop optic, apex locator) și necesită materiale speciale (diga, instrumentar rotativ de unică folosință). Rata de succes este însă incomparabil mai mare, economisind banii pe care i-ai da pe un viitor implant dacă dintele ar eșua.</p>
          </div>
          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
            <h5 className="font-bold text-zinc-900 flex items-center mb-2"><Clock size={18} className="text-[#84c97c] mr-2"/> În câte ședințe se termină?</h5>
            <p className="text-zinc-600 text-sm leading-relaxed">În majoritatea cazurilor, dacă nu există o infecție masivă cu abces, tratamentul complet de canal sub microscop se realizează într-o singură ședință de 1-2 ore.</p>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-[#a8e4a0]/20 border border-[#a8e4a0]/40 rounded-[3rem] p-12 relative overflow-hidden">
          <h2 className="text-3xl font-light text-zinc-900 mb-4">Ai dureri pulsatile sau la rece/cald?</h2>
          <p className="text-zinc-700 mb-8 max-w-lg mx-auto">
            Nu aștepta ca dintele să se infecteze iremediabil. O intervenție la timp îți va salva dintele natural pentru totdeauna.
          </p>
          <button 
            onClick={() => setBookingModalOpen(true)}
            className="bg-zinc-900 text-white px-8 py-4 rounded-2xl font-medium hover:bg-zinc-800 transition-all inline-flex items-center space-x-3 shadow-lg"
          >
            <span>Programează tratamentul de canal</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

    </div>
  );
};

export default Endodontie;