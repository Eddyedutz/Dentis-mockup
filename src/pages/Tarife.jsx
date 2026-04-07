import React, { useEffect } from 'react';
import { ArrowRight, Shield, CreditCard, Wallet, CheckCircle2, Info } from 'lucide-react';

const Tarife = ({ setBookingModalOpen }) => {
  // Ne asigurăm că pagina se deschide mereu de sus
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pricingData = [
    {
      category: "Consultație & Profilaxie",
      items: [
        { name: "Consultație medic specialist & Plan de tratament", price: "250 RON" },
        { name: "Radiografie panoramică digitală", price: "150 RON" },
        { name: "Pachet igienizare completă (Detartraj + Periaj + AirFlow)", price: "350 RON" },
        { name: "Fluorizare ambele arcade", price: "150 RON" },
      ]
    },
    {
      category: "Odontoterapie (Tratamentul Carii)",
      items: [
        { name: "Obturație (plombă) compozit - o suprafață", price: "250 RON" },
        { name: "Obturație compozit - două suprafețe", price: "300 RON" },
        { name: "Reconstrucție coronară complexă", price: "400 RON" },
        { name: "Tratament de urgență (drenaj/calmant)", price: "200 RON" },
      ]
    },
    {
      category: "Estetică Dentară & Protetică",
      items: [
        { name: "Albire dentară profesională Laser (în cabinet)", price: "1200 RON" },
        { name: "Fațetă dentară ceramică E-max (per dinte)", price: "1800 RON" },
        { name: "Coroană dentară Zirconiu", price: "1400 RON" },
        { name: "Coroană dentară metalo-ceramică", price: "850 RON" },
      ]
    },
    {
      category: "Chirurgie & Implantologie",
      items: [
        { name: "Extracție dinte monoradicular", price: "250 RON" },
        { name: "Extracție molar de minte (erupt/semiinclus)", price: "450 RON" },
        { name: "Implant dentar Premium Titan (partea chirurgicală)", price: "de la 3000 RON" },
        { name: "Adiție de os (per gram)", price: "1500 RON" },
      ]
    },
    {
      category: "Ortodonție",
      items: [
        { name: "Consultație ortodontică", price: "200 RON" },
        { name: "Aparat dentar metalic (per arcadă)", price: "2500 RON" },
        { name: "Aparat dentar ceramic/safir (per arcadă)", price: "3500 RON" },
        { name: "Set alignere invizibile (Invisalign / Spark)", price: "de la 15000 RON" },
      ]
    }
  ];

  return (
    <div className="w-full bg-white pb-24">
      {/* Header-ul Paginii */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-light text-zinc-900 mb-6">Lista de Tarife</h1>
        <p className="text-lg text-zinc-500 leading-relaxed">
          Credem în transparență totală. Prețurile afișate sunt orientative, costul final și etapele vor fi detaliate într-un plan de tratament personalizat în urma consultației.
        </p>
      </div>

      {/* Tabelul de prețuri detaliat */}
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <div className="bg-white rounded-[2.5rem] shadow-xl border border-zinc-100 overflow-hidden">
          {pricingData.map((section, idx) => (
            <div key={idx} className="border-b border-zinc-200 last:border-0">
              {/* Titlul Categoriei */}
              <div className="bg-zinc-50 px-6 md:px-10 py-5 border-b border-zinc-200 flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-[#a8e4a0]"></div>
                <h3 className="text-xl font-bold text-zinc-900">{section.category}</h3>
              </div>
              
              {/* Elementele din categorie */}
              <div className="divide-y divide-zinc-100">
                {section.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-center px-6 md:px-10 py-5 hover:bg-[#a8e4a0]/5 transition-colors gap-4">
                    <span className="text-zinc-600 flex-1 leading-snug">{item.name}</span>
                    <span className="font-medium text-zinc-900 bg-white shadow-sm border border-zinc-200 px-4 py-2 rounded-xl whitespace-nowrap text-sm">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Notă informativă sub tabel */}
        <div className="mt-6 flex items-start space-x-3 px-4 text-zinc-500 text-sm">
          <Info size={18} className="shrink-0 text-zinc-400 mt-0.5" />
          <p>Tratamentele complexe beneficiază de reduceri sub forma pachetelor promoționale. Cereți medicului curant detaliile financiare la finalul consultației inițiale.</p>
        </div>
      </div>

      {/* Secțiune: Modalități de plată & Încredere */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100 text-center">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Shield size={32} className="text-[#84c97c]" />
            </div>
            <h4 className="text-xl font-bold text-zinc-900 mb-3">Garanția Calității</h4>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Folosim materiale premium certificate și oferim certificat de garanție pentru lucrările protetice și implanturi.
            </p>
          </div>

          <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100 text-center">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
              <CreditCard size={32} className="text-[#84c97c]" />
            </div>
            <h4 className="text-xl font-bold text-zinc-900 mb-3">Plata cu Cardul</h4>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Acceptăm plata cu orice card bancar de debit sau credit (Visa, Mastercard), direct la recepția clinicii.
            </p>
          </div>

          <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100 text-center">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Wallet size={32} className="text-[#84c97c]" />
            </div>
            <h4 className="text-xl font-bold text-zinc-900 mb-3">Plata în Rate</h4>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Pentru planurile complexe de tratament, oferim posibilitatea plății eșalonate prin partenerii noștri financiari.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Final */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-[#a8e4a0]/20 border border-[#a8e4a0]/40 rounded-[3rem] p-12 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-light text-zinc-900 mb-6">Ești pregătit pentru primul pas?</h2>
            <p className="text-zinc-700 mb-10 max-w-lg mx-auto">
              Programează-te acum pentru o consultație de specialitate și află exact de ce tratamente ai nevoie.
            </p>
            <button 
              onClick={() => setBookingModalOpen(true)}
              className="bg-zinc-900 text-white px-8 py-5 rounded-2xl font-medium hover:bg-zinc-800 transition-all inline-flex items-center space-x-3 shadow-lg hover:shadow-xl"
            >
              <span>Vreau o programare</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Tarife;