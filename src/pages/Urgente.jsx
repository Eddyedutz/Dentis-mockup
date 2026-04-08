import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, PhoneCall, AlertCircle, Clock, ShieldAlert, HeartPulse, ShieldPlus, Activity } from 'lucide-react';

const Urgente = ({ setBookingModalOpen }) => {
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
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-red-100 text-red-600 text-sm font-bold tracking-wide uppercase mb-6">
              <AlertCircle size={16} />
              <span>Preluare Prioritară</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-zinc-900 mb-6 leading-tight">
              Urgențe <br/><span className="font-medium italic">Stomatologice</span>
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed mb-8">
              Durerea de dinți nu ține cont de program. Dacă te confrunți cu o durere acută, o infecție sau un traumatism dentar, contactează-ne imediat. Prioritizăm cazurile urgente pentru a te scăpa de durere în cel mai scurt timp.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Buton de Apel Direct - Esențial pentru Urgențe */}
              <a 
                href="tel:+40752103861"
                className="bg-red-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-600 transition-all inline-flex items-center justify-center space-x-3 shadow-md shadow-red-500/20"
              >
                <PhoneCall size={20} />
                <span>Sună acum: 0752 103 861</span>
              </a>
              
              <button 
                onClick={() => setBookingModalOpen(true)}
                className="bg-zinc-100 text-zinc-900 px-8 py-4 rounded-2xl font-medium hover:bg-zinc-200 transition-all inline-flex items-center justify-center"
              >
                <span>Lasă un mesaj</span>
              </button>
            </div>
          </div>
          <div className="relative h-[250px] md:h-[400px] mt-8 lg:mt-0 rounded-[3rem] overflow-hidden shadow-2xl border border-zinc-100">
            <img 
              src="https://www.dentiscenter.ro/wp-content/uploads/2023/10/durere-dinti.webp?auto=format&fit=crop&q=80&w=800" 
              alt="Medic pregătind intervenția de urgență" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* 2. TIPURI DE URGENȚE */}
      <div className="bg-zinc-50 border-y border-zinc-100 py-24 mb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-light text-zinc-900 mb-4">Ce tratăm în regim de urgență?</h2>
             <p className="text-zinc-500">Dacă prezinți unul dintre următoarele simptome, ai nevoie de asistență medicală imediată.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-zinc-100">
              <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 mb-6">
                <Activity size={24} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Durere Pulsatilă Acută</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">Durerea care te trezește din somn, cedează greu la calmante și se accentuează la cald/rece indică afectarea nervului (pulpită).</p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-zinc-100">
              <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 mb-6">
                <ShieldAlert size={24} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Abces (Umflătură)</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">O pungă de puroi la baza dintelui, însoțită de umflarea feței și uneori febră. Reprezintă o infecție severă care trebuie drenată urgent.</p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-zinc-100">
              <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 mb-6">
                <HeartPulse size={24} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Traumatisme (Dinți Sparți)</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">Accidentări, lovituri sau căderi soldate cu fracturarea unui dinte sau chiar expulzarea lui completă din os.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. GHID DE PRIM AJUTOR */}
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-light text-zinc-900 mb-12 text-center">Ghid de Prim Ajutor la domiciliu</h2>
        
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-start bg-white p-6 md:p-8 rounded-[2rem] border border-zinc-100 shadow-sm">
            <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-[#84c97c] mb-4 sm:mb-0 sm:mr-6 shrink-0">
              <ShieldPlus size={24} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-zinc-900 mb-2">Dacă dintele a căzut de tot (Avulsie)</h4>
              <p className="text-zinc-500 leading-relaxed mb-3">Găsește dintele și ține-l <strong>doar de coroană</strong>, nu de rădăcină. Clătește-l ușor cu apă rece (nu îl freca!). Dacă poți, pune-l înapoi în gingie. Dacă nu, pune-l într-un recipient cu <strong>lapte rece</strong> sau ser fiziologic și vino de urgență la cabinet în primele 30-60 de minute. Există șanse mari să fie salvat!</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start bg-white p-6 md:p-8 rounded-[2rem] border border-zinc-100 shadow-sm">
            <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-[#84c97c] mb-4 sm:mb-0 sm:mr-6 shrink-0">
              <ShieldPlus size={24} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-zinc-900 mb-2">Dacă ți s-a umflat fața (Abces)</h4>
              <p className="text-zinc-500 leading-relaxed mb-3">Clătește gura cu apă călduță și sare. Aplică <strong>comprese reci</strong> pe obrazul umflat (din exterior), niciodată calde! Evită să iei antibiotice după ureche. Sună-ne pentru a primi o rețetă corectă și a programa un drenaj.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start bg-white p-6 md:p-8 rounded-[2rem] border border-zinc-100 shadow-sm">
            <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-[#84c97c] mb-4 sm:mb-0 sm:mr-6 shrink-0">
              <ShieldPlus size={24} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-zinc-900 mb-2">În caz de durere severă</h4>
              <p className="text-zinc-500 leading-relaxed mb-3">Poți lua un analgezic/antiinflamator (ex. Ibuprofen sau Paracetamol) pe care îl tolerezi în mod obișnuit. <strong>Nu pune aspirină sau alcool direct pe dinte sau pe gingie</strong>, deoarece pot provoca arsuri chimice severe!</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. CTA Final */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-red-50 border border-red-100 rounded-[3rem] p-12 relative overflow-hidden">
          <h2 className="text-3xl font-light text-zinc-900 mb-4">Suntem aici pentru a te ajuta</h2>
          <p className="text-zinc-700 mb-8 max-w-lg mx-auto">
            Nu lăsa durerea să îți strice ziua. Echipa noastră este pregătită să intervină rapid și sigur pentru a-ți reda confortul.
          </p>
          <a 
            href="tel:+40752103861"
            className="bg-zinc-900 text-white px-8 py-4 rounded-2xl font-medium hover:bg-zinc-800 transition-all inline-flex items-center space-x-3 shadow-lg"
          >
            <PhoneCall size={20} />
            <span>Apelează recepția acum</span>
          </a>
        </div>
      </div>

    </div>
  );
};

export default Urgente;