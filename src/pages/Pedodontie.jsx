import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Baby, Heart, Star, ShieldCheck, CheckCircle2, PartyPopper, Smile, Calendar } from 'lucide-react';

const Pedodontie = ({ setBookingModalOpen }) => {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const etapeDezvoltare = [
    {
      varsta: "0 - 1 Ani",
      titlu: "Primul Dințișor",
      descriere: "Apar de obicei incisivii centrali inferiori. Chiar dacă sunt puțini, igiena trebuie să înceapă imediat.",
      sfat: "Programează prima vizită de adaptare 'Baby Check-up' imediat ce apare primul dinte.",
      icon: "👶"
    },
    {
      varsta: "1 - 3 Ani",
      titlu: "Dentiția de Lapte",
      descriere: "Apar molarii de lapte. Este perioada în care copilul învață să mestece alimente solide.",
      sfat: "Folosește o cantitate mică de pastă de dinți (cât un bob de orez) și ajută-l la periaj.",
      icon: "🦷"
    },
    {
      varsta: "3 - 6 Ani",
      titlu: "Zâmbet Complet",
      descriere: "Toți cei 20 de dinți de lapte sunt prezenți. Se formează spațiile pentru dinții definitivi.",
      sfat: "Recomandăm sigilarea molarilor de lapte pentru a preveni cariile în zonele greu accesibile.",
      icon: "🌟"
    },
    {
      varsta: "6 - 12 Ani",
      titlu: "Dentiția Mixtă",
      descriere: "Dinții de lapte cad și sunt înlocuiți de cei permanenți. Apare 'Molarul de 6 ani'.",
      sfat: "Este momentul critic pentru primul control ortodontic pentru a ghida creșterea corectă.",
      icon: "🦷✨"
    }
  ];

  return (
    <div className="w-full bg-white pt-8 pb-24">
      
      {/* 1. HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <Link to="/tratamente" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-[#84c97c] transition-colors mb-8">
          <ArrowLeft size={16} className="mr-2" />
          Înapoi la toate tratamentele
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#a8e4a0]/20 text-[#60a855] text-sm font-bold tracking-wide uppercase mb-6">
              <Baby size={16} />
              <span>Micii Pacienți, Mari Zâmbete</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-zinc-900 mb-6 leading-tight">
              Pedodonție <br/><span className="font-medium italic">prietenoasă</span>
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed mb-8">
              Transformăm vizita la dentist într-o aventură pozitivă. Cu răbdare, jocuri și tehnici speciale de adaptare, îi învățăm pe cei mici să își iubească zâmbetul.
            </p>
            <button 
              onClick={() => setBookingModalOpen(true)}
              className="bg-[#a8e4a0] text-zinc-900 px-8 py-4 rounded-2xl font-bold hover:bg-[#96d18f] transition-all inline-flex items-center space-x-3 shadow-md"
            >
              <span>Programează prima vizită</span>
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="relative h-[250px] md:h-[400px] mt-8 lg:mt-0 rounded-[3rem] overflow-hidden shadow-2xl border border-zinc-100">
            <img 
              src="https://www.dentiscenter.ro/wp-content/uploads/2023/05/pediatric-dentist-salem-or-1024x683-1.jpg?auto=format&fit=crop&q=80&w=800" 
              alt="Copil zâmbind la dentist" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* 2. GHID INTERACTIV DE DEZVOLTARE (Secțiunea Nouă) */}
      <div className="max-w-5xl mx-auto px-6 mb-24">
        <div className="bg-zinc-900 rounded-[3rem] p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-8">
              <Calendar className="text-[#a8e4a0]" />
              <h2 className="text-2xl font-light">Ghidul Dezvoltării Dentare</h2>
            </div>

            {/* Selector Vârstă */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
              {etapeDezvoltare.map((etapa, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStage(idx)}
                  className={`py-3 px-4 rounded-2xl text-sm font-medium transition-all ${
                    activeStage === idx 
                    ? 'bg-[#a8e4a0] text-zinc-900 shadow-lg shadow-[#a8e4a0]/20' 
                    : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                  }`}
                >
                  {etapa.varsta}
                </button>
              ))}
            </div>

            {/* Afișare Etapă */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-6xl md:text-8xl flex justify-center md:justify-start">
                {etapeDezvoltare[activeStage].icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#a8e4a0]">{etapeDezvoltare[activeStage].titlu}</h3>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  {etapeDezvoltare[activeStage].descriere}
                </p>
                <div className="bg-zinc-800/50 border border-zinc-700 p-4 rounded-2xl">
                  <p className="text-sm italic text-zinc-300">
                    <span className="text-[#a8e4a0] font-bold not-italic mr-2">Sfatul medicului:</span>
                    {etapeDezvoltare[activeStage].sfat}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#a8e4a0]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        </div>
      </div>

      {/* 3. BENEFICII (Păstrate din varianta anterioară) */}
      <div className="bg-zinc-50 border-y border-zinc-100 py-24 mb-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#84c97c] mb-6 shadow-sm border border-zinc-100">
              <Heart size={28} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Răbdare și Empatie</h3>
            <p className="text-zinc-500 leading-relaxed">Fiecare copil are ritmul lui. Nu forțăm niciodată nota. Folosim tehnica "Spune-Arată-Fă" pentru a-i explica micuțului fiecare pas.</p>
          </div>
          <div>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#84c97c] mb-6 shadow-sm border border-zinc-100">
              <Star size={28} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Fără "Ace" sau Frică</h3>
            <p className="text-zinc-500 leading-relaxed">Folosim anestezice cu arome fructate și tehnici de distragere a atenției. Cei mici sunt absorbiți de povești sau desene animate.</p>
          </div>
          <div>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#84c97c] mb-6 shadow-sm border border-zinc-100">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Prevenția pe Prim Plan</h3>
            <p className="text-zinc-500 leading-relaxed">Este mult mai ușor să previi decât să tratezi. Sigilările și fluorizările noastre protejează dinții de lapte împotriva cariilor.</p>
          </div>
        </div>
      </div>

      {/* TRATAMENTE PEDIATRICE */}
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-light text-zinc-900 mb-12 text-center">Cum avem grijă de micii pacienți?</h2>
        <div className="space-y-6">
          {[
            { title: 'Consultația de Adaptare', desc: 'Prima vizită este despre explorare. Îi prezentăm micuțului "scaunul magic" și "oglinda curioasă" fără niciun tratament invaziv.' },
            { title: 'Sigilări Dentare', desc: 'O metodă rapidă de a sigila șanțurile dinților proaspăt apăruți, prevenind depunerea resturilor alimentare.' },
            { title: 'Fluorizări Profesionale', desc: 'Aplicăm un lac protector care întărește smalțul fragil al dinților de lapte.' },
            { title: 'Tratamentul Cariilor de Lapte', desc: 'Tratăm cariile folosind materiale colorate sau compozite estetice, pentru a menține dintele pe arcadă.' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-start bg-white p-6 md:p-8 rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-300 mb-4 sm:mb-0 sm:mr-6 group-hover:text-[#a8e4a0] transition-colors shrink-0">
                <PartyPopper size={24} />
              </div>
              <div className="pr-4">
                <h4 className="text-xl font-bold text-zinc-900 mb-2">{item.title}</h4>
                <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ PENTRU PĂRINȚI */}
      <div className="max-w-3xl mx-auto px-6 mb-24">
        <h2 className="text-2xl font-bold text-zinc-900 mb-8 text-center">Întrebări Frecvente pentru Părinți</h2>
        <div className="space-y-4">
          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
            <h5 className="font-bold text-zinc-900 flex items-center mb-2"><Smile size={18} className="text-[#84c97c] mr-2"/> Când ar trebui să fie prima vizită?</h5>
            <p className="text-zinc-600 text-sm leading-relaxed">Recomandăm prima vizită odată cu apariția primului dinte de lapte sau cel târziu la împlinirea vârstei de 1 an.</p>
          </div>
          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
            <h5 className="font-bold text-zinc-900 flex items-center mb-2"><CheckCircle2 size={18} className="text-[#84c97c] mr-2"/> De ce să tratăm dinții de lapte dacă oricum cad?</h5>
            <p className="text-zinc-600 text-sm leading-relaxed">Dinții de lapte mențin spațiul pentru dinții definitivi. O extracție prematură poate duce la înghesuiri severe mai târziu.</p>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-[#a8e4a0]/20 border border-[#a8e4a0]/40 rounded-[3rem] p-12 relative overflow-hidden">
          <h2 className="text-3xl font-light text-zinc-900 mb-4">Pregătește-l pentru o viață cu zâmbet frumos</h2>
          <p className="text-zinc-700 mb-8 max-w-lg mx-auto">
            Nu aștepta să apară durerea. Programează o vizită de adaptare și ajută-ți copilul să se împrietenească cu echipa noastră.
          </p>
          <button 
            onClick={() => setBookingModalOpen(true)}
            className="bg-zinc-900 text-white px-8 py-4 rounded-2xl font-medium hover:bg-zinc-800 transition-all inline-flex items-center space-x-3 shadow-lg"
          >
            <span>Fă o programare pentru cel mic</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

    </div>
  );
};

export default Pedodontie;