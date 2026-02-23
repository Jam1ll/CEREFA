import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import niños_capotillo from "../assets/images/niños_capotillo.jpg";
import indigentes_cena from "../assets/images/indigentes_cena.jpg";
import charla_gente from "../assets/images/charla_gente.jpg";

export const OurWork = () => {
  const imagenes = [
    {
      id: 1,
      src: niños_capotillo,
    },
    {
      id: 2,
      src: indigentes_cena,
    },
    {
      id: 3,
      src: charla_gente,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? imagenes.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === imagenes.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section id="nuestro-trabajo" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-textDark mb-6">
            Nuestras Acciones
          </h2>
          <p className="text-xl text-text max-w-2xl mx-auto">
            Un vistazo a nuestra razón de ser
          </p>
        </div>

        {/* Contenedor Principal del Carrusel */}
        <div className="max-w-4xl mx-auto relative group">
          {/* Imagen Actual */}
          <div
            className="w-full h-[400px] md:h-[500px] rounded-2xl bg-center bg-cover transition-all duration-500 shadow-xl relative overflow-hidden"
            style={{ backgroundImage: `url(${imagenes[currentIndex].src})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-2xl font-bold mb-2"></h3>
              <p className="text-gray-200"></p>
            </div>
          </div>

          {/* Botón Flecha Izquierda */}
          <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer hover:bg-black/60 transition-all backdrop-blur-sm">
            <ChevronLeft onClick={prevSlide} className="w-8 h-8" />
          </div>

          {/* Botón Flecha Derecha */}
          <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer hover:bg-black/60 transition-all backdrop-blur-sm">
            <ChevronRight onClick={nextSlide} className="w-8 h-8" />
          </div>

          {/* Indicadores*/}
          <div className="flex justify-center mt-6 gap-2">
            {imagenes.map((slide, slideIndex) => (
              <div
                key={slide.id}
                onClick={() => goToSlide(slideIndex)}
                className={`transition-all duration-300 h-3 rounded-full cursor-pointer shadow-sm ${
                  currentIndex === slideIndex
                    ? "bg-primary w-8"
                    : "bg-gray-300 w-3 hover:bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
