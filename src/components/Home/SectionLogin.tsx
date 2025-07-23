import '../../css/tailwind.css';
import BlockboxSVG from '/img/blockbox.svg';

export default function HomepageLogin() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16  py-6">
      <div className="grid grid-cols-12 gap-[20px] items-center">
        <div className="relative col-span-12 lg:col-span-6 max-w-[489px] md:max-w-none mx-auto">
          <h3 className="md:text-2xl font-bold">Zugang zum Data Hub</h3>
          <div className="text-lg leading-relaxed space-y-4">
            <p>
              Der Data Hub steht grundsätzlich allen Mitarbeitenden der Berliner
              Verwaltung offen. Über eine fein abgestufte
              Berechtigungs-steuerung wird sichergestellt, dass Daten und
              Projekte jederzeit geschützt bleiben. Aktuell befindet sich der
              Data Hub in der Prototypenphase: Erste Pilotnutzende erhalten
              Zugang und erproben konkrete Anwendungsfälle. Diese Projekte
              werden koordiniert und fachlich begleitet, um Plattform und
              Begleitprozesse praxisnah weiterzuentwickeln.
            </p>
            <p className="font-bold text-berlin-purple">
              2025 läuft der Data Hub noch als Pilotprojekt.{' '}
            </p>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="col-span-12 lg:col-span-6">
          {' '}
          <div className="max-w-[495px] mx-auto">
            <BlockboxSVG></BlockboxSVG>
          </div>
        </div>
      </div>
    </section>
  );
}
