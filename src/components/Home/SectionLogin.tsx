import '../../css/tailwind.css';

export default function HomepageLogin() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-16 py-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
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
        <div className="">
          <img src="/img/blockbox.svg" alt="bunte blöcke" />
        </div>
      </div>
    </section>
  );
}
