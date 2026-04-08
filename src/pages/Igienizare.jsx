import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Droplet, ShieldCheck, Sparkles, Clock, CheckCircle2, Coffee, Zap } from 'lucide-react';

const Igienizare = ({ setBookingModalOpen }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white pt-8 pb-24">
      
      {/* 1. HEADER (Hero Section) */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <Link to="/tratamente" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-[#84c97c] transition-colors mb-8">
          <ArrowLeft size={16} className="mr-2" />
          Înapoi la toate tratamentele
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#a8e4a0]/20 text-[#60a855] text-sm font-bold tracking-wide uppercase mb-6">
              <ShieldCheck size={16} />
              <span>Baza Sănătății Dentare</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-zinc-900 mb-6 leading-tight">
              Igienizare <br/><span className="font-medium italic">& Profilaxie</span>
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed mb-8">
              Prevenția este cel mai ieftin și nedureros tratament. O ședință de igienizare profesională completă elimină tartrul și petele dificile, lăsându-ți dinții curați, respirația proaspătă și gingiile sănătoase.
            </p>
            <button 
              onClick={() => setBookingModalOpen(true)}
              className="bg-[#a8e4a0] text-zinc-900 px-8 py-4 rounded-2xl font-bold hover:bg-[#96d18f] transition-all inline-flex items-center space-x-3 shadow-md"
            >
              <span>Vreau o igienizare completă</span>
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="relative h-[250px] md:h-[400px] mt-8 lg:mt-0 rounded-[3rem] overflow-hidden shadow-2xl border border-zinc-100">
            <img 
              src="https://www.dentiscenter.ro/wp-content/uploads/2023/05/pexels-pavel-danilyuk-7055276-scaled.jpg" 
              alt="Igienizare dentară profesională" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* 2. DE CE ESTE NECESARĂ? */}
      <div className="bg-zinc-50 border-y border-zinc-100 py-24 mb-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#84c97c] mb-6 shadow-sm border border-zinc-100">
              <Zap size={28} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Elimină Tartrul</h3>
            <p className="text-zinc-500 leading-relaxed">Tartrul (piatra dentară) nu poate fi îndepărtat prin periaj acasă. Acesta este cauza principală a cariilor și a bolilor gingivale dacă nu este curățat periodic de medic.</p>
          </div>
          <div>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#84c97c] mb-6 shadow-sm border border-zinc-100">
              <Sparkles size={28} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Pete de Cafea/Fumat</h3>
            <p className="text-zinc-500 leading-relaxed">Tehnologia AirFlow folosește un jet fin de apă și pulbere specială pentru a șterge instantaneu petele inestetice cauzate de cafea, ceai, vin roșu sau tutun.</p>
          </div>
          <div>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#84c97c] mb-6 shadow-sm border border-zinc-100">
              <Droplet size={28} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Gingii Sănătoase</h3>
            <p className="text-zinc-500 leading-relaxed">Igienizarea oprește inflamația gingivală și sângerările. Este primul pas obligatoriu înainte de orice alt tratament (implanturi, albire sau aparat dentar).</p>
          </div>
        </div>
      </div>

      {/* 3. CE CUPRINDE PACHETUL COMPLET? */}
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-light text-zinc-900 mb-12 text-center">Pachetul de Igienizare "3 în 1"</h2>
        
        <div className="space-y-6">
          {[
            { title: 'Detartraj cu Ultrasunete', desc: 'Folosim vibrații de înaltă frecvență pentru a disloca blând depozitele de tartru de deasupra și de sub gingie, fără a afecta smalțul dintelui.' },
            { title: 'AirFlow (Profi-Jet)', desc: 'Un jet de apă, aer și particule de bicarbonat care curăță zonele inaccesibile (spații interdentare) și elimină colorațiile externe, redând albul natural.' },
            { title: 'Periaj Profesional & Fluorizare', desc: 'Lustruim dinții cu o pastă specială pentru a preveni aderarea rapidă a plăcii bacteriene și aplicăm un lac cu fluor pentru a întări smalțul.' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-start bg-white p-6 md:p-8 rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
              <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-300 mb-4 sm:mb-0 sm:mr-6 group-hover:text-[#a8e4a0] transition-colors shrink-0">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-zinc-900 mb-2">{item.title}</h4>
                <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. FAQ */}
      <div className="max-w-3xl mx-auto px-6 mb-24">
        <h2 className="text-2xl font-bold text-zinc-900 mb-8 text-center">Întrebări Frecvente</h2>
        <div className="space-y-4">
          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
            <h5 className="font-bold text-zinc-900 flex items-center mb-2"><Clock size={18} className="text-[#84c97c] mr-2"/> Cât de des trebuie făcută?</h5>
            <p className="text-zinc-600 text-sm leading-relaxed">Recomandăm o igienizare profesională o dată la 6 luni. Dacă ești fumător sau porți aparat dentar fix, recomandăm scurtarea intervalului la 4 luni.</p>
          </div>
          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
            <h5 className="font-bold text-zinc-900 flex items-center mb-2"><Coffee size={18} className="text-[#84c97c] mr-2"/> Pot mânca imediat după?</h5>
            <p className="text-zinc-600 text-sm leading-relaxed">Recomandăm să aștepți aproximativ o oră, mai ales dacă am aplicat un tratament cu fluor. De asemenea, evită alimentele colorate (vin roșu, sfeclă, curry) în primele 24 de ore.</p>
          </div>
        </div>
      </div>

      {/* 5. CTA Final */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-[#a8e4a0]/20 border border-[#a8e4a0]/40 rounded-[3rem] p-12 relative overflow-hidden">
          <h2 className="text-3xl font-light text-zinc-900 mb-4">Zâmbetul tău merită o restartare</h2>
          <p className="text-zinc-700 mb-8 max-w-lg mx-auto">
            Simte diferența unor dinți perfect curați. Programează-te astăzi pentru pachetul complet de profilaxie.
          </p>
          <button 
            onClick={() => setBookingModalOpen(true)}
            className="bg-zinc-900 text-white px-8 py-4 rounded-2xl font-medium hover:bg-zinc-800 transition-all inline-flex items-center space-x-3 shadow-lg"
          >
            <span>Programează igienizarea</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

    </div>
  );
};

export default Igienizare;