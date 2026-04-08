import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Smile, Sparkles, Clock, CheckCircle2, ShieldCheck, Maximize, FlipVertical2  } from 'lucide-react';

const Ortodontie = ({ setBookingModalOpen }) => {
  // Resetăm scroll-ul la montare
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
              <FlipVertical2 size={16} />
              <span>Aliniere Perfectă</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-zinc-900 mb-6 leading-tight">
              Ortodonție <br/><span className="font-medium italic">pentru toate vârstele</span>
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed mb-8">
              Un zâmbet drept nu este doar estetic, ci și esențial pentru sănătatea dinților tăi pe termen lung. Oferim soluții moderne de aliniere, de la aparate clasice din safir, până la gutiere 100% transparente (Invisalign).
            </p>
            <button 
              onClick={() => setBookingModalOpen(true)}
              className="bg-[#a8e4a0] text-zinc-900 px-8 py-4 rounded-2xl font-bold hover:bg-[#96d18f] transition-all inline-flex items-center space-x-3 shadow-md"
            >
              <span>Programează o consultație</span>
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="relative h-[250px] md:h-[400px] mt-8 lg:mt-0 rounded-[3rem] overflow-hidden shadow-2xl border border-zinc-100">
            <img 
              src="https://i.pinimg.com/originals/07/51/32/0751325a4da916d5a0f00555649045ff.png?auto=format&fit=crop&q=80&w=800" 
              alt="Pacientă fericită cu aparat dentar invizibil" 
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
              <Sparkles size={28} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Estetică Impecabilă</h3>
            <p className="text-zinc-500 leading-relaxed">Tehnologia a evoluat. Acum îți poți îndrepta dinții cu aparate invizibile (gutiere) sau bracketuri din safir care se camuflează perfect cu nuanța dintelui tău.</p>
          </div>
          <div>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#84c97c] mb-6 shadow-sm border border-zinc-100">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Sănătate pe termen lung</h3>
            <p className="text-zinc-500 leading-relaxed">Dinții înghesuiți sunt greu de curățat, favorizând cariile și bolile parodontale. O mușcătură corectă previne uzura prematură și problemele articulare.</p>
          </div>
          <div>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#84c97c] mb-6 shadow-sm border border-zinc-100">
              <Maximize size={28} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Planificare Digitală</h3>
            <p className="text-zinc-500 leading-relaxed">Folosim scanarea intraorală 3D pentru a lua amprente fără disconfort și pentru a-ți arăta o simulare a zâmbetului tău final, încă de la prima ședință.</p>
          </div>
        </div>
      </div>

      {/* 3. TIPURI DE APARATE */}
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-light text-zinc-900 mb-12 text-center">Opțiuni de tratament ortodontic</h2>
        
        <div className="space-y-6">
          {[
            { tag: 'Premium', title: 'Aparate Invizibile (Alignere transparente)', desc: 'Sistemul modern (tip Invisalign / Spark) folosește un set de gutiere transparente, personalizate, pe care le schimbi periodic. Sunt detașabile, poți mânca orice dorești și sunt aproape imposibil de observat.' },
            { tag: 'Estetic', title: 'Aparat Fix Ceramic sau din Safir', desc: 'Funcționează pe principiul clasic, dar bracketurile sunt realizate din materiale translucide care iau culoarea dintelui, oferind o estetică ridicată pe toată durata tratamentului.' },
            { tag: 'Clasic', title: 'Aparat Fix Metalic', desc: 'Varianta tradițională, extrem de eficientă, durabilă și accesibilă. Este ideală pentru corectarea anomaliilor complexe și foarte apreciată de adolescenți.' },
            { tag: 'Copii', title: 'Ortodonție Interceptivă (Copii)', desc: 'Aparate mobile sau funcționale destinate copiilor în perioada de creștere (7-12 ani), pentru a ghida erupția corectă a dinților definitivi și a lărgi maxilarul.' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-start bg-white p-6 md:p-8 rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-zinc-50 border-b border-l border-zinc-100 px-4 py-2 rounded-bl-2xl text-xs font-bold text-zinc-400 uppercase tracking-widest">{item.tag}</div>
              <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-300 mb-4 sm:mb-0 sm:mr-6 group-hover:text-[#a8e4a0] transition-colors shrink-0">
                <CheckCircle2 size={24} />
              </div>
              <div className="pr-12">
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
            <h5 className="font-bold text-zinc-900 flex items-center mb-2"><Smile size={18} className="text-[#84c97c] mr-2"/> Sunt prea în vârstă pentru un aparat dentar?</h5>
            <p className="text-zinc-600 text-sm leading-relaxed">Nu există o limită de vârstă pentru tratamentul ortodontic! Dinții se pot deplasa la orice vârstă atâta timp cât gingiile și osul sunt sănătoase. Peste 30% dintre pacienții noștri ortodontici sunt adulți.</p>
          </div>
          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
            <h5 className="font-bold text-zinc-900 flex items-center mb-2"><Clock size={18} className="text-[#84c97c] mr-2"/> Cât durează tratamentul?</h5>
            <p className="text-zinc-600 text-sm leading-relaxed">Durata variază în funcție de complexitatea cazului. Corecțiile ușoare cu gutiere pot dura 6-8 luni, în timp ce cazurile complexe cu aparat fix pot necesita între 1,5 și 2 ani.</p>
          </div>
          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
            <h5 className="font-bold text-zinc-900 flex items-center mb-2"><Sparkles size={18} className="text-[#84c97c] mr-2"/> Aparatul dentar provoacă durere?</h5>
            <p className="text-zinc-600 text-sm leading-relaxed">Montarea aparatului este complet nedureroasă. În primele zile după montare sau după activările lunare, poți simți o ușoară tensiune sau sensibilitate la masticație, dar aceasta dispare rapid pe măsură ce dinții se obișnuiesc cu mișcarea.</p>
          </div>
        </div>
      </div>

      {/* 5. CTA Final */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-[#a8e4a0]/20 border border-[#a8e4a0]/40 rounded-[3rem] p-12 relative overflow-hidden">
          <h2 className="text-3xl font-light text-zinc-900 mb-4">Meriți un zâmbet perfect aliniat</h2>
          <p className="text-zinc-700 mb-8 max-w-lg mx-auto">
            Vino la o consultație pentru a scana digital dantura ta. Vei vedea simularea zâmbetului tău viitor înainte măcar să începi tratamentul.
          </p>
          <button 
            onClick={() => setBookingModalOpen(true)}
            className="bg-zinc-900 text-white px-8 py-4 rounded-2xl font-medium hover:bg-zinc-800 transition-all inline-flex items-center space-x-3 shadow-lg"
          >
            <span>Programează consultația ortodontică</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

    </div>
  );
};

export default Ortodontie;