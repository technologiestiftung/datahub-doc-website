---
title: Akteure im Sozialraum sichtbar machen
sidebar_position: 2
hide_title: true
description: Wo engagieren sich Träger, Initiativen und soziale Programme in Berlin-Neukölln? Mithilfe von Online-Formular, Karten-Tool und dahinterliegender Datenbank können soziale Akteure außerhalb der Verwaltung ihre Angebote selbst erfassen, aktuell halten und der Stadtplanung zur Verfügung stellen. 
---

import styles from '../docs.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { CircleStackIcon, BuildingOffice2Icon, UsersIcon } from '@heroicons/react/24/solid';

<div className={styles.doccontainer}>

  <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-10 xl:pl-16 pt-16">
    <div>
      <h1>Akteure im Sozialraum sichtbar machen</h1>
        <p className="text-lg">
          Wo engagieren sich Träger, Initiativen und soziale Programme in Berlin-Neukölln? Mithilfe von Online-Formular, Karten-Tool und dahinterliegender Datenbank können soziale Akteure außerhalb der Verwaltung ihre Angebote selbst erfassen, aktuell halten und der Stadtplanung zur Verfügung stellen.
        </p>
    </div>
  </div>

## Welche Rolle spielt Stadtteilkoordination für die Vernetzung im Sozialraum?

Im Bezirk Berlin-Neukölln pulsiert das Großstadtleben mit all seinen Facetten und Herausforderungen. Die Stadtteilkoordination ist maßgeblich für die Vernetzung der verschiedenen Akteure wie Jugendclubs, Geflüchtetenunterkünfte, Nachbarschaftstreffs oder Stadtteilzentren in den jeweiligen Bezirksregionen verantwortlich. Sie nimmt somit eine zentrale Rolle bei der Förderung von Kooperation und Synergien zwischen Netzwerken und Akteuren ein. Als Intermediärin gewährleistet die Stadtteilkoordination den effektiven Informationstransfer zwischen der Verwaltung und dem Sozialraum, wodurch ein reibungsloser Austausch und eine bessere Zusammenarbeit ermöglicht werden. 
Die Stadtteilkoordination sind wiederum gegenüber dem Bezirk verpflichtet, vertraglich gebunden Daten über Akteure, Träger und Netzwerke regelmäßig zu erfassen und halbjährlich zu aktualisieren. Diese vertragliche Verpflichtung gewährleistet eine konsistente und aktuelle Datenbasis, die eine Übersicht über die bestehenden (sozialen) Strukturen im Bezirk ermöglicht und damit auch die Planbarkeit von Maßnahmen erleichtert.


## Das Problem

Die bisher erprobten Prozesse – zuletzt über das CMS Imperia des Landes Berlin – zur Erfassung der Akteure, Träger und Netzwerke in den Neuköllner Kiezen stießen in der Vergangenheit immer wieder an ihre Grenzen. 

•	**Hohe Arbeitsaufwand und Fehleranfälligkeit**, da durch eine manuelle Eingabe Fehler in den Tabellen häufig auftreten und zu einem erheblichen Korrekturaufwand für Stadtteilkoordinatoren und Bezirken führt. Die Bearbeitung bereits gespeicherter Daten ist sperrig und zeitaufwendig, was den Arbeitsfluss erheblich beeinträchtigt.

•	**Wenig nutzendenfreundlich:** Das Erfassen der Daten in einer über Jahre gewachsenen Tabelle ohne klare Datenstruktur erschwert das Eintragen der Informationen oder das Filtern nach bestimmten Akteuren. Geodaten können nur sehr aufwendig eingetragen werden, eine Adresssuche fehlt. Es bleibt unklar, welche Felder wirklich ausgefüllt werden müssen. So werden auch Mehrwert und Nutzen der Daten kaum ersichtlich, Visualisierungen und datenbasierte Auswertungen sind nur schwer und mit großem Aufwand umsetzbar.

•	**Eingeschränkte Skalierbarkeit**, da die Datenmengen wachsen und die Erfassung der Daten und die tägliche Arbeit mit den Daten immer unübersichtlicher wird. 

•	**Fehlende Rollen- und Rechtesystematik**, da keine Möglichkeit besteht Benutzerrollen zu definieren oder Passwörter für die Eingabe zu nutzen. So kann der Bezirk nur sehr umständlich überprüfen, ob die Daten richtig eingetragen wurden. 


## Zielsetzung

Der Data Hub wird eingesetzt, um den Erfassungsprozess zu vereinfachen, zu systematisieren und nutzendenfreundlich zu gestalten, um darauf aufbauend eine zuverlässige Datenbasis über Akteure im Sozialraum für den Bezirk zu generieren.

•	**Ein Erfassungsformular auf Basis des Softwarebausteins Appsmith** regelt, standardisiert und steuert die Eingabe der Informationen über Akteure, Träger und Netzwerke. Das Erfassungsformular ist auf den Use Case zugeschnitten und bietet ein intuitives Interface sowie klare Bearbeitungsoptionen, um den Arbeitsaufwand schlank zu halten und die Effizienz zu erhöhen. Eine Integration der Erfassung in eine Kartenansicht auf Basis des Softwarebausteins Masterportal ermöglicht dabei eine adressgenaue Eintragung eines Akteurs.

• **Ein Rollen- und Zugangssystem** regelt, dass verwaltungsexterne Akteure wie die Stadtteilkoordination unabhängig von der Zugehörigkeit zum Bezirksamt Informationen eintragen und anpassen können. Der Bezirk kann in seiner Rolle Updates kontrollieren und freigeben oder selbstständig Anpassungen am Formular vornehmen und behält so nicht nur die Kontrolle über die vertraglich geregelten Daten-Updates sondern kann so auch das Formular lebendig halten.

•	Eine dem Prozess **dahinterliegende Datenbank** bildet den Single Point of Truth. Bei Bedarf kann aus der Datenbank ein Export gezogen werden, um die Akteursdaten für die tägliche Stadtteilarbeit zu nutzen. Perspektivisch bilden die standardisierten Informationen die Grundlage für Datenvisualisierungen wie Dashboards oder die Darstellung von Netzwerksbeziehungen. Diese Informationen könnten zentrale Akteur identifizieren, Lücken im Netzwerk aufzeigen und gezielte Maßnahmen zur Optimierung der Zusammenarbeit ermöglichen. Zudem können Daten archiviert werden. So können auch alte Einträge später wieder aufgerufen und ausgewertet werden.

• Eine **Downloadfunktion** der Daten ermöglicht eine stärker auf Nutzende ausgerichtete Arbeit mit den Daten, die für die Vernetzungsarbeit der Stadtteilkoordination elementar ist. So kann nach Akteuren, den Adressen von Einrichtungen, Ansprechpersonen oder sonstige Informationen gefiltert werden und auch für Berichte als Datengrundlage genutzt werden.


## Die Umsetzung 

### Der Rahmen des Pilotprojekts

<Tabs
  defaultValue="daten"
  values={[
    { label: 'Daten', value: 'daten' },
    { label: 'Zielgruppen', value: 'zielgruppen' },
    { label: 'Beteiligte', value: 'beteiligte' },
  ]}>

  <TabItem value="daten">
  <>
    <div className="tabs__content">
      <div className="mb-4">
        <CircleStackIcon className="w-5 h-5 text-green-600" />
        <h3 className="inline pl-2">Die Daten</h3>
      </div>
      <p>
       Die <strong>Hauptdatengrundlage</strong> bildet der gewachsene Datenpool aus der langjährigen Datenerfassung durch die Stadtteilkoordination. Die Eintragungen zu den Akteuren umfassen Informationen wie der Name des Akteurs, Trägers oder Netzwerks, Zielgruppe und Themen aber auch Kontaktinformationen zu den Akteuren, Trägern und Netzwerken wie Adresse, Kontaktdaten oder Ansprechpersonen. Ebenfalls enthält jeder Eintrag Informationen darüber, wer, wann den Eintrag erstellt oder aktualisiert hat.
      </p>  
      <!-- ![Daten](../assets/BZRP-daten.png) -->
    </div>
  </>
  </TabItem>

  <TabItem value="zielgruppen">
  <>
    <div className="tabs__content">
      <div className="mb-4">
        <UsersIcon className="w-5 h-5 text-green-600" />
        <h3 className="inline pl-2">Die Zielgruppen</h3>
      </div>
      <p>
        Vom Datenerfassungsprozess und der Datengrundlage profitieren langfristig:
      </p>
      <ul className="ml-4 list-disc">
        <li>Fachpersonen aus der Verwaltung, zum Beispiel</li>
          <ul className="ml-4 list-disc">
            <li>Datenkoordination</li>
            <li>Fachämter der Bezirke</li>
            <li>Die politische Leitungsebene</li>
          </ul>   
        <li>Externe Interessierte, zum Beispiel</li>
          <ul className="ml-4 list-disc">
            <li>Zivilgesellschaft</li>
            <li>Wissenschaft und Journalismus</li>
            <li>Stadtplanung</li>
            <li>Privatwirtschaft</li>
          </ul>
        
      </ul>
    </div>
  </>
  </TabItem>

  <TabItem value="beteiligte">
  <>
    <div className="tabs__content">
      <div className="mb-4">
        <BuildingOffice2Icon className="w-5 h-5 text-green-600" />
        <h3 className="inline pl-2">Die Beteiligten</h3>
      </div>
      <p>
        Beim Pilotprojekt zu den digitalen Bezirksregionenprofilen sind eine Vielzahl an Personen und Stellen eingebunden:
      </p>
      <ul className="ml-4 list-disc">
        <li>Bezirk Neukölln</li>
        <li>Organisationseinheit "Sozialraumorientierte Planungskoordination" (OESPK), inklusive der bezirklichen Datenkoordinator:innen</li>
        <li>Stadtteilkoordination</li>
      </ul>
    </div>
  </>
  </TabItem>

</Tabs>

### Technische Lösung im Data Hub
- **Erfassung und Kontrolle der Daten**: In **Appsmith** wurde ein Formular erstellt, dass intuitiv zu bedienen ist und alle im Datenmodell definierten Informationen eintragen lässt. Die Kontrolle der Eintragung erfolgt ebenfalls direkt in Appsmith durch das Bezirksamt. Unterstützt wird die georeferenzierte Datenerfassung durch das Kartentool **Masterportal**.
- Parallel zur Dateneingabe werden die Daten in einer relationellen **Datenbank (Postgres)** im Data Hub erfasst.
- Das **Rechte- und Rollensystem** wird direkt in der Anwendung Appsmith gestaltet. 


<iframe
  src="https://data-hub-flow-designer.lovable.app/?flow=JTdCJTIybm9kZXMlMjIlM0ElNUIlN0IlMjJpZCUyMiUzQSUyMm5vZGUtMTAxMyUyMiUyQyUyMnR5cGUlMjIlM0ElMjJzb3VyY2UlMjIlMkMlMjJwb3NpdGlvbiUyMiUzQSU3QiUyMnglMjIlM0ExMTYuMTAyNTc4NTg4NDQzMjglMkMlMjJ5JTIyJTNBOC45MjQxNDIzOTY3ODI0OTYlN0QlMkMlMjJkYXRhJTIyJTNBJTdCJTIybGFiZWwlMjIlM0ElMjJtYW51ZWxsZXIlMjBEYXRlaXVwbG9hZCUyMiUyQyUyMnN1YnRpdGxlJTIyJTNBJTIyQ1NWLURhdGVpJTIwJTIyJTdEJTJDJTIybWVhc3VyZWQlMjIlM0ElN0IlMjJ3aWR0aCUyMiUzQTI0NSUyQyUyMmhlaWdodCUyMiUzQTcyJTdEJTJDJTIyc2VsZWN0ZWQlMjIlM0FmYWxzZSU3RCUyQyU3QiUyMmlkJTIyJTNBJTIybm9kZS0xMDE0JTIyJTJDJTIydHlwZSUyMiUzQSUyMnByb2Nlc3NpbmclMjIlMkMlMjJwb3NpdGlvbiUyMiUzQSU3QiUyMnglMjIlM0EzNDcuMTA1Mzk1NzQ5MDYzOSUyQyUyMnklMjIlM0EyMTguMzA2NDg1MDgzNjQzNjglN0QlMkMlMjJkYXRhJTIyJTNBJTdCJTIybGFiZWwlMjIlM0ElMjJOb3RlJTIwUmVkJTIyJTJDJTIydGl0bGUlMjIlM0ElMjJBcHBzbWl0aCUyMiUyQyUyMmRlc2NyaXB0aW9uJTIyJTNBJTIyRWludHJhZ3VuZyUyMG5ldWVyJTIwQWt0ZXVyZSUyMCUyNiUyMFBmbGVnZSUyMGRlciUyMERhdGVuJTIyJTJDJTIyY3VzdG9tVGl0bGUlMjIlM0FmYWxzZSU3RCUyQyUyMm1lYXN1cmVkJTIyJTNBJTdCJTIyd2lkdGglMjIlM0EzNDUlMkMlMjJoZWlnaHQlMjIlM0E5MSU3RCUyQyUyMnNlbGVjdGVkJTIyJTNBdHJ1ZSUyQyUyMmRyYWdnaW5nJTIyJTNBZmFsc2UlN0QlMkMlN0IlMjJpZCUyMiUzQSUyMm5vZGUtMTAxNSUyMiUyQyUyMnR5cGUlMjIlM0ElMjJkYXNoYm9hcmQlMjIlMkMlMjJwb3NpdGlvbiUyMiUzQSU3QiUyMnglMjIlM0EtMTE3Ljg3OTMwMjc4NTQ4NzElMkMlMjJ5JTIyJTNBMTk4LjY5ODY5NjU5MTIyMjglN0QlMkMlMjJkYXRhJTIyJTNBJTdCJTIybGFiZWwlMjIlM0ElMjJEYXNoYm9hcmQlMjIlMkMlMjJ0aXRsZSUyMiUzQSUyMk1hc3RlcnBvcnRhbCUyMiUyQyUyMmRlc2NyaXB0aW9uJTIyJTNBJTIyR2VvcmVmZXJlbnppZXJ0ZSUyMEVpbnRyYWd1bmclMjBkZXIlMjBBa3RldXJlJTIwaW0lMjBNYXN0ZXJwb3J0YWwlMjIlMkMlMjJjdXN0b21UaXRsZSUyMiUzQWZhbHNlJTdEJTJDJTIybWVhc3VyZWQlMjIlM0ElN0IlMjJ3aWR0aCUyMiUzQTI4MCUyQyUyMmhlaWdodCUyMiUzQTEwOCU3RCUyQyUyMnNlbGVjdGVkJTIyJTNBZmFsc2UlMkMlMjJkcmFnZ2luZyUyMiUzQWZhbHNlJTdEJTJDJTdCJTIyaWQlMjIlM0ElMjJub2RlLTEwMTYlMjIlMkMlMjJ0eXBlJTIyJTNBJTIyY29tcG9uZW50JTIyJTJDJTIycG9zaXRpb24lMjIlM0ElN0IlMjJ4JTIyJTNBMTUxLjAyNzUxMDgyNDg1NTY4JTJDJTIyeSUyMiUzQTQyOS43OTA0ODk1Mzc2MTEwNSU3RCUyQyUyMmRhdGElMjIlM0ElN0IlMjJsYWJlbCUyMiUzQSUyMktvbXBvbmVudGUlMjIlMkMlMjJ0aXRsZSUyMiUzQSUyMnBnQWRtaW4lMkZEYXRlbmJhbmslMjIlMkMlMjJkZXNjcmlwdGlvbiUyMiUzQSUyMiUyMiUyQyUyMmN1c3RvbVRpdGxlJTIyJTNBZmFsc2UlN0QlMkMlMjJtZWFzdXJlZCUyMiUzQSU3QiUyMndpZHRoJTIyJTNBMjU5JTJDJTIyaGVpZ2h0JTIyJTNBNzQlN0QlMkMlMjJzZWxlY3RlZCUyMiUzQWZhbHNlJTJDJTIyZHJhZ2dpbmclMjIlM0FmYWxzZSU3RCU1RCUyQyUyMmVkZ2VzJTIyJTNBJTVCJTdCJTIyc3R5bGUlMjIlM0ElN0IlMjJzdHJva2VXaWR0aCUyMiUzQTIlMkMlMjJzdHJva2UlMjIlM0ElMjIlMjMwMDAlMjIlMkMlMjJzdHJva2VEYXNoYXJyYXklMjIlM0ElMjI1JTJDNSUyMiU3RCUyQyUyMmNsYXNzTmFtZSUyMiUzQSUyMmFuaW1hdGVkLWVkZ2UlMjIlMkMlMjJ0eXBlJTIyJTNBJTIyc21vb3Roc3RlcCUyMiUyQyUyMnNvdXJjZSUyMiUzQSUyMm5vZGUtMTAxMyUyMiUyQyUyMnRhcmdldCUyMiUzQSUyMm5vZGUtMTAxNSUyMiUyQyUyMmlkJTIyJTNBJTIyeHktZWRnZV9fbm9kZS0xMDEzLW5vZGUtMTAxNSUyMiU3RCUyQyU3QiUyMnN0eWxlJTIyJTNBJTdCJTIyc3Ryb2tlV2lkdGglMjIlM0EyJTJDJTIyc3Ryb2tlJTIyJTNBJTIyJTIzMDAwJTIyJTJDJTIyc3Ryb2tlRGFzaGFycmF5JTIyJTNBJTIyNSUyQzUlMjIlN0QlMkMlMjJjbGFzc05hbWUlMjIlM0ElMjJhbmltYXRlZC1lZGdlJTIyJTJDJTIydHlwZSUyMiUzQSUyMnNtb290aHN0ZXAlMjIlMkMlMjJzb3VyY2UlMjIlM0ElMjJub2RlLTEwMTMlMjIlMkMlMjJ0YXJnZXQlMjIlM0ElMjJub2RlLTEwMTQlMjIlMkMlMjJpZCUyMiUzQSUyMnh5LWVkZ2VfX25vZGUtMTAxMy1ub2RlLTEwMTQlMjIlN0QlMkMlN0IlMjJzdHlsZSUyMiUzQSU3QiUyMnN0cm9rZVdpZHRoJTIyJTNBMiUyQyUyMnN0cm9rZSUyMiUzQSUyMiUyMzAwMCUyMiUyQyUyMnN0cm9rZURhc2hhcnJheSUyMiUzQSUyMjUlMkM1JTIyJTdEJTJDJTIyY2xhc3NOYW1lJTIyJTNBJTIyYW5pbWF0ZWQtZWRnZSUyMiUyQyUyMnR5cGUlMjIlM0ElMjJzbW9vdGhzdGVwJTIyJTJDJTIyc291cmNlJTIyJTNBJTIybm9kZS0xMDE1JTIyJTJDJTIydGFyZ2V0JTIyJTNBJTIybm9kZS0xMDE2JTIyJTJDJTIyaWQlMjIlM0ElMjJ4eS1lZGdlX19ub2RlLTEwMTUtbm9kZS0xMDE2JTIyJTdEJTJDJTdCJTIyc3R5bGUlMjIlM0ElN0IlMjJzdHJva2VXaWR0aCUyMiUzQTIlMkMlMjJzdHJva2UlMjIlM0ElMjIlMjMwMDAlMjIlMkMlMjJzdHJva2VEYXNoYXJyYXklMjIlM0ElMjI1JTJDNSUyMiU3RCUyQyUyMmNsYXNzTmFtZSUyMiUzQSUyMmFuaW1hdGVkLWVkZ2UlMjIlMkMlMjJ0eXBlJTIyJTNBJTIyc21vb3Roc3RlcCUyMiUyQyUyMnNvdXJjZSUyMiUzQSUyMm5vZGUtMTAxNCUyMiUyQyUyMnRhcmdldCUyMiUzQSUyMm5vZGUtMTAxNiUyMiUyQyUyMmlkJTIyJTNBJTIyeHktZWRnZV9fbm9kZS0xMDE0LW5vZGUtMTAxNiUyMiU3RCU1RCUyQyUyMnZlcnNpb24lMjIlM0ExJTdE"
  width="100%"
  height="400"
  style={{ border: "1px solid #ccc", borderRadius: "8px" }}
  allowFullScreen
></iframe>

### Organisatorisch und methodische Begleitung
Zur Umsetzung wurden Methoden eingesetzt, um den aktuellen Datenerfassungsprozess zu durchdringen sowie Bedarfe und Lösungswege zu diskutieren und zu erproben. 

- Workshops mit dem Bezirksamt Neukölln zur Analyse des Ist-Zustands und Entwicklung von Bedarfen mithilfe der Methoden *Blueprint* und [Entwicklungsmatrix](https://www.oeffentliches-gestalten.de/buch/vorbereiten/ist-zustand-betrachten) 
- Durchführung eines Experteninterviews mit einer Stadtteilkoordinatorin als Schlüsselakteurin, Betroffene und Power-Userin sowie Präsentation des Erfassungsprozesses bei potenziell Datennutzenden im Bezirksamt Neukölln
- Entwicklung eines umfangreichen Datenmodells für das standardisierte Erfassen der Informationen.
- Testphase und kontinuierliche Iteration des Datenerfassungsprozess mit dem Bezirk


## Wie geht's weiter?

### Lessons Learned
Ein entscheidender Erfolgsfaktor des Projekts war die konzeptionelle Vorarbeit des Bezirks für ein Datenmodell. Dieses Datenmodell legt klare Feldnamen und Feldtypen fest und bildet so die Grundlage für die Umsetzung des Formulars in Appsmith. Beim iterativen Aufbau des Formulars wurden auftretende Hürden oder Unklarheiten immer wieder mit dem Bezirk gespiegelt und gelöst. Auch die zu Beginn eingesetzten Methoden, um den bisherigen komplexen Erfassungsprozess zu skizzieren und Bedarfe abzuleiten hat sich als wichtige Vorarbeit herauskristallisiert. So konnten zu Beginn des Projekts Bedarfe und Ziele erarbeitet und ein Minimum Valiable Product (MVP) definiert werden. 

Die Erfahrungen aus der Umsetzung mit Postgres, Appsmith und Masterportal liefern wichtige Erkenntnisse für den gesamten Data Hub-Prototypen: Sie zeigen:

- Appsmith eignet sich nur eingeschränkt für komplexere Formulare und Anwendungen. Die Low-Code-Plattform ist in der Pflege und Weiterentwicklung vergleichsweise aufwendig, da Änderungen überwiegend über das User-Interface (UI) vorgenommen werden müssen und dadurch viele manuelle Klicks erforderlich sind. Eine Wiederverwendung oder Erweiterung für weitere Projekte gestaltet sich schwierig, da Appsmith stark auf die visuelle Oberfläche ausgerichtet ist und keine effiziente, codebasierte Weiterentwicklung ermöglicht. Dadurch ist die Lösung langfristig weniger flexibel und aufwendiger zu warten.

- Sehr einfache Formulare lassen sich in Appsmith eventuell auch ohne tiefere Programmierkenntnisse erstellen. In der Praxis erfordern jedoch die meisten Anwendungsfälle eine Vielzahl an Anpassungen und Logik, für die dennoch Programmier-Skills notwendig sind. Dadurch relativiert sich der *No-/Low-Code-Vorteil*, da man für realistische Projekte meist doch Entwicklerexpertise benötigt.

- Perspektivisch könnten sich Konventionen und Best Practices für Appsmith etablieren, sodass Code-Snippets und Komponenten besser wiederverwendet werden können. Zudem besteht die Möglichkeit, in Zukunft KI-Tools zu nutzen, um die Erstellung und Anpassung von Appsmith-Anwendungen zu unterstützen. Allerdings steht dieser Ansatz noch am Anfang und kann aktuell den Entwicklungsaufwand nur begrenzt reduzieren.

- Ein weiterer wichtiger Aspekt ist die Einführung klarer Konventionen beim Aufsetzen der PostgreSQL-Datenbank. Wir haben dafür ein internes How-to erstellt, das unter anderem Regeln zur Namensgebung, zur Ablage von Metadaten sowie zu Datenstrukturen und Speicherformaten definiert. Es ist entscheidend, bereits zu Beginn ausreichend Zeit in die Planung der Datenbankarchitektur zu investieren, um spätere Anpassungen zu vermeiden und eine konsistente sowie wartbare Datenbasis sicherzustellen.

- Das Masterportal eignet sich sehr gut als Ergänzung zur Erfassung von Geodaten. Allerdings wäre es sinnvoll, zusätzlich Zeit zu investieren, um das von uns übernommene Plugin insbesondere im Hinblick auf UI und UX weiter zu optimieren. Dadurch ließe sich die Bedienbarkeit verbessern und der Workflow für Nutzende noch effizienter gestalten.


###  Next Steps

Für die nächste halbjährliche Aktualisierung Ende 2025 ist geplant, dass die Stadtteilkoordination die entwickelte Lösung im Data Hub Berlin erstmals anwendet. Parallel dazu werden das Bezirksamt Neukölln und das Data Hub Team die Visualisierung der erfassten Daten vorantreiben und erste Ideen für (interne) Dashboards oder die Darstellung von Netzwerkstrukturen erarbeiten und sukzessive umsetzen. Als Pilotprojekt ist der Datenerfassungsprozess der Akteure im Sozialraum anschlussfähig zu den übrigen 11 Bezirken im Land Berlin sowie weiteren Projekten der Verwaltung, in denen die Eingabe und Verwaltung von verwaltungsexternen Daten im Mittelpunkt stehen.

</div>
