import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Phone, MapPin, Clock, MessageCircle, 
  ChevronRight, ChevronLeft, Star, Syringe, Sparkles, Smile, Baby, 
  CheckCircle2, ArrowRight, Zap, Activity
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  
  const [isOpen, setIsOpen] = useState(false);
  
  const [modalStep, setModalStep] = useState(1);
  const [formData, setFormData] = useState({
    nume: '',
    telefon: '',
    serviciu: 'Consultație generală',
    mesaj: ''
  });

  const servicesRef = useRef(null);
  const teamRef = useRef(null);
  const reviewsRef = useRef(null);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay(); 
      const hour = now.getHours();
      const minutes = now.getMinutes();
      const time = hour + minutes / 60;
      
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollCarousel = (ref, direction) => {
    if (ref && ref.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleServiceSelect = (serviceName) => {
    setFormData({ ...formData, serviciu: serviceName });
    setModalStep(2); 
  };

  const handleDynamicBooking = (e) => {
    e.preventDefault();
    const text = `Bună ziua! Mă numesc ${formData.nume} și aș dori o programare pentru: ${formData.serviciu}.\n\nDetalii/Simptome: ${formData.mesaj || 'Nu am adăugat alte detalii.'}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/40752103861?text=${encodedText}`, '_top');
    
    setBookingModalOpen(false);
    setTimeout(() => setModalStep(1), 300); 
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-[#a8e4a0] selection:text-zinc-900">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md bg-zinc-950/90 border-b border-zinc-800/50 ${isScrolled ? 'py-3' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center relative">
          <div className="w-full flex justify-center items-center">
            <div className="relative flex items-center">
              <div className="cursor-pointer flex items-center" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                <img 
                  src={`${import.meta.env.BASE_URL}logo_white.svg`} 
                  alt="Dentis Center Logo" 
                  className={`transform-gpu w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-16 md:h-20' : 'h-20 md:h-28'}`}
                />
              </div>

              <button 
                className="md:hidden absolute -right-14 p-2 rounded-xl transition-colors text-zinc-300 hover:bg-zinc-800/50"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          <div className={`hidden md:flex items-center space-x-8 transition-all duration-300 ${isScrolled ? 'mt-1' : 'mt-2'}`}>
            {['Servicii', 'Despre noi', 'Echipa', 'Recenzii', 'Tarife', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase().replace(/\s+/g, '-'))}
                className="text-sm font-medium transition-colors text-zinc-300 hover:text-[#a8e4a0]"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => setBookingModalOpen(true)}
              className="px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-xl ml-4 bg-[#a8e4a0] text-zinc-900 hover:bg-[#96d18f]"
            >
              Programare Online
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full shadow-xl py-6 px-6 flex flex-col space-y-4 md:hidden backdrop-blur-md bg-zinc-950/95 border-b border-zinc-800">
            {['Servicii', 'Despre noi', 'Echipa', 'Recenzii', 'Tarife', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase().replace(/\s+/g, '-'))}
                className="text-left text-lg font-medium py-2 border-b text-zinc-300 border-zinc-800"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => { setMobileMenuOpen(false); setBookingModalOpen(true); }}
              className="bg-[#a8e4a0] text-zinc-900 w-full py-3 rounded-xl font-medium mt-4 hover:bg-[#96d18f] transition-colors"
            >
              Programare Online
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-16 lg:pt-64 lg:pb-24 overflow-hidden bg-white">
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
               src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
               alt="Interior clinică modernă" 
               className="object-cover w-full h-full"
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

      {/* Services Section */}
      <section id="servicii" className="py-24 bg-zinc-50 relative border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold tracking-widest text-zinc-400 uppercase mb-3">Expertiza noastră</h2>
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
              { icon: Syringe, title: 'Implantologie', desc: 'Înlocuirea dinților lipsă folosind tehnici minim invazive și materiale premium din titan.' },
              { icon: Sparkles, title: 'Estetică Dentară', desc: 'Fațete dentare, albire profesională și designul zâmbetului adaptat fizionomiei tale.' },
              { icon: Zap, title: 'Terapie Laser', desc: 'Tratamente precise, nedureroase și cu recuperare rapidă folosind laser dentar avansat.' },
              { icon: Activity, title: 'Chirurgie Orală', desc: 'Extracții de molari de minte, rezecții apicale și proceduri chirurgicale realizate în siguranță.' },
              { icon: Smile, title: 'Ortodonție', desc: 'Aparate dentare invizibile (Invisalign) și clasice pentru alinierea perfectă a dinților.' },
              { icon: Baby, title: 'Pedodonție', desc: 'Tratamente fără durere într-un mediu prietenos, dedicat zâmbetelor celor mici.' }
            ].map((service, idx) => (
              <div key={idx} className="snap-start w-[75vw] sm:w-[280px] lg:w-[320px] shrink-0 bg-white p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-md transition-all group cursor-pointer border border-zinc-100 flex flex-col h-full">
                <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-800 mb-6 group-hover:bg-[#a8e4a0] transition-colors border border-zinc-100 group-hover:border-transparent">
                  <service.icon size={28} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-medium text-zinc-900 mb-3">{service.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>
                <div className="flex items-center text-zinc-900 font-medium text-sm group-hover:translate-x-2 transition-transform mt-auto">
                  Află mai multe <ChevronRight size={16} className="ml-1 text-[#a8e4a0]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Interactive Slider */}
      <section className="py-24 bg-white overflow-hidden border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-zinc-400 uppercase mb-3">Rezultate Reale</h2>
            <h3 className="text-3xl md:text-5xl font-light text-zinc-900 mb-6">Arta estetică a zâmbetului</h3>
            <p className="text-zinc-500 text-lg mb-8 leading-relaxed">
              O imagine face cât o mie de cuvinte. Descoperă diferența obținută prin tratamente de estetică dentară (albire profesională, fațete E-max), care redau strălucirea și naturalețea zâmbetului.
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

      {/* Despre Noi Section */}
      <section id="despre-noi" className="py-24 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-zinc-400 uppercase mb-3">Povestea Noastră</h2>
            <h3 className="text-3xl md:text-4xl font-light text-zinc-900 mb-6">Pasiune pentru zâmbete sănătoase și estetică perfectă.</h3>
            <p className="text-zinc-500 text-lg mb-6 leading-relaxed">
              Am fondat Dentis Center din dorința de a schimba percepția asupra vizitei la stomatolog. Am creat un spațiu curat, în care frica și anxietatea sunt înlocuite de confort, încredere și igienă impecabilă.
            </p>
            <p className="text-zinc-500 text-lg leading-relaxed">
              Echipa noastră folosește abordări minim invazive, garantând tratamente sigure și de lungă durată. Fiecare pacient este unic, iar planurile noastre de tratament reflectă această viziune, integrând cele mai noi tehnologii din domeniu.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-square md:aspect-[4/3] border border-zinc-200 p-2 bg-white">
            <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Echipă clinică" className="w-full h-full object-cover rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="echipa" className="py-24 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-zinc-400 uppercase mb-3">Echipa Noastră</h2>
              <h3 className="text-3xl md:text-4xl font-light text-zinc-900">Specialiste dedicate</h3>
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
                  <img src={doc.img} alt={doc.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <h4 className="text-xl font-medium text-zinc-900">{doc.name}</h4>
                <p className="text-zinc-500 font-medium text-sm mt-1">{doc.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section id="recenzii" className="py-24 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold tracking-widest text-zinc-400 uppercase mb-3">Părerea Pacienților</h2>
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
                <span className="text-zinc-500">din 153 recenzii</span>
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
              { name: "Alexandra D.", text: "Recomand cu toată încrederea serviciile Dentis: profesionalism, servicii de foarte bună calitate, echipamente de ultima generație, personal foarte amabil." },
              { name: "Eddy M.", text: "Un cabinet stomatologic cu o atmosferă plăcută și cu resurse potrivite pentru toate problemele dentare. Veți pleca întotdeauna de acolo cu un zâmbet mai larg și încrezător 😁" },
              { name: "Mariana C.", text: "Un medic excepțional, cu foarte multă răbdare, cu multe explicații privind procedurile aplicate și datorită căruia am scăpat de 'frică' de dentist. Recomand cu încredere!" },
              { name: "Cristian S.", text: "Sunt extrem de mulțumit de lucrarea protetică. Totul a decurs fără nicio durere, iar rezultatul estetic este peste așteptări. Mulțumesc întregii echipe!" }
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

      {/* Pricing Section */}
      <section id="tarife" className="py-24 bg-white border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-zinc-400 uppercase mb-3">Transparență Totală</h2>
            <h3 className="text-3xl md:text-4xl font-light text-zinc-900">Tarife orientative</h3>
            <p className="mt-4 text-zinc-500">Un plan de tratament detaliat și personalizat va fi realizat în urma primei consultații.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-zinc-200 overflow-hidden">
            {[
              { cat: 'Consultație & Diagnostic', items: [{ name: 'Consultație inițială specialist', price: '250 RON' }, { name: 'Pachet profilaxie (Detartraj + Airflow)', price: '350 RON' }] },
              { cat: 'Estetică & Protetică', items: [{ name: 'Albire dentară profesională Laser', price: '1200 RON' }, { name: 'Fațetă ceramică E-max', price: '1800 RON' }] },
              { cat: 'Chirurgie & Implantologie', items: [{ name: 'Implant dentar Premium (Titan)', price: 'de la 3000 RON' }, { name: 'Extracție dinte de minte', price: '450 RON' }] },
            ].map((section, idx) => (
              <div key={idx} className="border-b border-zinc-200 last:border-0">
                <div className="bg-zinc-50 px-6 md:px-8 py-4 border-b border-zinc-200">
                  <h4 className="font-semibold text-zinc-900">{section.cat}</h4>
                </div>
                <div className="divide-y divide-zinc-100">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-center px-6 md:px-8 py-5 hover:bg-[#a8e4a0]/5 transition-colors gap-4">
                      <span className="text-zinc-600 flex-1 leading-snug">{item.name}</span>
                      <span className="font-medium text-zinc-900 bg-zinc-100 px-4 py-1.5 rounded-full whitespace-nowrap text-sm border border-zinc-200">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-zinc-400 uppercase mb-3">Contact</h2>
            <h3 className="text-3xl md:text-4xl font-light text-zinc-900 mb-8">Suntem aici pentru tine</h3>
            
            <div className="space-y-8 mb-10">
              <a 
                href="https://maps.app.goo.gl/QVTipzzMLNWCAq5y6" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-start group"
              >
                <div className="w-12 h-12 bg-white border border-zinc-200 rounded-xl flex items-center justify-center text-zinc-800 mr-4 shrink-0 group-hover:bg-[#a8e4a0] group-hover:border-transparent transition-colors shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">Locație Clinică</h4>
                  <p className="text-zinc-500 mt-1">Strada Progresului B12, sc. C<br/>Târgu Neamț, 615200</p>
                </div>
              </a>
              
              <a 
                href="tel:+40752103861" 
                target="_top" 
                className="flex items-start group"
              >
                <div className="w-12 h-12 bg-white border border-zinc-200 rounded-xl flex items-center justify-center text-zinc-800 mr-4 shrink-0 group-hover:bg-[#a8e4a0] group-hover:border-transparent transition-colors shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">Telefon / WhatsApp</h4>
                  <p className="text-zinc-500 mt-1">+40 752 103 861</p>
                </div>
              </a>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white border border-zinc-200 rounded-xl flex items-center justify-center text-zinc-800 mr-4 shrink-0 shadow-sm">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-zinc-900">Program</h4>
                  <p className="text-zinc-500 mt-1">Luni - Vineri: 09:00 - 17:00<br/>Sâmbătă: 09:00 - 17:00<br/>Duminică: Închis</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm p-8 lg:p-10 border border-zinc-200">
            <div className="flex items-center space-x-3 mb-6">
              <MessageCircle className="text-[#a8e4a0]" size={28} />
              <h4 className="text-2xl font-medium text-zinc-900">Trimite-ne un mesaj</h4>
            </div>
            <p className="text-sm text-zinc-500 mb-6">Completează datele și vei fi redirecționat automat către WhatsApp.</p>
            
            <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                const text = `Bună ziua! Mă numesc ${formData.nume} și aș dori o programare pentru: ${formData.serviciu}.\n\nTelefon: ${formData.telefon}\nDetalii: ${formData.mesaj}`;
                const encodedText = encodeURIComponent(text);
                window.open(`https://wa.me/40752103861?text=${encodedText}`, '_top');
            }}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">Nume complet</label>
                  <input 
                    type="text" 
                    required
                    value={formData.nume}
                    onChange={(e) => setFormData({...formData, nume: e.target.value})}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#a8e4a0] focus:bg-white transition-all" 
                    placeholder="Numele tău" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">Telefon</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.telefon}
                    onChange={(e) => setFormData({...formData, telefon: e.target.value})}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#a8e4a0] focus:bg-white transition-all" 
                    placeholder="07xx xxx xxx" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">Serviciul dorit (opțional)</label>
                <select 
                  value={formData.serviciu}
                  onChange={(e) => setFormData({...formData, serviciu: e.target.value})}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#a8e4a0] focus:bg-white transition-all text-zinc-600"
                >
                  <option>Consultație generală</option>
                  <option>Implantologie</option>
                  <option>Ortodonție</option>
                  <option>Estetică Dentară</option>
                  <option>Terapie Laser</option>
                  <option>Chirurgie Orală</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">Mesaj</label>
                <textarea 
                  rows="3" 
                  required
                  value={formData.mesaj}
                  onChange={(e) => setFormData({...formData, mesaj: e.target.value})}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#a8e4a0] focus:bg-white transition-all" 
                  placeholder="Cum te putem ajuta?"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-[#a8e4a0] text-zinc-900 rounded-xl py-4 font-medium hover:bg-[#96d18f] transition-colors shadow-sm flex items-center justify-center space-x-2">
                <MessageCircle size={20} />
                <span>Trimite pe WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
             <div className="mb-6 cursor-pointer inline-block" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <img 
                src={`${import.meta.env.BASE_URL}logo_white.svg`} 
                alt="Dentis Center Logo" 
                className="transform-gpu h-10 md:h-14 w-auto object-contain hover:opacity-80 transition-opacity"
              />
            </div>
            <p className="max-w-sm mb-6">Clinică stomatologică premium dedicată sănătății și esteticii zâmbetului tău, folosind tehnologii de ultimă generație și materiale de excepție.</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Linkuri Utile</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#a8e4a0] transition-colors">Termeni și Condiții</a></li>
              <li><a href="#" className="hover:text-[#a8e4a0] transition-colors">Politică de Confidențialitate</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Contact rapid</h4>
            <ul className="space-y-2">
              <li><a href="tel:+40752103861" className="hover:text-[#a8e4a0] transition-colors">0752 103 861</a></li>
              <li><a href="https://maps.app.goo.gl/QVTipzzMLNWCAq5y6" target="_blank" rel="noreferrer" className="hover:text-[#a8e4a0] transition-colors">Vezi locația pe hartă</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-zinc-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p>© 2026 Dentis Center. Toate drepturile rezervate.</p>
          <p className="mt-2 md:mt-0">Creat cu atenție pentru detalii.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/40752103861" 
        target="_top" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-40 flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* Booking Modal Dinamic (2 Pași) */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm" onClick={() => { setBookingModalOpen(false); setTimeout(() => setModalStep(1), 300); }}></div>
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg relative z-10 overflow-hidden animate-in fade-in zoom-in duration-300 border border-zinc-100">
            
            <button 
              onClick={() => { setBookingModalOpen(false); setTimeout(() => setModalStep(1), 300); }}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900 transition-colors bg-zinc-50 rounded-full p-2 z-20"
            >
              <X size={20} />
            </button>

            <div className="p-8">
              {/* PASUL 1: Alegerea Serviciului */}
              {modalStep === 1 && (
                <div className="animate-in slide-in-from-left-4 fade-in duration-300">
                  <div className="w-12 h-12 bg-zinc-50 border border-zinc-200 rounded-full flex items-center justify-center text-zinc-800 mb-6">
                    <Clock size={24} />
                  </div>
                  <h3 className="text-2xl font-light text-zinc-900 mb-2">Programează o vizită</h3>
                  <p className="text-zinc-500 mb-8">Alege serviciul dorit pentru a continua.</p>
                  
                  <div className="space-y-4">
                    <button 
                      onClick={() => handleServiceSelect('Consultație Inițială')}
                      className="w-full text-left p-4 rounded-xl border border-zinc-200 hover:border-[#a8e4a0] hover:bg-zinc-50 transition-all group flex justify-between items-center"
                    >
                      <div>
                        <span className="block font-medium text-zinc-900">Consultație Inițială</span>
                        <span className="text-sm text-zinc-500">20 min • Evaluare generală</span>
                      </div>
                      <ArrowRight size={18} className="text-zinc-300 group-hover:text-[#a8e4a0]" />
                    </button>
                    <button 
                      onClick={() => handleServiceSelect('Pachet Igienizare')}
                      className="w-full text-left p-4 rounded-xl border border-zinc-200 hover:border-[#a8e4a0] hover:bg-zinc-50 transition-all group flex justify-between items-center"
                    >
                      <div>
                        <span className="block font-medium text-zinc-900">Pachet Igienizare</span>
                        <span className="text-sm text-zinc-500">45 min • Detartraj & Airflow</span>
                      </div>
                      <ArrowRight size={18} className="text-zinc-300 group-hover:text-[#a8e4a0]" />
                    </button>
                    <button 
                      onClick={() => handleServiceSelect('Urgență Stomatologică')}
                      className="w-full text-left p-4 rounded-xl border border-rose-200 hover:border-rose-400 hover:bg-rose-50 transition-all group flex justify-between items-center"
                    >
                      <div>
                        <span className="block font-medium text-zinc-900">Urgență Stomatologică</span>
                        <span className="text-sm text-rose-600 font-medium mt-1">Preluare prioritară</span>
                      </div>
                      <ArrowRight size={18} className="text-zinc-300 group-hover:text-rose-500" />
                    </button>
                  </div>
                </div>
              )}

              {/* PASUL 2: Formular Nume & Detalii */}
              {modalStep === 2 && (
                <div className="animate-in slide-in-from-right-4 fade-in duration-300">
                  <button 
                    onClick={() => setModalStep(1)}
                    className="flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 mb-6 transition-colors"
                  >
                    <ChevronLeft size={16} className="mr-1" /> Înapoi
                  </button>
                  
                  <h3 className="text-2xl font-light text-zinc-900 mb-2">Aproape gata!</h3>
                  <p className="text-zinc-500 mb-6">Ai ales: <strong className="text-zinc-800">{formData.serviciu}</strong>. Ne mai trebuie doar câteva detalii.</p>

                  <form onSubmit={handleDynamicBooking} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 mb-1">Numele tău complet *</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a8e4a0] focus:border-transparent transition-all"
                        placeholder="Ex: Ion Popescu"
                        value={formData.nume}
                        onChange={(e) => setFormData({...formData, nume: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 mb-1">Detalii (Opțional)</label>
                      <textarea 
                        rows="3"
                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a8e4a0] focus:border-transparent transition-all"
                        placeholder="Ai o durere specifică? Vrei un anumit medic?"
                        value={formData.mesaj}
                        onChange={(e) => setFormData({...formData, mesaj: e.target.value})}
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full bg-[#a8e4a0] text-zinc-900 py-4 rounded-xl font-medium hover:bg-[#96d18f] transition-colors flex items-center justify-center space-x-2 mt-4 shadow-sm"
                    >
                      <MessageCircle size={20} />
                      <span>Trimite pe WhatsApp</span>
                    </button>
                  </form>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

    </div>
  );
};

// Componentă Before/After Slider
const BeforeAfterSlider = ({ baseImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  
  return (
    <div className="relative w-full h-full select-none" onDragStart={(e) => e.preventDefault()}>
      <img 
        src={baseImage} 
        alt="After" 
        className="absolute top-0 left-0 w-full h-full object-cover filter brightness-110 saturate-[0.9]" 
      />
      <div 
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img 
          src={baseImage} 
          alt="Before" 
          className="absolute top-0 left-0 w-full h-full object-cover filter sepia-[.35] hue-rotate-[-15deg] saturate-[1.2] brightness-95" 
        />
        <div className={`absolute top-4 left-4 bg-zinc-900/60 backdrop-blur text-white px-3 py-1 rounded text-xs font-medium tracking-wider uppercase transition-opacity duration-200 ${sliderPosition < 15 ? 'opacity-0' : 'opacity-100'}`}>
          Înainte
        </div>
      </div>
      <div className={`absolute top-4 right-4 bg-[#a8e4a0]/90 backdrop-blur text-zinc-900 px-3 py-1 rounded text-xs font-bold tracking-wider uppercase z-10 transition-opacity duration-200 ${sliderPosition > 85 ? 'opacity-0' : 'opacity-100'}`}>
        După (Albire/Fațete)
      </div>
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center z-20 shadow-md"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-zinc-100 text-zinc-600">
           <div className="flex space-x-1">
             <ChevronLeft size={16} className="-mr-1" />
             <ChevronRight size={16} className="-ml-1" />
           </div>
        </div>
      </div>
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={sliderPosition} 
        onChange={(e) => setSliderPosition(e.target.value)}
        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-ew-resize z-30"
      />
    </div>
  );
};

export default App;