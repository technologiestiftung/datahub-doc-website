---
sidebar_position: 1
hide_title: true
description: Dies ist der zentrale Wissensspeicher des prototypischen Data Hub Berlins, der urbanen Datenplattform der Berliner Verwaltung. Hier findest du Informationen zu Hintergründen, Aufbau und Anwendungsfällen der Plattform.
title: MinIO
---

import styles from '/docs/docs.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { ArrowRightEndOnRectangleIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/solid';



<div className={styles.doccontainer}>

  <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-10 xl:pl-16 pt-16">
    <div>
      <h1>MinIO</h1>
      <p className="text-lg">
        MinIO ist ein Cloud-Speicher zur Ablage von Dateien und Objektdaten. Er kann genutzt werden um Daten für den Data Hub zur Verfügung zu stellen.
      </p>
    </div>
  </div>

## Was ist MinIO?

### Objektbasierter Speicher für große und kleine Dateien

<div className="flex flex-col xl:flex-row xl:items-center justify-center xl:gap-10 ">
  <p className="mb-0">
    MinIO ist ein leichtgewichtiges, hochperformantes Open-Source-Objektspeicher-System, das das S3-Protokoll implementiert. MinIO übernimmt die Aufgabe, Dateien in verschiedensten Formaten sicher und versioniert abzulegen und zu teilen. Durch S3-Kompatibilität lassen sich bestehende Werkzeuge und Bibliotheken direkt anbinden.
  </p>
  <div className="flex flex-[0_0_250px] xl:pb-20 w-full justify-center items-center">
      <img src="/img/logos/minio.svg" alt="MinIO Logo" className="block h-auto w-[70%] xl:w-full"
      />
  </div>
</div>

### MinIO im Data Hub

MinIO bildet zusammen mit den Datenbanken das Dateispeicher-Rückgrat des Data Hubs. Es ist der zentrale Ablageort für Rohdaten, Export-Dateien aus Fachverfahren, Container-Images, Modelle oder große Geodatenpakete. Die Vorteile liegen in einfacher Integration (S3 API), der feingranularer Zugriffssteuerung und der Möglichkeit, Daten sowohl intern als auch für externe Projekte sicher freizugeben. Eine unkomplizierte Ablage für beliebigen Dateitypen (Data Lake-Charakter) ist durch eine web-basierter Benutzeroberfläche für Upload, Download und Management der Dateien sichergestellt.

<!--   <div className="w-full justify-center items-center pt-4">
    <img
      src={require('./assets/Superset_Screenshot.png').default}
      alt="Beispielansicht eines Superset Dashboard"
      label="Beispielansicht eines Superset Dashboard"
      className="block h-auto w-full xl:w-[80%] justify-center items-center mx-auto"
    />
    <figcaption className={styles.imgcaption}>Beispielansicht eines Superset Dashboards</figcaption>
  </div> -->

## Funktionen & Einsatzgebiete

MinIO bietet im Data Hub insbesondere folgenden Mehrwert:

- Cloud-Speicherort für bestehende Daten, die im Data Hub verfügbar gemacht werden sollen und für die keine andere Möglichkeit zur Speicherung besteht (z.B. weil schlichtweg keine entsprechende IT-Infrastruktur vorhanden ist)
- Zugriff über S3-API für automatisierte Workflows von ELT-Prozessen
- Cloud-Speicherort für neue Daten, die durch ETL-Prozesse im Data Hub generiert oder veredelt wurden und als Dateien zur Verfügung gestellt werden sollen

:::tip Fiktives Praxisbeispiel

**„Monitoring von Kita-Plätzen“** 📂

Ein Fachamt legt jeden Monat einen Datensatz mit Auslastungszahlen für Kitas in MinIO ab. Die Daten stehen so für einen konfigurierten ETL-Prozess zur Verfügung. Dieser berechnet automatisch Kennzahlen wie freie Plätze pro Bezirk, Belegungsquoten und wartet den Datensatz mit Geokoordinaten der Einrichtungen auf. Der aufbereitete Datensatz wird zurück in MinIO gespeichert wird und steht dort nun anderen Abteilungen mit berechtigtem Zugriff für eigene Planungen und Berichte zur Verfügung.

:::

## Wie nutzt man MinIO?

### Skill-Level & Anforderungen

MinIO ist bewusst benutzerfreundlich gehalten: Für einfaches Ablegen, Löschen oder Runterladen von Dateien reicht die Web-Oberfläche. Für das Aufsetzen von Automatisierung sind Basiskenntnisse in HTTP/S und S3-Konzepten hilfreich.

**Technisches Know-How notwendig:** <span title="Leicht zu verstehen" class="text-green-500">●●○○○</span>  
**Komplexität bzw. Einarbeitungszeit:** <span title="Kurz" class="text-green-500">●●○○○</span>  

👉 Für Verwaltungsmitarbeitende heißt das: Dateiuploads und das Teilen von Links funktionieren wie bei bekannten Cloud-Services. Für das Anlegen von automatisierten Prozessen, ETL-Anbindungen oder Rechtekonfiguration sollte das IT- oder das Data Hub Kompetenzteam eingebunden werden.


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
    Typische Inputs in MinIO sind:

    - Excel-, CSV-, XML- und JSON-Dateien mit Fachdaten  
    - GeoJSON, Rasterdaten und Kartenkacheln  
    - Datei-Exporte aus Fachverfahren  
    - Backups von Datenbanken, Konfigurations- oder Container-Artefakten  
    - Trainingsdaten und Artefakte aus Data-Science-Workflows
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
    Aus MinIO heraus entstehen oder werden bereitgestellt:

    - Direkt downloadbare Dateien für Fachabteilungen und Projektpartner  
    - Zeitlich begrenzte, signierte URLs für sichere Freigabe (Pre-signed URLs)  
    - Quelle/Ziel für ETL-Prozesse (z. B. Airflow oder NodeRED lädt Rohdaten aus MinIO und speichert sie in eine der Datenbanken des Data Hubs)  
    - Speicher von Artefakten, die von Analyse-Tools (z. B. Superset, Jupyter-Notebooks) verwendet werden
    </p>
    </div>
  </>
  </TabItem>

</Tabs>


## Beispiele

MinIO kommt unter anderem in drei unserer Pilotprojekte zum Einsatz, um Rohdaten in Form von CSV-Dateien initial im Data Hub abzulegen, und diese somit für die anschließenden Datenverarbeitungsprozesse und dann für Visualisierungen zur Verfügung zu stellen:

- [Digitale Bezirksregionenprofile: Dashboards zur Visualisierung Indikatoren auf Bezirksebene](/docs/anwendungen/datenbasierte_bibliothek)
- [Datenbasierte Bibliothekssteuerung: Monitoring von Ausleihen und Angeboten zur Steuerung der Makulatur](/docs/anwendungen/datenbasierte_bibliothek)
- [Digitales Landesgleichstellungsmonitoring: Visualisierung von Kennzahlen zur Gleichstellung in Berlin](/docs/anwendungen/landesgleichstellung)


</div>
