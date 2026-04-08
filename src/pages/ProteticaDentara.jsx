import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Smile, Sparkles, Clock, CheckCircle2, ShieldCheck, Gem } from 'lucide-react';

const ProteticaDentara = ({ setBookingModalOpen }) => {
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
              <Gem size={16} />
              <span>Estetică & Funcționalitate</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-zinc-900 mb-6 leading-tight">
              Protetică Dentară <br/><span className="font-medium italic">Premium</span>
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed mb-8">
              Redăm frumusețea și funcționalitatea dinților tăi afectați sau lipsă. Folosim materiale biocompatibile de ultimă generație, precum Zirconiu și ceramica E-max, pentru rezultate care imită perfect natura.
            </p>
            <button 
              onClick={() => setBookingModalOpen(true)}
              className="bg-[#a8e4a0] text-zinc-900 px-8 py-4 rounded-2xl font-bold hover:bg-[#96d18f] transition-all inline-flex items-center space-x-3 shadow-md"
            >
              <span>Vreau o evaluare protetică</span>
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="relative h-[250px] md:h-[400px] mt-8 lg:mt-0 rounded-[3rem] overflow-hidden shadow-2xl border border-zinc-100">
            <img 
              src="https://www.dentiscenter.ro/wp-content/uploads/2023/10/protetica-dentara-iasi-bionica.jpg?auto=format&fit=crop&q=80&w=800" 
              alt="Coroane si fațete dentare" 
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
              <Sparkles size={28} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Estetică Naturală</h3>
            <p className="text-zinc-500 leading-relaxed">Spre deosebire de vechile coroane metalo-ceramice, Zirconiul și ceramica integrală permit luminii să treacă prin dinte, oferind o transluciditate identică cu cea a smalțului natural.</p>
          </div>
          <div>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#84c97c] mb-6 shadow-sm border border-zinc-100">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Rezistență Maximă</h3>
            <p className="text-zinc-500 leading-relaxed">Materialele moderne sunt extrem de dure. O coroană din Zirconiu rezistă impecabil la forțele de masticație și nu se ciobește, oferind siguranță pe termen lung.</p>
          </div>
          <div>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#84c97c] mb-6 shadow-sm border border-zinc-100">
              <CheckCircle2 size={28} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Fără Alergii</h3>
            <p className="text-zinc-500 leading-relaxed">Zirconiul și ceramica sunt 100% biocompatibile. Nu irită gingia și elimină definitiv acea dungă neagră inestetică ce apărea la baza gingiei în cazul lucrărilor vechi.</p>
          </div>
        </div>
      </div>

      {/* TIPURI DE LUCRĂRI */}
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-light text-zinc-900 mb-12 text-center">Soluții Protetice Personalizate</h2>
        
        <div className="space-y-6">
          {[
            { title: 'Fațete Dentare E-max', desc: 'Sunt "scuturi" ultra-subțiri din ceramică premium aplicate pe partea frontală a dinților. Reprezintă secretul "zâmbetului de Hollywood", corectând culoarea, forma și spațierile.' },
            { title: 'Coroane din Zirconiu', desc: 'Îmbracă complet un dinte care a fost puternic afectat de carii sau fracturat. Oferă rezistență structurală și o estetică fără cusur, fără să conțină metal.' },
            { title: 'Punți Dentare', desc: 'Soluția clasică pentru înlocuirea unuia sau a mai multor dinți lipsă, prin ancorarea lucrării (cimentare) pe dinții vecini sănătoși.' },
            { title: 'Lucrări Protetice pe Implanturi', desc: 'După integrarea implantului în os, atașăm coroana sau puntea definitivă deasupra acestuia. Rezultatul este cel mai apropiat de dinții naturali.' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-start bg-white p-6 md:p-8 rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
              <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-300 mb-4 sm:mb-0 sm:mr-6 group-hover:text-[#a8e4a0] transition-colors shrink-0">
                <Smile size={24} />
              </div>
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
            <h5 className="font-bold text-zinc-900 flex items-center mb-2"><Gem size={18} className="text-[#84c97c] mr-2"/> Trebuie să îmi "pilesc" mult dinții pentru fațete?</h5>
            <p className="text-zinc-600 text-sm leading-relaxed">Nu. Fațetele moderne E-max necesită o șlefuire minim invazivă a smalțului (0.3 - 0.5 mm), uneori chiar "No-Prep" (fără șlefuire deloc), conservând sănătatea dintelui.</p>
          </div>
          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
            <h5 className="font-bold text-zinc-900 flex items-center mb-2"><Clock size={18} className="text-[#84c97c] mr-2"/> Cât durează realizarea unei coroane?</h5>
            <p className="text-zinc-600 text-sm leading-relaxed">De obicei, procesul necesită 2-3 ședințe (amprentare, probă, cimentare) și durează aproximativ 7-10 zile. În tot acest timp, vei purta coroane provizorii pentru a nu sta cu dinții expuși.</p>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-[#a8e4a0]/20 border border-[#a8e4a0]/40 rounded-[3rem] p-12 relative overflow-hidden">
          <h2 className="text-3xl font-light text-zinc-900 mb-4">Transformă-ți zâmbetul cu încredere</h2>
          <p className="text-zinc-700 mb-8 max-w-lg mx-auto">
            Fie că ai nevoie de o singură coroană sau de o reabilitare completă (fațete), suntem aici pentru a găsi soluția perfectă pentru fizionomia ta.
          </p>
          <button 
            onClick={() => setBookingModalOpen(true)}
            className="bg-zinc-900 text-white px-8 py-4 rounded-2xl font-medium hover:bg-zinc-800 transition-all inline-flex items-center space-x-3 shadow-lg"
          >
            <span>Programează consultația</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

    </div>
  );
};

export default ProteticaDentara;