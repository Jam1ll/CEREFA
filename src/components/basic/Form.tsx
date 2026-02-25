export const Form = () => {
  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
      <h3 className="text-2xl font-heading font-bold text-textDark mb-6">
        Envíanos un Mensaje
      </h3>

      <form
        action="https://formsubmit.co/carlosortizyuberes2809@gmail.com"
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
  );
};
