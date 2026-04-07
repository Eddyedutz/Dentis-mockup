import React, { useEffect } from 'react';

const PaginaLegala = ({ titlu, dataActualizare, continut }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [titlu]);

  return (
    <div className="w-full bg-white pb-24">
      {/* Header Simplu */}
      <div className="bg-zinc-50 pt-20 pb-16 mb-16 border-b border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-light text-zinc-900 mb-4">{titlu}</h1>
          <p className="text-zinc-500">Ultima actualizare: {dataActualizare}</p>
        </div>
      </div>

      {/* Corpul de Text */}
      <div className="max-w-3xl mx-auto px-6 prose prose-zinc prose-a:text-[#60a855] text-zinc-600">
        {continut}
      </div>
    </div>
  );
};

export default PaginaLegala;