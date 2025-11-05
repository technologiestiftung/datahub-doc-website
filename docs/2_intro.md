---
title: Einführung zum Data Hub
hide_title: true
sidebar_position: 2
description: Dies ist der zentrale Wissensspeicher des prototypischen Data Hub Berlins, der urbanen Datenplattform der Berliner Verwaltung. Hier findest du Informationen zu Hintergründen, Aufbau und Anwendungsfällen der Plattform.
---
import React from 'react';
import styles from './docs.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import './tabs-custom.css';

import { BookOpenIcon, Cog6ToothIcon, PuzzlePieceIcon, BuildingLibraryIcon, LightBulbIcon } from '@heroicons/react/24/solid';
import { DocumentTextIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

<div className={styles.doccontainer}>

  <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-12 xl:pl-16 pt-16">
    <div>
      <h1>Einführung zum<br /> Data Hub Berlin</h1>
      <p className="text-lg">
        Daten sind die Grundlage für gutes Verwaltungshandeln, Planung und Innovation. Hier erfährst du, wie der Data Hub Berlin im Rahmen der bestehenden Strategien angesiedelt ist, wie er eine gemeinsame, offene Infrastruktur aufbaut und wie durch einen prototypischen Ansatz erste Anwendungsfälle erprobt werden.
      </p>
    </div>
        <div className={styles.heroimage}>
      <img src="/img/wissen.svg" alt="Wissensspeicher Logo" />
    </div>
  </div>


## Was ist der Data Hub Berlin?

Von der Visualisierung über Statistiken und interne digitale Monitoringberichte bis hin zu Kartenanwendungen: In der Berliner Verwaltung gibt es eine Vielzahl an datenbasierten Aufgaben. Mit dem Data Hub Berlin entsteht eine ressortübergreifende, zentrale Infrastruktur für die Berliner Verwaltung, um effizient mit Daten arbeiten zu können. Erstmalig kann die Verwaltung somit auf passgenaue Software-Komponenten zurückgreifen, mit denen sich Daten verarbeiten und visualisieren lassen, zum Beispiel in Form von Dashboards. Der Data Hub Berlin ebnet damit den Weg zu einer datengetriebenen Verwaltung. Er soll langfristig den zentralen Knotenpunkt für die bestehenden dezentralen Systeme der Stadt bilden und die bestehende IT-Landschaft Berlins ergänzen.

Derzeit erarbeitet ein Kompetenzteam der Technologiestiftung Berlin und der Senatskanzlei Berlin eine prototypische Variante des Data Hub und verschiedene Anwendungsfälle, um die vielfältigen Möglichkeiten dieser Infrastruktur besser zu verstehen, zu erproben und einen Echtbetrieb bestmöglich vorzubereiten. 

### Eine urbane Datenplattform für Berlin

Beim Data Hub Berlin handelt es sich um eine sogenannte urbane Datenplattform. Viele Kommunen und Städte betreiben oder entwickeln derzeit urbane Datenplattformen, z.B. Potsdam, Bonn, Frankfurt und Hamburg. Dafür setzen sie teils auf bereits etablierte Lösungen oder Eigenentwicklungen. 

Urbane Datenplattfomen bilden eine zentrale Infrastruktur, die Daten aus verschiedenen Quellen einer Stadt oder Region bündeln, verknüpfen und zugänglich machen. Sie ermöglichen eine intelligente und datengestützte Stadtentwicklung, indem sie Kommunen helfen, Daten aus unterschiedlichen Fachbereichen und für unterschiedliche Zielgruppen (Verwaltung, Wirtschaft, Zivilgesellschaft) bereitzustellen und daraus nützliche Dienste und Analysen zu entwickeln.  

Mit dem Berliner Data Hub bestreitet nun auch das Land Berlin den Weg zur Etablierung einer urbanen Datenplattform. Der Data Hub-Prototyp fußt auf dem Open Source-Code und Architekturmodell des [CIVITAS/CORE](/docs/intro#die-architektur-des-civitascore-als-grundlage).

:::info

Was eine urbane Datenplattform leistet, ist über die DIN SPEC 91357:2017-12 festgehalten, allerdings sehr breit definiert. Das  Bundesinstitut für Bau-, Stadt- und Raumforschung (BBSR) hat in einer Veröffentlichung von 2025 die Funktionsweisen beschrieben und verschiedene bestehende Lösungen verglichen.  

<p className="text-right -mb-3">
[Mehr zu urbanen Datenplattformen in der Veröffentlichung des BBSR <ArrowTopRightOnSquareIcon className="h-5 w-5" />](https://www.bbsr.bund.de/BBSR/DE/veroeffentlichungen/sonderveroeffentlichungen/2025/urbane-datenplattformen-vergleich.html)
</p>
:::

### Grundprinzipien des Data Hub

Wichtig zu wissen ist, dass es sich beim Data Hub nicht um eine einzelne Software-Lösung handelt, sondern um eine modulare Architektur. Das bedeutet, der Data Hub besteht aus einer Zusammenstellung von verschiedenen Open Source-Software-Tools, die in einer gemeinsamen Infrastruktur aufgesetzt und über Schnittstellen miteinander verbunden sind. Ein Rechte- und Rollenmanagement regelt den Zugriff auf die Tools und bestimmt, wer welche Aspekte des Hub mit welchen Daten verwenden kann. Alle Tools sind im Browser verfügbar und ohne den Download von Software nutzbar. 
Kurzgefasst fußt der Data Hub auf vier Prinzipien:

- Cloud-Native-Technologien
- hoher Kompatibilität und Skalierbarkeit
- Open Source und Anbieterunabhängigkeit
- einem modularen Aufbau im Baukasten-Prinzip


### Die Vorteile eines Data Hub für Berlin

Der Data Hub Berlin ist mehr als nur eine technische Plattform – er ist ein strategisches Instrument für eine moderne, vernetzte und datengetriebene Verwaltung. Folgende Vorteile beziehungsweise Effekte soll er für die Berliner Verwaltung bewirken:

1. **Effizienz und Kostentransparenz**

      Der Data Hub soll nicht nur die Datenbereitstellung verbessern, sondern auch messbare Einsparungen ermöglichen. Durch die Nutzung von Open Source-Software, standardisierten Schnittstellen und zentralisierten Datenservices können redundante Entwicklungen und teure Lizenzkosten reduziert werden. Gleichzeitig ermöglicht die transparente Infrastruktur der Verwaltung, Arbeitsabläufe effizienter zu gestalten und Ressourcen gezielter einzusetzen – so trägt der Data Hub direkt zur Kostenoptimierung in Berliner Behörden bei.

2. **Digitale Souveränität und Kompetenzaufbau**

      Der Data Hub trägt langfristig dazu bei, die digitale Souveränität der Berliner Verwaltung zu stärken. Durch den konsequenten Einsatz von Open Source-Software, offenen Standards und modularen Architekturen reduziert er die Abhängigkeit von proprietären Lösungen. Gleichzeitig werden bei der Nutzung und Weiterentwicklung der Plattform neue Kompetenzen in Datenmanagement, Analyse und Softwareentwicklung innerhalb der Verwaltung aufgebaut. So entsteht nicht nur eine unabhängige Infrastruktur, sondern auch ein Wissens- und Kompetenzpool, der zukünftige Projekte effizienter und selbstbestimmter ermöglicht.

3. **Verwaltungsdigitalisierung und Interoberabilität**

      Der Data Hub fördert nicht nur datengetriebenes Entscheiden und ermöglicht es, analoge Produkte wie PDF‑Berichte in digitale, maschinenlesbare Formen zu überführen, sondern treibt insgesamt die Verwaltungsdigitalisierung voran. Langfristig unterstützt er auch die bessere Zusammenarbeit zwischen den Fachabteilungen in Ämtern, indem er Standards etabliert, die geteilt werden können, um Interoperabilität und Datenqualität zu erhöhen. Durch diese gemeinsame Grundlage entstehen Schnittstellen, die neue Datenprodukte, Analysemöglichkeiten und Prozessoptimierungen ermöglichen – der Data Hub wirkt somit als Booster für effizientere und vernetzte Verwaltung.

4. **Grundlage für Innovationen wie KI-Tools, das Internet of Things(IoT) und den digitalen Zwilling**

      Der Data Hub dient als zentrale Dateninfrastruktur, die dringend notwendig ist, um zukunftgerichtete Innovationen aufzubauen. Zuküntig könnte er beispielsweise KI-Anwendungen mit hochwertigen, standardisierten Verwaltungsdaten unterstützen und die Nutzung von IoT-Daten aus städtischen Sensoren erleichtern. Außerdem soll er die Basis für einen digitalen Zwilling Berlins legen, indem Daten konsistent gesammelt, vernetzt und visualisierbar gemacht werden. So entstehen die Voraussetzungen für smarte, datengetriebene Lösungen – von vorausschauender Planung über optimierte Services bis hin zu neuen Anwendungen für Bürgerinnen und Bürger sowie Unternehmen.


## Strategischer Rahmen

Der Aufbau des Data Hub Berlin ist ein seit einigen Jahren angestrebtes Vorhaben, als zentrale Maßnahme der Strategie „Gemeinsam Digital: Berlin“ entsprechend der Richtlinien der Berliner Regierungspolitik. 


<Tabs
  groupId="strategien"
  defaultValue="gd-b"
  values={[
    { label: 'Gemeinsam Digital: Berlin', value: 'gd-b' },
    { label: 'Open Data Strategie', value: 'open-data' },
    { label: 'Open Source Strategie', value: 'open-source' },
    { label: 'Richtlinien der Regierungspolitik', value: 'regierungspolitik' },
  ]}
  className="tab-container"
>
<TabItem value="gd-b">
  <div className="tabs__content">
    <h3>Gemeinsam Digital: Berlin</h3>
    <p>Gemeinsam Digital: Berlin (GD: B) ist die Dachstrategie des Landes Berlin, die Strategien zur Smart City, Digitalisierung und Verwaltungsmodernisierung (einschließlich digitaler Bürgerdienste) zusammenführt. Die in der Strategie festgelegte Maßnahme</p>
    <blockquote className="border-l-4 border-berlin-black pl-4 my-2">
      „Aufbau einer übergreifenden internen und öffentlichen Dateninfrastruktur (Data Hub und Open Data Portal)“
    </blockquote>
    <p>wird mit dem Data Hub Realität. Für eine gelungene digitale Transformation der Berliner Verwaltung braucht es eine zukunftssichere technische Infrastruktur, zentral definierte, interoperable Standards sowie Schnittstellen und entsprechend angebundene Datenquellen. Vor diesem Hintergrund wird der Data Hub Berlin als zentrale Dateninfrastruktur aufgebaut.</p>
    <p className="text-right">
[Zur GD: B-Strategie des Landes Berlin <ArrowTopRightOnSquareIcon className="h-5 w-5" />](https://gemeinsamdigital.berlin.de/)
</p>
  </div>
</TabItem>

<TabItem value="open-data">
  <div className="tabs__content">
    <h3>Open Data-Strategie</h3>
    <p>Die Berliner Open Data Strategie ist eine der Fachstrategien der GD:B-Strategie. Sie hat zum Ziel, eine offene, transparente und datengetriebene Verwaltung zu fördern, indem sie den Zugang zu öffentlichen Daten für alle ermöglicht. Sie unterstützt die Umsetzung der gesetzlichen Vorgaben zur Datenbereitstellung, insbesondere durch die Open-Data-Verordnung, und fördert die automatisierte Bereitstellung von Datensätzen über Schnittstellen. Ein zentrales Anliegen der Strategie ist die Veröffentlichung hochqualitativer, strukturierter und relevanter Datensätze, die sowohl die Nutzung durch die Wirtschaft, Zivilgesellschaft und Wissenschaft ermöglichen als auch zur Vernetzung von Daten und zur Schaffung von Linked Open Data beitragen.</p>
    <p>Der Data Hub als zentrale Infrastruktur für Datenmanagement, bietet Software-Tools zur Umsetzung konkreter Datenprojekte und ergänzt das Open Data Portal und die Möglichkeiten zur Nutzung dieser Daten somit perfekt. Der Data Hub mit der Möglichkeit einer Speichermöglichkeit wird daher als eine der Maßnahmen der Open Data Strategie erwähnt.</p>
        <p className="text-right">
[Zur Open Data-Strategie des Landes Berlin <ArrowTopRightOnSquareIcon className="h-5 w-5" />](https://www.berlin.de/moderne-verwaltung/e-government/open-data-1513722.php#headline_1_3)
</p>
  </div>

</TabItem>
<TabItem value="open-source">
  <div className="tabs__content">
    <h3>Open Source-Strategie</h3>
    <p>Die Berliner Verwaltung folgt einer klaren Richtlinie, die vorschreibt, bei jeder neuen Softwarebeschaffung zunächst Open Source-Lösungen zu prüfen und eine Nicht‑Beschaffung zu begründen. Ziel ist es, digitale Souveränität, Kostentransparenz und offene Zugänge zu stärken.
    Der Data Hub setzt diese Richtlinie praktisch um: Er basiert vollständig auf Open Source- Software, nutzt offene Standards und macht Verwaltungsdaten interoperabel und nutzbar. Er ist damit ein konkretes Beispiel dafür, wie die Open Source-Strategie in Berlin Wirkung entfaltet.</p>
            <p className="text-right">
[Infos zur Open Source-Strategie des Landes Berlin <ArrowTopRightOnSquareIcon className="h-5 w-5" />](https://www.berlin.de/rbmskzl/aktuelles/pressemitteilungen/2024/pressemitteilung.1514319.php)
</p>
  </div>

</TabItem>
<TabItem value="regierungspolitik">

  <div className="tabs__content">
    <h3>Richtlinien der Berliner Regierungspolitik</h3>
    <p>Ein neues Datenmanagement, die gemeinsame Datennutzung der gesamten Verwaltung und eine Data Governance, die die öffentlichen Daten auch Dritten (Wirtschaft, Wissenschaft, Zivilgesellschaft) als Open Data zur Verfügung stellt, ist wesentliche Voraussetzung für die digitale Transformation der Verwaltung. Der Senat will als Zentrum einer neuen Strategie zum gemeinsamen Datenmanagement für die gesamte Berliner Verwaltung den „Berlin DataHub“ gründen.</p>
        <p className="text-right">
[Zu den Richtlinien der Regierungspolitik 2023-2026 <ArrowTopRightOnSquareIcon className="h-5 w-5" />](https://www.berlin.de/rbmskzl/politik/senat/richtlinien-der-politik/)
</p>
  </div>

</TabItem>

</Tabs>


## Pilotphase und Prototyp

Die Entwicklung eines so umfassenden IT-Infrastrukturprojekts erfordert agile Prozesse und enge Zusammenarbeit in der Praxis. In einer Pilotphase wird der Data Hub prototypisch aufgebaut. Diese frühe Version dient dazu den Data Hub gezielt zu erproben und stetig weiter zu entwickeln, um alle Anforderungen für eine Verstetigung und den Produktivbetrieb zu identifizieren. Dabei werden sowohl technische als auch organisatorische Rahmenbedingungen betrachtet, um nachhaltige Mehrwerte für ein breites Spektrum an Nutzenden zu schaffen.  

### Zusammenarbeit von Technologiestiftung Berlin und Berliner Senatskanzlei

Aktuell wird die Plattform in einer Pilotphase durch die Abteilung CityLAB Berlin der Technologiestiftung Berlin im Rahmen einer Zuwendung der Senatskanzlei Berlin getestet. Seit April 2025 steht sie als prototypische Instanz zur Verfügung. Die Technologiestiftung begleitet die Pilotprojekte fachlich und organisatorisch, setzt diese gemeinsam mit den Pilotnutzenden um und betreibt den Prototypen in Zusammenarbeit mit einem technischen Dienstleister. Als gesamtstädtische Plattform lebt der Data Hub aber auch von der Mitwirkung vieler: In der AG Data Hub bringen sich Senatsverwaltungen und Bezirksämter ein, auch die Pilotnutzenden kommen aus verschiedenen Bereichen der Berliner Verwaltung. Parallel zur Pilotphase bereitet die Senatskanzlei die Verstetigung des Data Hub als dauerhafte Dateninfrastruktur für das Land Berlin vor.

### Der Prototyp als Lern- und Diskussionsraum

Seit April 2025 steht eine erste Version des Data Hub als prototypische Instanz zur Verfügung. Ein Prototyp ist mehr als eine technische Vorstufe – er ist ein Werkzeug zum Denken, Testen und Lernen. Beim Data Hub Berlin dient der Prototyp dazu, zentrale Annahmen über Architektur, Prozesse und Zusammenarbeit unter realen Bedingungen zu überprüfen, bevor eine umfassende Umsetzung erfolgt. Statt monatelang abstrakte Konzepte zu planen, ermöglicht der Prototyp, frühzeitig konkrete Erfahrungen zu sammeln: Welche Datenflüsse funktionieren? Wo entstehen Reibungen zwischen Fachverfahren, Technik und Organisation? Und welche Anforderungen stellen künftige Nutzende?
Durch dieses iterative Vorgehen wird nicht nur Technik entwickelt, sondern auch ein gemeinsames Verständnis dafür, wie datengetriebene Verwaltung funktionieren kann. Der Prototyp schafft also die Grundlage für informierte Entscheidungen und reduziert langfristig Risiken, Kosten und Fehlentwicklungen.

### Umsetzung erster Use Cases

Die Pilotphase für die ersten Anwendungsfälle begann im Sommer 2025 mit der ersten Version des Prototypen. Zusammen mit der Senatsverwaltung für Stadtentwicklung, Bauen und Wohnen (SenSBW), der Senatsverwaltung für Arbeit, Soziales, Gleichstellung, Integration, Vielfalt und Antidiskriminierung (SenASGIVA) sowie den Bezirken Neukölln und Pankow werden vier konkrete Anwendungsfälle erprobt. Weitere Pilotprojekte sollen in 2026 folgen. 
Die Erkenntnisse aus den Use Cases fließen in die Weiterentwicklung des Berliner Data Hub. So stellen wir sicher, dass die Plattform die Bedarfe der Berliner Verwaltung in der Arbeit mit Daten bestmöglich erfüllt. Außerdem können mit der Zeit weitere Komponenten aus der CIVITAS/CORE-Weiterentwicklung in den Berliner Data Hub integriert werden.

Um die erfolgreiche Umsetzung von Use Cases zu gewährleisten, erfolgt diese in enger Begleitung durch das Kompetenzteam der Technologiestiftung Berlin. Gemeinsam werden die Projektziele an die technischen Möglichkeiten des Data Hub angepasst und eine Timeline festgelegt. Erst dann erfolgt der Zugang zu den individuellen Komponenten des Data Hub.

## Die Architektur des CIVITAS/CORE als Grundlage

Der CIVITAS/CORE-Stack bildet das technische Rückgrat des Data Hub Berlin: Als offene, modulare Plattform ermöglicht CIVITAS/CORE eine urbane Dateninfrastruktur, die Städte und Kommunen frei betreiben und adaptieren können. Der gemeinschaftliche Architektur-Stack bietet sich an, weil er hohe Wiederverwendbarkeit, geringere Kosten und mehr technologische Unabhängigkeit bietet. Statt vieler Einzelentwicklungen entsteht ein standardisierter Kern, der jeweils an lokale Anforderungen angepasst wird. 

### Open Source als zentraler Aspekt

Open Source ist dabei kein Nebenaspekt, sondern zentral: Durch Transparenz und Mitwirkung in der Entwickler-Community gewinnen alle Beteiligten an Souveränität und Lock-in-Effekte werden vermieden. Die Entwicklergemeinschaft hinter CIVITAS/CORE – die Civitas Connect e. V. mit ihren Mitgliedsstädten und kommunalen Unternehmen – bündelt Anforderungen, entwickelt gemeinsam und steuert die Roadmap im kollektiven Konsens. 

Der CIVITAS/CORE ist cloud-nativ aufgebaut und basiert vollständig auf Kubernetes, wodurch er flexibel skalierbar ist. Diese Architektur ermöglicht es Städten und Kommunen, die Plattform entweder eigenständig zu betreiben oder durch verschiedene technische Dienstleister betreiben zu lassen, ohne Abhängigkeit von einzelnen Herstellern oder proprietären Infrastrukturen.

Im folgenden Video von Civitas Connect wird der CIVITAS/CORE anschaulich vorgestellt. Es erklärt, welche Ziele die Initiative verfolgt und welche Vorteile die gemeinsame Open Source-Basis Städten und Kommunen bietet.

<div className="flex justify-center my-8">
  <div className="w-full lg:w-4/5 max-w-3xl aspect-video">
    <iframe
      className="w-full h-full rounded-md shadow-md"
      src="https://www.youtube.com/embed/6MgitC9dmzs"
      title="CIVITAS/CORE In 5 Minuten"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
</div>

### Anpassung von CIVITAS/CORE für Berlin

Für Berlin bedeutet das: Wir können diese offen verfügbare Plattform nutzen, um an einem modernen, breit aufgestellten Software-Projekt und deren kommenden Weiterentwicklung teilzuhaben. Gleichzeitig müssen wir explorieren, wie wir den CORE für uns einsetzen, wie wir ihn an unsere Verwaltungs- und Organisationsstruktur anpassen und wie eine Governance-Instanz entsteht, die den Berliner Rahmenbedingungen gerecht wird. So wird aus einer generischen Plattformlösung eine passgenaue, kommunalspezifische Infrastruktur: der Berliner Data Hub.

:::info

Weitere Informationen zum CIVITAS/CORE-Framework und den beteiligten Städten findest du auf der Website von Civitas Connect.
Einen tieferen Einblick in die Entstehungsgeschichte, Ziele und den Open Source-Ansatz des Projekts bietet außerdem der CityLAB-Podcast „Vom Datenchaos in die digitale Souveränität mit Ralf Leufkes und Lisa Stubert".

<p className="text-right -mb-3">
[Offizielle Website zu CIVITAS/CORE <ArrowTopRightOnSquareIcon className="h-5 w-5" />](https://www.civitasconnect.digital/civitas-core/)
</p>
<p className="text-right -mb-3">
[Zum Podcast des CityLAB Berlin zum CIVITAS/CORE <ArrowTopRightOnSquareIcon className="h-5 w-5" />](https://radiocitylab.podigee.io/29-neue-episode)
</p>

:::
</div>

 