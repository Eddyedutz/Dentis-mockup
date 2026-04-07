import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Shield, Activity, Syringe, Smile, Zap, 
  Search, Baby, AlertCircle, Sparkles, Droplet, Plus 
} from 'lucide-react';

const Tratamente = ({ setBookingModalOpen }) => {
  // Resetăm scroll-ul sus când pagina se încarcă
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Lista completă a serviciilor extrasă de pe site-ul vechi
  const servicii = [
    { id: 'obturatii-dentare', nume: 'Obturații dentare', icon: Shield, desc: 'Tratamentul cariilor și refacerea anatomiei dentare cu materiale compozite premium, invizibile.' },
    { id: 'chirurgie-dentara', nume: 'Chirurgie dentară', icon: Activity, desc: 'Extracții, rezecții apicale și intervenții complexe realizate în siguranță și fără durere.' },
    { id: 'implantologie-dentara', nume: 'Implantologie dentară', icon: Syringe, desc: 'Soluția definitivă și naturală pentru înlocuirea dinților lipsă folosind implanturi de top din titan.' },
    { id: 'protetica-dentara', nume: 'Protetică dentară', icon: Smile, desc: 'Coroane, punți și fațete dentare (Zirconiu, E-max) pentru un zâmbet perfect funcțional și estetic.' },
    { id: 'terapia-laser', nume: 'Terapie laser', icon: Zap, desc: 'Tratamente moderne, minim invazive, cu vindecare rapidă, folosind laserul stomatologic.' },
    { id: 'parodontologie', nume: 'Parodontologie', icon: Plus, desc: 'Diagnosticarea și tratamentul afecțiunilor gingivale pentru a preveni pierderea dinților.' },
    { id: 'endodontie-microscopica', nume: 'Endodonție microscopică', icon: Search, desc: 'Tratamente de canal precise și sigure, realizate sub magnificația microscopului dentar.' },
    { id: 'pedodontie', nume: 'Pedodonție', icon: Baby, desc: 'Stomatologie dedicată copiilor, cu abordare blândă și tratamente fără stres pentru cei mici.' },
    { id: 'urgente', nume: 'Dureri / Urgențe', icon: AlertCircle, desc: 'Preluare prioritară pentru calmarea durerilor, infecții sau traumatisme dentare neprevăzute.' },
    { id: 'albire-dentara', nume: 'Albire dentară', icon: Sparkles, desc: 'Redă strălucirea naturală a zâmbetului tău rapid și sigur, cu tehnologie profesională.' },
    { id: 'igienizare', nume: 'Igienizare și Profilaxie', icon: Droplet, desc: 'Detartraj, periaj profesional și AirFlow pentru a menține sănătatea orală pe termen lung.' }
  ];

  return (
    <div className="w-full bg-white pb-24">
      {/* Header Secțiune */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-light text-zinc-900 mb-6">Tratamente și Servicii</h1>
        <p className="text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed">
          Acoperim întreaga sferă a medicinei dentare. De la profilaxie de rutină la reabilitări orale complexe, folosim tehnologie avansată pentru a asigura confortul și sănătatea zâmbetului tău.
        </p>
      </div>

      {/* Grid-ul cu Servicii */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {servicii.map((serviciu, index) => (
          // Fiecare card este un Link către sub-pagina lui (ex: /tratamente/albire-dentara)
          <Link 
            key={index} 
            to={`/tratamente/${serviciu.id}`}
            className="group bg-zinc-50 p-8 rounded-[2rem] border border-zinc-100 hover:border-[#a8e4a0] hover:shadow-lg transition-all duration-300 flex flex-col h-full"
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-zinc-800 mb-6 group-hover:bg-[#a8e4a0] transition-colors border border-zinc-100 group-hover:border-transparent shadow-sm">
              <serviciu.icon size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-medium text-zinc-900 mb-3">{serviciu.nume}</h3>
            <p className="text-zinc-500 leading-relaxed mb-8 flex-grow">{serviciu.desc}</p>
            
            <div className="flex items-center text-zinc-900 font-medium mt-auto group-hover:text-[#84c97c] transition-colors">
              <span>Află detalii</span>
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      {/* Secțiune CTA (Call to action) la final */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-[#a8e4a0]/20 border border-[#a8e4a0]/40 rounded-[3rem] p-12 relative overflow-hidden">
          <h2 className="text-3xl font-light text-zinc-900 mb-4 relative z-10">Nu ești sigur de ce tratament ai nevoie?</h2>
          <p className="text-zinc-700 mb-8 max-w-lg mx-auto relative z-10">
            Este perfect normal. Programează-te pentru o consultație inițială, iar medicii noștri îți vor explica clar toate opțiunile.
          </p>
          <button 
            onClick={() => setBookingModalOpen(true)}
            className="bg-zinc-900 text-white px-8 py-4 rounded-2xl font-medium hover:bg-zinc-800 transition-all inline-flex items-center space-x-3 shadow-lg relative z-10"
          >
            <span>Programează o consultație</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tratamente;