---
sidebar_position: 2
hide_title: true
description: Dies ist der zentrale Wissensspeicher des prototypischen Data Hub Berlins, der urbanen Datenplattform der Berliner Verwaltung. Hier findest du Informationen zu Hintergründen, Aufbau und Anwendungsfällen der Plattform.
title: Grafana
---

import styles from '/docs/docs.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { ArrowRightEndOnRectangleIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/solid';

<div className={styles.doccontainer}>

  <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-10 xl:pl-16 pt-16">
    <div>
      <h1>Grafana</h1>
      <p className="text-lg">
        Grafana stellt Echtzeit- und Metrikdaten in interaktiven Dashboards dar und bietet vielfältige Visualisierungsmöglichkeiten.
      </p>
    </div>
  </div>

## Was ist Grafana?

### Interaktive Dashboards für Datenanalyse

<div className="flex flex-col xl:flex-row xl:items-center justify-center xl:gap-10 ">
  <p className="mb-0">
Grafana erlaubt es, Daten aus unterschiedlichen Quellen wie PostgreSQL-Datenbanken, Datenuploads oder APIs zu visualisieren. Die Plattform bietet interaktive Dashboards mit Tabellen, Linien- und Balkendiagrammen, Heatmaps, Kartenansichten oder Zeitreihenanalysen. Mit Filtern, Drilldowns und dynamischen Variablen können Nutzende Daten nach eigenen Kriterien untersuchen. Zusätzlich ermöglichen Alerting-Mechanismen, dass Teams automatisch benachrichtigt werden, was die Plattform ideal für Monitoring, Reporting und datenbasierte Entscheidungsunterstützung macht.
</p>
    <div className="flex flex-[0_0_250px] xl:pb-10 w-full justify-center items-center">
      <img src="/img/logos/grafana.svg" alt="Grafana Logo" className="block h-auto w-[70%] xl:w-[70%]" />
    </div>
</div>

### Grafana im Data Hub

Im Data Hub dient Grafana als Analyse- und Visualisierungstool und baut direkt auf die Datenbanken und ETL-Pipelines auf. Daten aus PostgreSQL-Datenbanken (Roh- und aggregierte Daten), TimescaleDB (IoT- und Sensordaten), MinIO (Objektdaten) oder APIs werden über ETL-Prozesse aufbereitet und für Grafana bereitgestellt. Dashboards bieten Fachabteilungen und Projektteams direkten Zugriff auf Kennzahlen, ohne SQL-Abfragen oder Programmierkenntnisse. Nutzende können Dashboards individuell anpassen, Filter setzen oder Daten exportieren. Durch die Einbettung in den Data Hub-Stack können Dashboards für unterschiedliche Nutzergruppen geteilt werden, sodass Senatsverwaltungen, Bezirksämter oder Projektteams auf konsistente, zentral aufbereitete Daten zugreifen.

  <div className="w-full justify-center items-center pt-4">
    <img
      src={require('./assets/Grafana.jpeg').default}
      alt="Beispieldashboard in Grafana"
      label="Beispieldashboard in Grafana"
      className="block h-auto w-full xl:w-[80%] justify-center items-center mx-auto"
    />
    <figcaption className={styles.imgcaption}>Beispieldashboard in Grafana</figcaption>
  </div>

## Funktionen & Einsatzgebiete

Grafana im Data Hub bietet:

- Erstellung interaktiver Dashboards aus Datenbanken und APIs  
- Filter- und Drilldown-Funktionalitäten in den Charts für tiefergehende Analysen  
- Zeitreihenvisualisierung und Trendanalysen  
- Alerts und Benachrichtigungen bei definierten Schwellenwerten  
- Export und Teilen von Visualisierungen für Fachabteilungen  

:::tip Fiktives Praxisbeispiel

**„Luftqualität live überwachen“** 📊  
Ein Pilotprojekt zur Luftqualität in einem Berliner Kiezblock speist Sensorwerte in den Data Hub. Grafana stellt die Werte in Echtzeit dar, trägt die Veränderungen über die Zeit und löst Warnmeldungen aus, wenn bestimmte Grenzwerte überschritten werden.

:::

## Wie nutzt man Grafana?

### Skill-Level & Anforderungen

Grafana ist auf Anwenderfreundlichkeit ausgelegt, erfordert aber Grundkenntnisse in Datenbanken oder SQL-Abfragen für individuelle Dashboards.

**Technisches Know-How notwendig:** <span title="Mittel" class="text-yellow-400">●●○○○</span>  
**Komplexität bzw. Einarbeitungszeit:** <span title="Mittel" class="text-yellow-400">●●○○○</span>  

👉 Verwaltungsmitarbeitende können fertige Dashboards nutzen und leicht anpassen. Das initiale Erstellen von komplexen Dashboards, insbesondere für Echtzeitdaten oder das Einrichten von Alerts, sollte durch ein geschultes IT- oder Daten-Team erfolgen.

### Input & Output

<Tabs
  defaultValue="input"
  values={[
    { label: 'Input', value: 'input' },
    { label: 'Output', value: 'output' },
  ]}>

  <TabItem value="input">
  <>
    <div className="tabs__content">
      <div className="mb-4">
        <ArrowRightEndOnRectangleIcon className="w-5 h-5 text-green-600" />
        <h3 className="inline pl-2">Input</h3>
      </div>
      <p>
      Typische Inputs für Grafana im Data Hub:

      - Tabellen aus PostgreSQL-Datenbanken  
      - Sensordaten aus der Timescale-DB   
      - JSON oder CSV-Dateien aus MinIO  
      - APIs von Fachverfahren oder Open Data-Quellen
      </p>
    </div>
  </>
  </TabItem>

  <TabItem value="output">
  <>
    <div className="tabs__content">
      <div className="mb-4">
        <ArrowRightStartOnRectangleIcon className="w-5 h-5 text-blue-600" />
        <h3 className="inline pl-2">Output</h3>
      </div>
      <p>
      Grafana liefert:

      - Interaktive Dashboards mit Tabellen, Diagrammen und Karten  
      - Exportierbare Visualisierungen für Berichte  
      - Alerts und Benachrichtigungen bei definierten Schwellenwerten  
      </p>
    </div>
  </>
  </TabItem>

</Tabs>

<iframe
  src="https://data-hub-flow-designer.lovable.app/?flow=JTdCJTIybm9kZXMlMjIlM0ElNUIlN0IlMjJpZCUyMiUzQSUyMm5vZGUtMTAwMSUyMiUyQyUyMnR5cGUlMjIlM0ElMjJjb21wb25lbnQlMjIlMkMlMjJwb3NpdGlvbiUyMiUzQSU3QiUyMnglMjIlM0E1MzEuMDQ0NDE3MDYwMzE1MyUyQyUyMnklMjIlM0EtNTIuMTIxODY4OTkzNjAzNDYlN0QlMkMlMjJkYXRhJTIyJTNBJTdCJTIybGFiZWwlMjIlM0ElMjJLb21wb25lbnRlJTIyJTJDJTIydGl0bGUlMjIlM0ElMjJNaW5JTyUyMiUyQyUyMmRlc2NyaXB0aW9uJTIyJTNBJTIyJTIyJTJDJTIyY3VzdG9tVGl0bGUlMjIlM0FmYWxzZSU3RCUyQyUyMm1lYXN1cmVkJTIyJTNBJTdCJTIyd2lkdGglMjIlM0EyNDAlMkMlMjJoZWlnaHQlMjIlM0E3NCU3RCUyQyUyMnNlbGVjdGVkJTIyJTNBZmFsc2UlMkMlMjJkcmFnZ2luZyUyMiUzQWZhbHNlJTdEJTJDJTdCJTIyaWQlMjIlM0ElMjJub2RlLTEwMDMlMjIlMkMlMjJ0eXBlJTIyJTNBJTIycHJvY2Vzc2luZyUyMiUyQyUyMnBvc2l0aW9uJTIyJTNBJTdCJTIyeCUyMiUzQTIyMi42ODc2MTI3NzA2ODY3NyUyQyUyMnklMjIlM0EyMDMuNTU1ODY1NDQ5NzUwNDMlN0QlMkMlMjJkYXRhJTIyJTNBJTdCJTIybGFiZWwlMjIlM0ElMjJOb3RlJTIwUmVkJTIyJTJDJTIydGl0bGUlMjIlM0ElMjJOb2RlUmVkJTIyJTJDJTIyZGVzY3JpcHRpb24lMjIlM0ElMjJCZXNjaHJlaWJ1bmclMjBoaWVyJTIwZWluZ2ViZW4lMjIlMkMlMjJjdXN0b21UaXRsZSUyMiUzQWZhbHNlJTdEJTJDJTIybWVhc3VyZWQlMjIlM0ElN0IlMjJ3aWR0aCUyMiUzQTI4MCUyQyUyMmhlaWdodCUyMiUzQTkxJTdEJTJDJTIyc2VsZWN0ZWQlMjIlM0FmYWxzZSUyQyUyMmRyYWdnaW5nJTIyJTNBZmFsc2UlN0QlMkMlN0IlMjJpZCUyMiUzQSUyMm5vZGUtMTAwNCUyMiUyQyUyMnR5cGUlMjIlM0ElMjJwcm9jZXNzaW5nJTIyJTJDJTIycG9zaXRpb24lMjIlM0ElN0IlMjJ4JTIyJTNBNTEzLjExMDIwNDU3MDQxNjglMkMlMjJ5JTIyJTNBMjAzLjM1NDc4ODc4Nzk1MjgzJTdEJTJDJTIyZGF0YSUyMiUzQSU3QiUyMmxhYmVsJTIyJTNBJTIyTm90ZSUyMFJlZCUyMiUyQyUyMnRpdGxlJTIyJTNBJTIyQWlyRmxvdyUyMiUyQyUyMmRlc2NyaXB0aW9uJTIyJTNBJTIyQmVzY2hyZWlidW5nJTIwaGllciUyMGVpbmdlYmVuJTIyJTJDJTIyY3VzdG9tVGl0bGUlMjIlM0FmYWxzZSU3RCUyQyUyMm1lYXN1cmVkJTIyJTNBJTdCJTIyd2lkdGglMjIlM0EyODAlMkMlMjJoZWlnaHQlMjIlM0E5MSU3RCUyQyUyMnNlbGVjdGVkJTIyJTNBZmFsc2UlMkMlMjJkcmFnZ2luZyUyMiUzQWZhbHNlJTdEJTJDJTdCJTIyaWQlMjIlM0ElMjJub2RlLTEwMDUlMjIlMkMlMjJ0eXBlJTIyJTNBJTIycHJvY2Vzc2luZyUyMiUyQyUyMnBvc2l0aW9uJTIyJTNBJTdCJTIyeCUyMiUzQTgwMy4wMzAxMDQ3MTU2NTIzJTJDJTIyeSUyMiUzQTIwMy4zNTQ3ODg3ODc5NTI4MyU3RCUyQyUyMmRhdGElMjIlM0ElN0IlMjJsYWJlbCUyMiUzQSUyMk5vdGUlMjBSZWQlMjIlMkMlMjJ0aXRsZSUyMiUzQSUyMkp1cHl0ZXJOb3RlYm9vayUyMiUyQyUyMmRlc2NyaXB0aW9uJTIyJTNBJTIyQmVzY2hyZWlidW5nJTIwaGllciUyMGVpbmdlYmVuJTIyJTJDJTIyY3VzdG9tVGl0bGUlMjIlM0FmYWxzZSU3RCUyQyUyMm1lYXN1cmVkJTIyJTNBJTdCJTIyd2lkdGglMjIlM0EyODAlMkMlMjJoZWlnaHQlMjIlM0E5MSU3RCUyQyUyMnNlbGVjdGVkJTIyJTNBZmFsc2UlMkMlMjJkcmFnZ2luZyUyMiUzQWZhbHNlJTdEJTJDJTdCJTIyaWQlMjIlM0ElMjJub2RlLTEwMDclMjIlMkMlMjJ0eXBlJTIyJTNBJTIyc291cmNlJTIyJTJDJTIycG9zaXRpb24lMjIlM0ElN0IlMjJ4JTIyJTNBMTYxLjc1MTU2MTU1NTM1NTY0JTJDJTIyeSUyMiUzQS0yMzIuNTI3NzAwMTYwODkwNDglN0QlMkMlMjJkYXRhJTIyJTNBJTdCJTIybGFiZWwlMjIlM0ElMjJOZXVlJTIwUXVlbGxlJTIyJTJDJTIyc3VidGl0bGUlMjIlM0ElMjJDU1YtRGF0ZWklMjIlN0QlMkMlMjJtZWFzdXJlZCUyMiUzQSU3QiUyMndpZHRoJTIyJTNBMTgwJTJDJTIyaGVpZ2h0JTIyJTNBNzIlN0QlMkMlMjJzZWxlY3RlZCUyMiUzQXRydWUlMkMlMjJkcmFnZ2luZyUyMiUzQWZhbHNlJTdEJTJDJTdCJTIyaWQlMjIlM0ElMjJub2RlLTEwMDglMjIlMkMlMjJ0eXBlJTIyJTNBJTIyc291cmNlJTIyJTJDJTIycG9zaXRpb24lMjIlM0ElN0IlMjJ4JTIyJTNBNTg1Ljk3Mjc1OTc0MTI5MiUyQyUyMnklMjIlM0EtMjMxLjYwOTMxMjg0MTU5OTQlN0QlMkMlMjJkYXRhJTIyJTNBJTdCJTIybGFiZWwlMjIlM0ElMjJOZXVlJTIwUXVlbGxlJTIyJTJDJTIyc3VidGl0bGUlMjIlM0ElMjJDU1YtRGF0ZWklMjIlN0QlMkMlMjJtZWFzdXJlZCUyMiUzQSU3QiUyMndpZHRoJTIyJTNBMTgwJTJDJTIyaGVpZ2h0JTIyJTNBNzIlN0QlMkMlMjJzZWxlY3RlZCUyMiUzQWZhbHNlJTJDJTIyZHJhZ2dpbmclMjIlM0FmYWxzZSU3RCUyQyU3QiUyMmlkJTIyJTNBJTIybm9kZS0xMDA5JTIyJTJDJTIydHlwZSUyMiUzQSUyMnNvdXJjZSUyMiUyQyUyMnBvc2l0aW9uJTIyJTNBJTdCJTIyeCUyMiUzQTgwNS42NDUyNTY5NDAzODAxJTJDJTIyeSUyMiUzQS0yMzEuNjM0OTg5MTE2MTUzOTclN0QlMkMlMjJkYXRhJTIyJTNBJTdCJTIybGFiZWwlMjIlM0ElMjJOZXVlJTIwUXVlbGxlJTIyJTJDJTIyc3VidGl0bGUlMjIlM0ElMjJDU1YtRGF0ZWklMjIlN0QlMkMlMjJtZWFzdXJlZCUyMiUzQSU3QiUyMndpZHRoJTIyJTNBMTgwJTJDJTIyaGVpZ2h0JTIyJTNBNzIlN0QlMkMlMjJzZWxlY3RlZCUyMiUzQWZhbHNlJTJDJTIyZHJhZ2dpbmclMjIlM0FmYWxzZSU3RCUyQyU3QiUyMmlkJTIyJTNBJTIybm9kZS0xMDEwJTIyJTJDJTIydHlwZSUyMiUzQSUyMnNvdXJjZSUyMiUyQyUyMnBvc2l0aW9uJTIyJTNBJTdCJTIyeCUyMiUzQTEwMTkuNjY4ODI4ODk4NDI1MyUyQyUyMnklMjIlM0EtMjMwLjI3ODI5OTQ1OTY5ODczJTdEJTJDJTIyZGF0YSUyMiUzQSU3QiUyMmxhYmVsJTIyJTNBJTIyTmV1ZSUyMFF1ZWxsZSUyMiUyQyUyMnN1YnRpdGxlJTIyJTNBJTIyQ1NWLURhdGVpJTIyJTdEJTJDJTIybWVhc3VyZWQlMjIlM0ElN0IlMjJ3aWR0aCUyMiUzQTE4MCUyQyUyMmhlaWdodCUyMiUzQTcyJTdEJTJDJTIyc2VsZWN0ZWQlMjIlM0FmYWxzZSUyQyUyMmRyYWdnaW5nJTIyJTNBZmFsc2UlN0QlMkMlN0IlMjJpZCUyMiUzQSUyMm5vZGUtMTAxMSUyMiUyQyUyMnR5cGUlMjIlM0ElMjJzb3VyY2UlMjIlMkMlMjJwb3NpdGlvbiUyMiUzQSU3QiUyMnglMjIlM0EzNzAuMzIxNzk1Nzc4MTU3MjUlMkMlMjJ5JTIyJTNBLTIzMi4yMzgyMTkxMDE1NDcxMiU3RCUyQyUyMmRhdGElMjIlM0ElN0IlMjJsYWJlbCUyMiUzQSUyMk5ldWUlMjBRdWVsbGUlMjIlMkMlMjJzdWJ0aXRsZSUyMiUzQSUyMkNTVi1EYXRlaSUyMiU3RCUyQyUyMm1lYXN1cmVkJTIyJTNBJTdCJTIyd2lkdGglMjIlM0ExODAlMkMlMjJoZWlnaHQlMjIlM0E3MiU3RCUyQyUyMnNlbGVjdGVkJTIyJTNBZmFsc2UlMkMlMjJkcmFnZ2luZyUyMiUzQWZhbHNlJTdEJTVEJTJDJTIyZWRnZXMlMjIlM0ElNUIlN0IlMjJzdHlsZSUyMiUzQSU3QiUyMnN0cm9rZVdpZHRoJTIyJTNBMiUyQyUyMnN0cm9rZSUyMiUzQSUyMiUyMzAwMCUyMiUyQyUyMnN0cm9rZURhc2hhcnJheSUyMiUzQSUyMjUlMkM1JTIyJTdEJTJDJTIyY2xhc3NOYW1lJTIyJTNBJTIyYW5pbWF0ZWQtZWRnZSUyMiUyQyUyMnNvdXJjZSUyMiUzQSUyMm5vZGUtMTAwMSUyMiUyQyUyMnRhcmdldCUyMiUzQSUyMm5vZGUtMTAwMyUyMiUyQyUyMmlkJTIyJTNBJTIyeHktZWRnZV9fbm9kZS0xMDAxLW5vZGUtMTAwMyUyMiU3RCUyQyU3QiUyMnN0eWxlJTIyJTNBJTdCJTIyc3Ryb2tlV2lkdGglMjIlM0EyJTJDJTIyc3Ryb2tlJTIyJTNBJTIyJTIzMDAwJTIyJTJDJTIyc3Ryb2tlRGFzaGFycmF5JTIyJTNBJTIyNSUyQzUlMjIlN0QlMkMlMjJjbGFzc05hbWUlMjIlM0ElMjJhbmltYXRlZC1lZGdlJTIyJTJDJTIyc291cmNlJTIyJTNBJTIybm9kZS0xMDAxJTIyJTJDJTIydGFyZ2V0JTIyJTNBJTIybm9kZS0xMDA0JTIyJTJDJTIyaWQlMjIlM0ElMjJ4eS1lZGdlX19ub2RlLTEwMDEtbm9kZS0xMDA0JTIyJTdEJTJDJTdCJTIyc3R5bGUlMjIlM0ElN0IlMjJzdHJva2VXaWR0aCUyMiUzQTIlMkMlMjJzdHJva2UlMjIlM0ElMjIlMjMwMDAlMjIlMkMlMjJzdHJva2VEYXNoYXJyYXklMjIlM0ElMjI1JTJDNSUyMiU3RCUyQyUyMmNsYXNzTmFtZSUyMiUzQSUyMmFuaW1hdGVkLWVkZ2UlMjIlMkMlMjJzb3VyY2UlMjIlM0ElMjJub2RlLTEwMDElMjIlMkMlMjJ0YXJnZXQlMjIlM0ElMjJub2RlLTEwMDUlMjIlMkMlMjJpZCUyMiUzQSUyMnh5LWVkZ2VfX25vZGUtMTAwMS1ub2RlLTEwMDUlMjIlN0QlMkMlN0IlMjJzdHlsZSUyMiUzQSU3QiUyMnN0cm9rZVdpZHRoJTIyJTNBMiUyQyUyMnN0cm9rZSUyMiUzQSUyMiUyMzAwMCUyMiUyQyUyMnN0cm9rZURhc2hhcnJheSUyMiUzQSUyMjUlMkM1JTIyJTdEJTJDJTIyY2xhc3NOYW1lJTIyJTNBJTIyYW5pbWF0ZWQtZWRnZSUyMiUyQyUyMnNvdXJjZSUyMiUzQSUyMm5vZGUtMTAxMSUyMiUyQyUyMnRhcmdldCUyMiUzQSUyMm5vZGUtMTAwMSUyMiUyQyUyMmlkJTIyJTNBJTIyeHktZWRnZV9fbm9kZS0xMDExLW5vZGUtMTAwMSUyMiU3RCUyQyU3QiUyMnN0eWxlJTIyJTNBJTdCJTIyc3Ryb2tlV2lkdGglMjIlM0EyJTJDJTIyc3Ryb2tlJTIyJTNBJTIyJTIzMDAwJTIyJTJDJTIyc3Ryb2tlRGFzaGFycmF5JTIyJTNBJTIyNSUyQzUlMjIlN0QlMkMlMjJjbGFzc05hbWUlMjIlM0ElMjJhbmltYXRlZC1lZGdlJTIyJTJDJTIyc291cmNlJTIyJTNBJTIybm9kZS0xMDA3JTIyJTJDJTIydGFyZ2V0JTIyJTNBJTIybm9kZS0xMDAxJTIyJTJDJTIyaWQlMjIlM0ElMjJ4eS1lZGdlX19ub2RlLTEwMDctbm9kZS0xMDAxJTIyJTdEJTJDJTdCJTIyc3R5bGUlMjIlM0ElN0IlMjJzdHJva2VXaWR0aCUyMiUzQTIlMkMlMjJzdHJva2UlMjIlM0ElMjIlMjMwMDAlMjIlMkMlMjJzdHJva2VEYXNoYXJyYXklMjIlM0ElMjI1JTJDNSUyMiU3RCUyQyUyMmNsYXNzTmFtZSUyMiUzQSUyMmFuaW1hdGVkLWVkZ2UlMjIlMkMlMjJzb3VyY2UlMjIlM0ElMjJub2RlLTEwMDglMjIlMkMlMjJ0YXJnZXQlMjIlM0ElMjJub2RlLTEwMDElMjIlMkMlMjJpZCUyMiUzQSUyMnh5LWVkZ2VfX25vZGUtMTAwOC1ub2RlLTEwMDElMjIlN0QlMkMlN0IlMjJzdHlsZSUyMiUzQSU3QiUyMnN0cm9rZVdpZHRoJTIyJTNBMiUyQyUyMnN0cm9rZSUyMiUzQSUyMiUyMzAwMCUyMiUyQyUyMnN0cm9rZURhc2hhcnJheSUyMiUzQSUyMjUlMkM1JTIyJTdEJTJDJTIyY2xhc3NOYW1lJTIyJTNBJTIyYW5pbWF0ZWQtZWRnZSUyMiUyQyUyMnNvdXJjZSUyMiUzQSUyMm5vZGUtMTAwOSUyMiUyQyUyMnRhcmdldCUyMiUzQSUyMm5vZGUtMTAwMSUyMiUyQyUyMmlkJTIyJTNBJTIyeHktZWRnZV9fbm9kZS0xMDA5LW5vZGUtMTAwMSUyMiU3RCUyQyU3QiUyMnN0eWxlJTIyJTNBJTdCJTIyc3Ryb2tlV2lkdGglMjIlM0EyJTJDJTIyc3Ryb2tlJTIyJTNBJTIyJTIzMDAwJTIyJTJDJTIyc3Ryb2tlRGFzaGFycmF5JTIyJTNBJTIyNSUyQzUlMjIlN0QlMkMlMjJjbGFzc05hbWUlMjIlM0ElMjJhbmltYXRlZC1lZGdlJTIyJTJDJTIyc291cmNlJTIyJTNBJTIybm9kZS0xMDEwJTIyJTJDJTIydGFyZ2V0JTIyJTNBJTIybm9kZS0xMDAxJTIyJTJDJTIyaWQlMjIlM0ElMjJ4eS1lZGdlX19ub2RlLTEwMTAtbm9kZS0xMDAxJTIyJTdEJTVEJTJDJTIydmVyc2lvbiUyMiUzQTElN0Q%3D"
  width="100%"
  height="400"
  style={{ border: "1px solid #ccc", borderRadius: "8px" }}
  allowFullScreen
></iframe>

## Beispiele

Grafana kommt als Datenvisualisierungskomponente unter anderem in diesem Projekt der Technologiestiftung Berlin und des Bezirksamts Pankow zum Einsatz:

- [Datenbasierte Bibliothekssteuerung 2023: Monitoring von Ausleihen und Angeboten](https://grafana.odis-berlin.de/public-dashboards/4b1757c17042436fbcbe6065061114d2?orgId=1)  


## Weiterführende Informationen

Diese Seite ist als erster Einstieg zu Grafana im Kontext des Data Hub gedacht. Da es sich um ein bekanntes Open Source Tool handelt, existiert eine offizielle, technische Dokumentation:  
[Offizielle Grafana Dokumentation](https://grafana.com/docs/) 

In der Dokumentation des CIVITAS/CORE findest du Hinweise dazu, wie das Tool auf Admin-Level genutzt und verwaltet wird:  
[CIVITAS/CORE Admin Docs](https://docs.core.civitasconnect.digital/docs/Administration/Grafana)

Tutorials oder Inspirationen findest du hier:  
[Grafana Tutorials & Dashboards](https://grafana.com/tutorials/)
</div>
