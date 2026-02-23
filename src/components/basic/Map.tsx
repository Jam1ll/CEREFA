export const Map = () => {
  return (
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
  );
};
