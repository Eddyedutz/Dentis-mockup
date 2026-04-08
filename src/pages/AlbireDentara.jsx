import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Sparkles, Sun, Clock, ShieldCheck, CheckCircle2, Coffee } from 'lucide-react';

const AlbireDentara = ({ setBookingModalOpen }) => {
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
              <Sparkles size={16} />
              <span>Estetică Premium</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-zinc-900 mb-6 leading-tight">
              Albire Dentară <br/><span className="font-medium italic">Profesională</span>
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed mb-8">
              Zâmbetul tău este prima ta carte de vizită. Redă-i strălucirea naturală în doar 45 de minute, folosind tehnologia cu lampă acceleratoare (Laser/LED). Fără durere, sigur pentru smalț și cu rezultate vizibile imediat.
            </p>
            <button 
              onClick={() => setBookingModalOpen(true)}
              className="bg-[#a8e4a0] text-zinc-900 px-8 py-4 rounded-2xl font-bold hover:bg-[#96d18f] transition-all inline-flex items-center space-x-3 shadow-md"
            >
              <span>Vreau un zâmbet mai alb</span>
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="relative h-[250px] md:h-[400px] mt-8 lg:mt-0 rounded-[3rem] overflow-hidden shadow-2xl border border-zinc-100">
            <img 
              src="https://www.dentiscenter.ro/wp-content/uploads/2023/06/shutterstock_1056733061.jpg?auto=format&fit=crop&q=80&w=800" 
              alt="Zâmbet perfect și strălucitor" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* 2. BENEFICIILE ALBIRII ÎN CLINICĂ */}
      <div className="bg-zinc-50 border-y border-zinc-100 py-24 mb-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#84c97c] mb-6 shadow-sm border border-zinc-100">
              <Sun size={28} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Până la 8 nuanțe mai alb</h3>
            <p className="text-zinc-500 leading-relaxed">Gelurile noastre profesionale, activate de lumina lămpii, penetrează structura dintelui pentru a dizolva petele profunde pe care periajul nu le poate curăța.</p>
          </div>
          <div>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#84c97c] mb-6 shadow-sm border border-zinc-100">
              <Clock size={28} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Rezultate în 45 de minute</h3>
            <p className="text-zinc-500 leading-relaxed">Nu ai timp de pierdut cu gutiere purtate săptămâni întregi. Intri în clinică și ieși în mai puțin de o oră cu un zâmbet complet transformat.</p>
          </div>
          <div>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#84c97c] mb-6 shadow-sm border border-zinc-100">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">100% Sigur pentru Smalț</h3>
            <p className="text-zinc-500 leading-relaxed">Spre deosebire de produsele din comerț care pot fi abrazive, tratamentul în cabinet este monitorizat medical. Gingia este protejată cu o barieră specială, iar smalțul rămâne intact.</p>
          </div>
        </div>
      </div>

      {/* 3. OPȚIUNI DE ALBIRE */}
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-light text-zinc-900 mb-12 text-center">Cum vrei să îți albești dinții?</h2>
        
        <div className="space-y-6">
          {[
            { tag: 'Recomandat', title: 'Albirea Profesională în Cabinet (Laser/Lampă LED)', desc: 'Cea mai rapidă și eficientă metodă. Medicul izolează gingiile și aplică un gel cu peroxid de hidrogen, care este activat de o lampă specială timp de 3-4 sesiuni a câte 15 minute.' },
            { tag: 'Confort', title: 'Albirea pentru Acasă (Gutiere personalizate)', desc: 'La clinică îți luăm amprenta și îți confecționăm gutiere perfect mulate pe dinții tăi. Primești gelul de albire (concentrație mai mică) și le porți acasă, pe timpul nopții, timp de 7-14 zile.' },
            { tag: 'Menținere', title: 'Albirea Internă (pentru un singur dinte)', desc: 'Dacă ai un dinte care s-a înnegrit în urma unui tratament de canal vechi, introducem substanța de albire direct în interiorul dintelui, aducându-l la aceeași nuanță cu restul.' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-start bg-white p-6 md:p-8 rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-zinc-50 border-b border-l border-zinc-100 px-4 py-2 rounded-bl-2xl text-xs font-bold text-zinc-400 uppercase tracking-widest">{item.tag}</div>
              <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-300 mb-4 sm:mb-0 sm:mr-6 group-hover:text-[#a8e4a0] transition-colors shrink-0">
                <Sparkles size={24} />
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
            <h5 className="font-bold text-zinc-900 flex items-center mb-2"><CheckCircle2 size={18} className="text-[#84c97c] mr-2"/> Doare tratamentul de albire?</h5>
            <p className="text-zinc-600 text-sm leading-relaxed">Nu doare, dar poate apărea o sensibilitate dentară tranzitorie (la cald și rece) care durează 24-48 de ore. La finalul ședinței aplicăm un gel desensibilizant pentru a minimiza complet acest disconfort.</p>
          </div>
          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
            <h5 className="font-bold text-zinc-900 flex items-center mb-2"><Coffee size={18} className="text-[#84c97c] mr-2"/> Cât timp se menține rezultatul?</h5>
            <p className="text-zinc-600 text-sm leading-relaxed">Efectul durează între 1 și 3 ani. Longevitatea depinde masiv de stilul tău de viață. Consumul frecvent de cafea neagră, vin roșu, ceai negru sau fumatul vor îngălbeni dinții mai repede.</p>
          </div>
          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
            <h5 className="font-bold text-zinc-900 flex items-center mb-2"><ShieldCheck size={18} className="text-[#84c97c] mr-2"/> Se albesc și plombele sau coroanele?</h5>
            <p className="text-zinc-600 text-sm leading-relaxed">Nu. Materialele compozite (plombele) și ceramica/zirconiul din care sunt făcute coroanele NU se pot albi. Dacă ai plombe vizibile pe dinții din față, acestea vor trebui schimbate după albire pentru a se potrivi cu noua nuanță.</p>
          </div>
        </div>
      </div>

      {/* 5. CTA Final */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-[#a8e4a0]/20 border border-[#a8e4a0]/40 rounded-[3rem] p-12 relative overflow-hidden">
          <h2 className="text-3xl font-light text-zinc-900 mb-4">Ești gata să zâmbești cu încredere?</h2>
          <p className="text-zinc-700 mb-8 max-w-lg mx-auto">
            Programează-te pentru o igienizare prealabilă și o ședință de albire profesională. Transformarea este imediată!
          </p>
          <button 
            onClick={() => setBookingModalOpen(true)}
            className="bg-zinc-900 text-white px-8 py-4 rounded-2xl font-medium hover:bg-zinc-800 transition-all inline-flex items-center space-x-3 shadow-lg"
          >
            <span>Programează albirea dentară</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

    </div>
  );
};

export default AlbireDentara;