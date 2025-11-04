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
