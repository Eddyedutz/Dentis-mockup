import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Zap, Shield, Clock, CheckCircle2, HeartPulse, Activity } from 'lucide-react';

const TerapieLaser = ({ setBookingModalOpen }) => {
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
              <Zap size={16} />
              <span>Tehnologie Avansată</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-zinc-900 mb-6 leading-tight">
              Terapie Laser <br/><span className="font-medium italic">Minim Invazivă</span>
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed mb-8">
              Stomatologia fără zgomot, vibrații sau durere. Folosim laserul dentar de ultimă generație pentru tratamente extrem de precise, care accelerează vindecarea și reduc necesitatea anesteziei.
            </p>
            <button 
              onClick={() => setBookingModalOpen(true)}
              className="bg-[#a8e4a0] text-zinc-900 px-8 py-4 rounded-2xl font-bold hover:bg-[#96d18f] transition-all inline-flex items-center space-x-3 shadow-md"
            >
              <span>Află cum te poate ajuta laserul</span>
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="relative h-[250px] md:h-[400px] mt-8 lg:mt-0 rounded-[3rem] overflow-hidden shadow-2xl border border-zinc-100">
            <img 
              src="https://www.dentiscenter.ro/wp-content/uploads/2023/06/laser-dioda-teodent-botosani_1200x.jpg?auto=format&fit=crop&q=80&w=800" 
              alt="Aparat laser stomatologic" 
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
              <HeartPulse size={28} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Fără freză. Fără vibrații.</h3>
            <p className="text-zinc-500 leading-relaxed">Laserul înlocuiește freza clasică în multe proceduri. Elimină zgomotul deranjant și senzația de presiune, reducând masiv stresul și anxietatea pacienților (ideal pentru copii).</p>
          </div>
          <div>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#84c97c] mb-6 shadow-sm border border-zinc-100">
              <Activity size={28} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Vindecare Accelerată</h3>
            <p className="text-zinc-500 leading-relaxed">În intervențiile pe gingie, laserul taie și coagulează vasele de sânge simultan. Asta înseamnă că nu există sângerare, nu e nevoie de fire de sutură, iar recuperarea este instantanee.</p>
          </div>
          <div>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#84c97c] mb-6 shadow-sm border border-zinc-100">
              <Shield size={28} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Sterilizare Absolută</h3>
            <p className="text-zinc-500 leading-relaxed">Fasciculul laser are o putere bactericidă uriașă. Distruge 99.9% din bacterii, fiind arma supremă în tratamentul infecțiilor de canal sau al bolii parodontale.</p>
          </div>
        </div>
      </div>

      {/* APLICAȚIILE LASERULUI */}
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-light text-zinc-900 mb-12 text-center">Unde folosim Laserul Dentar?</h2>
        
        <div className="space-y-6">
          {[
            { title: 'Tratamentul Parodontozei', desc: 'Curățăm pungile parodontale profund și complet nedureros. Laserul elimină bacteriile și țesutul infectat de sub gingie, oprind retracția gingivală și mobilitatea dinților fără operație.' },
            { title: 'Chirurgie Fără Bisturiu', desc: 'Excizii, gingivectomii sau tăierea frenului bucal se fac în câteva secunde. Fără tăieturi sângeroase, fără umflături ulterioare și, de cele mai multe ori, fără anestezie injectabilă.' },
            { title: 'Sterilizarea Canalelor (Endodonție)', desc: 'După curățarea dintelui infectat, introducem fibra laser în rădăcină pentru a vaporiza orice urmă de bacterie înainte de a pune plomba, garantând succesul tratamentului.' },
            { title: 'Desensibilizare Dentară', desc: 'Ai dinți sensibili la rece sau dulce? Câteva secunde de aplicare a laserului "sigilează" terminațiile nervoase expuse, oferind o ușurare imediată.' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-start bg-white p-6 md:p-8 rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
              <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-300 mb-4 sm:mb-0 sm:mr-6 group-hover:text-[#a8e4a0] transition-colors shrink-0">
                <Zap size={24} />
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
            <h5 className="font-bold text-zinc-900 flex items-center mb-2"><CheckCircle2 size={18} className="text-[#84c97c] mr-2"/> Terapia cu laser doare?</h5>
            <p className="text-zinc-600 text-sm leading-relaxed">În 90% din cazuri, tratamentele cu laser sunt complet nedureroase și se realizează fără nicio anestezie. Simți doar o ușoară senzație de cald sau mici "pișcături" total tolerabile.</p>
          </div>
          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
            <h5 className="font-bold text-zinc-900 flex items-center mb-2"><Activity size={18} className="text-[#84c97c] mr-2"/> Există efecte secundare (radiații)?</h5>
            <p className="text-zinc-600 text-sm leading-relaxed">Nu. Laserul stomatologic emite o lumină concentrată non-ionizantă. Este 100% sigur, nu iradiază absolut deloc și este recomandat inclusiv copiilor sau femeilor însărcinate.</p>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-[#a8e4a0]/20 border border-[#a8e4a0]/40 rounded-[3rem] p-12 relative overflow-hidden">
          <h2 className="text-3xl font-light text-zinc-900 mb-4">Descoperă stomatologia modernă</h2>
          <p className="text-zinc-700 mb-8 max-w-lg mx-auto">
            Uită de frica de dentist. Tratamentele laser sunt rapide, precise și confortabile. 
          </p>
          <button 
            onClick={() => setBookingModalOpen(true)}
            className="bg-zinc-900 text-white px-8 py-4 rounded-2xl font-medium hover:bg-zinc-800 transition-all inline-flex items-center space-x-3 shadow-lg"
          >
            <span>Programează o vizită</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

    </div>
  );
};

export default TerapieLaser;