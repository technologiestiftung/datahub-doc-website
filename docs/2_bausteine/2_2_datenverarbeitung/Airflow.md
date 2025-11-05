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

  <div className="w-full justify-center items-center pt-4">
    <img
      src={require('./assets/Airflow.jpeg').default}
      alt="Beispielpipeline in Airflow"
      label="Beispielpipeline in Airflow"
      className="block h-auto w-full xl:w-[80%] justify-center items-center mx-auto"
    />
    <figcaption className={styles.imgcaption}>Beispielpipeline in Airflow</figcaption>
  </div>

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

<!-- <iframe
  src="https://data-hub-flow-designer.lovable.app/?flow=JTdCJTIybm9kZXMlMjIlM0ElNUIlN0IlMjJpZCUyMiUzQSUyMm5vZGUtMTAwMSUyMiUyQyUyMnR5cGUlMjIlM0ElMjJjb21wb25lbnQlMjIlMkMlMjJwb3NpdGlvbiUyMiUzQSU3QiUyMnglMjIlM0E1MzEuMDQ0NDE3MDYwMzE1MyUyQyUyMnklMjIlM0EtNTIuMTIxODY4OTkzNjAzNDYlN0QlMkMlMjJkYXRhJTIyJTNBJTdCJTIybGFiZWwlMjIlM0ElMjJLb21wb25lbnRlJTIyJTJDJTIydGl0bGUlMjIlM0ElMjJNaW5JTyUyMiUyQyUyMmRlc2NyaXB0aW9uJTIyJTNBJTIyJTIyJTJDJTIyY3VzdG9tVGl0bGUlMjIlM0FmYWxzZSU3RCUyQyUyMm1lYXN1cmVkJTIyJTNBJTdCJTIyd2lkdGglMjIlM0EyNDAlMkMlMjJoZWlnaHQlMjIlM0E3NCU3RCUyQyUyMnNlbGVjdGVkJTIyJTNBZmFsc2UlMkMlMjJkcmFnZ2luZyUyMiUzQWZhbHNlJTdEJTJDJTdCJTIyaWQlMjIlM0ElMjJub2RlLTEwMDMlMjIlMkMlMjJ0eXBlJTIyJTNBJTIycHJvY2Vzc2luZyUyMiUyQyUyMnBvc2l0aW9uJTIyJTNBJTdCJTIyeCUyMiUzQTIyMi42ODc2MTI3NzA2ODY3NyUyQyUyMnklMjIlM0EyMDMuNTU1ODY1NDQ5NzUwNDMlN0QlMkMlMjJkYXRhJTIyJTNBJTdCJTIybGFiZWwlMjIlM0ElMjJOb3RlJTIwUmVkJTIyJTJDJTIydGl0bGUlMjIlM0ElMjJOb2RlUmVkJTIyJTJDJTIyZGVzY3JpcHRpb24lMjIlM0ElMjJCZXNjaHJlaWJ1bmclMjBoaWVyJTIwZWluZ2ViZW4lMjIlMkMlMjJjdXN0b21UaXRsZSUyMiUzQWZhbHNlJTdEJTJDJTIybWVhc3VyZWQlMjIlM0ElN0IlMjJ3aWR0aCUyMiUzQTI4MCUyQyUyMmhlaWdodCUyMiUzQTkxJTdEJTJDJTIyc2VsZWN0ZWQlMjIlM0FmYWxzZSUyQyUyMmRyYWdnaW5nJTIyJTNBZmFsc2UlN0QlMkMlN0IlMjJpZCUyMiUzQSUyMm5vZGUtMTAwNCUyMiUyQyUyMnR5cGUlMjIlM0ElMjJwcm9jZXNzaW5nJTIyJTJDJTIycG9zaXRpb24lMjIlM0ElN0IlMjJ4JTIyJTNBNTEzLjExMDIwNDU3MDQxNjglMkMlMjJ5JTIyJTNBMjAzLjM1NDc4ODc4Nzk1MjgzJTdEJTJDJTIyZGF0YSUyMiUzQSU3QiUyMmxhYmVsJTIyJTNBJTIyTm90ZSUyMFJlZCUyMiUyQyUyMnRpdGxlJTIyJTNBJTIyQWlyRmxvdyUyMiUyQyUyMmRlc2NyaXB0aW9uJTIyJTNBJTIyQmVzY2hyZWlidW5nJTIwaGllciUyMGVpbmdlYmVuJTIyJTJDJTIyY3VzdG9tVGl0bGUlMjIlM0FmYWxzZSU3RCUyQyUyMm1lYXN1cmVkJTIyJTNBJTdCJTIyd2lkdGglMjIlM0EyODAlMkMlMjJoZWlnaHQlMjIlM0E5MSU3RCUyQyUyMnNlbGVjdGVkJTIyJTNBZmFsc2UlMkMlMjJkcmFnZ2luZyUyMiUzQWZhbHNlJTdEJTJDJTdCJTIyaWQlMjIlM0ElMjJub2RlLTEwMDUlMjIlMkMlMjJ0eXBlJTIyJTNBJTIycHJvY2Vzc2luZyUyMiUyQyUyMnBvc2l0aW9uJTIyJTNBJTdCJTIyeCUyMiUzQTgwMy4wMzAxMDQ3MTU2NTIzJTJDJTIyeSUyMiUzQTIwMy4zNTQ3ODg3ODc5NTI4MyU3RCUyQyUyMmRhdGElMjIlM0ElN0IlMjJsYWJlbCUyMiUzQSUyMk5vdGUlMjBSZWQlMjIlMkMlMjJ0aXRsZSUyMiUzQSUyMkp1cHl0ZXJOb3RlYm9vayUyMiUyQyUyMmRlc2NyaXB0aW9uJTIyJTNBJTIyQmVzY2hyZWlidW5nJTIwaGllciUyMGVpbmdlYmVuJTIyJTJDJTIyY3VzdG9tVGl0bGUlMjIlM0FmYWxzZSU3RCUyQyUyMm1lYXN1cmVkJTIyJTNBJTdCJTIyd2lkdGglMjIlM0EyODAlMkMlMjJoZWlnaHQlMjIlM0E5MSU3RCUyQyUyMnNlbGVjdGVkJTIyJTNBZmFsc2UlMkMlMjJkcmFnZ2luZyUyMiUzQWZhbHNlJTdEJTJDJTdCJTIyaWQlMjIlM0ElMjJub2RlLTEwMDclMjIlMkMlMjJ0eXBlJTIyJTNBJTIyc291cmNlJTIyJTJDJTIycG9zaXRpb24lMjIlM0ElN0IlMjJ4JTIyJTNBMTYxLjc1MTU2MTU1NTM1NTY0JTJDJTIyeSUyMiUzQS0yMzIuNTI3NzAwMTYwODkwNDglN0QlMkMlMjJkYXRhJTIyJTNBJTdCJTIybGFiZWwlMjIlM0ElMjJOZXVlJTIwUXVlbGxlJTIyJTJDJTIyc3VidGl0bGUlMjIlM0ElMjJDU1YtRGF0ZWklMjIlN0QlMkMlMjJtZWFzdXJlZCUyMiUzQSU3QiUyMndpZHRoJTIyJTNBMTgwJTJDJTIyaGVpZ2h0JTIyJTNBNzIlN0QlMkMlMjJzZWxlY3RlZCUyMiUzQXRydWUlMkMlMjJkcmFnZ2luZyUyMiUzQWZhbHNlJTdEJTJDJTdCJTIyaWQlMjIlM0ElMjJub2RlLTEwMDglMjIlMkMlMjJ0eXBlJTIyJTNBJTIyc291cmNlJTIyJTJDJTIycG9zaXRpb24lMjIlM0ElN0IlMjJ4JTIyJTNBNTg1Ljk3Mjc1OTc0MTI5MiUyQyUyMnklMjIlM0EtMjMxLjYwOTMxMjg0MTU5OTQlN0QlMkMlMjJkYXRhJTIyJTNBJTdCJTIybGFiZWwlMjIlM0ElMjJOZXVlJTIwUXVlbGxlJTIyJTJDJTIyc3VidGl0bGUlMjIlM0ElMjJDU1YtRGF0ZWklMjIlN0QlMkMlMjJtZWFzdXJlZCUyMiUzQSU3QiUyMndpZHRoJTIyJTNBMTgwJTJDJTIyaGVpZ2h0JTIyJTNBNzIlN0QlMkMlMjJzZWxlY3RlZCUyMiUzQWZhbHNlJTJDJTIyZHJhZ2dpbmclMjIlM0FmYWxzZSU3RCUyQyU3QiUyMmlkJTIyJTNBJTIybm9kZS0xMDA5JTIyJTJDJTIydHlwZSUyMiUzQSUyMnNvdXJjZSUyMiUyQyUyMnBvc2l0aW9uJTIyJTNBJTdCJTIyeCUyMiUzQTgwNS42NDUyNTY5NDAzODAxJTJDJTIyeSUyMiUzQS0yMzEuNjM0OTg5MTE2MTUzOTclN0QlMkMlMjJkYXRhJTIyJTNBJTdCJTIybGFiZWwlMjIlM0ElMjJOZXVlJTIwUXVlbGxlJTIyJTJDJTIyc3VidGl0bGUlMjIlM0ElMjJDU1YtRGF0ZWklMjIlN0QlMkMlMjJtZWFzdXJlZCUyMiUzQSU3QiUyMndpZHRoJTIyJTNBMTgwJTJDJTIyaGVpZ2h0JTIyJTNBNzIlN0QlMkMlMjJzZWxlY3RlZCUyMiUzQWZhbHNlJTJDJTIyZHJhZ2dpbmclMjIlM0FmYWxzZSU3RCUyQyU3QiUyMmlkJTIyJTNBJTIybm9kZS0xMDEwJTIyJTJDJTIydHlwZSUyMiUzQSUyMnNvdXJjZSUyMiUyQyUyMnBvc2l0aW9uJTIyJTNBJTdCJTIyeCUyMiUzQTEwMTkuNjY4ODI4ODk4NDI1MyUyQyUyMnklMjIlM0EtMjMwLjI3ODI5OTQ1OTY5ODczJTdEJTJDJTIyZGF0YSUyMiUzQSU3QiUyMmxhYmVsJTIyJTNBJTIyTmV1ZSUyMFF1ZWxsZSUyMiUyQyUyMnN1YnRpdGxlJTIyJTNBJTIyQ1NWLURhdGVpJTIyJTdEJTJDJTIybWVhc3VyZWQlMjIlM0ElN0IlMjJ3aWR0aCUyMiUzQTE4MCUyQyUyMmhlaWdodCUyMiUzQTcyJTdEJTJDJTIyc2VsZWN0ZWQlMjIlM0FmYWxzZSUyQyUyMmRyYWdnaW5nJTIyJTNBZmFsc2UlN0QlMkMlN0IlMjJpZCUyMiUzQSUyMm5vZGUtMTAxMSUyMiUyQyUyMnR5cGUlMjIlM0ElMjJzb3VyY2UlMjIlMkMlMjJwb3NpdGlvbiUyMiUzQSU3QiUyMnglMjIlM0EzNzAuMzIxNzk1Nzc4MTU3MjUlMkMlMjJ5JTIyJTNBLTIzMi4yMzgyMTkxMDE1NDcxMiU3RCUyQyUyMmRhdGElMjIlM0ElN0IlMjJsYWJlbCUyMiUzQSUyMk5ldWUlMjBRdWVsbGUlMjIlMkMlMjJzdWJ0aXRsZSUyMiUzQSUyMkNTVi1EYXRlaSUyMiU3RCUyQyUyMm1lYXN1cmVkJTIyJTNBJTdCJTIyd2lkdGglMjIlM0ExODAlMkMlMjJoZWlnaHQlMjIlM0E3MiU3RCUyQyUyMnNlbGVjdGVkJTIyJTNBZmFsc2UlMkMlMjJkcmFnZ2luZyUyMiUzQWZhbHNlJTdEJTVEJTJDJTIyZWRnZXMlMjIlM0ElNUIlN0IlMjJzdHlsZSUyMiUzQSU3QiUyMnN0cm9rZVdpZHRoJTIyJTNBMiUyQyUyMnN0cm9rZSUyMiUzQSUyMiUyMzAwMCUyMiUyQyUyMnN0cm9rZURhc2hhcnJheSUyMiUzQSUyMjUlMkM1JTIyJTdEJTJDJTIyY2xhc3NOYW1lJTIyJTNBJTIyYW5pbWF0ZWQtZWRnZSUyMiUyQyUyMnNvdXJjZSUyMiUzQSUyMm5vZGUtMTAwMSUyMiUyQyUyMnRhcmdldCUyMiUzQSUyMm5vZGUtMTAwMyUyMiUyQyUyMmlkJTIyJTNBJTIyeHktZWRnZV9fbm9kZS0xMDAxLW5vZGUtMTAwMyUyMiU3RCUyQyU3QiUyMnN0eWxlJTIyJTNBJTdCJTIyc3Ryb2tlV2lkdGglMjIlM0EyJTJDJTIyc3Ryb2tlJTIyJTNBJTIyJTIzMDAwJTIyJTJDJTIyc3Ryb2tlRGFzaGFycmF5JTIyJTNBJTIyNSUyQzUlMjIlN0QlMkMlMjJjbGFzc05hbWUlMjIlM0ElMjJhbmltYXRlZC1lZGdlJTIyJTJDJTIyc291cmNlJTIyJTNBJTIybm9kZS0xMDAxJTIyJTJDJTIydGFyZ2V0JTIyJTNBJTIybm9kZS0xMDA0JTIyJTJDJTIyaWQlMjIlM0ElMjJ4eS1lZGdlX19ub2RlLTEwMDEtbm9kZS0xMDA0JTIyJTdEJTJDJTdCJTIyc3R5bGUlMjIlM0ElN0IlMjJzdHJva2VXaWR0aCUyMiUzQTIlMkMlMjJzdHJva2UlMjIlM0ElMjIlMjMwMDAlMjIlMkMlMjJzdHJva2VEYXNoYXJyYXklMjIlM0ElMjI1JTJDNSUyMiU3RCUyQyUyMmNsYXNzTmFtZSUyMiUzQSUyMmFuaW1hdGVkLWVkZ2UlMjIlMkMlMjJzb3VyY2UlMjIlM0ElMjJub2RlLTEwMDElMjIlMkMlMjJ0YXJnZXQlMjIlM0ElMjJub2RlLTEwMDUlMjIlMkMlMjJpZCUyMiUzQSUyMnh5LWVkZ2VfX25vZGUtMTAwMS1ub2RlLTEwMDUlMjIlN0QlMkMlN0IlMjJzdHlsZSUyMiUzQSU3QiUyMnN0cm9rZVdpZHRoJTIyJTNBMiUyQyUyMnN0cm9rZSUyMiUzQSUyMiUyMzAwMCUyMiUyQyUyMnN0cm9rZURhc2hhcnJheSUyMiUzQSUyMjUlMkM1JTIyJTdEJTJDJTIyY2xhc3NOYW1lJTIyJTNBJTIyYW5pbWF0ZWQtZWRnZSUyMiUyQyUyMnNvdXJjZSUyMiUzQSUyMm5vZGUtMTAxMSUyMiUyQyUyMnRhcmdldCUyMiUzQSUyMm5vZGUtMTAwMSUyMiUyQyUyMmlkJTIyJTNBJTIyeHktZWRnZV9fbm9kZS0xMDExLW5vZGUtMTAwMSUyMiU3RCUyQyU3QiUyMnN0eWxlJTIyJTNBJTdCJTIyc3Ryb2tlV2lkdGglMjIlM0EyJTJDJTIyc3Ryb2tlJTIyJTNBJTIyJTIzMDAwJTIyJTJDJTIyc3Ryb2tlRGFzaGFycmF5JTIyJTNBJTIyNSUyQzUlMjIlN0QlMkMlMjJjbGFzc05hbWUlMjIlM0ElMjJhbmltYXRlZC1lZGdlJTIyJTJDJTIyc291cmNlJTIyJTNBJTIybm9kZS0xMDA3JTIyJTJDJTIydGFyZ2V0JTIyJTNBJTIybm9kZS0xMDAxJTIyJTJDJTIyaWQlMjIlM0ElMjJ4eS1lZGdlX19ub2RlLTEwMDctbm9kZS0xMDAxJTIyJTdEJTJDJTdCJTIyc3R5bGUlMjIlM0ElN0IlMjJzdHJva2VXaWR0aCUyMiUzQTIlMkMlMjJzdHJva2UlMjIlM0ElMjIlMjMwMDAlMjIlMkMlMjJzdHJva2VEYXNoYXJyYXklMjIlM0ElMjI1JTJDNSUyMiU3RCUyQyUyMmNsYXNzTmFtZSUyMiUzQSUyMmFuaW1hdGVkLWVkZ2UlMjIlMkMlMjJzb3VyY2UlMjIlM0ElMjJub2RlLTEwMDglMjIlMkMlMjJ0YXJnZXQlMjIlM0ElMjJub2RlLTEwMDElMjIlMkMlMjJpZCUyMiUzQSUyMnh5LWVkZ2VfX25vZGUtMTAwOC1ub2RlLTEwMDElMjIlN0QlMkMlN0IlMjJzdHlsZSUyMiUzQSU3QiUyMnN0cm9rZVdpZHRoJTIyJTNBMiUyQyUyMnN0cm9rZSUyMiUzQSUyMiUyMzAwMCUyMiUyQyUyMnN0cm9rZURhc2hhcnJheSUyMiUzQSUyMjUlMkM1JTIyJTdEJTJDJTIyY2xhc3NOYW1lJTIyJTNBJTIyYW5pbWF0ZWQtZWRnZSUyMiUyQyUyMnNvdXJjZSUyMiUzQSUyMm5vZGUtMTAwOSUyMiUyQyUyMnRhcmdldCUyMiUzQSUyMm5vZGUtMTAwMSUyMiUyQyUyMmlkJTIyJTNBJTIyeHktZWRnZV9fbm9kZS0xMDA5LW5vZGUtMTAwMSUyMiU3RCUyQyU3QiUyMnN0eWxlJTIyJTNBJTdCJTIyc3Ryb2tlV2lkdGglMjIlM0EyJTJDJTIyc3Ryb2tlJTIyJTNBJTIyJTIzMDAwJTIyJTJDJTIyc3Ryb2tlRGFzaGFycmF5JTIyJTNBJTIyNSUyQzUlMjIlN0QlMkMlMjJjbGFzc05hbWUlMjIlM0ElMjJhbmltYXRlZC1lZGdlJTIyJTJDJTIyc291cmNlJTIyJTNBJTIybm9kZS0xMDEwJTIyJTJDJTIydGFyZ2V0JTIyJTNBJTIybm9kZS0xMDAxJTIyJTJDJTIyaWQlMjIlM0ElMjJ4eS1lZGdlX19ub2RlLTEwMTAtbm9kZS0xMDAxJTIyJTdEJTVEJTJDJTIydmVyc2lvbiUyMiUzQTElN0Q%3D"
  width="100%"
  height="400"
  style={{ border: "1px solid #ccc", borderRadius: "8px" }}
  allowFullScreen
></iframe> -->

## Beispiele

Airflow kommt unter anderem in diesem Pilotprojekt zum Einsatz:
 
- [Datenbasierte Bibliothekssteuerung: Automatisierte Berechnung von Kennzahlen für Angebote und Ausleihen](/docs/anwendungen/datenbasierte_bibliothek)  

## Weiterführende Informationen

- [Offizielle Apache Airflow-Dokumentation](https://airflow.apache.org/docs/)  
- [Airflow Tutorials & Beispiele](https://airflow.apache.org/docs/apache-airflow/stable/tutorial.html)
</div>
