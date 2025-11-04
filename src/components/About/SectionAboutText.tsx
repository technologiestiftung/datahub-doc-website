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
            Der Hintergrund:
            <br />
            Fest verankert in Berlins Smart City-Strategie
          </h3>
          <p className="text-md md:text-lg">
            Der Aufbau des Data Hub ist keine neue Einzelinitiative, sondern ein
            seit vielen Jahren diskutiertes und angestrebtes Vorhaben. Initiiert
            wurde der Data Hub Berlin von der Senatskanzlei Berlin auf Basis der
            Richtlinien der Berliner Regierungspolitik. Verankert ist er auch
            als zentrale Maßnahme in der Digitalstrategie des Landes „Gemeinsam
            Digital: Berlin“, mit dem Ziel eine übergreifende, moderne und
            effiziente Dateninfrastruktur zu schaffen. Eine zentrale Anforderung
            ist, dass der Data Hub Berlin durch eine moderne Architektur und
            klare Governance die bestehende IT-Landschaft Berlins ergänzt und
            datengetriebene Prozesse nachhaltig und nutzerorientiert fördert.
          </p>{' '}
          <h3 className="text-1xl md:text-3xl font-bold pt-6 lg:pt-2">
            Über die Pilotphase:
            <br />
            Praxisnah Anforderungen explorieren mit dem Prototypen
          </h3>
          <p className="text-md md:text-lg">
            Die Entwicklung eines so umfassenden IT-Infrastrukturprojektes
            erfordert agile Prozesse und eine enge Zusammenarbeit mit der
            Praxis. In einer Pilotphase wird der Data Hub zunächst prototypisch
            aufgebaut. Diese frühe Version wird gezielt getestet, erprobt und
            kontinuierlich weiterentwickelt. So lassen sich alle Anforderungen
            für eine spätere Verstetigung und den Produktivbetrieb
            identifizieren. Dabei werden sowohl technische als auch
            organisatorische Rahmenbedingungen betrachtet, um nachhaltige
            Mehrwerte für ein breites Spektrum an Nutzenden zu schaffen. Der
            Prototyp steht ausgewählten Pilotnutzenden aus der Berliner
            Verwaltung zur Verfügung. Gemeinsam werden derzeit reale
            Datenprojekte umgesetzt, um die Plattform praxisnah zu testen und
            weiterzuentwickeln.
          </p>
          <h3 className="text-1xl md:text-3xl font-bold pt-6 lg:pt-2">
            Über das Team:
            <br />
            Technologiestiftung Berlin und Berliner Senatskanzlei
          </h3>
          <p className="text-md md:text-lg">
            Die Pilotphase des Data Hub wird von der Technologiestiftung Berlin
            und der Berliner Senatskanzlei partnerschaftlich koordiniert. Die
            Technologiestiftung Berlin begleitet die Pilotprojekte fachlich und
            organisatorisch, setzt diese gemeinsam mit den Pilotnutzenden um und
            betreibt den Prototypen in Zusammenarbeit mit einem technischen
            Dienstleister. Als gesamtstädtische Plattform lebt der Data Hub aber
            von der Mitwirkung vieler: In der AG Data Hub bringen sich
            Senatsverwaltungen und Bezirksämter ein und auch die Pilotnutzenden
            kommen aus verschiedenen Bereichen der Berliner Verwaltung. Parallel
            zur Pilotphase bereitet die Senatskanzlei die Verstetigung des Data
            Hub als dauerhafte Dateninfrastruktur für das Land Berlin vor.
          </p>
          <p className="text-md md:text-lg">
            Weitere Informationen finden sich im Wissensspeicher und im FAQ.
          </p>
          <Button label="Zum Wissensspeicher" slug="/docs/willkommen"></Button>
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
