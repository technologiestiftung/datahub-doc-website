---
sidebar_position: 2
hide_title: true
description: Dies ist der zentrale Wissensspeicher des prototypischen Data Hub Berlins, der urbanen Datenplattform der Berliner Verwaltung. Hier findest du Informationen zu Hintergründen, Aufbau und Anwendungsfällen der Plattform.
title: Apache Airflow
---

import styles from '/docs/docs.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { ArrowRightEndOnRectangleIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/solid';

<div className={styles.doccontainer}>

  <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-10 xl:pl-16 pt-16">
    <div>
      <h1>Apache Airflow</h1>
      <p className="text-lg">
Airflow orchestriert Datenpipelines. Es ermöglicht die automatisierte Ausführung vielfältiger Schritte zur Tranformation und Analyse von Daten.
      </p>
    </div>
  </div>

## Was ist Apache Airflow?

### Orchestrierung von Datenpipelines
<div className="flex flex-col xl:flex-row xl:items-center justify-center xl:gap-10">
  <p className="mb-0">
Apache Airflow erlaubt das Definieren von Workflows als Code („DAGs“) und steuert deren Ausführung automatisch. Jobs können zeit- oder ereignisgesteuert ablaufen, Abhängigkeiten zwischen Aufgaben werden automatisch beachtet, und fehlerhafte Schritte können wiederholt werden.  
</p>
    <div className="flex flex-[0_0_250px] xl:pb-8 w-full justify-center items-center">
      <img src="/img/logos/airflow.svg" alt="Apache Airflow Logo" className="block h-auto w-[70%] xl:w-[70%]"/>
    </div>
</div>

### Airflow im Data Hub

Im Data Hub übernimmt Airflow die zentrale Rolle bei der Automatisierung von ETL-Prozessen, beim Laden von Rohdaten aus MinIO oder APIs in Datenbanken und beim Auslösen weiterer Analysen und Visualisierungen. Airflow sorgt dafür, dass Datenpipelines zuverlässig laufen, sich wiederholen lassen und Änderungen an Input-Daten automatisch verarbeitet werden. Airflow kann auch längere Skripte ausführen, die aufeinander aufbauen. Diese Skripte werden in Python geschrieben und können komplexe Abhängigkeiten zwischen Aufgaben modellieren, sodass ein Arbeitsschritt erst startet, wenn die vorherigen erfolgreich abgeschlossen wurden. Dadurch lassen sich umfangreiche Datenprozesse modular und wiederholbar gestalten.

## Funktionen & Einsatzgebiete

Airflow wird im Data Hub insbesondere für folgende Aufgaben genutzt:

- Skript-basiertes Laden von Daten aus MinIO, APIs oder anderen Datenquellen, um die Daten in die Datenbanken des Data Hub zu schreiben.
- Ausführung von Python-Skripten, um komplexe Verarbeitungsschritte auszuführen, wie Geocodierung, Anonymisierung oder Verschneidung von Daten.
- Aufsetzen von Trigger-basierten Verarbeitungen (z. B. bei neuen Dateien oder Zeitplänen)
- Monitoring von Datenflüssen und Logging von Ereignissen sowie Datenqualitätsprüfungen  

:::tip Fiktives Praxisbeispiel

**„Anonymisierte Nutzungsinformationen für Bibliotheken“ 🗂️**  
Alle öffentlichen Bibliotheken Berlins erfassen monatlich pseudonymisierte Daten zu Ausleihvorgängen und Nutzermerkmalen (zum Beispiel ungefähre Wohnlage und Altersgruppen). Die Rohdaten werden in MinIO abgelegt. Airflow steuert die ETL-Pipelines: Bereinigung, Aggregation und vollständige Anonymisierung. Die aufbereiteten Daten fließen in Dashboards, die Bibliotheksleitungen, Bezirksämter und die Senatsverwaltung für Analyse und Steuerung nutzen. Nachmeldungen oder Korrekturen der Bibliotheken lösen automatisch ein Update der aggregierten Ergebnisse aus.

:::

## Wie nutzt man Apache Airflow?

### Skill-Level & Anforderungen

Airflow erfordert Kenntnisse in Python und Datenbankkonzepten sowie ein Verständnis von ETL-Prozessen. Die Definition von DAGs („Directed Acyclic Graphs“) erfolgt über Code, wodurch wiederholbare, nachvollziehbare Pipelines entstehen.

**Technisches Know-How notwendig:** <span title="Fortgeschritten" class="text-red-500">●●●●○</span>  
**Komplexität bzw. Einarbeitungszeit:** <span title="Hoch" class="text-red-500">●●●●○</span>  

👉 Für Verwaltungsmitarbeitende heißt das: Airflow wird typischerweise von IT- und Daten-Teams eingerichtet. Fachabteilungen nutzen die Ergebnisse der automatisierten Pipelines, ohne selbst Code schreiben zu müssen.

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
      Typische Inputs für Airflow im Data Hub:

      - Rohdaten aus MinIO (CSV, JSON, GeoJSON)  
      - Tabellen aus PostgreSQL-Datenbanken  
      - Externe APIs oder Open Data-Quellen  
      - Trigger-Ereignisse wie neue Dateien oder geplante Zeitpunkte
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
      Airflow erzeugt:

      - Strukturierte Datentabellen in den Data Hub-Datenbanken
      - Dateien, die in MinIO abgelegt werden
      - Verarbeitete und veredelte Daten durch Skripte
      - Logs und Monitoring-Informationen zur Nachvollziehbarkeit der Prozesse
      </p>
    </div>
  </>
  </TabItem>

</Tabs>

## Beispiele

Airflow kommt unter anderem in diesem Pilotprojekt zum Einsatz:
 
- [Datenbasierte Bibliothekssteuerung: Automatisierte Berechnung von Kennzahlen für Angebote und Ausleihen](/docs/anwendungen/datenbasierte_bibliothek)  

## Weiterführende Informationen

- [Offizielle Apache Airflow-Dokumentation](https://airflow.apache.org/docs/)  
- [Airflow Tutorials & Beispiele](https://airflow.apache.org/docs/apache-airflow/stable/tutorial.html)
</div>
