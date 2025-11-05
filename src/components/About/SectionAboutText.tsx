import '../../css/tailwind.css';
import AboutBlockSVG from '/img/cubes_ueber_projekt_6pt.svg';
import { Button } from '@site/src/components/UI/Button';

export default function SectionAboutText() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-12 lg:py-6">
      <div className="grid grid-cols-12 gap-[20px] items-center">
        <div className="relative col-span-12 lg:col-span-9 max-w-[489px] md:max-w-none mx-auto">
          <h1 className="text-3xl md:text-6xl lg:text-6xl font-bold mb-4">
            Über den Data Hub Berlin
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-normal">
            Mit dem Data Hub entsteht eine zentrale Datenplattform für das Land
            Berlin. Der Prototyp legt den Grundstein für ein vernetztes
            Datenmanagement und neue datenbasierte Lösungen.
          </p>
          <h3 className="text-1xl md:text-3xl font-bold pt-6 lg:pt-2">
            Der Hintergrund
            {/* <br />
            Fest verankert in der Strategie Gemeinsam Digital: Berlin */}
          </h3>
          <p className="text-md md:text-lg">
            Der Aufbau des Data Hub ist eine seit einigen Jahren angestrebte und
            zentrale Maßnahme der Strategie „Gemeinsam Digital: Berlin“
            entsprechend der Richtlinien der Berliner Regierungspolitik mit dem
            Ziel eine übergreifende, moderne und effiziente Dateninfrastruktur
            zu schaffen. Eine zentrale Anforderung ist, dass der Data Hub Berlin
            durch eine moderne Architektur und klare Governance die bestehende
            IT-Landschaft Berlins ergänzt und datengetriebene Prozesse
            nachhaltig und nutzendenorientiert fördert.
          </p>{' '}
          <h3 className="text-1xl md:text-3xl font-bold pt-6 lg:pt-2">
            Über die Pilotphase
            {/* <br />
            Praxisnah Anforderungen explorieren mit dem Prototypen */}
          </h3>
          <p className="text-md md:text-lg">
            Die Entwicklung eines so umfassenden IT-Infrastrukturprojektes
            erfordert agile Prozesse und eine enge Zusammenarbeit mit der
            Praxis. Seit April 2025 steht der Data Hub als prototypische Instanz
            zur Verfügung. Mit echten Datenprojekten der Berliner Verwaltung
            werden Funktionen, Prozesse und Rahmenbedingungen geprüft. So lässt
            sich erkennen, welche technischen und organisatorischen
            Anforderungen für einen Regelbetrieb notwendig sind.
          </p>
          <h3 className="text-1xl md:text-3xl font-bold pt-6 lg:pt-2">
            Über das Team
            {/* <br />
            Technologiestiftung Berlin und Berliner Senatskanzlei */}
          </h3>
          <p className="text-md md:text-lg">
            Aktuell wird die Pilotphase durch die Abteilung CityLab der
            Technologiestiftung Berlin im Rahmen einer Zuwendung der
            Senatskanzlei Berlin getestet. Die Technologiestiftung begleitet die
            Pilotprojekte organisatorisch und übernimmt einen Großteil der
            technischen Umsetzung. Als gesamtstädtische Plattform lebt der Data
            Hub von der Mitwirkung vieler: Senatsverwaltungen, Bezirksämter und
            Nutzende aus verschiedenen Bereichen der Verwaltung bringen sich
            ein. Parallel bereitet die Senatskanzlei die Verstetigung des Data
            Hubs als dauerhafte städtische Dateninfrastruktur vor.
          </p>
          <p className="text-md md:text-lg pt-6 pb-2">
            Weitere Informationen finden sich im Wissensspeicher und im FAQ.
          </p>
          <Button label="Zum Wissensspeicher" slug="/docs/intro"></Button>
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
