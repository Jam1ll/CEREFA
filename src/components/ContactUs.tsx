import { MapPin, Mail, Phone, Users } from "lucide-react";

export const ContactUs = () => {
  return (
    <section id="contacto" className="bg-background pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-textDark mb-4">
          Ponte en Contacto
        </h2>
        <p className="text-xl text-text max-w-2xl mx-auto">
          ¿Tienes preguntas sobre nuestros programas o necesitas asesoría?
          Estamos aquí para ayudarte.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Columna Izquierda: Tarjetas de Info y Mapa */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Tarjeta de Ubicación */}
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
            </div>
            {/* Placeholder del Mapa (Opcional, lo dejé por si quieren agregar su ubicación de Google Maps) */}
            <div className="bg-gray-200 rounded-2xl h-64 w-full flex items-center justify-center text-gray-400 relative overflow-hidden group cursor-pointer">
              <div className="relative z-10 bg-white/90 backdrop-blur px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8389744983406!2d-69.89597582480906!3d18.490951682596847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf88450faeb867%3A0x37d2ac8aab48ecca!2sC.%20Federico%20Velasquez%2072%2C%20Santo%20Domingo%2010306!5e0!3m2!1ses-419!2sdo!4v1771803181670!5m2!1ses-419!2sdo"
                  width="600"
                  height="800"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario de Contacto */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-heading font-bold text-textDark mb-6">
              Envíanos un Mensaje
            </h3>

            <form
              action="https://formsubmit.co/jamilguzman202@gmail.com"
              method="POST"
              className="space-y-6"
            >
              <input
                type="hidden"
                name="_subject"
                value="Nuevo mensaje desde la página web de CEREFA!"
              />
              <input type="hidden" name="_captcha" value="false" />{" "}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-textDark mb-2">
                    Nombre(s)
                  </label>
                  <input
                    name="Nombre"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Juan"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-textDark mb-2">
                    Apellido(s)
                  </label>
                  <input
                    name="Apellido"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Pérez"
                    type="text"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-textDark mb-2">
                  Correo Electrónico
                </label>
                <input
                  name="Email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="juan@ejemplo.com"
                  type="email"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-textDark mb-2">
                  Motivo de Consulta
                </label>
                <select
                  name="Motivo"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                >
                  <option>Información General</option>
                  <option>Evaluación Psicológica</option>
                  <option>Terapia Familiar / Adicciones</option>
                  <option>Asesoría Jurídica</option>
                  <option>Cuidado de Adultos Mayores</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-textDark mb-2">
                  Mensaje
                </label>
                <textarea
                  name="Descripcion"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="¿En qué podemos ayudarte?"
                  rows={4}
                ></textarea>
              </div>
              <button
                className="w-full bg-primary hover:bg-primaryDark text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-primary/30"
                type="submit"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
