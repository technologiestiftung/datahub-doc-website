---
sidebar_position: 4
---

# Use Cases

## Bezirksregionenprofile
**Wie entwickelt sich die Altersstruktur in meinem Bezirk? Wie sieht es eigentlich mit Grünflächen aus? Und wie viele Kitaplätze sind in meiner Nachbarschaft belegt? Für jede Bezirksregion gibt es eine Art Steckbrief, der solche solche Zahlen und Entwicklungen übersichtlich zusammenfasst — die [Bezirgsregionenprofile](https://bezirksregionenprofile-ts.netlify.app/) (BZRP).**<br />

#### Das Problem
In den BZRP veröffentlichen die Berliner Bezirke regelmäßig Informationen zur sozio-ökonomischen Situation ihrer Bezirksregionen („Bezirksregionenprofile“). Diese Profile bestehen aus zwei Teilen: erstens einer Analyse von Kernindikatoren und statistischen Grunddaten, und zweitens einer Beschreibung von Maßnahmen und Zielen für den jeweiligen Bezirk. 

Aktuell ist jeder Bezirk selbst für die Veröffentlichung der BZRP verantwortlich — dadurch fehlt es an standardisierten Formaten. Die Profile werden bislang außerdem nur als PDF zur Verfügung gestellt.

Die Erstellung der BZRP ist für Verwaltungsmitarbeitende sehr zeitaufwendig aufgrund manueller Datenexporte, analoger Arbeitsprozesse und zahlreicher Medienbrüche.<br />

#### Die Lösung im DataHub
Mithilfe des DataHubs werden die Bezirksregionenprofile zentralisiert und standardisiert bereitgestellt und interaktive Dashboards nutzer:innenfreundlich dargestellt.

Das soll zum einen die Arbeit in der Verwaltung erleichtern. Durch Zeitersparnisse bei der Analyse der Kernindikatoren können sich Verwaltungsmitarbeitende stärker auf den zweiten Teil der BZRP fokussieren — die Beschreibung von Zielen und Maßnahmen für den Bezirk.

Die Standardisierung der Formate ermöglicht zudem einen besseren Vergleich der Kernindikatoren zwischen den Bezirken.

Auch die Stadtbevölkerung profitiert von der verbesserten Auffindbarkeit der BZRP und den Informationen, die als Open Data verfügbar gemacht werden.

<img
  src={require('./assets/BZRP-einordnung.jpeg').default}
  alt="Einordnung"
  width={400}
  height={400}              
/>
<br />

#### Die Daten
Zu den verwendeten Daten zählen vor allem ein Set aus Kernindikatoren auf das sich die Bezirke vorher geeinigt haben. Dabei gibt es folgende thematische Schwerpunkte:

![Daten](./assets/BZRP-daten.png)
<br />

#### Die Akteur:innen

Der Use Case richtet sich zum einen an Zielgruppen innerhalb der Verwaltung, beispielsweise an die Datenkoordinatoren, die Fachämter der einzelnen Bezirke oder das Fachamt für Stadtplanung. 

Aber auch außerhalb der Verwaltung haben die BZRP eine große Reichweite. Dazu gehören interessierte Personen in der Zivilgesellschaft, Initiativen im Stadtraum (Vereine, soziale Aktuere etc.), Journalist:innen, Stadtplaner:innen oder die Privatwirtschaft. 

Am Entstehungsprozess sind viele diverse Akteur:innen beteiligt:

- SenStadt
- Datenkoordinatoren der Bezirke
- ODIS, CityLAB Berlin
- Planungsbüros und Dienstleister zur Erstellung der BZRP
- Regional-, Stadtteilkoordinatoren
- Organisationeinheit Sozialraumorientierte Planungskoordination (OESPK)

<br />

#### Die Umsetzung 

##### Organisatorisch
Zur organisatorischen Umsetzung wurden einige Methoden angewandt, *um den Prozess strukturiert zu gestalten und alle relevanten Akteure einzubeziehen.*

Dazu zählen Workshopformate in dem mittels einer [Entwicklungsmatrix](https://www.oeffentliches-gestalten.de/buch/vorbereiten/ist-zustand-betrachten) der IST-Zustand analysiert wurde. Außerdem wurden alle betroffen und verantwortlichen [Akteur:innen kartiert](https://www.oeffentliches-gestalten.de/buch/erkunden/system-akteure-verbinden#schl%C3%BCsselakteure-identifizieren).

Für ein besseres Verständnis der Zielgruppen wurden diese mittels Personas in zwei Gruppen eingeteilt — die Gelegenheitsuser und die Poweruser des Dashboards. Entsprechend der technischen Vorkenntnisse beider Gruppen werden Sprints durchgeführt um gemeinsam einen Prototypen für die Dashboards zu entwickeln, aber auch um dahinterliegende Prozesse zu diskutieren. 

Während der Umsetzungsphase wird wiederholt deutlich, dass bei der Vorgehensweise ein Kompromiss gefunden werden muss: zwischen dem schnellen Entwickeln eines prototypischen Dashboards und dem Mitdenken der dahinterliegenden Prozesse. Man kann entweder zügig ein vorzeigbares Ergebnis entwickeln, um die Vorteile des Use Cases zu demonstrieren, oder sich zunächst auf den gesamten BZRP-Entwicklungsprozess konzentrieren – inklusive der Betrachtung von Schnittstellen, Verantwortlichkeiten und weiteren Aspekten.

Aus diesem Grund entscheidet man sich für die Entwicklung von zwei Dashboards: Ein externes Dashboard, das prototypisch den Minimalkonsens aller Bezirke abbildet und zur Kommunikation der Vorteile des Use Cases dient. Und ein verwaltungsinternes Dashboard, bei dem grundlegende Prozesse mitgedacht werden und auf individuelle Bedarfe der Bezirke eingegangen werden kann.

##### Technisch

*Schnittstellen und grundlegenden Prozesse:*<br />
Die Daten werden zunächst aus verschiedenen Quellen, wie **PRISMA** (Planungsraumbezogenen Informationssystem für Monitoring und Analyse) oder dem **Geoportal** gezogen. Mit Hilfe der Komponente MinIO können dabei auch CSV Dateien verarbeitet werden. 

Die Daten werden anschließend in **NodeRED** weiterverarbeitet. Dafür wird in der Komponente ein Datenbankschema angelegt und die Daten nach weiteren Filtern und Reinigen in der Datenbank gespeichert. 

Zur Darstellung der Daten mittels interaktiver Dashboards wird die Komponente **Superset** genutzt.

*Komponenten:*

<img
  src={require('./assets/BZRP-komponenten.png').default}
  alt="Komponenten"
  width={600}
  height={750}              
/>


<br />

#### Lessons learned 
- Schnell Prototypen kreieren vs. tiefgreifende Prozessstrukturen mitdenken
- Umgang mit Kommentierung und Einordnung der Daten — vollautomatisierte Prozesse sind nicht möglich
<br />

#### Next Steps
Duva-Schnittstellen: Anlegen von Metadatenmodell mit Querverweisen
<br />

#### Ansprechpartner:innen
- Adina Priedemann
- Benjamin Heldt
- Yannik Hake
<br />

#### Weiterführende Ressourcen
- Aktuelle BZRP: https://bezirksregionenprofile-ts.netlify.app/
- Projekt “Bezirksregionen digital” des CityLabs: [https://citylab-berlin.org/de/projects/districtprofiles](https://citylab-berlin.org/de/projects/districtprofiles/)
<br />

## Bibliotheksdaten

#### Das Problem

#### Die Lösung im DataHub

#### Die Daten

#### Die Akteur:innen

#### Die Umsetzung 

##### Organisatorisch

##### Technisch

#### Lessons learned 

#### Next Steps

#### Ansprechpartner:innen

#### Weiterführende Ressourcen

## Berlin gärtnert

#### Das Problem

#### Die Lösung im DataHub

#### Die Daten

#### Die Akteur:innen

#### Die Umsetzung 

##### Organisatorisch

##### Technisch

#### Lessons learned 

#### Next Steps

#### Ansprechpartner:innen

#### Weiterführende Ressourcen

## Soziale Akteure

#### Das Problem

#### Die Lösung im DataHub

#### Die Daten

#### Die Akteur:innen

#### Die Umsetzung 

##### Organisatorisch

##### Technisch

#### Lessons learned 

#### Next Steps

#### Ansprechpartner:innen

#### Weiterführende Ressourcen

## Kühle Räume

#### Das Problem

#### Die Lösung im DataHub

#### Die Daten

#### Die Akteur:innen

#### Die Umsetzung 

##### Organisatorisch

##### Technisch

#### Lessons learned 

#### Next Steps

#### Ansprechpartner:innen

#### Weiterführende Ressourcen

