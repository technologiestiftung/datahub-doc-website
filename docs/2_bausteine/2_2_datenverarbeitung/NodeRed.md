---
sidebar_position: 1
hide_title: true
description: Dies ist der zentrale Wissensspeicher des prototypischen Data Hub Berlins, der urbanen Datenplattform der Berliner Verwaltung. Hier findest du Informationen zu Hintergründen, Aufbau und Anwendungsfällen der Plattform.
title: Node-RED
---

import styles from '/docs/docs.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { ArrowRightEndOnRectangleIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/solid';

<div className={styles.doccontainer}>

  <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-10 xl:pl-16 pt-16">
    <div>
      <h1>Node-RED</h1>
      <p className="text-lg">
        Node-Red bietet eine visuelle Oberfläche zur Verbindung verschiedener Datenquellen und zur Automatisierung von Abläufen durch Workflows.
      </p>
    </div>
  </div>

## Was ist Node-Red?

### Visuelle Programmierung von Datenflüssen
<div className="flex flex-col xl:flex-row xl:items-center justify-center xl:gap-10">
  <p className="mb-0">
Node-Red ist ein Low-Code-Tool, das Datenströme über eine grafische Oberfläche erstellt, steuert und überwacht. Nutzende verbinden Bausteine für Eingangsquellen, Verarbeitungsknoten und Ausgaben zu sogenannten "Flows", die dann auf Klick oder bei bestimmten Events ausgeführt werden können.  
</p>
      <div className="flex flex-[0_0_250px] xl:pb-8 w-full justify-center items-center">
      <img src="/img/logos/node_red.svg" alt="Node-Red Logo" className="block h-auto w-[70%] xl:w-[70%]"/>
    </div>
</div>

### Node-Red im Data Hub

Im Data Hub wird Node-Red eingesetzt, um Daten aus MinIO, Datenbanken oder APIs zu verarbeiten, ETL-Prozesse zu steuern oder Daten an die PostgreSQL-Datenbanken des Data Hub weiterzuleiten, welche wiederum die Daten den Analyse- und Visualisierungstools wie Superset zur Verfügung stellt. Über Programmcode-Elemente im Node-Red-Flow können die Daten zu einem gewissen Grad vorverarbeitet oder geprüft werden. Dadurch können Verwaltungsprozesse automatisiert und wiederholbare Workflows ohne tiefe Programmierkenntnisse erstellt werden.

## Funktionen & Einsatzgebiete

Node-Red wird im Data Hub insbesondere für folgende Dinge eingesetzt:

- Verbindung von Datenquellen, APIs und Tools über grafische Flows, um die Daten in die Datenbanken des Data Hub zu schreiben.  
- Aufsetzen von Trigger-basierten Verarbeitungen (z. B. bei neuen Dateien oder Zeitplänen)  
- Monitoring von Datenflüssen und Logging von Ereignissen sowie Datenqualitätsprüfungen

:::tip Fiktives Praxisbeispiel

**„Bezirkliche Datensammlung mit automatischer Vereinheitlichung“** 🗂️  
Alle 12 Bezirke laden regelmäßig eine geupdatete Datentabelle in MinIO zu einem gemeinsamen Thema hoch, zum Beispiel zu Sozialraumindikatoren. Sobald ein Bezirk neue Daten ablegt, startet automatisch ein Prozess in Node-Red: Die Struktur des Datensatzes wird geprüft und die Daten werden in eine konsolidierte Datenbank geschrieben. Diese versorgt Berichte und Dashboards für die Senatsverwaltung.

:::

## Wie nutzt man Node-Red?

### Skill-Level & Anforderungen

Auch wenn Node-RED als Low-Code-Tool über eine einfach aufgebaute grafische Oberfläche und viele vorgefertige Bausteine verfügt, ist ein Verständnis von Datenstrukturen, APIs und SQL-Kenntnissen für die meisten Anwendungsfälle nötig, um funktionierende Flows aufzubauen.  

**Technisches Know-How notwendig:** <span title="Leicht zu verstehen" class="text-yellow-400">●●●○○</span>  
**Komplexität bzw. Einarbeitungszeit:** <span title="Mäßig" class="text-green-500">●●○○○</span>  

👉 Für Verwaltungsmitarbeitende heißt das: Das initiale Aufsetzen von Flows sollte durch IT- oder Daten-Spezialistwnn oder das Data Hub-Team durchgeführt werden, insbesondere bei komplexn Workflows, Anbindungen an mehrere Systeme oder wenn Daten transformiert oder geprüft werden sollen.

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
      Typische Inputs für Node-Red-Flows im Data Hub sind:

      - Rohdaten aus MinIO (CSV, JSON, GeoJSON)  
      - Datenbanktabellen 
      - REST- oder SOAP-APIs von Fachverfahren  
      - Open Data aus Simple Search oder anderen Quellen
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
      Node-Red produziert oder leitet weiter:

      - Strukturierte Datentabellen in die Data Hub Datenbanken
      - Dateien an MinIO   
      - Logs und Monitoring-Informationen zur Nachvollziehbarkeit der Prozesse
      </p>
    </div>
  </>
  </TabItem>

</Tabs>

## Beispiele

Node-RED kommt unter anderem in diesen Pilotprojekten zum Einsatz, um Rohdaten in Form von CSV-Dateien aus MinIO auszulesen und in die Datenbank zu schreiben, und diese somit für die anschließenden Datenverarbeitungsprozesse und dann für Visualisierungen zur Verfügung zu stellen:

- [Datenbasierte Bibliothekssteuerung: Monitoring von Ausleihen und Angeboten zur Steuerung der Makulatur](/docs/anwendungen/datenbasierte_bibliothek)
- [Digitales Landesgleichstellungsmonitoring: Visualisierung von Kennzahlen zur Gleichstellung in Berlin](/docs/anwendungen/landesgleichstellung)


## Weiterführende Informationen

- [Offizielle Node-RED Dokumentation](https://node-red.org/docs/)  
- [Tutorials für Einsteiger](https://node-red.org/docs/tutorials/)
</div>
