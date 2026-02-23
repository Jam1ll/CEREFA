import { Facebook } from "lucide-react";
import logo from "../../assets/logo.png";

export const Footer = () => {
  return (
    <>
      <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <a className="flex items-center gap-2 mb-6" href="#">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img src={logo} />
                </div>
                <span className="font-heading font-bold text-2xl text-primaryDark">
                  CEREFA
                </span>
              </a>
              <p className="text-text max-w-md mb-6">
                Asociación sin fines de lucro dedicada a la rehabilitación
                neurocognitiva, terapia física y asesoría jurídica.
              </p>
              <div className="flex space-x-4">
                <a
                  className="text-gray-400 hover:text-primary transition-colors"
                  href="https://www.facebook.com/profile.php?id=100064932932544"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
            {/* Aquí puedes agregar más columnas del footer si lo deseas */}
          </div>
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 CEREFA. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Hecho por JGF
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
