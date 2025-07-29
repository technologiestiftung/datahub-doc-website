import '../../css/tailwind.css';
import AboutBlockSVG from '/img/cubes_ueber_projekt_6pt.svg';

export default function SectionAboutText() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16  py-6">
      <div className="grid grid-cols-12 gap-[20px] items-center">
        <div className="relative col-span-12 lg:col-span-9 max-w-[489px] md:max-w-none mx-auto">
          <h1 className="pt-12 text-6xl lg:text-8xl font-bold mb-6 leading-tight">
            Über den Data Hub
          </h1>
          <h3 className="text-xl md:text-3xl font-normal mb-8">
            Mit dem Data Hub wird eine zentrale, urbane Datenplattform für das
            Land Berlin bereitgestellt. Erfahre mehr über die Pilotphase, die
            Hintergründe und die Personen hinter dem Data Hub.
          </h3>
          <h3 className="text-2xl md:text-5xl font-bold pt-2">
            Urbane Datenplattform – fest verankert in Berlins Smart
            City-Strategie
          </h3>
          <p className="text-md md:text-lg">
            Der Aufbau des Data Hubs ist keine neue Einzelinitiative, sondern
            eine seit einigen Jahren angestrebte und zentrale Maßnahme der
            Strategie „Gemeinsam Digital: Berlin“. Er baut auf den langfristigen
            Zielen der Berliner Verwaltung auf, eine übergreifende, moderne und
            effiziente Dateninfrastruktur zu schaffen. Dabei vernetzt er interne
            Verwaltungsdaten mit öffentlichen Open Data-Angeboten und
            unterstützt die Zusammenarbeit innerhalb der Verwaltung, aber auch
            mit Akteur:innen der Wirtschaft, Wissenschaft und Zivilgesellschaft.
            Durch moderne Architektur und klare Governance soll der Data Hub die
            bestehende IT-Landschaft Berlins ergänzen und datengetriebene
            Prozesse nachhaltig und nutzerorientiert fördern.
          </p>{' '}
          <h3 className="text-2xl md:text-5xl font-bold pt-2">
            Prototyp – praxisnah Anforderungen explorieren in der Pilotphase
          </h3>
          <p className="text-md md:text-lg">
            Die Entwicklung eines so umfassenden IT-Infrastrukturprojektes
            erfordert agile Prozesse und eine enge Zusammenarbeit mit der
            Praxis. In einer Pilotphase wurde der Data Hub daher prototypisch
            aufgebaut, um konkrete Anwendungsfälle aus der Berliner Verwaltung
            umzusetzen und die Plattform bedarfsgerecht weiterzuentwickeln.
            Dabei werden sowohl technische als auch organisatorische
            Rahmenbedingungen erprobt, um nachhaltige Mehrwerte für ein breites
            Spektrum an Nutzenden zu schaffen. Der Prototyp steht Pilotnutzenden
            aus der Berliner Verwaltung zur Verfügung. Gemeinsam werden derzeit
            reale Datenprojekte umgesetzt, um die Plattform praxisnah zu testen
            und weiterzuentwickeln.
          </p>
          <h3 className="text-2xl md:text-5xl font-bold pt-2">
            Teamarbeit – Technologiestiftung Berlin und Berliner Senatskanzlei
          </h3>
          <p className="text-md md:text-lg">
            Die Pilotphase des Data Hubs wird von der Technologiestiftung Berlin
            und der Berliner Senatskanzlei partnerschaftlich koordiniert. Die
            Technologiestiftung begleitet die Pilotprojekte fachlich und
            organisatorisch, setzt diese gemeinsam mit den Pilotnutzenden um und
            betreibt den Prototypen in Zusammenarbeit mit einem technischen
            Dienstleister. Als gesamtstädtische Plattform lebt der Data Hub aber
            von der Mitwirkung vieler: In der AG Data Hub bringen sich
            Senatsverwaltungen und Bezirksämter ein und auch die Pilotnutzenden
            kommen aus verschiedenen Bereichen der Berliner Verwaltung. Parallel
            zur Pilotphase bereitet die Senatskanzlei die Verstetigung des Data
            Hubs als dauerhafte Dateninfrastruktur für das Land Berlin vor.
          </p>
        </div>
        {/* Right Side - Text Content */}
        <div className="lg:col-span-2 hidden lg:block">
          {' '}
          <div className="max-w-[495px] mx-auto">
            <AboutBlockSVG></AboutBlockSVG>
          </div>
        </div>
      </div>
    </section>
  );
}
