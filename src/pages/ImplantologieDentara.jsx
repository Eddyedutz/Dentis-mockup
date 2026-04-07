import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Syringe, ShieldCheck, Clock, CheckCircle2, HeartPulse, Smile, Activity } from 'lucide-react';

const ImplantologieDentara = ({ setBookingModalOpen }) => {
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
              <Syringe size={16} />
              <span>Zâmbet Definitiv</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-zinc-900 mb-6 leading-tight">
              Implantologie <br/><span className="font-medium italic">Dentară Premium</span>
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed mb-8">
              Cea mai sigură, durabilă și estetică metodă de a înlocui dinții lipsă. Redobândește-ți funcția de masticație și încrederea de a zâmbi, folosind implanturi din titan pur cu o rată de succes de peste 98%.
            </p>
            <button 
              onClick={() => setBookingModalOpen(true)}
              className="bg-[#a8e4a0] text-zinc-900 px-8 py-4 rounded-2xl font-bold hover:bg-[#96d18f] transition-all inline-flex items-center space-x-3 shadow-md"
            >
              <span>Vreau o evaluare gratuită</span>
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl border border-zinc-100 hidden lg:block">
            <img 
              src="https://www.dentiscenter.ro/wp-content/uploads/2023/05/pexels-cottonbro-studio-6502306-scaled.jpg" 
              alt="Implant dentar tehnologie" 
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
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Investiție pe Viață</h3>
            <p className="text-zinc-500 leading-relaxed">Implantul dentar funcționează exact ca o rădăcină naturală. Menținut printr-o igienă corectă, acesta te va servi impecabil pentru tot restul vieții, prevenind topirea osului maxilar.</p>
          </div>
          <div>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#84c97c] mb-6 shadow-sm border border-zinc-100">
              <Smile size={28} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Aspect 100% Natural</h3>
            <p className="text-zinc-500 leading-relaxed">Coroana fixată deasupra implantului (de obicei din Zirconiu sau Ceramică) este sculptată pentru a imita la perfecție transparența și culoarea dinților tăi naturali.</p>
          </div>
          <div>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#84c97c] mb-6 shadow-sm border border-zinc-100">
              <HeartPulse size={28} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Protejează Dinții Vecini</h3>
            <p className="text-zinc-500 leading-relaxed">Spre deosebire de punțile dentare clasice, care necesită "pilirea" dinților sănătoși de lângă gol, implantul se inserează independent, protejând integritatea dinților tăi.</p>
          </div>
        </div>
      </div>

      {/* 3. PAȘII PROCEDURII */}
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-light text-zinc-900 mb-12 text-center">Etapele tratamentului prin implant</h2>
        
        <div className="space-y-6">
          {[
            { step: '01', title: 'Consultația & Tomografia (CBCT)', desc: 'Totul începe cu o analiză 3D a osului tău pentru a planifica intervenția cu precizie milimetrică și a alege dimensiunea ideală a implantului.' },
            { step: '02', title: 'Inserarea Implantului', desc: 'O intervenție chirurgicală minoră, sub anestezie locală (complet fără durere), care durează aproximativ 30-40 de minute pentru un implant. În aceeași ședință, dacă e necesar, se poate realiza și adiția de os.' },
            { step: '03', title: 'Perioada de vindecare (Osteointegrarea)', desc: 'Urmează o pauză de 3 până la 6 luni, timp în care implantul din titan se sudează biologic de osul maxilar, devenind la fel de puternic ca o rădăcină naturală.' },
            { step: '04', title: 'Atașarea Coroanei Definitive', desc: 'După vindecare, medicul protetician fixează coroana din porțelan sau zirconiu. Acum ai un dinte nou cu care poți mânca și zâmbi fără rețineri!' }
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
            <h5 className="font-bold text-zinc-900 flex items-center mb-2"><Activity size={18} className="text-[#84c97c] mr-2"/> Respinge organismul implantul?</h5>
            <p className="text-zinc-600 text-sm leading-relaxed">Mitul "respingerii" este nefondat în stomatologia modernă. Implanturile sunt realizate din Titan biocompatibil. Atât timp cât intervenția este corectă și pacientul nu suferă de boli imune necontrolate (ex. diabet sever decompensat), rata de succes este de 98-99%.</p>
          </div>
          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
            <h5 className="font-bold text-zinc-900 flex items-center mb-2"><Clock size={18} className="text-[#84c97c] mr-2"/> Stau fără dinți în perioada de vindecare?</h5>
            <p className="text-zinc-600 text-sm leading-relaxed">Niciodată. Îți vom confecționa o lucrare provizorie (un dinte temporar estetic) pe care să o porți pe durata celor 3-6 luni de osteointegrare, ca să îți poți continua viața socială în mod normal.</p>
          </div>
          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
            <h5 className="font-bold text-zinc-900 flex items-center mb-2"><CheckCircle2 size={18} className="text-[#84c97c] mr-2"/> Sunt un candidat bun dacă am pierdut dintele de mult timp?</h5>
            <p className="text-zinc-600 text-sm leading-relaxed">Da. Dacă dintele a fost pierdut demult, este posibil ca osul să se fi retras. În acest caz, realizăm o procedură de "adiție de os" în aceeași ședință, regenerând suportul necesar pentru implant.</p>
          </div>
        </div>
      </div>

      {/* 5. CTA Final */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-[#a8e4a0]/20 border border-[#a8e4a0]/40 rounded-[3rem] p-12 relative overflow-hidden">
          <h2 className="text-3xl font-light text-zinc-900 mb-4">Pregătit să îți recapeți zâmbetul?</h2>
          <p className="text-zinc-700 mb-8 max-w-lg mx-auto">
            Fie că îți lipsește un singur dinte sau ai nevoie de o reabilitare completă, tehnologia ne permite să îți oferim dinți ficși și siguri.
          </p>
          <button 
            onClick={() => setBookingModalOpen(true)}
            className="bg-zinc-900 text-white px-8 py-4 rounded-2xl font-medium hover:bg-zinc-800 transition-all inline-flex items-center space-x-3 shadow-lg"
          >
            <span>Programează un plan de tratament</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

    </div>
  );
};

export default ImplantologieDentara;