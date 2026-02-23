import { Cards } from "./basic/Cards";
import { Map } from "./basic/Map";
import { Form } from "./basic/Form";

export const ContactUs = () => {
  return (
    <section id="contacto" className="bg-background pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-textDark mb-4">
          Contáctanos
        </h2>
        <p className="text-xl text-text max-w-2xl mx-auto">
          ¿Tienes preguntas sobre nuestros programas o necesitas asesoría?
          Estamos aquí para ayudarte.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Cards />
            </div>
            <Map />
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};
