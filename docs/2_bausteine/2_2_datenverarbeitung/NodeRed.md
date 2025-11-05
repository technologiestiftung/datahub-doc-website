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

  <div className="w-full justify-center items-center pt-4">
    <img
      src={require('./assets/NodeRED.jpeg').default}
      alt="Beispielflow in Node-Red"
      label="Beispielflow in Node-Red"
      className="block h-auto w-full xl:w-[80%] justify-center items-center mx-auto"
    />
    <figcaption className={styles.imgcaption}>Beispielflow in Node-Red</figcaption>
  </div>

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

👉 Für Verwaltungsmitarbeitende heißt das: Das initiale Aufsetzen von Flows sollte durch IT- oder Daten-Spezialisten oder das Data Hub-Team durchgeführt werden, insbesondere bei komplexen Workflows, Anbindungen an mehrere Systeme oder wenn Daten transformiert oder geprüft werden sollen.

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

<iframe
  src="https://data-hub-flow-designer.lovable.app/?flow=JTdCJTIybm9kZXMlMjIlM0ElNUIlN0IlMjJpZCUyMiUzQSUyMm5vZGUtMTAwMSUyMiUyQyUyMnR5cGUlMjIlM0ElMjJjb21wb25lbnQlMjIlMkMlMjJwb3NpdGlvbiUyMiUzQSU3QiUyMnglMjIlM0E1MzEuMDQ0NDE3MDYwMzE1MyUyQyUyMnklMjIlM0EtNTIuMTIxODY4OTkzNjAzNDYlN0QlMkMlMjJkYXRhJTIyJTNBJTdCJTIybGFiZWwlMjIlM0ElMjJLb21wb25lbnRlJTIyJTJDJTIydGl0bGUlMjIlM0ElMjJNaW5JTyUyMiUyQyUyMmRlc2NyaXB0aW9uJTIyJTNBJTIyJTIyJTJDJTIyY3VzdG9tVGl0bGUlMjIlM0FmYWxzZSU3RCUyQyUyMm1lYXN1cmVkJTIyJTNBJTdCJTIyd2lkdGglMjIlM0EyNDAlMkMlMjJoZWlnaHQlMjIlM0E3NCU3RCUyQyUyMnNlbGVjdGVkJTIyJTNBZmFsc2UlMkMlMjJkcmFnZ2luZyUyMiUzQWZhbHNlJTdEJTJDJTdCJTIyaWQlMjIlM0ElMjJub2RlLTEwMDMlMjIlMkMlMjJ0eXBlJTIyJTNBJTIycHJvY2Vzc2luZyUyMiUyQyUyMnBvc2l0aW9uJTIyJTNBJTdCJTIyeCUyMiUzQTIyMi42ODc2MTI3NzA2ODY3NyUyQyUyMnklMjIlM0EyMDMuNTU1ODY1NDQ5NzUwNDMlN0QlMkMlMjJkYXRhJTIyJTNBJTdCJTIybGFiZWwlMjIlM0ElMjJOb3RlJTIwUmVkJTIyJTJDJTIydGl0bGUlMjIlM0ElMjJOb2RlUmVkJTIyJTJDJTIyZGVzY3JpcHRpb24lMjIlM0ElMjJCZXNjaHJlaWJ1bmclMjBoaWVyJTIwZWluZ2ViZW4lMjIlMkMlMjJjdXN0b21UaXRsZSUyMiUzQWZhbHNlJTdEJTJDJTIybWVhc3VyZWQlMjIlM0ElN0IlMjJ3aWR0aCUyMiUzQTI4MCUyQyUyMmhlaWdodCUyMiUzQTkxJTdEJTJDJTIyc2VsZWN0ZWQlMjIlM0FmYWxzZSUyQyUyMmRyYWdnaW5nJTIyJTNBZmFsc2UlN0QlMkMlN0IlMjJpZCUyMiUzQSUyMm5vZGUtMTAwNCUyMiUyQyUyMnR5cGUlMjIlM0ElMjJwcm9jZXNzaW5nJTIyJTJDJTIycG9zaXRpb24lMjIlM0ElN0IlMjJ4JTIyJTNBNTEzLjExMDIwNDU3MDQxNjglMkMlMjJ5JTIyJTNBMjAzLjM1NDc4ODc4Nzk1MjgzJTdEJTJDJTIyZGF0YSUyMiUzQSU3QiUyMmxhYmVsJTIyJTNBJTIyTm90ZSUyMFJlZCUyMiUyQyUyMnRpdGxlJTIyJTNBJTIyQWlyRmxvdyUyMiUyQyUyMmRlc2NyaXB0aW9uJTIyJTNBJTIyQmVzY2hyZWlidW5nJTIwaGllciUyMGVpbmdlYmVuJTIyJTJDJTIyY3VzdG9tVGl0bGUlMjIlM0FmYWxzZSU3RCUyQyUyMm1lYXN1cmVkJTIyJTNBJTdCJTIyd2lkdGglMjIlM0EyODAlMkMlMjJoZWlnaHQlMjIlM0E5MSU3RCUyQyUyMnNlbGVjdGVkJTIyJTNBZmFsc2UlMkMlMjJkcmFnZ2luZyUyMiUzQWZhbHNlJTdEJTJDJTdCJTIyaWQlMjIlM0ElMjJub2RlLTEwMDUlMjIlMkMlMjJ0eXBlJTIyJTNBJTIycHJvY2Vzc2luZyUyMiUyQyUyMnBvc2l0aW9uJTIyJTNBJTdCJTIyeCUyMiUzQTgwMy4wMzAxMDQ3MTU2NTIzJTJDJTIyeSUyMiUzQTIwMy4zNTQ3ODg3ODc5NTI4MyU3RCUyQyUyMmRhdGElMjIlM0ElN0IlMjJsYWJlbCUyMiUzQSUyMk5vdGUlMjBSZWQlMjIlMkMlMjJ0aXRsZSUyMiUzQSUyMkp1cHl0ZXJOb3RlYm9vayUyMiUyQyUyMmRlc2NyaXB0aW9uJTIyJTNBJTIyQmVzY2hyZWlidW5nJTIwaGllciUyMGVpbmdlYmVuJTIyJTJDJTIyY3VzdG9tVGl0bGUlMjIlM0FmYWxzZSU3RCUyQyUyMm1lYXN1cmVkJTIyJTNBJTdCJTIyd2lkdGglMjIlM0EyODAlMkMlMjJoZWlnaHQlMjIlM0E5MSU3RCUyQyUyMnNlbGVjdGVkJTIyJTNBZmFsc2UlMkMlMjJkcmFnZ2luZyUyMiUzQWZhbHNlJTdEJTJDJTdCJTIyaWQlMjIlM0ElMjJub2RlLTEwMDclMjIlMkMlMjJ0eXBlJTIyJTNBJTIyc291cmNlJTIyJTJDJTIycG9zaXRpb24lMjIlM0ElN0IlMjJ4JTIyJTNBMTYxLjc1MTU2MTU1NTM1NTY0JTJDJTIyeSUyMiUzQS0yMzIuNTI3NzAwMTYwODkwNDglN0QlMkMlMjJkYXRhJTIyJTNBJTdCJTIybGFiZWwlMjIlM0ElMjJOZXVlJTIwUXVlbGxlJTIyJTJDJTIyc3VidGl0bGUlMjIlM0ElMjJDU1YtRGF0ZWklMjIlN0QlMkMlMjJtZWFzdXJlZCUyMiUzQSU3QiUyMndpZHRoJTIyJTNBMTgwJTJDJTIyaGVpZ2h0JTIyJTNBNzIlN0QlMkMlMjJzZWxlY3RlZCUyMiUzQXRydWUlMkMlMjJkcmFnZ2luZyUyMiUzQWZhbHNlJTdEJTJDJTdCJTIyaWQlMjIlM0ElMjJub2RlLTEwMDglMjIlMkMlMjJ0eXBlJTIyJTNBJTIyc291cmNlJTIyJTJDJTIycG9zaXRpb24lMjIlM0ElN0IlMjJ4JTIyJTNBNTg1Ljk3Mjc1OTc0MTI5MiUyQyUyMnklMjIlM0EtMjMxLjYwOTMxMjg0MTU5OTQlN0QlMkMlMjJkYXRhJTIyJTNBJTdCJTIybGFiZWwlMjIlM0ElMjJOZXVlJTIwUXVlbGxlJTIyJTJDJTIyc3VidGl0bGUlMjIlM0ElMjJDU1YtRGF0ZWklMjIlN0QlMkMlMjJtZWFzdXJlZCUyMiUzQSU3QiUyMndpZHRoJTIyJTNBMTgwJTJDJTIyaGVpZ2h0JTIyJTNBNzIlN0QlMkMlMjJzZWxlY3RlZCUyMiUzQWZhbHNlJTJDJTIyZHJhZ2dpbmclMjIlM0FmYWxzZSU3RCUyQyU3QiUyMmlkJTIyJTNBJTIybm9kZS0xMDA5JTIyJTJDJTIydHlwZSUyMiUzQSUyMnNvdXJjZSUyMiUyQyUyMnBvc2l0aW9uJTIyJTNBJTdCJTIyeCUyMiUzQTgwNS42NDUyNTY5NDAzODAxJTJDJTIyeSUyMiUzQS0yMzEuNjM0OTg5MTE2MTUzOTclN0QlMkMlMjJkYXRhJTIyJTNBJTdCJTIybGFiZWwlMjIlM0ElMjJOZXVlJTIwUXVlbGxlJTIyJTJDJTIyc3VidGl0bGUlMjIlM0ElMjJDU1YtRGF0ZWklMjIlN0QlMkMlMjJtZWFzdXJlZCUyMiUzQSU3QiUyMndpZHRoJTIyJTNBMTgwJTJDJTIyaGVpZ2h0JTIyJTNBNzIlN0QlMkMlMjJzZWxlY3RlZCUyMiUzQWZhbHNlJTJDJTIyZHJhZ2dpbmclMjIlM0FmYWxzZSU3RCUyQyU3QiUyMmlkJTIyJTNBJTIybm9kZS0xMDEwJTIyJTJDJTIydHlwZSUyMiUzQSUyMnNvdXJjZSUyMiUyQyUyMnBvc2l0aW9uJTIyJTNBJTdCJTIyeCUyMiUzQTEwMTkuNjY4ODI4ODk4NDI1MyUyQyUyMnklMjIlM0EtMjMwLjI3ODI5OTQ1OTY5ODczJTdEJTJDJTIyZGF0YSUyMiUzQSU3QiUyMmxhYmVsJTIyJTNBJTIyTmV1ZSUyMFF1ZWxsZSUyMiUyQyUyMnN1YnRpdGxlJTIyJTNBJTIyQ1NWLURhdGVpJTIyJTdEJTJDJTIybWVhc3VyZWQlMjIlM0ElN0IlMjJ3aWR0aCUyMiUzQTE4MCUyQyUyMmhlaWdodCUyMiUzQTcyJTdEJTJDJTIyc2VsZWN0ZWQlMjIlM0FmYWxzZSUyQyUyMmRyYWdnaW5nJTIyJTNBZmFsc2UlN0QlMkMlN0IlMjJpZCUyMiUzQSUyMm5vZGUtMTAxMSUyMiUyQyUyMnR5cGUlMjIlM0ElMjJzb3VyY2UlMjIlMkMlMjJwb3NpdGlvbiUyMiUzQSU3QiUyMnglMjIlM0EzNzAuMzIxNzk1Nzc4MTU3MjUlMkMlMjJ5JTIyJTNBLTIzMi4yMzgyMTkxMDE1NDcxMiU3RCUyQyUyMmRhdGElMjIlM0ElN0IlMjJsYWJlbCUyMiUzQSUyMk5ldWUlMjBRdWVsbGUlMjIlMkMlMjJzdWJ0aXRsZSUyMiUzQSUyMkNTVi1EYXRlaSUyMiU3RCUyQyUyMm1lYXN1cmVkJTIyJTNBJTdCJTIyd2lkdGglMjIlM0ExODAlMkMlMjJoZWlnaHQlMjIlM0E3MiU3RCUyQyUyMnNlbGVjdGVkJTIyJTNBZmFsc2UlMkMlMjJkcmFnZ2luZyUyMiUzQWZhbHNlJTdEJTVEJTJDJTIyZWRnZXMlMjIlM0ElNUIlN0IlMjJzdHlsZSUyMiUzQSU3QiUyMnN0cm9rZVdpZHRoJTIyJTNBMiUyQyUyMnN0cm9rZSUyMiUzQSUyMiUyMzAwMCUyMiUyQyUyMnN0cm9rZURhc2hhcnJheSUyMiUzQSUyMjUlMkM1JTIyJTdEJTJDJTIyY2xhc3NOYW1lJTIyJTNBJTIyYW5pbWF0ZWQtZWRnZSUyMiUyQyUyMnNvdXJjZSUyMiUzQSUyMm5vZGUtMTAwMSUyMiUyQyUyMnRhcmdldCUyMiUzQSUyMm5vZGUtMTAwMyUyMiUyQyUyMmlkJTIyJTNBJTIyeHktZWRnZV9fbm9kZS0xMDAxLW5vZGUtMTAwMyUyMiU3RCUyQyU3QiUyMnN0eWxlJTIyJTNBJTdCJTIyc3Ryb2tlV2lkdGglMjIlM0EyJTJDJTIyc3Ryb2tlJTIyJTNBJTIyJTIzMDAwJTIyJTJDJTIyc3Ryb2tlRGFzaGFycmF5JTIyJTNBJTIyNSUyQzUlMjIlN0QlMkMlMjJjbGFzc05hbWUlMjIlM0ElMjJhbmltYXRlZC1lZGdlJTIyJTJDJTIyc291cmNlJTIyJTNBJTIybm9kZS0xMDAxJTIyJTJDJTIydGFyZ2V0JTIyJTNBJTIybm9kZS0xMDA0JTIyJTJDJTIyaWQlMjIlM0ElMjJ4eS1lZGdlX19ub2RlLTEwMDEtbm9kZS0xMDA0JTIyJTdEJTJDJTdCJTIyc3R5bGUlMjIlM0ElN0IlMjJzdHJva2VXaWR0aCUyMiUzQTIlMkMlMjJzdHJva2UlMjIlM0ElMjIlMjMwMDAlMjIlMkMlMjJzdHJva2VEYXNoYXJyYXklMjIlM0ElMjI1JTJDNSUyMiU3RCUyQyUyMmNsYXNzTmFtZSUyMiUzQSUyMmFuaW1hdGVkLWVkZ2UlMjIlMkMlMjJzb3VyY2UlMjIlM0ElMjJub2RlLTEwMDElMjIlMkMlMjJ0YXJnZXQlMjIlM0ElMjJub2RlLTEwMDUlMjIlMkMlMjJpZCUyMiUzQSUyMnh5LWVkZ2VfX25vZGUtMTAwMS1ub2RlLTEwMDUlMjIlN0QlMkMlN0IlMjJzdHlsZSUyMiUzQSU3QiUyMnN0cm9rZVdpZHRoJTIyJTNBMiUyQyUyMnN0cm9rZSUyMiUzQSUyMiUyMzAwMCUyMiUyQyUyMnN0cm9rZURhc2hhcnJheSUyMiUzQSUyMjUlMkM1JTIyJTdEJTJDJTIyY2xhc3NOYW1lJTIyJTNBJTIyYW5pbWF0ZWQtZWRnZSUyMiUyQyUyMnNvdXJjZSUyMiUzQSUyMm5vZGUtMTAxMSUyMiUyQyUyMnRhcmdldCUyMiUzQSUyMm5vZGUtMTAwMSUyMiUyQyUyMmlkJTIyJTNBJTIyeHktZWRnZV9fbm9kZS0xMDExLW5vZGUtMTAwMSUyMiU3RCUyQyU3QiUyMnN0eWxlJTIyJTNBJTdCJTIyc3Ryb2tlV2lkdGglMjIlM0EyJTJDJTIyc3Ryb2tlJTIyJTNBJTIyJTIzMDAwJTIyJTJDJTIyc3Ryb2tlRGFzaGFycmF5JTIyJTNBJTIyNSUyQzUlMjIlN0QlMkMlMjJjbGFzc05hbWUlMjIlM0ElMjJhbmltYXRlZC1lZGdlJTIyJTJDJTIyc291cmNlJTIyJTNBJTIybm9kZS0xMDA3JTIyJTJDJTIydGFyZ2V0JTIyJTNBJTIybm9kZS0xMDAxJTIyJTJDJTIyaWQlMjIlM0ElMjJ4eS1lZGdlX19ub2RlLTEwMDctbm9kZS0xMDAxJTIyJTdEJTJDJTdCJTIyc3R5bGUlMjIlM0ElN0IlMjJzdHJva2VXaWR0aCUyMiUzQTIlMkMlMjJzdHJva2UlMjIlM0ElMjIlMjMwMDAlMjIlMkMlMjJzdHJva2VEYXNoYXJyYXklMjIlM0ElMjI1JTJDNSUyMiU3RCUyQyUyMmNsYXNzTmFtZSUyMiUzQSUyMmFuaW1hdGVkLWVkZ2UlMjIlMkMlMjJzb3VyY2UlMjIlM0ElMjJub2RlLTEwMDglMjIlMkMlMjJ0YXJnZXQlMjIlM0ElMjJub2RlLTEwMDElMjIlMkMlMjJpZCUyMiUzQSUyMnh5LWVkZ2VfX25vZGUtMTAwOC1ub2RlLTEwMDElMjIlN0QlMkMlN0IlMjJzdHlsZSUyMiUzQSU3QiUyMnN0cm9rZVdpZHRoJTIyJTNBMiUyQyUyMnN0cm9rZSUyMiUzQSUyMiUyMzAwMCUyMiUyQyUyMnN0cm9rZURhc2hhcnJheSUyMiUzQSUyMjUlMkM1JTIyJTdEJTJDJTIyY2xhc3NOYW1lJTIyJTNBJTIyYW5pbWF0ZWQtZWRnZSUyMiUyQyUyMnNvdXJjZSUyMiUzQSUyMm5vZGUtMTAwOSUyMiUyQyUyMnRhcmdldCUyMiUzQSUyMm5vZGUtMTAwMSUyMiUyQyUyMmlkJTIyJTNBJTIyeHktZWRnZV9fbm9kZS0xMDA5LW5vZGUtMTAwMSUyMiU3RCUyQyU3QiUyMnN0eWxlJTIyJTNBJTdCJTIyc3Ryb2tlV2lkdGglMjIlM0EyJTJDJTIyc3Ryb2tlJTIyJTNBJTIyJTIzMDAwJTIyJTJDJTIyc3Ryb2tlRGFzaGFycmF5JTIyJTNBJTIyNSUyQzUlMjIlN0QlMkMlMjJjbGFzc05hbWUlMjIlM0ElMjJhbmltYXRlZC1lZGdlJTIyJTJDJTIyc291cmNlJTIyJTNBJTIybm9kZS0xMDEwJTIyJTJDJTIydGFyZ2V0JTIyJTNBJTIybm9kZS0xMDAxJTIyJTJDJTIyaWQlMjIlM0ElMjJ4eS1lZGdlX19ub2RlLTEwMTAtbm9kZS0xMDAxJTIyJTdEJTVEJTJDJTIydmVyc2lvbiUyMiUzQTElN0Q%3D"
  width="100%"
  height="400"
  style={{ border: "1px solid #ccc", borderRadius: "8px" }}
  allowFullScreen
></iframe>

## Beispiele

Node-RED kommt unter anderem in diesen Pilotprojekten zum Einsatz, um Rohdaten in Form von CSV-Dateien aus MinIO auszulesen und in die Datenbank zu schreiben, und diese somit für die anschließenden Datenverarbeitungsprozesse und dann für Visualisierungen zur Verfügung zu stellen:

- [Datenbasierte Bibliothekssteuerung: Monitoring von Ausleihen und Angeboten zur Steuerung der Makulatur](/docs/anwendungen/datenbasierte_bibliothek)
- [Digitales Landesgleichstellungsmonitoring: Visualisierung von Kennzahlen zur Gleichstellung in Berlin](/docs/anwendungen/landesgleichstellung)


## Weiterführende Informationen

- [Offizielle Node-RED Dokumentation](https://node-red.org/docs/)  
- [Tutorials für Einsteiger](https://node-red.org/docs/tutorials/)
</div>
