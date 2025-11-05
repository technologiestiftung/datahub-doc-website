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
        pgAdmin stellt eine grafische Oberfläche für die PostgreSQL-Datenbanken des Data Hub bereit. Daten können abgelegt, abgefragt und transformiert werden.
      </p>
    </div>
  </div>

## Was ist pgAdmin?

### Grafische Verwaltung von PostgreSQL-Datenbanken

<div className="flex flex-col xl:flex-row xl:items-center justify-center xl:gap-10 ">
  <p className="mb-0">
    Die Datenbanken dienen als Speicherort für strukturiert vorliegende Daten, die im Data Hub zur Verfügung stehen sollen. pgAdmin ist ein Open Source-Tool, das eine grafische Benutzeroberfläche für PostgreSQL bereitstellt. Es erleichtert die Verwaltung von Tabellen, Schemata, Benutzern und Abfragen. IT-Teams können Datenbanken konfigurieren, Abfragen testen, Ergebnisse analysieren und Backups erstellen, ohne ausschließlich SQL über die Kommandozeile nutzen zu müssen.
  </p>
  <div className="flex flex-[0_0_250px] xl:pb-20 w-full justify-center items-center">
      <img src="/img/logos/pgadmin.svg" alt="pgAdmin Logo" className="block h-auto w-[70%] xl:w-full"/>
  </div>
</div>

### pgAdmin im Data Hub

pgAdmin unterstützt die Data Hub-Infrastruktur, indem es Datenbankadministration und -überwachung vereinfacht. Nutzende können Datenbanken befüllen, Schemata anlegen, Abfragen testen und Daten für Analysen und Dashboards aufbereiten. Besonders praktisch ist die Kombination mit den Datenverarbeitungskomponenten des Data Hub, durch die über ETL-Prozesse oder andere Integrationen Daten in die Datenbanken gespeist werden können.

  <div className="w-full justify-center items-center pt-4">
    <img
      src={require('./assets/PG-Admin.jpeg').default}
      alt="Startansicht von pgAdmin"
      label="Startansicht von pgAdmin"
      className="block h-auto w-full xl:w-[80%] justify-center items-center mx-auto"
    />
    <figcaption className={styles.imgcaption}>Startansicht von pgAdmin</figcaption>
  </div>

## Funktionen & Einsatzgebiete

Die PostgreSQL-Datenbanken und pgAdmin bieten insbesondere folgende Mehrwerte:

- Ablegen von strukturieren Daten, um sie zum Beispiel für die Dashboard-Tools verfügbar zu machen. 
- Anlegen von Schemata, die zum Beispiel für Prüf- und Datenerhebungsprozesse verwendet werden können und Datenqualität sicherstellen.
- Transformation von Daten, zum Beispiel die Überführung von Geodaten in ein anderes Bezugssystem oder die Aggregation von Werten
- Strukturübersicht: Tabellen, Schemata, Indizes und Views auf einen Blick
 

:::tip Fiktives Praxisbeispiel

**„Umweltdaten aus Sensoren sammeln“ 🗄️**  
Messdaten aus Luft- und Bodenstationen werden in Echtzeit an die PostgreSQL-Datenbank übertragen und dort gespeichert. Über eine Schnittstelle werden sie mit Grafana verbunden. Eine Fachabteilung kann die stets aktuellen Werte somit über Dashboards überwachen und Trends analysieren.

:::

## Wie nutzt man pgAdmin?

### Skill-Level & Anforderungen

pgAdmin ist für Benutzer mit grundlegendem Datenbankverständnis geeignet. SQL-Kenntnisse sind insbesondere für komplexe Abfragen hilfreich, aber für grundlegende Datenbankverwaltungsaufgaben nicht zwingend notwendig. 

**Technisches Know-How notwendig:** <span title="Mäßig" class="text-yellow-400">●●●○○</span>  
**Komplexität bzw. Einarbeitungszeit:** <span title="Mäßig" class="text-yellow-400">●●●○○</span>  

👉 Für Verwaltungsmitarbeitende heißt das: Das Einspielen oder Verarbeiten von Daten in die Datenbanken sowie das Konfigurieren der Verbindungen mit den Datenverabeitungs- und Datenvisualisierungstools sollten im Wesentlichen dem IT-Team überlassen und weitestgehend automatisiert werden. Mit pgAdmin ist es aber  auch ohne Programmierkentnisse möglich, unkritische Änderungen an Daten vorzunehmen, Schemata zu updaten oder sich schlicht einen Überblick über die vorhandenen Daten zu verschaffen, falls das für einen Workflow notwendig ist.

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

      - Daten aus Dateien, die in MinIO abgelegt und z.B. über Node-Red oder AirFlow verfügbar gemacht werden.
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

      - Rohdaten und verarbeitete Daten, die über eine Schnittstelle mit den Dashboard-Tools verbunden werden.
      - Geodaten, die an den Geoserver übertragen und in WFS-Schnittstellen umgewandelt werden.
      - Schemata, die zum Beispiel für Prüfmechanismen in AppSmith-Formularen genutzt werden können.
      </p>
    </div>
  </>
  </TabItem>

</Tabs>

<!-- <iframe
  src="https://data-hub-flow-designer.lovable.app/?flow=JTdCJTIybm9kZXMlMjIlM0ElNUIlN0IlMjJpZCUyMiUzQSUyMm5vZGUtMTAwMSUyMiUyQyUyMnR5cGUlMjIlM0ElMjJjb21wb25lbnQlMjIlMkMlMjJwb3NpdGlvbiUyMiUzQSU3QiUyMnglMjIlM0E1MzEuMDQ0NDE3MDYwMzE1MyUyQyUyMnklMjIlM0EtNTIuMTIxODY4OTkzNjAzNDYlN0QlMkMlMjJkYXRhJTIyJTNBJTdCJTIybGFiZWwlMjIlM0ElMjJLb21wb25lbnRlJTIyJTJDJTIydGl0bGUlMjIlM0ElMjJNaW5JTyUyMiUyQyUyMmRlc2NyaXB0aW9uJTIyJTNBJTIyJTIyJTJDJTIyY3VzdG9tVGl0bGUlMjIlM0FmYWxzZSU3RCUyQyUyMm1lYXN1cmVkJTIyJTNBJTdCJTIyd2lkdGglMjIlM0EyNDAlMkMlMjJoZWlnaHQlMjIlM0E3NCU3RCUyQyUyMnNlbGVjdGVkJTIyJTNBZmFsc2UlMkMlMjJkcmFnZ2luZyUyMiUzQWZhbHNlJTdEJTJDJTdCJTIyaWQlMjIlM0ElMjJub2RlLTEwMDMlMjIlMkMlMjJ0eXBlJTIyJTNBJTIycHJvY2Vzc2luZyUyMiUyQyUyMnBvc2l0aW9uJTIyJTNBJTdCJTIyeCUyMiUzQTIyMi42ODc2MTI3NzA2ODY3NyUyQyUyMnklMjIlM0EyMDMuNTU1ODY1NDQ5NzUwNDMlN0QlMkMlMjJkYXRhJTIyJTNBJTdCJTIybGFiZWwlMjIlM0ElMjJOb3RlJTIwUmVkJTIyJTJDJTIydGl0bGUlMjIlM0ElMjJOb2RlUmVkJTIyJTJDJTIyZGVzY3JpcHRpb24lMjIlM0ElMjJCZXNjaHJlaWJ1bmclMjBoaWVyJTIwZWluZ2ViZW4lMjIlMkMlMjJjdXN0b21UaXRsZSUyMiUzQWZhbHNlJTdEJTJDJTIybWVhc3VyZWQlMjIlM0ElN0IlMjJ3aWR0aCUyMiUzQTI4MCUyQyUyMmhlaWdodCUyMiUzQTkxJTdEJTJDJTIyc2VsZWN0ZWQlMjIlM0FmYWxzZSUyQyUyMmRyYWdnaW5nJTIyJTNBZmFsc2UlN0QlMkMlN0IlMjJpZCUyMiUzQSUyMm5vZGUtMTAwNCUyMiUyQyUyMnR5cGUlMjIlM0ElMjJwcm9jZXNzaW5nJTIyJTJDJTIycG9zaXRpb24lMjIlM0ElN0IlMjJ4JTIyJTNBNTEzLjExMDIwNDU3MDQxNjglMkMlMjJ5JTIyJTNBMjAzLjM1NDc4ODc4Nzk1MjgzJTdEJTJDJTIyZGF0YSUyMiUzQSU3QiUyMmxhYmVsJTIyJTNBJTIyTm90ZSUyMFJlZCUyMiUyQyUyMnRpdGxlJTIyJTNBJTIyQWlyRmxvdyUyMiUyQyUyMmRlc2NyaXB0aW9uJTIyJTNBJTIyQmVzY2hyZWlidW5nJTIwaGllciUyMGVpbmdlYmVuJTIyJTJDJTIyY3VzdG9tVGl0bGUlMjIlM0FmYWxzZSU3RCUyQyUyMm1lYXN1cmVkJTIyJTNBJTdCJTIyd2lkdGglMjIlM0EyODAlMkMlMjJoZWlnaHQlMjIlM0E5MSU3RCUyQyUyMnNlbGVjdGVkJTIyJTNBZmFsc2UlMkMlMjJkcmFnZ2luZyUyMiUzQWZhbHNlJTdEJTJDJTdCJTIyaWQlMjIlM0ElMjJub2RlLTEwMDUlMjIlMkMlMjJ0eXBlJTIyJTNBJTIycHJvY2Vzc2luZyUyMiUyQyUyMnBvc2l0aW9uJTIyJTNBJTdCJTIyeCUyMiUzQTgwMy4wMzAxMDQ3MTU2NTIzJTJDJTIyeSUyMiUzQTIwMy4zNTQ3ODg3ODc5NTI4MyU3RCUyQyUyMmRhdGElMjIlM0ElN0IlMjJsYWJlbCUyMiUzQSUyMk5vdGUlMjBSZWQlMjIlMkMlMjJ0aXRsZSUyMiUzQSUyMkp1cHl0ZXJOb3RlYm9vayUyMiUyQyUyMmRlc2NyaXB0aW9uJTIyJTNBJTIyQmVzY2hyZWlidW5nJTIwaGllciUyMGVpbmdlYmVuJTIyJTJDJTIyY3VzdG9tVGl0bGUlMjIlM0FmYWxzZSU3RCUyQyUyMm1lYXN1cmVkJTIyJTNBJTdCJTIyd2lkdGglMjIlM0EyODAlMkMlMjJoZWlnaHQlMjIlM0E5MSU3RCUyQyUyMnNlbGVjdGVkJTIyJTNBZmFsc2UlMkMlMjJkcmFnZ2luZyUyMiUzQWZhbHNlJTdEJTJDJTdCJTIyaWQlMjIlM0ElMjJub2RlLTEwMDclMjIlMkMlMjJ0eXBlJTIyJTNBJTIyc291cmNlJTIyJTJDJTIycG9zaXRpb24lMjIlM0ElN0IlMjJ4JTIyJTNBMTYxLjc1MTU2MTU1NTM1NTY0JTJDJTIyeSUyMiUzQS0yMzIuNTI3NzAwMTYwODkwNDglN0QlMkMlMjJkYXRhJTIyJTNBJTdCJTIybGFiZWwlMjIlM0ElMjJOZXVlJTIwUXVlbGxlJTIyJTJDJTIyc3VidGl0bGUlMjIlM0ElMjJDU1YtRGF0ZWklMjIlN0QlMkMlMjJtZWFzdXJlZCUyMiUzQSU3QiUyMndpZHRoJTIyJTNBMTgwJTJDJTIyaGVpZ2h0JTIyJTNBNzIlN0QlMkMlMjJzZWxlY3RlZCUyMiUzQXRydWUlMkMlMjJkcmFnZ2luZyUyMiUzQWZhbHNlJTdEJTJDJTdCJTIyaWQlMjIlM0ElMjJub2RlLTEwMDglMjIlMkMlMjJ0eXBlJTIyJTNBJTIyc291cmNlJTIyJTJDJTIycG9zaXRpb24lMjIlM0ElN0IlMjJ4JTIyJTNBNTg1Ljk3Mjc1OTc0MTI5MiUyQyUyMnklMjIlM0EtMjMxLjYwOTMxMjg0MTU5OTQlN0QlMkMlMjJkYXRhJTIyJTNBJTdCJTIybGFiZWwlMjIlM0ElMjJOZXVlJTIwUXVlbGxlJTIyJTJDJTIyc3VidGl0bGUlMjIlM0ElMjJDU1YtRGF0ZWklMjIlN0QlMkMlMjJtZWFzdXJlZCUyMiUzQSU3QiUyMndpZHRoJTIyJTNBMTgwJTJDJTIyaGVpZ2h0JTIyJTNBNzIlN0QlMkMlMjJzZWxlY3RlZCUyMiUzQWZhbHNlJTJDJTIyZHJhZ2dpbmclMjIlM0FmYWxzZSU3RCUyQyU3QiUyMmlkJTIyJTNBJTIybm9kZS0xMDA5JTIyJTJDJTIydHlwZSUyMiUzQSUyMnNvdXJjZSUyMiUyQyUyMnBvc2l0aW9uJTIyJTNBJTdCJTIyeCUyMiUzQTgwNS42NDUyNTY5NDAzODAxJTJDJTIyeSUyMiUzQS0yMzEuNjM0OTg5MTE2MTUzOTclN0QlMkMlMjJkYXRhJTIyJTNBJTdCJTIybGFiZWwlMjIlM0ElMjJOZXVlJTIwUXVlbGxlJTIyJTJDJTIyc3VidGl0bGUlMjIlM0ElMjJDU1YtRGF0ZWklMjIlN0QlMkMlMjJtZWFzdXJlZCUyMiUzQSU3QiUyMndpZHRoJTIyJTNBMTgwJTJDJTIyaGVpZ2h0JTIyJTNBNzIlN0QlMkMlMjJzZWxlY3RlZCUyMiUzQWZhbHNlJTJDJTIyZHJhZ2dpbmclMjIlM0FmYWxzZSU3RCUyQyU3QiUyMmlkJTIyJTNBJTIybm9kZS0xMDEwJTIyJTJDJTIydHlwZSUyMiUzQSUyMnNvdXJjZSUyMiUyQyUyMnBvc2l0aW9uJTIyJTNBJTdCJTIyeCUyMiUzQTEwMTkuNjY4ODI4ODk4NDI1MyUyQyUyMnklMjIlM0EtMjMwLjI3ODI5OTQ1OTY5ODczJTdEJTJDJTIyZGF0YSUyMiUzQSU3QiUyMmxhYmVsJTIyJTNBJTIyTmV1ZSUyMFF1ZWxsZSUyMiUyQyUyMnN1YnRpdGxlJTIyJTNBJTIyQ1NWLURhdGVpJTIyJTdEJTJDJTIybWVhc3VyZWQlMjIlM0ElN0IlMjJ3aWR0aCUyMiUzQTE4MCUyQyUyMmhlaWdodCUyMiUzQTcyJTdEJTJDJTIyc2VsZWN0ZWQlMjIlM0FmYWxzZSUyQyUyMmRyYWdnaW5nJTIyJTNBZmFsc2UlN0QlMkMlN0IlMjJpZCUyMiUzQSUyMm5vZGUtMTAxMSUyMiUyQyUyMnR5cGUlMjIlM0ElMjJzb3VyY2UlMjIlMkMlMjJwb3NpdGlvbiUyMiUzQSU3QiUyMnglMjIlM0EzNzAuMzIxNzk1Nzc4MTU3MjUlMkMlMjJ5JTIyJTNBLTIzMi4yMzgyMTkxMDE1NDcxMiU3RCUyQyUyMmRhdGElMjIlM0ElN0IlMjJsYWJlbCUyMiUzQSUyMk5ldWUlMjBRdWVsbGUlMjIlMkMlMjJzdWJ0aXRsZSUyMiUzQSUyMkNTVi1EYXRlaSUyMiU3RCUyQyUyMm1lYXN1cmVkJTIyJTNBJTdCJTIyd2lkdGglMjIlM0ExODAlMkMlMjJoZWlnaHQlMjIlM0E3MiU3RCUyQyUyMnNlbGVjdGVkJTIyJTNBZmFsc2UlMkMlMjJkcmFnZ2luZyUyMiUzQWZhbHNlJTdEJTVEJTJDJTIyZWRnZXMlMjIlM0ElNUIlN0IlMjJzdHlsZSUyMiUzQSU3QiUyMnN0cm9rZVdpZHRoJTIyJTNBMiUyQyUyMnN0cm9rZSUyMiUzQSUyMiUyMzAwMCUyMiUyQyUyMnN0cm9rZURhc2hhcnJheSUyMiUzQSUyMjUlMkM1JTIyJTdEJTJDJTIyY2xhc3NOYW1lJTIyJTNBJTIyYW5pbWF0ZWQtZWRnZSUyMiUyQyUyMnNvdXJjZSUyMiUzQSUyMm5vZGUtMTAwMSUyMiUyQyUyMnRhcmdldCUyMiUzQSUyMm5vZGUtMTAwMyUyMiUyQyUyMmlkJTIyJTNBJTIyeHktZWRnZV9fbm9kZS0xMDAxLW5vZGUtMTAwMyUyMiU3RCUyQyU3QiUyMnN0eWxlJTIyJTNBJTdCJTIyc3Ryb2tlV2lkdGglMjIlM0EyJTJDJTIyc3Ryb2tlJTIyJTNBJTIyJTIzMDAwJTIyJTJDJTIyc3Ryb2tlRGFzaGFycmF5JTIyJTNBJTIyNSUyQzUlMjIlN0QlMkMlMjJjbGFzc05hbWUlMjIlM0ElMjJhbmltYXRlZC1lZGdlJTIyJTJDJTIyc291cmNlJTIyJTNBJTIybm9kZS0xMDAxJTIyJTJDJTIydGFyZ2V0JTIyJTNBJTIybm9kZS0xMDA0JTIyJTJDJTIyaWQlMjIlM0ElMjJ4eS1lZGdlX19ub2RlLTEwMDEtbm9kZS0xMDA0JTIyJTdEJTJDJTdCJTIyc3R5bGUlMjIlM0ElN0IlMjJzdHJva2VXaWR0aCUyMiUzQTIlMkMlMjJzdHJva2UlMjIlM0ElMjIlMjMwMDAlMjIlMkMlMjJzdHJva2VEYXNoYXJyYXklMjIlM0ElMjI1JTJDNSUyMiU3RCUyQyUyMmNsYXNzTmFtZSUyMiUzQSUyMmFuaW1hdGVkLWVkZ2UlMjIlMkMlMjJzb3VyY2UlMjIlM0ElMjJub2RlLTEwMDElMjIlMkMlMjJ0YXJnZXQlMjIlM0ElMjJub2RlLTEwMDUlMjIlMkMlMjJpZCUyMiUzQSUyMnh5LWVkZ2VfX25vZGUtMTAwMS1ub2RlLTEwMDUlMjIlN0QlMkMlN0IlMjJzdHlsZSUyMiUzQSU3QiUyMnN0cm9rZVdpZHRoJTIyJTNBMiUyQyUyMnN0cm9rZSUyMiUzQSUyMiUyMzAwMCUyMiUyQyUyMnN0cm9rZURhc2hhcnJheSUyMiUzQSUyMjUlMkM1JTIyJTdEJTJDJTIyY2xhc3NOYW1lJTIyJTNBJTIyYW5pbWF0ZWQtZWRnZSUyMiUyQyUyMnNvdXJjZSUyMiUzQSUyMm5vZGUtMTAxMSUyMiUyQyUyMnRhcmdldCUyMiUzQSUyMm5vZGUtMTAwMSUyMiUyQyUyMmlkJTIyJTNBJTIyeHktZWRnZV9fbm9kZS0xMDExLW5vZGUtMTAwMSUyMiU3RCUyQyU3QiUyMnN0eWxlJTIyJTNBJTdCJTIyc3Ryb2tlV2lkdGglMjIlM0EyJTJDJTIyc3Ryb2tlJTIyJTNBJTIyJTIzMDAwJTIyJTJDJTIyc3Ryb2tlRGFzaGFycmF5JTIyJTNBJTIyNSUyQzUlMjIlN0QlMkMlMjJjbGFzc05hbWUlMjIlM0ElMjJhbmltYXRlZC1lZGdlJTIyJTJDJTIyc291cmNlJTIyJTNBJTIybm9kZS0xMDA3JTIyJTJDJTIydGFyZ2V0JTIyJTNBJTIybm9kZS0xMDAxJTIyJTJDJTIyaWQlMjIlM0ElMjJ4eS1lZGdlX19ub2RlLTEwMDctbm9kZS0xMDAxJTIyJTdEJTJDJTdCJTIyc3R5bGUlMjIlM0ElN0IlMjJzdHJva2VXaWR0aCUyMiUzQTIlMkMlMjJzdHJva2UlMjIlM0ElMjIlMjMwMDAlMjIlMkMlMjJzdHJva2VEYXNoYXJyYXklMjIlM0ElMjI1JTJDNSUyMiU3RCUyQyUyMmNsYXNzTmFtZSUyMiUzQSUyMmFuaW1hdGVkLWVkZ2UlMjIlMkMlMjJzb3VyY2UlMjIlM0ElMjJub2RlLTEwMDglMjIlMkMlMjJ0YXJnZXQlMjIlM0ElMjJub2RlLTEwMDElMjIlMkMlMjJpZCUyMiUzQSUyMnh5LWVkZ2VfX25vZGUtMTAwOC1ub2RlLTEwMDElMjIlN0QlMkMlN0IlMjJzdHlsZSUyMiUzQSU3QiUyMnN0cm9rZVdpZHRoJTIyJTNBMiUyQyUyMnN0cm9rZSUyMiUzQSUyMiUyMzAwMCUyMiUyQyUyMnN0cm9rZURhc2hhcnJheSUyMiUzQSUyMjUlMkM1JTIyJTdEJTJDJTIyY2xhc3NOYW1lJTIyJTNBJTIyYW5pbWF0ZWQtZWRnZSUyMiUyQyUyMnNvdXJjZSUyMiUzQSUyMm5vZGUtMTAwOSUyMiUyQyUyMnRhcmdldCUyMiUzQSUyMm5vZGUtMTAwMSUyMiUyQyUyMmlkJTIyJTNBJTIyeHktZWRnZV9fbm9kZS0xMDA5LW5vZGUtMTAwMSUyMiU3RCUyQyU3QiUyMnN0eWxlJTIyJTNBJTdCJTIyc3Ryb2tlV2lkdGglMjIlM0EyJTJDJTIyc3Ryb2tlJTIyJTNBJTIyJTIzMDAwJTIyJTJDJTIyc3Ryb2tlRGFzaGFycmF5JTIyJTNBJTIyNSUyQzUlMjIlN0QlMkMlMjJjbGFzc05hbWUlMjIlM0ElMjJhbmltYXRlZC1lZGdlJTIyJTJDJTIyc291cmNlJTIyJTNBJTIybm9kZS0xMDEwJTIyJTJDJTIydGFyZ2V0JTIyJTNBJTIybm9kZS0xMDAxJTIyJTJDJTIyaWQlMjIlM0ElMjJ4eS1lZGdlX19ub2RlLTEwMTAtbm9kZS0xMDAxJTIyJTdEJTVEJTJDJTIydmVyc2lvbiUyMiUzQTElN0Q%3D"
  width="100%"
  height="400"
  style={{ border: "1px solid #ccc", borderRadius: "8px" }}
  allowFullScreen
></iframe> -->

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
