import { MapPin, Mail, Phone, Users } from "lucide-react";

export const Cards = () => {
  return (
    <>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
          <MapPin className="w-6 h-6" />
        </div>
        <h3 className="font-bold text-textDark mb-2">Visítanos</h3>
        <p className="text-text text-sm">
          calle federico velasquez #72, Santo Domingo, Rep. Dom.
        </p>
      </div>
      {/* Tarjeta de Correo */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-4">
          <Mail className="w-6 h-6" />
        </div>
        <h3 className="font-bold text-textDark mb-2">Escríbenos</h3>
        <p className="text-text text-sm break-all">
          carlosortizyuberes2809@gmail.com
          <br />
          felipeortiz.opx@gmail.com
        </p>
      </div>
      {/* Tarjeta de Teléfonos */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-4">
          <Phone className="w-6 h-6" />
        </div>
        <h3 className="font-bold text-textDark mb-2">Llámanos</h3>
        <p className="text-text text-sm">
          Psicología: 809-258-9240
          <br />
          Asesoría Legal: 809-870-8281
        </p>
      </div>
      {/* Tarjeta de WhatsApp Directo */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
          <Users className="w-6 h-6" />
        </div>
        <h3 className="font-bold text-textDark mb-2">Redes Sociales</h3>
        <a
          href="https://wa.me/18092589240"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline text-sm font-bold"
        >
          WhatsApp
        </a>
        <br />
        <a
          href="https://www.facebook.com/profile.php?id=100064932932544"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline text-sm font-bold"
        >
          Facebook
        </a>
      </div>
    </>
  );
};
