import quienesSomos from "../assets/logo.png";

export const WhoWheAre = () => {
  return (
    <section id="nosotros" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl transform -rotate-2 -z-10"></div>
            <img
              className="rounded-2xl shadow-xl w-full object-cover"
              alt="Terapia y recuperación en CEREFA"
              src={quienesSomos}
            />
          </div>

          <div>
            <h2 className="text-4xl font-heading font-bold text-textDark mb-6">
              Quiénes Somos
            </h2>
            <p className="text-lg text-text mb-6 leading-relaxed">
              El Centro de Recuperación Familiar y Adicciones (CEREFA) es una
              asociación sin fines de lucro dedicada a brindar apoyo integral.
              Nos especializamos en el trabajo con trastornos mentales,
              adicciones a las drogas y terapia familiar.
            </p>
            <p className="text-lg text-text mb-6 leading-relaxed">
              Vamos directamente a las casas a través de nuestros programas
              ambulatorios. Ofrecemos evaluaciones y programas de
              rehabilitación, brindando seguimiento directo a los pacientes y
              asesoría jurídica a sus familiares.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
