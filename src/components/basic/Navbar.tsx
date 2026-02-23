import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="fixed w-full z-50 top-0 left-0 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <a className="flex items-center gap-2" href="#">
                <div className="w-14 h-14 flex items-center justify-center">
                  <img src={logo} />
                </div>
                <span className="font-heading font-bold text-2xl text-primaryDark">
                  CEREFA
                </span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                className="text-text hover:text-primary transition-colors font-medium"
                href="#nosotros"
              >
                Nosotros
              </a>
              <a
                className="text-text hover:text-primary transition-colors font-medium"
                href="#servicios"
              >
                Servicios
              </a>
              <a
                className="text-text hover:text-primary transition-colors font-medium"
                href="#equipo"
              >
                Equipo
              </a>
              <a
                className="bg-secondary hover:bg-secondaryHover text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-secondary/20 transform hover:-translate-y-0.5"
                href="#contacto"
              >
                Contacto
              </a>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-text hover:text-primary focus:outline-none"
              >
                <Menu className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a
                className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg"
                href="#nosotros"
              >
                Nosotros
              </a>
              <a
                className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg"
                href="#servicios"
              >
                Servicios
              </a>
              <a
                className="block px-3 py-3 text-base font-bold text-secondary hover:bg-blue rounded-lg"
                href="#contacto"
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
