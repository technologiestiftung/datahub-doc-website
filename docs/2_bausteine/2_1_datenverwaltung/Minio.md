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
        MinIO ist ein Cloud-Speicher zur Ablage von Dateien und Objektdaten. Er kann genutzt werden, um Daten für den Data Hub zur Verfügung zu stellen.
      </p>
    </div>
  </div>

## Was ist MinIO?

### Objektbasierter Speicher für große und kleine Dateien

<div className="flex flex-col xl:flex-row xl:items-center justify-center xl:gap-10 ">
  <p className="mb-0">
    MinIO ist ein leichtgewichtiges, hochperformantes Open Source-Objektspeicher-System, welches das S3-Protokoll implementiert. MinIO übernimmt die Aufgabe, Dateien in verschiedensten Formaten sicher und versioniert abzulegen und zu teilen. Durch S3-Kompatibilität lassen sich bestehende Werkzeuge und Bibliotheken direkt anbinden.
  </p>
  <div className="flex flex-[0_0_250px] xl:pb-20 w-full justify-center items-center">
      <img src="/img/logos/minio.svg" alt="MinIO Logo" className="block h-auto w-[70%] xl:w-full"
      />
  </div>
</div>

### MinIO im Data Hub

MinIO bildet zusammen mit den Datenbanken das Dateispeicher-Rückgrat des Data Hub. Es ist der zentrale Ablageort für Rohdaten, Export-Dateien aus Fachverfahren, Container-Images, Modelle oder große Geodatenpakete. Die Vorteile liegen in einfacher Integration (S3 API), feingranularer Zugriffssteuerung und der Möglichkeit, Daten sowohl intern als auch für externe Projekte sicher freizugeben. Eine unkomplizierte Ablage für beliebige Dateitypen (Data Lake-Charakter) ist durch eine webbasierte Benutzeroberfläche für Upload, Download und Management der Dateien sichergestellt.

  <div className="w-full justify-center items-center pt-4">
    <img
      src={require('./assets/MinIO.jpeg').default}
      alt="Projektübersicht in MinIO"
      label="Projektübersicht in MinIO"
      className="block h-auto w-full xl:w-[80%] justify-center items-center mx-auto"
    />
    <figcaption className={styles.imgcaption}>Projektübersicht in MinIO</figcaption>
  </div>

## Funktionen & Einsatzgebiete

MinIO bietet im Data Hub insbesondere folgende Mehrwerte:

- Cloud-Speicherort für bestehende Daten, die im Data Hub verfügbar gemacht werden sollen und für die keine andere Möglichkeit zur Speicherung besteht (z.B. weil schlichtweg keine entsprechende IT-Infrastruktur vorhanden ist).
- Zugriff über S3-API für automatisierte Workflows von ELT-Prozessen
- Cloud-Speicherort für neue Daten, die durch ETL-Prozesse im Data Hub generiert oder veredelt wurden und als Dateien zur Verfügung gestellt werden sollen.

:::tip Fiktives Praxisbeispiel

**„Monitoring von Kita-Plätzen“** 📂  
Ein Fachamt legt jeden Monat einen Datensatz mit Auslastungszahlen für Kitas in MinIO ab. Die Daten stehen so für einen konfigurierten ETL-Prozess zur Verfügung. Dieser berechnet automatisch Kennzahlen wie freie Plätze pro Bezirk, Belegungsquoten und wartet den Datensatz mit Geokoordinaten der Einrichtungen auf. Der aufbereitete Datensatz wird zurück in MinIO gespeichert und steht dort nun anderen Abteilungen mit berechtigtem Zugriff für eigene Planungen und Berichte zur Verfügung.

:::

## Wie nutzt man MinIO?

### Skill-Level & Anforderungen

MinIO ist bewusst benutzerfreundlich gehalten: Für einfaches Ablegen, Löschen oder Herunterladen von Dateien reicht die Web-Oberfläche. Für das Aufsetzen von Automatisierung sind Basiskenntnisse in HTTP/S und S3-Konzepten hilfreich.

**Technisches Know-How notwendig:** <span title="Leicht zu verstehen" class="text-green-500">●●○○○</span>  
**Komplexität bzw. Einarbeitungszeit:** <span title="Kurz" class="text-green-500">●●○○○</span>  

👉 Für Verwaltungsmitarbeitende heißt das: Dateiuploads und das Teilen von Links funktionieren wie bei bekannten Cloud-Services. Für das Anlegen von automatisierten Prozessen, ETL-Anbindungen oder Rechtekonfiguration sollten das IT- oder das Data Hub-Kompetenzteam eingebunden werden.


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
    - Trainingsdaten und Artefakte aus Data Science-Workflows
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
    - Quelle/Ziel für ETL-Prozesse (z. B. Airflow oder NodeRED lädt Rohdaten aus MinIO und speichert sie in eine der Datenbanken des Data Hub)  
    - Speicher von Artefakten, die von Analyse-Tools (z. B. Superset, Jupyter-Notebooks) verwendet werden.
    </p>
    </div>
  </>
  </TabItem>

</Tabs>

<!-- Hier siehst du, an welchen Datenquellen und anderen Komponenten MinIO für gewöhnlich innerhalb einer Datenpipeline im Data Hub direkt angebunden sein kann.

<iframe
  src="https://data-hub-flow-designer.lovable.app/?flow=JTdCJTIybm9kZXMlMjIlM0ElNUIlN0IlMjJpZCUyMiUzQSUyMm5vZGUtMTAwMSUyMiUyQyUyMnR5cGUlMjIlM0ElMjJjb21wb25lbnQlMjIlMkMlMjJwb3NpdGlvbiUyMiUzQSU3QiUyMnglMjIlM0E1MzEuMDQ0NDE3MDYwMzE1MyUyQyUyMnklMjIlM0EtNTIuMTIxODY4OTkzNjAzNDYlN0QlMkMlMjJkYXRhJTIyJTNBJTdCJTIybGFiZWwlMjIlM0ElMjJLb21wb25lbnRlJTIyJTJDJTIydGl0bGUlMjIlM0ElMjJNaW5JTyUyMiUyQyUyMmRlc2NyaXB0aW9uJTIyJTNBJTIyJTIyJTJDJTIyY3VzdG9tVGl0bGUlMjIlM0FmYWxzZSU3RCUyQyUyMm1lYXN1cmVkJTIyJTNBJTdCJTIyd2lkdGglMjIlM0EyNDAlMkMlMjJoZWlnaHQlMjIlM0E3NCU3RCUyQyUyMnNlbGVjdGVkJTIyJTNBZmFsc2UlMkMlMjJkcmFnZ2luZyUyMiUzQWZhbHNlJTdEJTJDJTdCJTIyaWQlMjIlM0ElMjJub2RlLTEwMDMlMjIlMkMlMjJ0eXBlJTIyJTNBJTIycHJvY2Vzc2luZyUyMiUyQyUyMnBvc2l0aW9uJTIyJTNBJTdCJTIyeCUyMiUzQTIyMi42ODc2MTI3NzA2ODY3NyUyQyUyMnklMjIlM0EyMDMuNTU1ODY1NDQ5NzUwNDMlN0QlMkMlMjJkYXRhJTIyJTNBJTdCJTIybGFiZWwlMjIlM0ElMjJOb3RlJTIwUmVkJTIyJTJDJTIydGl0bGUlMjIlM0ElMjJOb2RlUmVkJTIyJTJDJTIyZGVzY3JpcHRpb24lMjIlM0ElMjIlMjIlMkMlMjJjdXN0b21UaXRsZSUyMiUzQWZhbHNlJTdEJTJDJTIybWVhc3VyZWQlMjIlM0ElN0IlMjJ3aWR0aCUyMiUzQTI4MCUyQyUyMmhlaWdodCUyMiUzQTc0JTdEJTJDJTIyc2VsZWN0ZWQlMjIlM0FmYWxzZSUyQyUyMmRyYWdnaW5nJTIyJTNBZmFsc2UlN0QlMkMlN0IlMjJpZCUyMiUzQSUyMm5vZGUtMTAwNCUyMiUyQyUyMnR5cGUlMjIlM0ElMjJwcm9jZXNzaW5nJTIyJTJDJTIycG9zaXRpb24lMjIlM0ElN0IlMjJ4JTIyJTNBNTEzLjExMDIwNDU3MDQxNjglMkMlMjJ5JTIyJTNBMjAzLjM1NDc4ODc4Nzk1MjgzJTdEJTJDJTIyZGF0YSUyMiUzQSU3QiUyMmxhYmVsJTIyJTNBJTIyTm90ZSUyMFJlZCUyMiUyQyUyMnRpdGxlJTIyJTNBJTIyQWlyRmxvdyUyMiUyQyUyMmRlc2NyaXB0aW9uJTIyJTNBJTIyJTIyJTJDJTIyY3VzdG9tVGl0bGUlMjIlM0FmYWxzZSU3RCUyQyUyMm1lYXN1cmVkJTIyJTNBJTdCJTIyd2lkdGglMjIlM0EyODAlMkMlMjJoZWlnaHQlMjIlM0E3NCU3RCUyQyUyMnNlbGVjdGVkJTIyJTNBZmFsc2UlMkMlMjJkcmFnZ2luZyUyMiUzQWZhbHNlJTdEJTJDJTdCJTIyaWQlMjIlM0ElMjJub2RlLTEwMDUlMjIlMkMlMjJ0eXBlJTIyJTNBJTIycHJvY2Vzc2luZyUyMiUyQyUyMnBvc2l0aW9uJTIyJTNBJTdCJTIyeCUyMiUzQTgwMy4wMzAxMDQ3MTU2NTIzJTJDJTIyeSUyMiUzQTIwMy4zNTQ3ODg3ODc5NTI4MyU3RCUyQyUyMmRhdGElMjIlM0ElN0IlMjJsYWJlbCUyMiUzQSUyMk5vdGUlMjBSZWQlMjIlMkMlMjJ0aXRsZSUyMiUzQSUyMkp1cHl0ZXJOb3RlYm9vayUyMiUyQyUyMmRlc2NyaXB0aW9uJTIyJTNBJTIyJTIyJTJDJTIyY3VzdG9tVGl0bGUlMjIlM0FmYWxzZSU3RCUyQyUyMm1lYXN1cmVkJTIyJTNBJTdCJTIyd2lkdGglMjIlM0EyODAlMkMlMjJoZWlnaHQlMjIlM0E3NCU3RCUyQyUyMnNlbGVjdGVkJTIyJTNBZmFsc2UlMkMlMjJkcmFnZ2luZyUyMiUzQWZhbHNlJTdEJTJDJTdCJTIyaWQlMjIlM0ElMjJub2RlLTEwMDclMjIlMkMlMjJ0eXBlJTIyJTNBJTIyc291cmNlJTIyJTJDJTIycG9zaXRpb24lMjIlM0ElN0IlMjJ4JTIyJTNBMzQ2LjUyMTc3MDQzNjI1NjkzJTJDJTIyeSUyMiUzQS0yMjAuNjQxODk3MjUwNDIzMTQlN0QlMkMlMjJkYXRhJTIyJTNBJTdCJTIybGFiZWwlMjIlM0ElMjJtYW51ZWxsZXIlMjBEYXRlaXVwbG9hZCUyMiUyQyUyMnN1YnRpdGxlJTIyJTNBJTIyRGF0ZWllbiUyMGltJTIwRm9ybWF0JTIwQ1NWJTJDJTIwSlNPTiUyQyUyMFhNTCUyMC4uLiUyMiUyQyUyMmN1c3RvbUxhYmVsJTIyJTNBZmFsc2UlN0QlMkMlMjJtZWFzdXJlZCUyMiUzQSU3QiUyMndpZHRoJTIyJTNBMjg2JTJDJTIyaGVpZ2h0JTIyJTNBNzIlN0QlMkMlMjJzZWxlY3RlZCUyMiUzQWZhbHNlJTJDJTIyZHJhZ2dpbmclMjIlM0FmYWxzZSU3RCUyQyU3QiUyMmlkJTIyJTNBJTIybm9kZS0xMDExJTIyJTJDJTIydHlwZSUyMiUzQSUyMnNvdXJjZSUyMiUyQyUyMnBvc2l0aW9uJTIyJTNBJTdCJTIyeCUyMiUzQTY3OC4yNzIxNDM5MTI5OTI2JTJDJTIyeSUyMiUzQS0yMjIuNTEzNDcxMjY1NzEwMTclN0QlMkMlMjJkYXRhJTIyJTNBJTdCJTIybGFiZWwlMjIlM0ElMjJGYWNodmVyZmFocmVuJTIyJTJDJTIyc3VidGl0bGUlMjIlM0ElMjJQdXNoLVZlcmZhaHJlbiUyMGYlQzMlQkNyJTIwRGF0ZWlhYmxhZ2UlMjIlMkMlMjJjdXN0b21MYWJlbCUyMiUzQWZhbHNlJTdEJTJDJTIybWVhc3VyZWQlMjIlM0ElN0IlMjJ3aWR0aCUyMiUzQTI0OSUyQyUyMmhlaWdodCUyMiUzQTcyJTdEJTJDJTIyc2VsZWN0ZWQlMjIlM0FmYWxzZSUyQyUyMmRyYWdnaW5nJTIyJTNBZmFsc2UlN0QlNUQlMkMlMjJlZGdlcyUyMiUzQSU1QiU3QiUyMnN0eWxlJTIyJTNBJTdCJTIyc3Ryb2tlV2lkdGglMjIlM0EyJTJDJTIyc3Ryb2tlJTIyJTNBJTIyJTIzMDAwJTIyJTJDJTIyc3Ryb2tlRGFzaGFycmF5JTIyJTNBJTIyNSUyQzUlMjIlN0QlMkMlMjJjbGFzc05hbWUlMjIlM0ElMjJhbmltYXRlZC1lZGdlJTIyJTJDJTIyc291cmNlJTIyJTNBJTIybm9kZS0xMDAxJTIyJTJDJTIydGFyZ2V0JTIyJTNBJTIybm9kZS0xMDAzJTIyJTJDJTIyaWQlMjIlM0ElMjJ4eS1lZGdlX19ub2RlLTEwMDEtbm9kZS0xMDAzJTIyJTdEJTJDJTdCJTIyc3R5bGUlMjIlM0ElN0IlMjJzdHJva2VXaWR0aCUyMiUzQTIlMkMlMjJzdHJva2UlMjIlM0ElMjIlMjMwMDAlMjIlMkMlMjJzdHJva2VEYXNoYXJyYXklMjIlM0ElMjI1JTJDNSUyMiU3RCUyQyUyMmNsYXNzTmFtZSUyMiUzQSUyMmFuaW1hdGVkLWVkZ2UlMjIlMkMlMjJzb3VyY2UlMjIlM0ElMjJub2RlLTEwMDElMjIlMkMlMjJ0YXJnZXQlMjIlM0ElMjJub2RlLTEwMDQlMjIlMkMlMjJpZCUyMiUzQSUyMnh5LWVkZ2VfX25vZGUtMTAwMS1ub2RlLTEwMDQlMjIlN0QlMkMlN0IlMjJzdHlsZSUyMiUzQSU3QiUyMnN0cm9rZVdpZHRoJTIyJTNBMiUyQyUyMnN0cm9rZSUyMiUzQSUyMiUyMzAwMCUyMiUyQyUyMnN0cm9rZURhc2hhcnJheSUyMiUzQSUyMjUlMkM1JTIyJTdEJTJDJTIyY2xhc3NOYW1lJTIyJTNBJTIyYW5pbWF0ZWQtZWRnZSUyMiUyQyUyMnNvdXJjZSUyMiUzQSUyMm5vZGUtMTAwMSUyMiUyQyUyMnRhcmdldCUyMiUzQSUyMm5vZGUtMTAwNSUyMiUyQyUyMmlkJTIyJTNBJTIyeHktZWRnZV9fbm9kZS0xMDAxLW5vZGUtMTAwNSUyMiU3RCUyQyU3QiUyMnN0eWxlJTIyJTNBJTdCJTIyc3Ryb2tlV2lkdGglMjIlM0EyJTJDJTIyc3Ryb2tlJTIyJTNBJTIyJTIzMDAwJTIyJTJDJTIyc3Ryb2tlRGFzaGFycmF5JTIyJTNBJTIyNSUyQzUlMjIlN0QlMkMlMjJjbGFzc05hbWUlMjIlM0ElMjJhbmltYXRlZC1lZGdlJTIyJTJDJTIyc291cmNlJTIyJTNBJTIybm9kZS0xMDExJTIyJTJDJTIydGFyZ2V0JTIyJTNBJTIybm9kZS0xMDAxJTIyJTJDJTIyaWQlMjIlM0ElMjJ4eS1lZGdlX19ub2RlLTEwMTEtbm9kZS0xMDAxJTIyJTdEJTJDJTdCJTIyc3R5bGUlMjIlM0ElN0IlMjJzdHJva2VXaWR0aCUyMiUzQTIlMkMlMjJzdHJva2UlMjIlM0ElMjIlMjMwMDAlMjIlMkMlMjJzdHJva2VEYXNoYXJyYXklMjIlM0ElMjI1JTJDNSUyMiU3RCUyQyUyMmNsYXNzTmFtZSUyMiUzQSUyMmFuaW1hdGVkLWVkZ2UlMjIlMkMlMjJzb3VyY2UlMjIlM0ElMjJub2RlLTEwMDclMjIlMkMlMjJ0YXJnZXQlMjIlM0ElMjJub2RlLTEwMDElMjIlMkMlMjJpZCUyMiUzQSUyMnh5LWVkZ2VfX25vZGUtMTAwNy1ub2RlLTEwMDElMjIlN0QlNUQlMkMlMjJ2ZXJzaW9uJTIyJTNBMSU3RA%3D%3D"
  width="100%"
  height="400"
  style={{ border: "1px solid #ccc", borderRadius: "8px" }}
  allowFullScreen
></iframe> -->


## Beispiele

MinIO kommt unter anderem in drei unserer Pilotprojekte zum Einsatz, um Rohdaten in Form von CSV-Dateien initial im Data Hub abzulegen, und diese somit für die anschließenden Datenverarbeitungsprozesse und dann für Visualisierungen zur Verfügung zu stellen:

- [Digitale Bezirksregionenprofile: Dashboards zur Visualisierung Indikatoren auf Bezirksebene](/docs/anwendungen/datenbasierte_bibliothek)
- [Datenbasierte Bibliothekssteuerung: Monitoring von Ausleihen und Angeboten zur Steuerung der Makulatur](/docs/anwendungen/datenbasierte_bibliothek)
- [Digitales Landesgleichstellungsmonitoring: Visualisierung von Kennzahlen zur Gleichstellung in Berlin](/docs/anwendungen/landesgleichstellung)


</div>
