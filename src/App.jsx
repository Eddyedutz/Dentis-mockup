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
  
  // Stare pentru program și formularul de WhatsApp
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    nume: '',
    telefon: '',
    serviciu: 'Consultație generală',
    mesaj: ''
  });

  const carouselRef = useRef(null);

  // Verifică programul de funcționare
  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Duminică, 1 = Luni, etc.
      const hour = now.getHours();
      const minutes = now.getMinutes();
      const time = hour + minutes / 60;
      
      // Luni - Vineri: 09:00 - 20:00
      if (day >= 1 && day <= 5 && time >= 9 && time < 20) {
        setIsOpen(true);
      } 
      // Sâmbătă: 09:00 - 14:00
      else if (day === 6 && time >= 9 && time < 14) {
        setIsOpen(true);
      } 
      // Duminică sau în afara programului
      else {
        setIsOpen(false);
      }
    };

    checkStatus();
    const timer = setInterval(checkStatus, 60000); // Verifică în fiecare minut
    return () => clearInterval(timer);
  }, []);

  // Handle scroll for sticky header
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

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const scrollAmount = direction === 'left' ? -300 : 300;
      const maxScroll = container.scrollWidth - container.clientWidth;

      // Verificăm poziția pentru a crea efectul de "rotativ" (looping)
      if (direction === 'right' && container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' }); // Se întoarce la primul
      } else if (direction === 'left' && container.scrollLeft <= 10) {
        container.scrollTo({ left: maxScroll, behavior: 'smooth' }); // Sare la ultimul
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const { nume, telefon, serviciu, mesaj } = formData;
    const text = `Bună ziua, mă numesc ${nume}. Doresc informații pentru: ${serviciu}. \nTelefon: ${telefon}. \nMesaj: ${mesaj}`;
    const encodedText = encodeURIComponent(text);
    // Folosim window.open cu '_top' pentru a ocoli restricțiile de iframe pe mobil/desktop
    window.open(`https://wa.me/40752103861?text=${encodedText}`, '_top');
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-emerald-200">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center relative">
          
          <div className="w-full flex justify-center items-center">
            {/* Logo Wrapper pt a tine butonul de mobil aproape de el */}
            <div className="relative flex items-center">
              {/* Logo */}
              <div className="cursor-pointer flex items-center" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                <img 
                  src="https://i.postimg.cc/vBNcHCL3/logo2.png" 
                  alt="Dentis Center Logo" 
                  className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-16 md:h-24' : 'h-24 md:h-40'}`}
                />
              </div>

              {/* Mobile Menu Toggle - atasat langa logo */}
              <button className="md:hidden text-zinc-900 absolute -right-14 p-2 bg-white/50 rounded-full backdrop-blur-sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center space-x-8 transition-all duration-300 ${isScrolled ? 'mt-1' : 'mt-2'}`}>
            {['Servicii', 'Despre noi', 'Echipa', 'Tarife', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase().replace(/\s+/g, '-'))}
                className="text-sm font-medium text-zinc-600 hover:text-emerald-600 transition-colors"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => setBookingModalOpen(true)}
              className="bg-zinc-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors shadow-lg hover:shadow-xl ml-4"
            >
              Programare Online
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col space-y-4 md:hidden">
            {['Servicii', 'Despre noi', 'Echipa', 'Tarife', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase().replace(/\s+/g, '-'))}
                className="text-left text-lg font-medium text-zinc-800 py-2 border-b border-zinc-100"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => { setMobileMenuOpen(false); setBookingModalOpen(true); }}
              className="bg-emerald-600 text-white w-full py-3 rounded-xl font-medium mt-4"
            >
              Programare Online
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-16 lg:pt-64 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 mt-10">
            {/* Status Deschis/Închis conectat la timp real */}
            <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${isOpen ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
              <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`}></span>
              <span>{isOpen ? 'Deschis acum • Primim pacienți noi' : 'Închis momentan • Vă așteptăm în timpul programului'}</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-light tracking-tight text-zinc-900 leading-[1.1] mb-6">
              Zâmbetul tău merită <br />
              <span className="font-semibold text-emerald-600">excelență.</span>
            </h1>
            <p className="text-lg text-zinc-500 mb-10 max-w-lg leading-relaxed">
              O experiență stomatologică redefinită. Confort absolut, tehnologie de top și o echipă dedicată sănătății tale, într-un spațiu creat pentru relaxare.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => setBookingModalOpen(true)}
                className="bg-emerald-600 text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-900 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Programează o vizită</span>
                <ArrowRight size={18} />
              </button>
              <a 
                href="tel:+40752103861"
                target="_top"
                className="border border-zinc-200 text-zinc-900 px-8 py-4 rounded-full font-medium hover:border-zinc-900 transition-colors flex items-center justify-center space-x-2"
              >
                <Phone size={18} />
                <span>0752 103 861</span>
              </a>
            </div>
          </div>
          
          <div className="relative z-10 lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl mt-10 lg:mt-0">
             <img 
               src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
               alt="Interior clinică modernă" 
               className="object-cover w-full h-full"
             />
             <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[11,12,13].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i}`} alt="Patient" className="w-10 h-10 rounded-full border-2 border-white" />
                  ))}
                </div>
                <div>
                  <div className="flex text-emerald-500 text-sm">
                    <Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" />
                  </div>
                  <p className="text-xs font-medium text-zinc-900 mt-1">5.0 din 200+ recenzii</p>
                </div>
             </div>
          </div>
        </div>
        
        <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-emerald-100 blur-3xl"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicii" className="py-24 bg-zinc-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-3">Expertiza noastră</h2>
              <h3 className="text-3xl md:text-4xl font-light text-zinc-900 mb-2">Tratamente personalizate pentru un zâmbet perfect</h3>
              {/* Indicator scroll pentru mobil */}
              <p className="text-emerald-600 text-sm md:hidden flex items-center mt-4">
                <ArrowRight size={16} className="mr-2 animate-pulse" />
                Glisează pentru mai multe tratamente
              </p>
            </div>
            {/* Butoane navigare carusel */}
            <div className="hidden md:flex space-x-3">
              <button onClick={() => scrollCarousel('left')} className="p-3 rounded-full border border-zinc-200 text-zinc-600 hover:border-emerald-500 hover:text-emerald-600 transition-colors">
                <ChevronLeft size={24} />
              </button>
              <button onClick={() => scrollCarousel('right')} className="p-3 rounded-full border border-zinc-200 text-zinc-600 hover:border-emerald-500 hover:text-emerald-600 transition-colors">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div 
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          >
            {[
              { icon: Syringe, title: 'Implantologie', desc: 'Înlocuirea dinților lipsă folosind tehnici minim invazive și materiale premium din titan.' },
              { icon: Sparkles, title: 'Estetică Dentară', desc: 'Fațete dentare, albire profesională și designul zâmbetului adaptat fizionomiei tale.' },
              { icon: Zap, title: 'Terapie Laser', desc: 'Tratamente precise, nedureroase și cu recuperare rapidă folosind laser dentar avansat.' },
              { icon: Activity, title: 'Chirurgie Orală', desc: 'Extracții de molari de minte, rezecții apicale și proceduri chirurgicale realizate în siguranță.' },
              { icon: Smile, title: 'Ortodonție', desc: 'Aparate dentare invizibile (Invisalign) și clasice pentru alinierea perfectă a dinților.' },
              { icon: Baby, title: 'Stomatologie Copii', desc: 'Tratamente fără durere într-un mediu prietenos, dedicat zâmbetelor celor mici.' }
            ].map((service, idx) => (
              <div key={idx} className="snap-start w-[85vw] sm:w-[260px] lg:w-[280px] shrink-0 bg-white p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow group cursor-pointer border border-zinc-100 flex flex-col h-full">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <service.icon size={28} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-medium text-zinc-900 mb-3">{service.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>
                <div className="flex items-center text-emerald-600 font-medium text-sm group-hover:translate-x-2 transition-transform mt-auto">
                  Află mai multe <ChevronRight size={16} className="ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Interactive Slider */}
      <section className="py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-emerald-500 uppercase mb-3">Rezultate Reale</h2>
            <h3 className="text-3xl md:text-5xl font-light mb-6">Arta estetică a zâmbetului</h3>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              O imagine face cât o mie de cuvinte. Descoperă diferența obținută prin tratamente de estetică dentară (albire profesională, fațete E-max), care redau strălucirea și naturalețea zâmbetului.
            </p>
            <ul className="space-y-4 mb-10">
              {['Albire Laser Avansată', 'Fațete ceramice ultra-subțiri', 'Regândirea arhitecturii zâmbetului'].map((item, idx) => (
                <li key={idx} className="flex items-center text-zinc-300">
                  <CheckCircle2 size={20} className="text-emerald-500 mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden group shadow-[0_0_40px_rgba(16,185,129,0.15)]">
            <BeforeAfterSlider baseImage="https://i.pinimg.com/originals/d8/a3/73/d8a373e3459364de3d064369069f8117.jpg" />
          </div>
        </div>
      </section>

      {/* Despre Noi Section */}
      <section id="despre-noi" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-3">Povestea Noastră</h2>
            <h3 className="text-3xl md:text-4xl font-light text-zinc-900 mb-6">Pasiune pentru zâmbete sănătoase și estetică perfectă.</h3>
            <p className="text-zinc-500 text-lg mb-6 leading-relaxed">
              Am fondat Dentis Center din dorința de a schimba percepția asupra vizitei la stomatolog. Am creat un spațiu în care frica și anxietatea sunt înlocuite de confort, încredere și tehnologie de ultimă generație.
            </p>
            <p className="text-zinc-500 text-lg leading-relaxed">
              Echipa noastră folosește abordări minim invazive, garantând tratamente sigure și de lungă durată. Fiecare pacient este unic, iar planurile noastre de tratament reflectă această viziune, integrând cele mai noi tehnologii din domeniu.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-square md:aspect-[4/3]">
            <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Echipă clinică" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="echipa" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-3">Echipa Noastră</h2>
            <h3 className="text-3xl md:text-4xl font-light text-zinc-900">Specialiste dedicate zâmbetului tău</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Andreea Mureșan', role: 'Medic Primar Implantologie', img: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Andreea&backgroundColor=e6f6f4&clothing=blazerAndShirt' },
              { name: 'Dr. Elena Popescu', role: 'Specialist Estetică Dentară', img: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Elena&backgroundColor=e6f6f4&clothing=blazerAndShirt' },
              { name: 'Dr. Maria Stan', role: 'Medic Specialist Ortodonție', img: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Maria&backgroundColor=e6f6f4&clothing=blazerAndShirt' }
            ].map((doc, idx) => (
              <div key={idx} className="group flex flex-col items-center text-center">
                <div className="relative overflow-hidden rounded-full mb-6 w-56 h-56 bg-zinc-50 border-4 border-emerald-50 shadow-md">
                  <img src={doc.img} alt={doc.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <h4 className="text-xl font-medium text-zinc-900">{doc.name}</h4>
                <p className="text-emerald-600 font-medium text-sm mt-1">{doc.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="tarife" className="py-24 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-3">Transparență Totală</h2>
            <h3 className="text-3xl md:text-4xl font-light text-zinc-900">Tarife orientative</h3>
            <p className="mt-4 text-zinc-500">Un plan de tratament detaliat și personalizat va fi realizat în urma primei consultații.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-zinc-100 overflow-hidden">
            {[
              { cat: 'Consultație & Diagnostic', items: [{ name: 'Consultație inițială specialist', price: '250 RON' }, { name: 'Pachet profilaxie (Detartraj + Airflow)', price: '350 RON' }] },
              { cat: 'Estetică & Protetică', items: [{ name: 'Albire dentară profesională Laser', price: '1200 RON' }, { name: 'Fațetă ceramică E-max', price: '1800 RON' }] },
              { cat: 'Chirurgie & Implantologie', items: [{ name: 'Implant dentar Premium (Titan)', price: 'de la 3000 RON' }, { name: 'Extracție dinte de minte', price: '450 RON' }] },
            ].map((section, idx) => (
              <div key={idx} className="border-b border-zinc-100 last:border-0">
                <div className="bg-zinc-50/50 px-8 py-4">
                  <h4 className="font-semibold text-zinc-900">{section.cat}</h4>
                </div>
                <div className="divide-y divide-zinc-50">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-center px-8 py-5 hover:bg-emerald-50/30 transition-colors">
                      <span className="text-zinc-600">{item.name}</span>
                      <span className="font-medium text-zinc-900">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="text-emerald-600 font-medium hover:text-emerald-700 flex items-center justify-center w-full">
              Vezi lista completă de prețuri <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-3">Contact</h2>
            <h3 className="text-3xl md:text-4xl font-light text-zinc-900 mb-8">Suntem aici pentru tine</h3>
            
            <div className="space-y-8 mb-10">
              <a 
                href="https://maps.google.com/?q=Strada+Progresului+B12,+Targu+Neamt" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-start group"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mr-4 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-zinc-900 group-hover:text-emerald-600 transition-colors">Locație Clinică</h4>
                  <p className="text-zinc-500 mt-1">Strada Progresului B12, sc. C<br/>Târgu Neamț, 615200 <span className="text-emerald-500 text-sm ml-1">(Vezi Harta)</span></p>
                </div>
              </a>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mr-4 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-zinc-900">Telefon / WhatsApp</h4>
                  <a href="tel:+40752103861" target="_top" className="text-zinc-500 mt-1 hover:text-emerald-600 transition-colors inline-block">+40 752 103 861</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mr-4 shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-zinc-900">Program</h4>
                  <p className="text-zinc-500 mt-1">Luni - Vineri: 09:00 - 20:00<br/>Sâmbătă: 09:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 border border-zinc-100">
            <div className="flex items-center space-x-3 mb-6">
              <MessageCircle className="text-[#25D366]" size={28} />
              <h4 className="text-2xl font-medium text-zinc-900">Trimite-ne un mesaj</h4>
            </div>
            <p className="text-sm text-zinc-500 mb-6">Completează datele și vei fi redirecționat automat către WhatsApp pentru a ne trimite solicitarea.</p>
            
            <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">Nume complet</label>
                  <input 
                    type="text" 
                    required
                    value={formData.nume}
                    onChange={(e) => setFormData({...formData, nume: e.target.value})}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:bg-white transition-all" 
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
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:bg-white transition-all" 
                    placeholder="07xx xxx xxx" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">Serviciul dorit (opțional)</label>
                <select 
                  value={formData.serviciu}
                  onChange={(e) => setFormData({...formData, serviciu: e.target.value})}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:bg-white transition-all text-zinc-600"
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
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:bg-white transition-all" 
                  placeholder="Cum te putem ajuta?"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-[#25D366] text-white rounded-xl py-4 font-medium hover:bg-green-600 transition-colors shadow-lg flex items-center justify-center space-x-2">
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
                src="https://i.postimg.cc/vBNcHCL3/logo2.png" 
                alt="Dentis Center Logo" 
                className="h-10 md:h-12 w-auto object-contain bg-white/25 p-2 rounded-xl"
              />
            </div>
            <p className="max-w-sm mb-6">Clinică stomatologică premium dedicată sănătății și esteticii zâmbetului tău, folosind tehnologii de ultimă generație.</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Linkuri Utile</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Termeni și Condiții</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Politică de Confidențialitate</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">ANPC</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Social Media</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">TikTok</a></li>
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

      {/* Booking Modal */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm" onClick={() => setBookingModalOpen(false)}></div>
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg relative z-10 overflow-hidden animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900 transition-colors bg-zinc-100 rounded-full p-2"
            >
              <X size={20} />
            </button>
            <div className="p-8">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-6">
                <Clock size={24} />
              </div>
              <h3 className="text-2xl font-light text-zinc-900 mb-2">Programează o vizită</h3>
              <p className="text-zinc-500 mb-8">Alege serviciul și te vom contacta în cel mai scurt timp pentru a stabili ora potrivită.</p>
              
              <div className="space-y-4">
                 <button className="w-full text-left p-4 rounded-xl border border-zinc-200 hover:border-emerald-500 hover:bg-emerald-50 transition-all group flex justify-between items-center">
                   <div>
                     <span className="block font-medium text-zinc-900">Consultație Inițială</span>
                     <span className="text-sm text-zinc-500">20 min • Evaluare generală</span>
                   </div>
                   <ArrowRight size={18} className="text-zinc-300 group-hover:text-emerald-500" />
                 </button>
                 <button className="w-full text-left p-4 rounded-xl border border-zinc-200 hover:border-emerald-500 hover:bg-emerald-50 transition-all group flex justify-between items-center">
                   <div>
                     <span className="block font-medium text-zinc-900">Pachet Igienizare</span>
                     <span className="text-sm text-zinc-500">45 min • Detartraj & Airflow</span>
                   </div>
                   <ArrowRight size={18} className="text-zinc-300 group-hover:text-emerald-500" />
                 </button>
                 <button className="w-full text-left p-4 rounded-xl border border-zinc-200 hover:border-emerald-500 hover:bg-emerald-50 transition-all group flex justify-between items-center">
                   <div>
                     <span className="block font-medium text-zinc-900">Urgență Stomatologică</span>
                     <span className="text-sm text-emerald-600 font-medium mt-1">Preluare prioritară</span>
                   </div>
                   <ArrowRight size={18} className="text-zinc-300 group-hover:text-emerald-500" />
                 </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

// Componentă Before/After Slider cu filtru și tranziții
const BeforeAfterSlider = ({ baseImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  
  return (
    <div className="relative w-full h-full select-none" onDragStart={(e) => e.preventDefault()}>
      {/* Background (After) Image */}
      <img 
        src={baseImage} 
        alt="After" 
        className="absolute top-0 left-0 w-full h-full object-cover filter brightness-110 saturate-[0.9]" 
      />
      
      {/* Foreground (Before) Image */}
      <div 
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img 
          src={baseImage} 
          alt="Before" 
          className="absolute top-0 left-0 w-full h-full object-cover filter sepia-[.35] hue-rotate-[-15deg] saturate-[1.2] brightness-95" 
        />
        
        {/* 'Înainte' label */}
        <div className={`absolute top-4 left-4 bg-black/60 backdrop-blur text-white px-3 py-1 rounded text-xs font-medium tracking-wider uppercase transition-opacity duration-200 ${sliderPosition < 15 ? 'opacity-0' : 'opacity-100'}`}>
          Înainte
        </div>
      </div>

      {/* 'După' label */}
      <div className={`absolute top-4 right-4 bg-emerald-600/90 backdrop-blur text-white px-3 py-1 rounded text-xs font-medium tracking-wider uppercase z-10 transition-opacity duration-200 ${sliderPosition > 85 ? 'opacity-0' : 'opacity-100'}`}>
        După (Albire/Fațete)
      </div>

      {/* Slider Input / Dragger */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-emerald-50 text-emerald-600">
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