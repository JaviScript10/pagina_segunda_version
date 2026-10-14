export default function Hero() {
  return (
    <section id="inicio" className="relative flex items-center justify-center pt-28 pb-16 bg-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Transforma tu <span className="text-primary-600">Presencia Digital</span>
          </h1>
          <p className="text-lg sm:text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed font-bold">
            Creamos soluciones web modernas, rápidas y optimizadas para impulsar <br className="hidden sm:inline" />
            tu negocio. Desde landing pages hasta e-commerce completos.
          </p>
        </div>
      </div>
    </section>
  );
}
