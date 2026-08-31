---
title: Monitoring der Landesgleichstellung
sidebar_position: 3
hide_title: true
---

import styles from '../docs.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { CircleStackIcon, BuildingOffice2Icon, UsersIcon } from '@heroicons/react/24/solid';

<div className={styles.doccontainer}>

  <div className="flex flex-col xl:flex-row items-center gap-4 xl:gap-12 xl:pl-2 pt-16 -mb-8">
    <div>
      <h1>Monitoring der Landesgleichstellung</h1>
      <p className="text-lg">
        Wie entwickeln sich Personal- und Entgeltstrukturen, die Besetzung von Gremien und die Umsetzung der Frauenförderverordnung bei öffentlicher Auftragsvergabe im Land Berlin? Mithilfe der digital erhobenen Daten zur Umsetzung des Berliner Landesgleichstellungsgesetzes (LGG) sollen zentrale Gleichstellungsdaten des Berliner Landesdienstes künftig im Data Hub Berlin über ein Dashboard nutzendenfreundlich und interaktiv bereitgestellt werden.
      </p>
    </div>
    <div className="w-[250px] xl:flex-[0_0_250px]">
      <img className="w-full max-w-[250px]" src="/img/monitoring_landesgleichstellung_os.svg" alt="Monitoring der Landesgleichstellung" />
    </div>
  </div>

## Welche Rolle spielt die LGG-Berichterstattung für Gleichstellung im Land Berlin?

Das Landesgleichstellungsgesetz sieht ein zweijähriges Controlling zur Umsetzung des Gesetzes vor (§ 19 LGG). Die für Frauen und Gleichstellung zuständige Senatsverwaltung erhebt dazu alle zwei Jahre Daten bei den Einrichtungen und Dienststellen des unmittelbaren und mittelbaren Landesdienstes Berlins.

Die Daten bilden die Grundlage für den Bericht an das Abgeordnetenhaus und dienen darüber hinaus dazu, Entwicklungen im Bereich der Gleichstellung im öffentlichen Dienst Berlins für Verwaltung, Politik, Gleichstellungsakteurinnen und -akteure sowie die interessierte Öffentlichkeit sichtbar zu machen.

## Das Problem

In der Vergangenheit wurden die Daten für den LGG-Bericht manuell erhoben. Datenerhebung und -aufbereitung banden erhebliche personelle und zeitliche Ressourcen und bargen ein erhöhtes Fehlerrisiko. Dieser Prozess wurde mittlerweile digitalisiert. Aktuell werden die Daten bei den Einrichtungen und Dienststellen des Landes über die Umfragesoftware LimeSurvey erhoben.

Durch die Digitalisierung und die damit einhergehende Standardisierung der Datenerhebung besteht nun grundsätzlich die Möglichkeit, nicht nur ausgewählte, sondern alle erhobenen Daten öffentlich einsehbar und weiterverwendbar zu machen. Dieses Potenzial wurde bisher jedoch noch nicht vollständig ausgeschöpft. Weiterführende Informationen und ausgewählte Daten wurden bislang vor allem als PDF, auf Webseiten sowie teilweise über Datawrapper-Visualisierungen veröffentlicht. Daraus ergeben sich mehrere Grenzen:

- **Eingeschränkte Nutzendenfreundlichkeit:** Die Ergebnisse werden überwiegend in Berichtsform und in statischen Darstellungen veröffentlicht. Für Nutzende ist es dadurch nur eingeschränkt möglich, Daten eigenständig zu filtern, zu vergleichen und gezielt individuelle Fragestellungen zu beantworten.
- **Notwendige Auswahl und Fokussetzung:** Aufgrund des Umfangs der erhobenen Daten konnte bislang immer nur eine Auswahl der Ergebnisse veröffentlicht und visualisiert werden. Nicht alle vorhandenen Daten konnten in einer Form bereitgestellt werden, die zugleich übersichtlich, verständlich und nutzendenfreundlich ist.
- **Hoher manueller Aufwand bei Veröffentlichungen:** Weiterführende Darstellungen, Grafiken und Visualisierungen mussten bisher einzeln erstellt und gepflegt werden. Dies erschwert eine fortlaufende und erweiterbare Bereitstellung der Daten.

## Zielsetzung

Der Data Hub Berlin wird eingesetzt, um die im Rahmen der LGG-Berichterstattung erhobenen Daten nutzendenfreundlicher bereitzustellen und interaktiv auswertbar zu machen. Ziel ist es, aus den vorhandenen Daten eine strukturierte, verständliche und flexibel nutzbare Informationsgrundlage zu schaffen.

Über Apache Superset sollen die Daten der LGG-Berichterstattung in Form von Dashboards aufbereitet und veröffentlicht werden. Nutzende können dadurch Daten nach ausgewählten Merkmalen filtern, Entwicklungen nachvollziehen und Themenbereiche gezielt betrachten.

Die Daten sollen so nicht nur im Bericht selbst, sondern ergänzend in einer zeitgemäßen, webbasierten Form bereitgestellt werden. Unterschiedliche Zielgruppen – etwa Verwaltung, Politik, Gleichstellungsbeauftragte, Wissenschaft, Presse und Öffentlichkeit – sollen dadurch schneller Antworten auf ihre jeweiligen Fragestellungen finden können.

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

<div className="tabs__content">

<div className="mb-4">
  <CircleStackIcon className="w-5 h-5 text-green-600" />
  <h3 className="inline pl-2">Die Daten</h3>
</div>

Die Datengrundlage bilden die im Rahmen der LGG-Berichterstattung erhobenen Angaben der berichtspflichtigen Einrichtungen und Dienststellen des Landes Berlin.

Erhoben werden insbesondere Daten zu:

- Personal- und Entgeltstrukturen,
- Besetzung von Gremien,
- Umsetzung der Frauenförderverordnung bei öffentlicher Auftragsvergabe und staatlicher Leistungsgewährung.

Die Daten liegen in standardisierten CSV-Strukturen vor.

</div>

</TabItem>

<TabItem value="zielgruppen">

<div className="tabs__content">

<div className="mb-4">
  <UsersIcon className="w-5 h-5 text-green-600" />
  <h3 className="inline pl-2">Die Zielgruppen</h3>
</div>

Das Dashboard richtet sich an unterschiedliche Zielgruppen:

- Abgeordnetenhaus und politische Entscheidungsträgerinnen und Entscheidungsträger,
- Berliner Verwaltung und nachgeordnete Einrichtungen,
- Gleichstellungsbeauftragte und Frauenvertreterinnen,
- Fachöffentlichkeit, Wissenschaft und Presse,
- interessierte Öffentlichkeit.

</div>

</TabItem>

<TabItem value="beteiligte">

<div className="tabs__content">

<div className="mb-4">
  <BuildingOffice2Icon className="w-5 h-5 text-green-600" />
  <h3 className="inline pl-2">Die Beteiligten</h3>
</div>

Am Pilotprojekt arbeiten diese Partner zusammen:

- die für die LGG-Berichterstattung zuständige Senatsverwaltung,
- die datenliefernden Einrichtungen und Dienststellen des unmittelbaren und mittelbaren Landesdienstes,
- Technologiestiftung Berlin,
- externe Dienstleister für Datenerhebung, Datenaufbereitung und Dashboardentwicklung.

</div>

</TabItem>

</Tabs>

### Technische Umsetzung

Die Datenerhebung erfolgt über das Online-Umfragetool LimeSurvey. Nach Abschluss der Erhebung werden die Daten fachlich geprüft, von einem externen Dienstleister bereinigt und für die Veröffentlichung aufbereitet. Die aufbereiteten Daten bilden die Grundlage für die Visualisierung im Data Hub Berlin.

Für den Prototyp werden die veröffentlichungsfähigen Daten durch den Dienstleister in eine für Apache Superset nutzbare Struktur überführt und interaktive Dashboards erstellt.

Die technische Umsetzung im Rahmen des Data Hub konzentriert sich zunächst auf die Veröffentlichung und Visualisierung der erhobenen Daten. Perspektivisch soll daraus ein wiederholbarer Prozess entstehen, bei dem die Daten aus künftigen LGG-Berichtszyklen regelmäßig für das Dashboard aufbereitet und fortgeschrieben werden.

<iframe
  src="https://data-hub-flow-designer.lovable.app/?flow=JTdCJTIybm9kZXMlMjIlM0ElNUIlN0IlMjJpZCUyMiUzQSUyMm5vZGUtMTAwOSUyMiUyQyUyMnR5cGUlMjIlM0ElMjJzb3VyY2UlMjIlMkMlMjJwb3NpdGlvbiUyMiUzQSU3QiUyMnglMjIlM0E1NDcuNzMwMzk5MjQ3NjYxNyUyQyUyMnklMjIlM0EyOTEuNzM2MDE2MDAzMDYxOSU3RCUyQyUyMmRhdGElMjIlM0ElN0IlMjJsYWJlbCUyMiUzQSUyMm1hbnVlbGxlciUyMERhdGVpdXBsb2FkJTIyJTJDJTIyc3VidGl0bGUlMjIlM0ElMjJDU1YtRGF0ZWklMjBhdXMlMjBEYXRlbmVyaGVidW5nJTIwZHVyY2glMjBkYXMlMjBUb29sJTIwTGltZVN1cnZleSUyMiUyQyUyMmN1c3RvbUxhYmVsJTIyJTNBZmFsc2UlN0QlMkMlMjJtZWFzdXJlZCUyMiUzQSU3QiUyMndpZHRoJTIyJTNBMzk5JTJDJTIyaGVpZ2h0JTIyJTNBNzIlN0QlMkMlMjJzZWxlY3RlZCUyMiUzQXRydWUlMkMlMjJkcmFnZ2luZyUyMiUzQWZhbHNlJTdEJTJDJTdCJTIyaWQlMjIlM0ElMjJub2RlLTEwMTAlMjIlMkMlMjJ0eXBlJTIyJTNBJTIyY29tcG9uZW50JTIyJTJDJTIycG9zaXRpb24lMjIlM0ElN0IlMjJ4JTIyJTNBNDQ1LjI5MjYxOTEwMjIzMzA2JTJDJTIyeSUyMiUzQTQ1Ny4yMTI0MzAwODQxMzg5JTdEJTJDJTIyZGF0YSUyMiUzQSU3QiUyMmxhYmVsJTIyJTNBJTIyS29tcG9uZW50ZSUyMiUyQyUyMnRpdGxlJTIyJTNBJTIycGdBZG1pbiUyRkRhdGVuYmFuayUyMiUyQyUyMmRlc2NyaXB0aW9uJTIyJTNBJTIyRGF0ZW4lMjB3ZXJkZW4lMjBpbiUyMGRlciUyMERhdGVuYmFuayUyMGdlc3BlaWNoZXJ0JTJDJTIwZmFjaGxpY2glMjBnZXByJUMzJUJDZnQlMjB1bmQlMjBiZXJlaW5pZ3QlMjIlMkMlMjJjdXN0b21UaXRsZSUyMiUzQWZhbHNlJTdEJTJDJTIybWVhc3VyZWQlMjIlM0ElN0IlMjJ3aWR0aCUyMiUzQTI4MCUyQyUyMmhlaWdodCUyMiUzQTEyNyU3RCUyQyUyMnNlbGVjdGVkJTIyJTNBZmFsc2UlMkMlMjJkcmFnZ2luZyUyMiUzQWZhbHNlJTdEJTJDJTdCJTIyaWQlMjIlM0ElMjJub2RlLTEwMTElMjIlMkMlMjJ0eXBlJTIyJTNBJTIyZGFzaGJvYXJkJTIyJTJDJTIycG9zaXRpb24lMjIlM0ElN0IlMjJ4JTIyJTNBNjUzLjEyMzExNTM1ODgyMzglMkMlMjJ5JTIyJTNBNjUyLjIzODIwMzgyMjU1MSU3RCUyQyUyMmRhdGElMjIlM0ElN0IlMjJsYWJlbCUyMiUzQSUyMkRhc2hib2FyZCUyMiUyQyUyMnRpdGxlJTIyJTNBJTIyU3VwZXJzZXQlMjIlMkMlMjJkZXNjcmlwdGlvbiUyMiUzQSUyMkVyc3RlbGx1bmclMjBpbnRlcmFrdGl2ZXIlMjBEYXNoYm9hcmRzJTIwJTIyJTJDJTIyY3VzdG9tVGl0bGUlMjIlM0FmYWxzZSU3RCUyQyUyMm1lYXN1cmVkJTIyJTNBJTdCJTIyd2lkdGglMjIlM0EyNzYlMkMlMjJoZWlnaHQlMjIlM0E5MiU3RCUyQyUyMnNlbGVjdGVkJTIyJTNBZmFsc2UlMkMlMjJkcmFnZ2luZyUyMiUzQWZhbHNlJTdEJTVEJTJDJTIyZWRnZXMlMjIlM0ElNUIlN0IlMjJzdHlsZSUyMiUzQSU3QiUyMnN0cm9rZVdpZHRoJTIyJTNBMiUyQyUyMnN0cm9rZSUyMiUzQSUyMiUyMzAwMCUyMiUyQyUyMnN0cm9rZURhc2hhcnJheSUyMiUzQSUyMjUlMkM1JTIyJTdEJTJDJTIyY2xhc3NOYW1lJTIyJTNBJTIyYW5pbWF0ZWQtZWRnZSUyMiUyQyUyMnR5cGUlMjIlM0ElMjJzbW9vdGhzdGVwJTIyJTJDJTIyc291cmNlJTIyJTNBJTIybm9kZS0xMDA5JTIyJTJDJTIydGFyZ2V0JTIyJTNBJTIybm9kZS0xMDEwJTIyJTJDJTIyaWQlMjIlM0ElMjJ4eS1lZGdlX19ub2RlLTEwMDktbm9kZS0xMDEwJTIyJTdEJTJDJTdCJTIyc3R5bGUlMjIlM0ElN0IlMjJzdHJva2VXaWR0aCUyMiUzQTIlMkMlMjJzdHJva2UlMjIlM0ElMjIlMjMwMDAlMjIlMkMlMjJzdHJva2VEYXNoYXJyYXklMjIlM0ElMjI1JTJDNSUyMiU3RCUyQyUyMmNsYXNzTmFtZSUyMiUzQSUyMmFuaW1hdGVkLWVkZ2UlMjIlMkMlMjJ0eXBlJTIyJTNBJTIyc21vb3Roc3RlcCUyMiUyQyUyMnNvdXJjZSUyMiUzQSUyMm5vZGUtMTAxMCUyMiUyQyUyMnRhcmdldCUyMiUzQSUyMm5vZGUtMTAxMSUyMiUyQyUyMmlkJTIyJTNBJTIyeHktZWRnZV9fbm9kZS0xMDEwLW5vZGUtMTAxMSUyMiU3RCU1RCUyQyUyMnZlcnNpb24lMjIlM0ExJTdE"
  width="100%"
  height="400"
  style={{ border: "1px solid #ccc", borderRadius: "8px", marginTop: "2em" }}
  allowFullScreen
></iframe>
<figcaption className={styles.imgcaption}>Schematische Abbildung der Datenpipeline für das Monitoring der Landesgleichstellung im Data Hub</figcaption>

## Wie geht’s weiter?

### Nächste Schritte

Aktuell wird der Bericht an das Abgeordnetenhaus erstellt und das Dashboard zum 17. LGG-Bericht finalisiert. Im nächsten Schritt sollen die fachlich geprüften und veröffentlichungsfähigen Daten im Data Hub Berlin aufbereitet und über Apache Superset als ergänzendes digitales Angebot zur LGG-Berichterstattung veröffentlicht werden.

Nach der Veröffentlichung des ersten Dashboards soll geprüft werden, welche Darstellungen, Filtermöglichkeiten und Kennzahlen besonders hilfreich sind und wie das Angebot weiterentwickelt werden kann. Perspektivisch soll das Dashboard mit künftigen Berichtszyklen fortgeschrieben und als dauerhaftes, nutzendenfreundliches Informationsangebot zu Gleichstellungsdaten im Berliner Landesdienst etabliert werden.

</div>