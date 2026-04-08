import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importăm componentele globale
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Importăm paginile (asigură-te că fișierele există în folderul src/pages)
import Home from './pages/Home';
import Tarife from './pages/Tarife'; 
import ContactPage from './pages/ContactPage';
import Tratamente from './pages/Tratamente';
import ObturatiiDentare from './pages/ObturatiiDentare';
import ChirurgieDentara from './pages/ChirurgieDentara';
import ImplantologieDentara from './pages/ImplantologieDentara';
import Ortodontie from './pages/Ortodontie';
import ProteticaDentara from './pages/ProteticaDentara';
import TerapieLaser from './pages/TerapieLaser';
import Endodontie from './pages/Endodontie';
import Parodontologie from './pages/Parodontologie';
import Pedodontie from './pages/Pedodontie';
import Urgente from './pages/Urgente';
import AlbireDentara from './pages/AlbireDentara';
import Igienizare from './pages/Igienizare';

import PaginaLegala from './pages/PaginaLegala';

import { X, Clock, ArrowRight, MessageCircle, ChevronLeft } from 'lucide-react';

const App = () => {
  // --- STARE GLOBALĂ PENTRU MODAL ---
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState(1);
  const [formData, setFormData] = useState({
    nume: '',
    telefon: '',
    serviciu: 'Consultație generală',
    mesaj: ''
  });

  // --- LOGICĂ MODAL DINAMIC ---
  const handleServiceSelect = (serviceName) => {
    setFormData({ ...formData, serviciu: serviceName });
    setModalStep(2); 
  };

  const handleDynamicBooking = (e) => {
    e.preventDefault();
    const text = `Bună ziua! Mă numesc ${formData.nume} și aș dori o programare pentru: ${formData.serviciu}.\n\nDetalii/Simptome: ${formData.mesaj || 'Nu am adăugat alte detalii.'}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/40752103861?text=${encodedText}`, '_top');
    
    // Închidem și resetăm modalul
    setBookingModalOpen(false);
    setTimeout(() => setModalStep(1), 300); 
  };

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-[#a8e4a0] selection:text-zinc-900 flex flex-col">
        
        {/* Navbar fix pe toate paginile */}
        <Navbar setBookingModalOpen={setBookingModalOpen} />

        {/* Conținutul paginilor care se schimbă */}
		{/* Navbar fix pe toate paginile */}
				<Navbar setBookingModalOpen={setBookingModalOpen} />

				{/* AICI E MAGIA: Am adăugat pt-35 (mobil) și pt-54 (desktop) */}
				<main className="flex-grow pt-35 md:pt-54">
				  <Routes>
					<Route path="/" element={<Home setBookingModalOpen={setBookingModalOpen} />} />
					
					<Route path="/tratamente" element={<Tratamente setBookingModalOpen={setBookingModalOpen} />} />
					<Route path="/tratamente/obturatii-dentare" element={<ObturatiiDentare setBookingModalOpen={setBookingModalOpen} />} />
					<Route path="/tratamente/chirurgie-dentara" element={<ChirurgieDentara setBookingModalOpen={setBookingModalOpen} />} />
					<Route path="/tratamente/implantologie-dentara" element={<ImplantologieDentara setBookingModalOpen={setBookingModalOpen} />} />
					<Route path="/tratamente/ortodontie" element={<Ortodontie setBookingModalOpen={setBookingModalOpen} />} />
					<Route path="/tratamente/protetica-dentara" element={<ProteticaDentara setBookingModalOpen={setBookingModalOpen} />} />
					<Route path="/tratamente/terapia-laser" element={<TerapieLaser setBookingModalOpen={setBookingModalOpen} />} />
					<Route path="/tratamente/endodontie-microscopica" element={<Endodontie setBookingModalOpen={setBookingModalOpen} />} />
					<Route path="/tratamente/parodontologie" element={<Parodontologie setBookingModalOpen={setBookingModalOpen} />} />
					<Route path="/tratamente/pedodontie" element={<Pedodontie setBookingModalOpen={setBookingModalOpen} />} />
					<Route path="/tratamente/urgente" element={<Urgente setBookingModalOpen={setBookingModalOpen} />} />
					<Route path="/tratamente/albire-dentara" element={<AlbireDentara setBookingModalOpen={setBookingModalOpen} />} />
					<Route path="/tratamente/igienizare" element={<Igienizare setBookingModalOpen={setBookingModalOpen} />} />
					
					<Route path="/tarife" element={<Tarife setBookingModalOpen={setBookingModalOpen} />} />
					<Route path="/contact" element={<ContactPage />} />

			{/* --- RUTE PAGINI LEGALE --- */}
					<Route path="/termeni" element={
					  <PaginaLegala 
						titlu="Termeni și Condiții" 
						dataActualizare="Aprilie 2026"
						continut={
						  <>
							<h3>1. Introducere</h3>
							<p>Bine ați venit pe site-ul Dentis Center. Prezentul document stabilește termenii și condițiile de utilizare a acestui site web și a serviciilor noastre. Prin utilizarea site-ului, sunteți de acord cu acești termeni.</p>
							
							<h3>2. Informații Medicale</h3>
							<p>Informațiile prezentate pe acest site au rol strict informativ și educațional. Acestea <strong>nu înlocuiesc un consult medical de specialitate</strong>. Diagnosticul final și planul de tratament pot fi stabilite doar de către medicul stomatolog în urma unei examinări clinice în cabinet.</p>
							
							<h3>3. Programări și Comunicare</h3>
							<p>Completarea formularului de contact de pe site nu reprezintă o programare garantată. Formularul redirecționează datele către aplicația WhatsApp, iar programarea devine fermă abia după confirmarea acesteia de către personalul recepției clinicii noastre.</p>
							
							<h3>4. Politica de Prețuri</h3>
							<p>Tarifele afișate pe site au caracter orientativ. Costul final al tratamentului poate varia în funcție de complexitatea cazului clinic, materialele folosite și nevoile specifice ale pacientului. Un deviz financiar exact vă va fi oferit la finalul consultației inițiale.</p>
							
							<h3>5. Modificări</h3>
							<p>Ne rezervăm dreptul de a modifica acești termeni, precum și lista de tarife sau serviciile oferite, fără o notificare prealabilă. Vă recomandăm să verificați periodic această pagină.</p>
						  </>
						}
					  />
					} />

					<Route path="/gdpr" element={
					  <PaginaLegala 
						titlu="Politică de Confidențialitate (GDPR)" 
						dataActualizare="Aprilie 2026"
						continut={
						  <>
							<h3>1. Operatorul de Date</h3>
							<p>Dentis Center se angajează să vă protejeze datele cu caracter personal, în conformitate cu Regulamentul (UE) 2016/679 (GDPR).</p>

							<h3>2. Datele Colectate și Scopul</h3>
							<p>Colectăm datele pe care ni le furnizați voluntar prin intermediul formularului de contact: <strong>nume, număr de telefon, serviciul de interes și detalii privind starea de sănătate orală (mesajul dvs.)</strong>.</p>
							<p>Scopul exclusiv al colectării este: facilitarea programărilor, evaluarea preliminară a urgențelor și contactarea dvs. de către personalul clinicii.</p>

							<h3>3. Transferul către Terți (WhatsApp)</h3>
							<p>Pentru a vă oferi o comunicare rapidă și eficientă, formularul nostru de contact utilizează o legătură directă către aplicația WhatsApp. Prin apăsarea butonului "Trimite pe WhatsApp", sunteți de acord ca mesajul generat să fie procesat prin intermediul infrastructurii Meta Platforms, Inc. Vă recomandăm să consultați politica de confidențialitate WhatsApp pentru detalii despre cum gestionează ei datele.</p>

							<h3>4. Stocarea Datelor</h3>
							<p>Nu stocăm datele dvs. în baze de date pe serverul acestui site web. Informațiile sunt păstrate exclusiv în arhiva noastră de comunicare (telefonul clinicii) și în fișa de pacient (dacă alegeți să începeți un tratament la noi).</p>

							<h3>5. Drepturile Dvs.</h3>
							<p>Aveți dreptul de a solicita accesul, rectificarea sau ștergerea datelor dvs. personale din evidențele noastre. Pentru a exercita aceste drepturi, ne puteți contacta telefonic la numărul afișat pe site.</p>
						  </>
						}
					  />
					} />

					<Route path="/cookies" element={
					  <PaginaLegala 
						titlu="Politică de utilizare Cookie-uri" 
						dataActualizare="Aprilie 2026"
						continut={
						  <>
							<h3>1. Ce sunt cookie-urile?</h3>
							<p>Un "cookie" este un fișier text de mici dimensiuni pe care un site web îl salvează pe calculatorul sau dispozitivul dumneavoastră mobil atunci când îl vizitați. Acesta permite site-ului să își amintească acțiunile și preferințele dvs. pentru o anumită perioadă de timp.</p>

							<h3>2. Cum folosim cookie-urile?</h3>
							<p>În prezent, site-ul Dentis Center folosește exclusiv <strong>Cookie-uri Strict Necesare</strong>. Acestea sunt esențiale pentru buna funcționare a site-ului web (de exemplu, pentru a asigura navigarea corectă între pagini sau pentru securitate). Aceste cookie-uri nu colectează informații care ar putea fi folosite pentru marketing și nu pot fi dezactivate.</p>
							
							<p><em>Notă: Acest site nu folosește module cookie de urmărire agresivă sau piese terțe de analiză (cum ar fi Google Analytics sau Facebook Pixel) fără consimțământul dvs. explicit. Dacă în viitor vom integra astfel de tehnologii, veți fi întâmpinat de un banner dedicat pentru exprimarea acordului.</em></p>

							<h3>3. Controlul Cookie-urilor</h3>
							<p>Puteți controla și/sau șterge cookie-urile după cum doriți din setările browserului dumneavoastră web. Puteți șterge toate cookie-urile care sunt deja pe calculatorul dvs. și puteți seta majoritatea browserelor să împiedice plasarea acestora.</p>
						  </>
						}
					  />
					} />
					
				  </Routes>
				</main>

        {/* Footer fix pe toate paginile */}
        <Footer />

        {/* Buton Plutitor WhatsApp - Vizibil peste tot */}
        <a 
          href="https://wa.me/40752103861" 
          target="_top" 
          rel="noreferrer"
          className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-40 flex items-center justify-center"
          aria-label="Contact WhatsApp"
        >
          <MessageCircle size={28} />
        </a>

        {/* MODAL PROGRAMARE DINAMIC (2 PAȘI) */}
        {bookingModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm" 
              onClick={() => { setBookingModalOpen(false); setTimeout(() => setModalStep(1), 300); }}
            ></div>
            
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

                {/* PASUL 2: Formular Detalii */}
                {modalStep === 2 && (
                  <div className="animate-in slide-in-from-right-4 fade-in duration-300">
                    <button 
                      onClick={() => setModalStep(1)}
                      className="flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 mb-6 transition-colors"
                    >
                      <ChevronLeft size={16} className="mr-1" /> Înapoi
                    </button>
                    
                    <h3 className="text-2xl font-light text-zinc-900 mb-2">Aproape gata!</h3>
                    <p className="text-zinc-500 mb-6">Ai ales: <strong className="text-zinc-800">{formData.serviciu}</strong>. Ne mai trebuie numele tău.</p>

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
                          placeholder="Ai o durere specifică?"
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
    </Router>
  );
};

export default App;