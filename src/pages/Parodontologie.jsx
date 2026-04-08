import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Plus, Droplet, ShieldAlert, Activity, CheckCircle2, ShieldCheck } from 'lucide-react';

const Parodontologie = ({ setBookingModalOpen }) => {
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
              <Plus size={16} />
              <span>Sănătate Gingivală</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-zinc-900 mb-6 leading-tight">
              Parodontologie <br/><span className="font-medium italic">și prevenție</span>
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed mb-8">
              Sângerarea la periaj nu este normală. Oprește evoluția bolii parodontale (parodontozei) și salvează-ți dinții naturali prin tratamente moderne de curățare profundă și decontaminare laser.
            </p>
            <button 
              onClick={() => setBookingModalOpen(true)}
              className="bg-[#a8e4a0] text-zinc-900 px-8 py-4 rounded-2xl font-bold hover:bg-[#96d18f] transition-all inline-flex items-center space-x-3 shadow-md"
            >
              <span>Programează o evaluare</span>
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="relative h-[250px] md:h-[400px] mt-8 lg:mt-0 rounded-[3rem] overflow-hidden shadow-2xl border border-zinc-100">
            <img 
              src="https://www.dentiscenter.ro/wp-content/uploads/2023/06/parodontologie-1.jpg?auto=format&fit=crop&q=80&w=800" 
              alt="Consult stomatologic gingii" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* SEMNE DE ALARMĂ */}
      <div className="bg-zinc-50 border-y border-zinc-100 py-24 mb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-light text-zinc-900 mb-4">Când trebuie să te prezinți la medic?</h2>
             <p className="text-zinc-500">Boala parodontală evoluează silențios. Acestea sunt primele semne că gingiile tale au nevoie de ajutor:</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#e4a0a0] mb-6 shadow-sm border border-zinc-100">
                <Droplet size={28} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Sângerare Gingivală</h3>
              <p className="text-zinc-500 leading-relaxed">Gingiile roșii, umflate, care sângerează ușor atunci când te speli pe dinți sau muști dintr-un măr sunt primul semn clar al gingivitei.</p>
            </div>
            <div>
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#e4a0a0] mb-6 shadow-sm border border-zinc-100">
                <ShieldAlert size={28} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Retracție (Dinți mai "lungi")</h3>
              <p className="text-zinc-500 leading-relaxed">Dacă observi că dinții tăi par mai lungi decât înainte sau dacă gingia s-a retras expunând rădăcina, osul a început deja să se resoarbă.</p>
            </div>
            <div>
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#e4a0a0] mb-6 shadow-sm border border-zinc-100">
                <Activity size={28} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Mobilitate și Respirație urât mirositoare</h3>
              <p className="text-zinc-500 leading-relaxed">În stadiile avansate, acumularea de bacterii sub gingie provoacă un miros persistent neplăcut (halenă), iar dinții încep să se miște.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CUM TRATĂM */}
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-light text-zinc-900 mb-12 text-center">Cum oprim boala parodontală?</h2>
        
        <div className="space-y-6">
          {[
            { step: '01', title: 'Curățarea Subgingivală (Chiuretaj)', desc: 'Sub anestezie locală (complet fără durere), medicul curăță placa bacteriană și tartrul pietrificat ascuns adânc sub gingie, direct de pe rădăcina dintelui.' },
            { step: '02', title: 'Decontaminarea Laser', desc: 'Folosim laserul stomatologic pentru a pătrunde în pungile parodontale. Laserul distruge bacteriile, sterilizează țesutul și stimulează reatașarea gingiei de dinte.' },
            { step: '03', title: 'Tratament Regenerativ', desc: 'Dacă osul a fost distrus semnificativ, putem folosi materiale de adiție osoasă și membrane speciale pentru a regenera suportul pierdut al dintelui.' },
            { step: '04', title: 'Mentenanța Parodontală', desc: 'Succesul tratamentului depinde de vizitele periodice (la 4-6 luni) pentru igienizare profesională și monitorizare, prevenind o nouă recidivă.' }
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
            <h5 className="font-bold text-zinc-900 flex items-center mb-2"><CheckCircle2 size={18} className="text-[#84c97c] mr-2"/> Se poate vindeca "parodontoza"?</h5>
            <p className="text-zinc-600 text-sm leading-relaxed">Deși osul pierdut nu se reface de la sine, boala poate fi <strong>oprită complet din evoluție</strong>. Cu un tratament corect și igienă riguroasă acasă, îți vei păstra dinții pe arcadă toată viața, fără să se mai miște.</p>
          </div>
          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
            <h5 className="font-bold text-zinc-900 flex items-center mb-2"><ShieldCheck size={18} className="text-[#84c97c] mr-2"/> Tratamentele naturiste (pastele speciale) ajută?</h5>
            <p className="text-zinc-600 text-sm leading-relaxed">Pastele de dinți speciale sau apele de gură pot masca temporar simptomele (reduc sângerarea), dar <strong>nu elimină cauza</strong> (tartrul subgingival). Singurul tratament real este curățarea profesională realizată de medic.</p>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-[#a8e4a0]/20 border border-[#a8e4a0]/40 rounded-[3rem] p-12 relative overflow-hidden">
          <h2 className="text-3xl font-light text-zinc-900 mb-4">Nu ignora sângerarea gingivală</h2>
          <p className="text-zinc-700 mb-8 max-w-lg mx-auto">
            Tratată la timp, inflamația gingivală (gingivita) este 100% reversibilă. Oprește boala înainte să atace osul.
          </p>
          <button 
            onClick={() => setBookingModalOpen(true)}
            className="bg-zinc-900 text-white px-8 py-4 rounded-2xl font-medium hover:bg-zinc-800 transition-all inline-flex items-center space-x-3 shadow-lg"
          >
            <span>Programează un consult</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

    </div>
  );
};

export default Parodontologie;