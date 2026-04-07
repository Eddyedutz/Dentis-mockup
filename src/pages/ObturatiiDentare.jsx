import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Shield, Sparkles, Clock, CheckCircle2, HeartPulse } from 'lucide-react';

const ObturatiiDentare = ({ setBookingModalOpen }) => {
  // Reset scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white pb-24">
      
      {/* 1. HEADER (Hero Section) */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <Link to="/tratamente" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-[#84c97c] transition-colors mb-8">
          <ArrowLeft size={16} className="mr-2" />
          Înapoi la toate tratamentele
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#a8e4a0]/20 text-[#60a855] text-sm font-bold tracking-wide uppercase mb-6">
              <Shield size={16} />
              <span>Odontoterapie Restauratoare</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-zinc-900 mb-6 leading-tight">
              Obturații Dentare <br/><span className="font-medium italic">(Plombe Compozit)</span>
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed mb-8">
              Tratăm cariile folosind materiale compozite premium care imită perfect culoarea și transluciditatea dintelui natural. Fără durere, fără compromisuri estetice.
            </p>
            <button 
              onClick={() => setBookingModalOpen(true)}
              className="bg-[#a8e4a0] text-zinc-900 px-8 py-4 rounded-2xl font-bold hover:bg-[#96d18f] transition-all inline-flex items-center space-x-3 shadow-md"
            >
              <span>Programează o evaluare</span>
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl border border-zinc-100 hidden lg:block">
            <img 
              src="https://www.dentiscenter.ro/wp-content/uploads/2023/06/02@fallback.jpg" 
              alt="Tratament stomatologic carii" 
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
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Estetică Invizibilă</h3>
            <p className="text-zinc-500 leading-relaxed">Compozitele moderne se sculptează direct pe dinte, potrivindu-se perfect cu nuanța ta. Nimeni nu va ști că ai o plombă.</p>
          </div>
          <div>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#84c97c] mb-6 shadow-sm border border-zinc-100">
              <HeartPulse size={28} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">100% Fără Durere</h3>
            <p className="text-zinc-500 leading-relaxed">Folosim anestezice locale de ultimă generație. Intervenția este complet nedureroasă și confortabilă de la început până la final.</p>
          </div>
          <div>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#84c97c] mb-6 shadow-sm border border-zinc-100">
              <Shield size={28} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Minim Invaziv</h3>
            <p className="text-zinc-500 leading-relaxed">Îndepărtăm strict țesutul afectat de carie, conservând la maximum dintele tău natural pentru a-i prelungi durata de viață.</p>
          </div>
        </div>
      </div>

      {/* 3. PAȘII PROCEDURII */}
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-light text-zinc-900 mb-12 text-center">Cum decurge tratamentul?</h2>
        
        <div className="space-y-8">
          {[
            { step: '01', title: 'Curățarea cariei', desc: 'Sub anestezie locală, îndepărtăm cu precizie țesutul dentar alterat de carie, lăsând cavitatea perfect curată.' },
            { step: '02', title: 'Izolarea cu digă', desc: 'Folosim diga dentară (un câmp de izolare din latex) pentru a păstra dintele perfect uscat și a preveni contaminarea cu bacterii din salivă.' },
            { step: '03', title: 'Reconstrucția dintelui', desc: 'Aplicăm materialul compozit strat cu strat, reconstruind anatomia naturală a dintelui. Fiecare strat este întărit cu lampa fotopolimerizabilă.' },
            { step: '04', title: 'Finisarea și lustruirea', desc: 'Ajustăm plomba pentru o mușcătură perfectă și o lustruim până capătă luciul și textura smalțului natural.' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start bg-white p-6 md:p-8 rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-md transition-all group">
              <div className="text-4xl font-light text-zinc-200 mr-6 group-hover:text-[#a8e4a0] transition-colors">{item.step}</div>
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
            <h5 className="font-bold text-zinc-900 flex items-center mb-2"><Clock size={18} className="text-[#84c97c] mr-2"/> Cât durează procedura?</h5>
            <p className="text-zinc-600 text-sm">În funcție de complexitatea cariei, o programare pentru o obturație durează între 30 și 60 de minute.</p>
          </div>
          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
            <h5 className="font-bold text-zinc-900 flex items-center mb-2"><CheckCircle2 size={18} className="text-[#84c97c] mr-2"/> Când pot mânca după?</h5>
            <p className="text-zinc-600 text-sm">Materialul compozit se întărește instantaneu sub lampa UV. Totuși, recomandăm să aștepți până trece efectul anesteziei (1-2 ore) pentru a nu te mușca accidental.</p>
          </div>
        </div>
      </div>

      {/* 5. CTA Final */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-[#a8e4a0]/20 border border-[#a8e4a0]/40 rounded-[3rem] p-12 relative overflow-hidden">
          <h2 className="text-3xl font-light text-zinc-900 mb-4">Ai observat o pată sau simți durere?</h2>
          <p className="text-zinc-700 mb-8 max-w-lg mx-auto">
            Cariile mici se tratează rapid și ieftin. Nu amâna vizita la stomatolog până când caria ajunge la nerv.
          </p>
          <button 
            onClick={() => setBookingModalOpen(true)}
            className="bg-zinc-900 text-white px-8 py-4 rounded-2xl font-medium hover:bg-zinc-800 transition-all inline-flex items-center space-x-3 shadow-lg"
          >
            <span>Tratează caria acum</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

    </div>
  );
};

export default ObturatiiDentare;