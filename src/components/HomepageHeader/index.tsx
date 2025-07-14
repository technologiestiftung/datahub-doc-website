import HomepageHeaderAnimation from '@site/src/components/HomepageHeaderAnimation';

export default function HomepageHeader() {
  return (
    <section className="relative w-full overflow-hidden py-32">
      <img
        src="img/header_cubes.svg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10"
      />

      <div className="absolute inset-0 z-10">
        <HomepageHeaderAnimation />
      </div>

      {/* Content layer is relative so it defines height */}
      <div className="relative z-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Data Hub Berlin
        </h1>
        <p className="text-xl md:text-2xl font-medium">
          Modulare Open Source Dateninfrastruktur für die Berliner Verwaltung
        </p>
      </div>
    </section>
  );
}
