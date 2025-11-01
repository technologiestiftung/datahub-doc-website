---
sidebar_position: 2
hide_title: true
description: Dies ist der zentrale Wissensspeicher des prototypischen Data Hub Berlins, der urbanen Datenplattform der Berliner Verwaltung. Hier findest du Informationen zu Hintergründen, Aufbau und Anwendungsfällen der Plattform.
title: Datenbanken / pgAdmin
---

import styles from '/docs/docs.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { ArrowRightEndOnRectangleIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/solid';

<div className={styles.doccontainer}>

  <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-10 xl:pl-16 pt-16">
    <div>
      <h1>PostgreSQL-Datenbanken / pgAdmin</h1>
      <p className="text-lg">
        pgAdmin stellt eine grafische Oberfläche für die PostgreSQL-Datenbanken des Data Hubs bereit. Daten können abgelegt, abgefragt und transformiert werden.
      </p>
    </div>
  </div>

## Was ist pgAdmin?

### Grafische Verwaltung von PostgreSQL-Datenbanken

<div className="flex flex-col xl:flex-row xl:items-center justify-center xl:gap-10 ">
  <p className="mb-0">
    Die Datenbanken dienen als Speicherort für strukturiert vorliegende Daten, die im Data Hub zur Verfügung stehen sollen. pgAdmin ist ein Open-Source-Tool, das eine grafische Benutzeroberfläche für PostgreSQL bereitstellt. Es erleichtert die Verwaltung von Tabellen, Schemata, Benutzern und Abfragen. IT-Teams können Datenbanken konfigurieren, Abfragen testen, Ergebnisse analysieren und Backups erstellen, ohne ausschließlich SQL über die Kommandozeile nutzen zu müssen.
  </p>
  <div className="flex flex-[0_0_250px] xl:pb-20 w-full justify-center items-center">
      <img src="/img/logos/pgadmin.svg" alt="pgAdmin Logo" className="block h-auto w-[70%] xl:w-full"/>
  </div>
</div>

### pgAdmin im Data Hub

pgAdmin unterstützt die Data Hub Infrastruktur, indem es Datenbankadministration und -überwachung vereinfacht. Nutzende können Datenbanken für befüllen, Schemata anlegen, Abfragen testen und Daten für Analysen und Dashboards aufbereiten. Besonders praktisch ist die Kombination mit den Datenverarbeitungskomponenten des Data Hubs, durch die über ETL-Prozesse oder andere Integrationen Daten in die Datenbanken gespeist werden können.

## Funktionen & Einsatzgebiete

Die PostgreSQL-Datenbanken und pgAdmin bieten insbesondere folgenden Mehrwert:

- Ablegen von strukturieren Daten, um sie z.B. für die Dashboard-Tools verfügbar zu machen 
- Anlegen von Schemata, die z.B. für Prüf- und Datenerhebungsprozesse verwendet werden können und Datenqualität sicherstellen
- Transformation von Daten, z.B. Überführung von Geodaten in ein anderes Bezugssystem oder Aggregation von Werten
- Strukturübersicht: Tabellen, Schemata, Indizes und Views auf einen Blick
 

:::tip Fiktives Praxisbeispiel

„Umweltdaten aus Sensoren sammeln“ 🗄️
Messdaten aus Luft- und Bodenstationen werden in Echtzeit an die PostgreSQL-Datenbank übertragen und dort gespeichert. Über eine Schnittstelle werden sie mit Grafana verbunden. Eine Fachabteilungen kann die stets aktuellen Werte somit über Dashboards überwachen und Trends analysieren.

:::

## Wie nutzt man pgAdmin?

### Skill-Level & Anforderungen

pgAdmin ist für Benutzer:innen mit grundlegendem Datenbankverständnis geeignet. SQL-Kenntnisse sind hilfreich, insbesondere für komplexe Abfragen, aber nicht zwingend für grundlegende Verwaltungsaufgaben.

**Technisches Know-How notwendig:** <span title="Mäßig" class="text-yellow-400">●●●○○</span>  
**Komplexität bzw. Einarbeitungszeit:** <span title="Mäßig" class="text-yellow-400">●●●○○</span>  

👉 Für Verwaltungsmitarbeitende heißt das: Das Einspielen oder Verarbeiten von Daten in die Datenbanken, sowie das Konfigurieren der Verbindungen mit den Datenverabeitungs- und Datenvisualisierungstools, sollte im wesentlichen dem IT-Team überlassen und weitesgehend automatisiert werden. Mit pgAdmin ist es aber möglich auch ohne Programmierkentnisse, unkritische Änderungen an Daten vorzunehmen, Schemata zu updaten oder sich schlicht einen Überblick über die Vorhanden Daten zu verschaffen, falls das für einen Workflow notwendig ist.

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
      Typische Inputs für die Datenbanken sind:

      - Daten aus Dateien, die in MinIO abgelegt und z.B. über NodeRed oder AirFlow verfügbar gemacht werden
      - händische Datenuploads von gut strukturierten Daten aus CSV-Dateien  
      - IoT-Daten
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
      Aus pgAdmin entstehen oder werden bereitgestellt:

      - Rohdaten und verarbeitete Daten, die über eine Schnittstelle mit den Dashboard-Tools verbunden werden
      - Geodaten, die an den Geoserver übertragen und in WFS-Schnittstellen umgewandelt werden
      - Schematas die z.B. für Prüfmechanismen in AppSmith-Formularen genutzt werden können
      </p>
    </div>
  </>
  </TabItem>

</Tabs>

## Beispiele

PostgreSQL-Datenbanken und pgAdmin werden im Data Hub unter anderem in diesen vier Pilotanwendungen eingesetzt, um die Daten strukturiert abzulegen und dann für Dashboards oder Karten verfügbar zu machen:

- [Digitale Bezirksregionenprofile: Dashboards zur Visualisierung Indikatoren auf Bezirksebene](/docs/anwendungen/datenbasierte_bibliothek)
- [Datenbasierte Bibliothekssteuerung: Monitoring von Ausleihen und Angeboten zur Steuerung der Makulatur](/docs/anwendungen/datenbasierte_bibliothek)
- [Digitales Landesgleichstellungsmonitoring: Visualisierung von Kennzahlen zur Gleichstellung in Berlin](/docs/anwendungen/landesgleichstellung)
- [Erfassung von Akteuren im Sozialraum](/docs/anwendungen/akteure_erfassen)

## Weiterführende Informationen

Für tiefergehende technische Details und Admin-Anleitungen siehe:

- [Offizielle pgAdmin-Dokumentation](https://www.pgadmin.org/docs/)  
- [PostgreSQL-Dokumentation](https://www.postgresql.org/docs/)  
- [CIVITAS/CORE Admin Docs](https://docs.core.civitasconnect.digital/docs/Administration/pgAdmin)

</div>
