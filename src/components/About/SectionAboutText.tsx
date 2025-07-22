import '../../css/tailwind.css';
import { Button } from '@site/src/components/UI/Button';

export default function SectionAboutText() {
  return (
    <section className="w-full md:py-12 px-16 py-6">
      <div className="max-w-7xl ">
        <div className="col-span-12 max-w-[489px] lg:max-w-[873px] max-w-[489px] mx-auto lg:mx-0">
          <h1 className="pt-12 text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Über den Data Hub
          </h1>
          <h3 className="md:text-2xl font-normal mb-8">
            Mit dem Data Hub wird eine zentrale, urbane Datenplattform für das
            Land Berlin bereitgestellt. Erfahre mehr über die Pilotphase, die
            Hintergründe und die Personen hinter dem Data Hub.
          </h3>
          <h3 className="md:text-2xl font-bold">
            Urbane Datenplattform – fest verankert in Berlins Smart
            City-Strategie
          </h3>
          <p>
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
          <h3 className="md:text-2xl font-bold">
            Prototyp – praxisnah Anforderungen explorieren in der Pilotphase
          </h3>
          <p>
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
          <h3 className="md:text-2xl font-bold">
            Teamarbeit – Technologiestiftung Berlin und Berliner Senatskanzlei
          </h3>
          <p>
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
      </div>
    </section>
  );
}
