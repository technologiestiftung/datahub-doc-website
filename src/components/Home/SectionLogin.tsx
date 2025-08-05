import '../../css/tailwind.css';
import BlockboxSVG from '/img/blockbox.svg';

export default function HomepageLogin() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16">
      <div className="grid grid-cols-12 gap-[20px] items-center">
        <div className="order-2 lg:order-1 relative col-span-12 lg:col-span-6 max-w-[489px] md:max-w-none mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold lg:pt-6">
            Projekte umsetzen mit dem Data Hub
          </h2>
          <div className="text-base md:text-xl leading-6 md:leading-relaxed space-y-4">
            <p>
              Der Data Hub steht grundsätzlich allen Mitarbeitenden der Berliner
              Verwaltung offen. Über eine fein abgestufte Berechtigungssteuerung
              wird sichergestellt, dass Daten und Projekte jederzeit geschützt
              bleiben. Aktuell befindet sich der Data Hub in der
              Prototypenphase: Erste Pilotnutzende erhalten Zugang und erproben
              konkrete Anwendungsfälle. Diese Projekte werden koordiniert und
              fachlich begleitet, um Plattform und Begleitprozesse praxisnah
              weiterzuentwickeln.
            </p>
            <p>
              <strong>
                2025 läuft der Data Hub noch als Prototyp mit ausgewählten
                Pilotnutzenden der Berliner Verwaltung.
              </strong>
            </p>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="order-1 lg:order-2 col-span-12 lg:col-span-6">
          {' '}
          <div className="max-w-[495px] max-h-[495px] mx-auto">
            <BlockboxSVG></BlockboxSVG>
          </div>
        </div>
      </div>
    </section>
  );
}
