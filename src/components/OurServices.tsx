import { Activity, Brain, HeartHandshake, Scale } from "lucide-react";

export const OurServices = () => {
  return (
    <section id="servicios" className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-heading font-bold text-textDark mb-6">
          Nuestros Servicios
        </h2>

        <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Terapia */}
          <div className="flex items-center gap-2 text-xl font-bold text-gray-600">
            <Activity className="w-8 h-8" /> Terapia física y familiar
          </div>

          {/* Evaluaciones */}
          <div className="flex items-center gap-2 text-xl font-bold text-gray-600">
            <Brain className="w-8 h-8" /> Evaluaciones psicológicas y
            neuropsicológicas
          </div>

          {/* Cuidado Adultos Mayores */}
          <div className="flex items-center gap-2 text-xl font-bold text-gray-600">
            <HeartHandshake className="w-8 h-8" /> Cuidado de adultos mayores
            con demencia y ACV
          </div>

          {/* Asesoría Jurídica */}
          <div className="flex items-center gap-2 text-xl font-bold text-gray-600">
            <Scale className="w-8 h-8" /> Asesoría Jurídica
          </div>
        </div>
      </div>
    </section>
  );
};
