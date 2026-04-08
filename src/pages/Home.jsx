import React, { useState, useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';

import { 
  Phone, Clock, ChevronRight, ChevronLeft, Star, 
  Syringe, Sparkles, Smile, Baby, CheckCircle2, ArrowRight, Zap, Activity, FlipVertical2 
} from 'lucide-react';

const Home = ({ setBookingModalOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Referințele pentru cele 3 caruseluri
  const servicesRef = useRef(null);
  const teamRef = useRef(null);
  const reviewsRef = useRef(null);

  // Verifică dacă clinica este deschisă
  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay(); 
      const hour = now.getHours();
      const minutes = now.getMinutes();
      const time = hour + minutes / 60;
      
      // Program Luni-Sâmbătă (1-6), 09:00 - 17:00
      if (day >= 1 && day <= 6 && time >= 9 && time < 17) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    checkStatus();
    const timer = setInterval(checkStatus, 60000);
    return () => clearInterval(timer);
  }, []);

  // Funcția pentru săgețile de navigare desktop
  const scrollCarousel = (ref, direction) => {
    if (ref && ref.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      
      {/* --- HERO SECTION --- */}
      <section className="w-full bg-white pb-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 mt-10">
            <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border ${isOpen ? 'bg-[#a8e4a0]/10 border-[#a8e4a0]/30 text-zinc-800' : 'bg-zinc-100 border-zinc-200 text-zinc-600'}`}>
              <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-[#a8e4a0] animate-pulse' : 'bg-zinc-400'}`}></span>
              <span>{isOpen ? 'Deschis acum • Primim pacienți noi' : 'Închis momentan • Vă așteptăm mâine'}</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-light tracking-tight text-zinc-900 leading-[1.1] mb-6">
              Zâmbetul tău merită <br />
              <span className="relative whitespace-nowrap font-medium">
                excelență.
                <span className="absolute bottom-2 left-0 w-full h-4 bg-[#a8e4a0]/30 -z-10 rounded-full"></span>
              </span>
            </h1>
            <p className="text-lg text-zinc-500 mb-10 max-w-lg leading-relaxed">
              O experiență stomatologică redefinită. Confort absolut, tehnologie de top și o echipă dedicată sănătății tale, într-un mediu clinic imaculat.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Acest buton deschide modalul global din App.jsx */}
              <button 
                onClick={() => setBookingModalOpen(true)}
                className="bg-[#a8e4a0] text-zinc-900 px-8 py-4 rounded-full font-medium hover:bg-[#96d18f] transition-colors flex items-center justify-center space-x-2 shadow-sm"
              >
                <span>Programează o vizită</span>
                <ArrowRight size={18} />
              </button>
              
              <a 
                href="tel:+40752103861"
                target="_top"
                className="bg-zinc-50 border border-zinc-200 text-zinc-900 px-8 py-4 rounded-full font-medium hover:bg-zinc-100 transition-colors flex items-center justify-center space-x-2"
              >
                <Phone size={18} />
                <span>0752 103 861</span>
              </a>
            </div>
          </div>
          
          <div className="relative z-10 lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl mt-10 lg:mt-0 border border-zinc-100">
             <img 
               src="https://www.dentiscenter.ro/wp-content/uploads/2023/05/2021-11-20-1024x576.jpg" 
               alt="Interior clinică modernă" 
               className="object-cover w-full h-full"
			   loading="lazy"
             />
             <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur p-4 rounded-2xl shadow-lg flex items-center space-x-4 border border-zinc-100">
                <div className="flex -space-x-2">
                  {[11,12,13].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i}`} alt="Patient" className="w-10 h-10 rounded-full border-2 border-white" />
                  ))}
                </div>
                <div>
                  <div className="flex text-[#a8e4a0] text-sm">
                    <Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" />
                  </div>
                  <p className="text-xs font-medium text-zinc-900 mt-1">5.0 din recenziile Google</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- SERVICII SECTION --- */}
      <section className="py-24 bg-zinc-50 relative border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-3">Expertiza noastră</h2>
              <h3 className="text-3xl md:text-4xl font-light text-zinc-900 mb-2">Tratamente personalizate</h3>
            </div>
            <div className="hidden md:flex space-x-3">
              <button onClick={() => scrollCarousel(servicesRef, 'left')} className="p-3 rounded-full border border-zinc-200 bg-white text-zinc-600 hover:border-[#a8e4a0] hover:text-zinc-900 transition-colors">
                <ChevronLeft size={24} />
              </button>
              <button onClick={() => scrollCarousel(servicesRef, 'right')} className="p-3 rounded-full border border-zinc-200 bg-white text-zinc-600 hover:border-[#a8e4a0] hover:text-zinc-900 transition-colors">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div 
            ref={servicesRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          >
            {[
              // Am adăugat "path" pentru a ști spre ce pagină să trimită fiecare card
              { icon: Syringe, title: 'Implantologie', path: 'implantologie-dentara', desc: 'Înlocuirea dinților lipsă folosind tehnici minim invazive și materiale premium.' },
              { icon: Sparkles, title: 'Estetică Dentară', path: 'albire-dentara', desc: 'Fațete dentare, albire profesională și designul zâmbetului adaptat ție.' },
              { icon: Zap, title: 'Terapie Laser', path: 'terapia-laser', desc: 'Tratamente precise, nedureroase și cu recuperare rapidă.' },
              { icon: Activity, title: 'Chirurgie Orală', path: 'chirurgie-dentara', desc: 'Extracții de molari de minte, rezecții apicale și proceduri chirurgicale.' },
              { icon: FlipVertical2 , title: 'Ortodonție', path: 'ortodontie', desc: 'Aparate dentare invizibile (Invisalign) și clasice pentru aliniere.' },
              { icon: Baby, title: 'Pedodonție', path: 'pedodontie', desc: 'Tratamente fără durere într-un mediu prietenos pentru cei mici.' }
            ].map((service, idx) => (
              
              // Am schimbat <div> în <Link> și i-am dat adresa corectă
              <Link 
                key={idx} 
                to={`/tratamente/${service.path}`}
                className="snap-start w-[75vw] sm:w-[280px] lg:w-[320px] shrink-0 bg-white p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-md hover:border-[#a8e4a0] transition-all group cursor-pointer border border-zinc-100 flex flex-col h-full block"
              >
                <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-800 mb-6 group-hover:bg-[#a8e4a0] transition-colors border border-zinc-100 group-hover:border-transparent">
                  <service.icon size={28} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-medium text-zinc-900 mb-3">{service.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>
                <div className="flex items-center text-zinc-900 font-medium text-sm group-hover:text-[#84c97c] mt-auto">
                  <span>Află mai multe</span> 
                  <ChevronRight size={16} className="ml-1 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>

            ))}
          </div>
        </div>
      </section>

      {/* --- BEFORE & AFTER SECTION --- */}
      <section className="py-24 bg-white overflow-hidden border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-3">Rezultate Reale</h2>
            <h3 className="text-3xl md:text-5xl font-light text-zinc-900 mb-6">Arta estetică a zâmbetului</h3>
            <p className="text-zinc-500 text-lg mb-8 leading-relaxed">
              O imagine face cât o mie de cuvinte. Descoperă diferența obținută prin tratamente de estetică dentară care redau strălucirea și naturalețea zâmbetului.
            </p>
            <ul className="space-y-4 mb-10">
              {['Albire Laser Avansată', 'Fațete ceramice ultra-subțiri', 'Regândirea arhitecturii zâmbetului'].map((item, idx) => (
                <li key={idx} className="flex items-center text-zinc-600">
                  <CheckCircle2 size={20} className="text-[#a8e4a0] mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden group shadow-lg border border-zinc-100">
            <BeforeAfterSlider baseImage="https://i.pinimg.com/originals/d8/a3/73/d8a373e3459364de3d064369069f8117.jpg" />
          </div>
        </div>
      </section>

      {/* --- DESPRE NOI SECTION --- */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-3">Povestea Noastră</h2>
            <h3 className="text-3xl md:text-4xl font-light text-zinc-900 mb-6">Pasiune pentru zâmbete sănătoase și estetică perfectă.</h3>
            <p className="text-zinc-500 text-lg mb-6 leading-relaxed">
              Am fondat Dentis Center din dorința de a schimba percepția asupra vizitei la stomatolog. Am creat un spațiu curat, în care frica și anxietatea sunt înlocuite de confort, încredere și igienă impecabilă.
            </p>
            <p className="text-zinc-500 text-lg leading-relaxed">
              Echipa noastră folosește abordări minim invazive, garantând tratamente sigure și de lungă durată. Fiecare pacient este unic, iar planurile noastre de tratament reflectă această viziune.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-square md:aspect-[4/3] border border-zinc-200 p-2 bg-white">
            <img 
			src="https://www.dentiscenter.ro/wp-content/uploads/2023/06/2022-03-23.jpg" 
			alt="Echipă clinică" 
			className="w-full h-full object-cover rounded-2xl"
			loading="lazy"
			/>
          </div>
        </div>
      </section>

      {/* --- ECHIPA SECTION --- */}
      <section className="py-24 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-3">Echipa Noastră</h2>
              <h3 className="text-3xl md:text-4xl font-light text-zinc-900">Specialiști dedicați</h3>
            </div>
            <div className="hidden md:flex space-x-3">
              <button onClick={() => scrollCarousel(teamRef, 'left')} className="p-3 rounded-full border border-zinc-200 bg-white text-zinc-600 hover:border-[#a8e4a0] hover:text-zinc-900 transition-colors">
                <ChevronLeft size={24} />
              </button>
              <button onClick={() => scrollCarousel(teamRef, 'right')} className="p-3 rounded-full border border-zinc-200 bg-white text-zinc-600 hover:border-[#a8e4a0] hover:text-zinc-900 transition-colors">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div 
            ref={teamRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          >
            {[
              { name: 'Dr. Andreea Mureșan', role: 'Medic Primar Implantologie', img: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Andreea&backgroundColor=f4f4f5&clothing=blazerAndShirt' },
              { name: 'Dr. Elena Popescu', role: 'Specialist Estetică Dentară', img: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Elena&backgroundColor=f4f4f5&clothing=blazerAndShirt' },
              { name: 'Dr. Maria Stan', role: 'Medic Specialist Ortodonție', img: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Maria&backgroundColor=f4f4f5&clothing=blazerAndShirt' },
              { name: 'Dr. Ionuț Radu', role: 'Medic Specialist Chirurgie', img: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Ionut&backgroundColor=f4f4f5&clothing=blazerAndShirt' }
            ].map((doc, idx) => (
              <div key={idx} className="snap-start w-[75vw] sm:w-[250px] md:w-[300px] shrink-0 group flex flex-col items-center text-center bg-zinc-50 p-8 rounded-3xl border border-zinc-100 hover:shadow-md transition-all cursor-pointer">
                <div className="relative overflow-hidden rounded-full mb-6 w-40 h-40 md:w-48 md:h-48 bg-white border-4 border-zinc-200 shadow-sm">
                  <img src={doc.img} 
				  alt={doc.name} 
				  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
				  loading="lazy"
				  />
                </div>
                <h4 className="text-xl font-medium text-zinc-900">{doc.name}</h4>
                <p className="text-zinc-500 font-medium text-sm mt-1">{doc.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- RECENZII SECTION --- */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-3">Părerea Pacienților</h2>
              <h3 className="text-3xl md:text-4xl font-light text-zinc-900 mb-6">Ce spun pacienții noștri</h3>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex text-[#a8e4a0]">
                  <Star fill="currentColor" size={24} />
                  <Star fill="currentColor" size={24} />
                  <Star fill="currentColor" size={24} />
                  <Star fill="currentColor" size={24} />
                  <Star fill="currentColor" size={24} />
                </div>
                <span className="text-2xl font-medium text-zinc-900">5 stele din 5</span>
                <span className="text-zinc-500">din 155 recenzii</span>
              </div>
            </div>
            
            <div className="flex space-x-3 w-full md:w-auto justify-between md:justify-end items-center">
               <a 
                href="https://maps.app.goo.gl/QVTipzzMLNWCAq5y6" 
                target="_blank" 
                rel="noreferrer"
                className="group hidden md:flex items-center space-x-2 bg-white border border-zinc-200 text-zinc-900 px-6 py-3 rounded-full font-medium hover:border-[#a8e4a0] transition-all duration-300 mr-4"
               >
                 <span>Vezi pe Google</span>
                 <ArrowRight size={18} className="group-hover:translate-x-1 text-[#a8e4a0] transition-transform" />
               </a>
               <div className="hidden md:flex space-x-3">
                 <button onClick={() => scrollCarousel(reviewsRef, 'left')} className="p-3 rounded-full border border-zinc-200 bg-white text-zinc-600 hover:border-[#a8e4a0] hover:text-zinc-900 transition-colors">
                   <ChevronLeft size={24} />
                 </button>
                 <button onClick={() => scrollCarousel(reviewsRef, 'right')} className="p-3 rounded-full border border-zinc-200 bg-white text-zinc-600 hover:border-[#a8e4a0] hover:text-zinc-900 transition-colors">
                   <ChevronRight size={24} />
                 </button>
               </div>
            </div>
          </div>

          <div 
            ref={reviewsRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          >
            {[
              { name: "Alexandra L.", text: "Recomand cu toată încrederea serviciile Dentis: profesionalism, servicii de foarte bună calitate, echipamente de ultima generație, personal foarte amabil. Cu siguranță voi reveni pe viitor!" },
              { name: "Mariana C.", text: "Un medic excepțional, cu foarte multă răbdare, cu multe explicații privind procedurile aplicate și datorită căruia am scăpat de 'frică' de dentist. Recomand cu încredere!" },
              { name: "Claudiu B.", text: "Doamna Dr. Amariei Ștefania este un adevărat profesionist în ceea ce face !!! Deci efectiv nu am simțit nimic nimic nimic!!! Prețurile sunt ok și merită!! Acum pot mânca de toate că un castor!!😂😂😂" },
			  { name: "Eddy M.", text: "Un cabinet stomatologic cu o atmosferă plăcută și cu resurse potrivite pentru toate problemele dentare. Veți pleca întotdeauna de acolo cu un zâmbet mai larg și încrezător 😁" }
            ].map((review, idx) => (
              <div key={idx} className="snap-start w-[75vw] sm:w-[320px] md:w-[380px] shrink-0 bg-white p-8 rounded-3xl border border-zinc-200 hover:shadow-md transition-all duration-300 flex flex-col h-full cursor-grab active:cursor-grabbing">
                <div className="flex text-[#a8e4a0] mb-6">
                  {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" className="mr-1" />)}
                </div>
                <p className="text-zinc-600 leading-relaxed mb-8 flex-grow">"{review.text}"</p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-zinc-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-900 font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <span className="font-medium text-zinc-900">{review.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <a 
            href="https://maps.app.goo.gl/QVTipzzMLNWCAq5y6" 
            target="_blank" 
            rel="noreferrer"
            className="md:hidden flex items-center justify-center w-full mt-4 space-x-2 bg-white border border-zinc-200 text-zinc-900 px-6 py-4 rounded-xl font-medium hover:bg-zinc-50 transition-all"
          >
            <span>Vezi toate recenziile pe Google</span>
            <ArrowRight size={18} className="text-[#a8e4a0]" />
          </a>
        </div>
      </section>

    </div>
  );
};

// Componenta Before/After Slider rămâne izolată și curată aici jos
const BeforeAfterSlider = ({ baseImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  
  return (
    <div className="relative w-full h-full select-none" onDragStart={(e) => e.preventDefault()}>
      <img src={baseImage} alt="After" className="absolute top-0 left-0 w-full h-full object-cover filter brightness-110 saturate-[0.9]" loading="lazy"/>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden" style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}>
        <img src={baseImage} alt="Before" className="absolute top-0 left-0 w-full h-full object-cover filter sepia-[.35] hue-rotate-[-15deg] saturate-[1.2] brightness-95" loading="lazy"/>
        <div className={`absolute top-4 left-4 bg-zinc-900/60 backdrop-blur text-white px-3 py-1 rounded text-xs font-medium tracking-wider uppercase transition-opacity duration-200 ${sliderPosition < 15 ? 'opacity-0' : 'opacity-100'}`}>
          Înainte
        </div>
      </div>
      <div className={`absolute top-4 right-4 bg-[#a8e4a0]/90 backdrop-blur text-zinc-900 px-3 py-1 rounded text-xs font-bold tracking-wider uppercase z-10 transition-opacity duration-200 ${sliderPosition > 85 ? 'opacity-0' : 'opacity-100'}`}>
        După (Igienizare)
      </div>
      <div className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center z-20 shadow-md" style={{ left: `calc(${sliderPosition}% - 2px)` }}>
        <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-zinc-100 text-zinc-600">
           <div className="flex space-x-1">
             <ChevronLeft size={16} className="-mr-1" />
             <ChevronRight size={16} className="-ml-1" />
           </div>
        </div>
      </div>
      <input 
	  aria-label="Trageți pentru a compara imaginea înainte și după tratament"
	  type="range" 
	  min="0" 
	  max="100" 
	  value={sliderPosition} onChange={(e) => setSliderPosition(e.target.value)} 
	  className="absolute top-0 left-0 w-full h-full opacity-0 cursor-ew-resize z-30" />
    </div>
  );
};

export default Home;