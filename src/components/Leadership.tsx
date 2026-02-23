import foto1 from "../assets/images/foto1.jpg";

export const Leadership = () => {
  return (
    <section id="equipo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-textDark mb-6">
            Nuestro Equipo Profesional
          </h2>
          <p className="text-xl text-text max-w-2xl mx-auto">
            Especialistas con vocación de servicio, comprometidos con la salud
            mental, la rehabilitación y el apoyo legal a las familias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Tarjeta 1: Carlos Ortiz */}
          <div className="text-center group bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all">
            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-primary transition-colors">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                alt="Lic. Carlos Ortiz"
                src={foto1}
              />
            </div>
            <h3 className="text-2xl font-bold text-textDark">
              Lic. Carlos Ortiz
            </h3>
            <p className="text-primary font-medium mb-4">
              Psicólogo Clínico y Neuropsicólogo
            </p>
            <p className="text-text text-sm px-4 mb-6">
              Terapeuta familiar especializado en trastornos mentales, demencia,
              accidentes cerebrovasculares y rehabilitación de adicciones a
              drogas.
            </p>
            <div className="text-sm text-gray-500 flex flex-col items-center gap-1">
              <span className="flex items-center gap-2">📞 809-258-9240</span>
              <span className="flex items-center gap-2">
                ✉️ carlosortizyuberes2809@gmail.com
              </span>
            </div>
          </div>

          {/* Tarjeta 2: Felipe Ortiz */}
          <div className="text-center group bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all">
            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-primary transition-colors">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                alt="Lic. Felipe Ortiz"
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
              />
            </div>
            <h3 className="text-2xl font-bold text-textDark">
              Lic. Felipe Ortiz
            </h3>
            <p className="text-primary font-medium mb-4">
              Abogado / Consultor Jurídico
            </p>
            <p className="text-text text-sm px-4 mb-6">
              Encargado de proporcionar acompañamiento legal y asesoría jurídica
              directa a los familiares de los pacientes en rehabilitación.
            </p>
            <div className="text-sm text-gray-500 flex flex-col items-center gap-1">
              <span className="flex items-center gap-2">📞 809-870-8281</span>
              <span className="flex items-center gap-2">
                ✉️ felipeortiz.opx@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
