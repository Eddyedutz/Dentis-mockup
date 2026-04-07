import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Shield, Activity, Clock, CheckCircle2, HeartPulse, Syringe } from 'lucide-react';

const ChirurgieDentara = ({ setBookingModalOpen }) => {
  // Reset scroll la montare
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
              <Activity size={16} />
              <span>Intervenții Sigure</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-zinc-900 mb-6 leading-tight">
              Chirurgie Dentară <br/><span className="font-medium italic">fără durere</span>
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed mb-8">
              De la extracții simple la intervenții complexe ale molarilor de minte, echipa noastră de specialiști asigură proceduri sigure, atraumatice și confortabile, într-un mediu clinic imaculat.
            </p>
            <button 
              onClick={() => setBookingModalOpen(true)}
              className="bg-[#a8e4a0] text-zinc-900 px-8 py-4 rounded-2xl font-bold hover:bg-[#96d18f] transition-all inline-flex items-center space-x-3 shadow-md"
            >
              <span>Programează o consultație</span>
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl border border-zinc-100 hidden lg:block">
            <img 
              src="https://www.dentiscenter.ro/wp-content/uploads/2023/09/extractie-dentara-parerei-preturi-si-oferte-1024x632-1.webp" 
              alt="Chirurgie dentară modernă" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* 2. BENEFICII */}
      <div className="bg-zinc-50 border-y border-zinc-100 py-24 mb-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#84c97c] mb-6 shadow-sm border border-zinc-100">
              <HeartPulse size={28} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Confort Maxim</h3>
            <p className="text-zinc-500 leading-relaxed">Frica de durere este de domeniul trecutului. Folosim protocoale de anestezie avansate care îți amorțesc complet dintele, garantând zero durere în timpul procedurii.</p>
          </div>
          <div>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#84c97c] mb-6 shadow-sm border border-zinc-100">
              <Activity size={28} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Recuperare Rapidă</h3>
            <p className="text-zinc-500 leading-relaxed">Tehnicile noastre chirurgicale sunt minim invazive. Respectăm la maximum țesuturile sănătoase, ceea ce se traduce prin mai puțină inflamație și o vindecare rapidă.</p>
          </div>
          <div>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#84c97c] mb-6 shadow-sm border border-zinc-100">
              <Shield size={28} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Mediu 100% Steril</h3>
            <p className="text-zinc-500 leading-relaxed">Siguranța ta primează. Sălile de chirurgie sunt dezinfectate strict, instrumentarul este sterilizat la standarde de top, eliminând orice risc de infecție.</p>
          </div>
        </div>
      </div>

      {/* 3. INTERVENȚII FRECVENTE */}
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-light text-zinc-900 mb-12 text-center">Intervenții realizate în clinică</h2>
        
        <div className="space-y-6">
          {[
            { step: '01', title: 'Extracții dentare simple și complexe', desc: 'Îndepărtarea dinților distruși iremediabil, care nu mai pot fi salvați prin tratamente endodontice, pregătind terenul pentru un viitor implant dentar.' },
            { step: '02', title: 'Extracția molarilor de minte (Odontectomie)', desc: 'Molarii de minte incluși, semiincluși sau care cresc într-o poziție vicioasă provoacă dureri, înghesuiri sau infecții. Extracția lor este o procedură de rutină pentru chirurgii noștri.' },
            { step: '03', title: 'Rezecții apicale și chistectomii', desc: 'Îndepărtarea chisturilor sau a infecțiilor localizate la vârful rădăcinii unui dinte, permițând salvarea dintelui și evitarea extracției.' },
            { step: '04', title: 'Adiție de os și Sinus Lift', desc: 'Atunci când structura osoasă s-a retras (atrofiat), chirurgul folosește materiale de adiție (os artificial/natural) pentru a reconstrui baza necesară inserării unui implant dentar.' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-start bg-white p-6 md:p-8 rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-md transition-all group">
              <div className="text-4xl font-light text-zinc-200 mb-4 sm:mb-0 sm:mr-6 group-hover:text-[#a8e4a0] transition-colors shrink-0">{item.step}</div>
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
            <h5 className="font-bold text-zinc-900 flex items-center mb-2"><Syringe size={18} className="text-[#84c97c] mr-2"/> Cât de tare doare o extracție?</h5>
            <p className="text-zinc-600 text-sm leading-relaxed">Nu doare absolut deloc pe parcursul intervenției, mulțumită anesteziei locale. Vei simți doar ușoare presiuni (mișcări de împingere), dar niciun fel de durere ascuțită. După ce trece anestezia, eventualul disconfort se gestionează ușor cu antiinflamatoare obișnuite.</p>
          </div>
          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
            <h5 className="font-bold text-zinc-900 flex items-center mb-2"><Clock size={18} className="text-[#84c97c] mr-2"/> Când îmi pot relua activitățile?</h5>
            <p className="text-zinc-600 text-sm leading-relaxed">În majoritatea cazurilor, te poți întoarce la muncă sau la școală a doua zi. În cazul extracțiilor complexe de molari de minte, recomandăm 1-2 zile de odihnă și evitarea efortului fizic intens timp de o săptămână.</p>
          </div>
          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
            <h5 className="font-bold text-zinc-900 flex items-center mb-2"><CheckCircle2 size={18} className="text-[#84c97c] mr-2"/> Trebuie să iau antibiotic?</h5>
            <p className="text-zinc-600 text-sm leading-relaxed">Doar dacă există o infecție activă sau dacă intervenția a fost foarte laborioasă. Medicul chirurg îți va elibera o rețetă cu antibiotic doar dacă este strict necesar, împreună cu restul indicațiilor post-operatorii.</p>
          </div>
        </div>
      </div>

      {/* 5. CTA Final */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-[#a8e4a0]/20 border border-[#a8e4a0]/40 rounded-[3rem] p-12 relative overflow-hidden">
          <h2 className="text-3xl font-light text-zinc-900 mb-4">Măsea de minte dureroasă?</h2>
          <p className="text-zinc-700 mb-8 max-w-lg mx-auto">
            Nu lăsa o infecție sau durerea să îți strice planurile. Intervenim rapid și sigur.
          </p>
          <button 
            onClick={() => setBookingModalOpen(true)}
            className="bg-zinc-900 text-white px-8 py-4 rounded-2xl font-medium hover:bg-zinc-800 transition-all inline-flex items-center space-x-3 shadow-lg"
          >
            <span>Programează extracția</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

    </div>
  );
};

export default ChirurgieDentara;