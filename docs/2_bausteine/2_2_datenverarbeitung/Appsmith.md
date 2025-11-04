---
sidebar_position: 3
hide_title: true
description: Dies ist der zentrale Wissensspeicher des prototypischen Data Hub Berlins, der urbanen Datenplattform der Berliner Verwaltung. Hier findest du Informationen zu Hintergründen, Aufbau und Anwendungsfällen der Plattform.
title: Appsmith
---

import styles from '/docs/docs.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { ArrowRightEndOnRectangleIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/solid';

<div className={styles.doccontainer}>

  <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-10 xl:pl-16 pt-16">
    <div>
      <h1>Appsmith</h1>
      <p className="text-lg">
        AppSmith ermöglicht die schnelle Entwicklung von individuellen Benutzeroberflächen für die Dateninteraktion und Datenerfassung mittels Formularen.
      </p>
    </div>
  </div>

## Was ist Appsmith?

### Low-Code-Tool für Verwaltungsanwendungen
<div className="flex flex-col xl:flex-row xl:items-center justify-center xl:gap-10">
  <p className="mb-0">
Appsmith ist ein Low-Code-Framework zum Erstellen interner Verwaltungs- und Datentools. Es ermöglicht das Erfassen, Bearbeiten und Anzeigen von Datentabellen aus Datenbanken oder APIs. Über Drag-and-Drop lassen sich UI-Elemente wie Tabellen, Formulare, Karten und Diagramme zusammenstellen. Wichtige Prozess- und Datenstrukturlogiken werden durch JavaScript-Snippets und konfigurierbare Queries umgesetzt, sodass Datenvalidierungen, Abläufe und Prüfregeln direkt in den Anwendungen abgebildet werden können.
</p>
      <div className="flex flex-[0_0_250px] xl:pb-8 w-full justify-center items-center">
      <img src="/img/logos/appsmith.svg" alt="Appsmith Logo" className="block h-auto w-[70%] xl:w-[70%]"/>
    </div>
</div>

### Appsmith im Data Hub

Im Data Hub dient Appsmith als schnelles Interface-Tool, um Daten aus den PostgreSQL-Datenbanken sichtbar und interaktiv nutzbar zu machen, vor allem aber, um ein Eintragen und Verändern von Daten für interne und externe Personen zu ermöglichen, ohne dass diese direkten Zugriff auf das komplexe Backend bekommen. Datenänderungen werden direkt über Queries in die Datenbanken zurückgeschrieben, sofern Berechtigungen bestehen. Zusätzlich können von der Verwaltung abgestimmte, hinterlegte Schemata und Datenmodelle verwendet werden, um Eintragungen zu validieren und eine hohe Datenqualität und Dateninteroperabilität sicherzustellen.
 

## Funktionen & Einsatzgebiete

Appsmith wird im Data Hub besonders genutzt für:

- Entwicklung von Formularen zur Datenerfassung, die verwaltungsintern und extern genutzt werden können.
- Erstellung von simplen Dashboards mit Charts und Tabellen


:::tip Fiktives Praxisbeispiel

**„Zentrale Meldestelle für Kulturstandorte“ 🎭**  
Kultureinrichtungen in Berlin pflegen über eine Appsmith-Anwendung ihre Öffnungszeiten, Kontaktinformationen, Barrierefreiheitsmerkmale und Kurzbeschreibungen. Die Oberfläche prüft Eingaben automatisch (z.B. gültige Zeiten, Pflichtfelder, Dubletten) und speichert die Daten in der zentralen Datenbank. Die Senatsverwaltung gibt die Daten in einem händischen Prüfschritt frei und veröffentlicht die geupdatete Datentabelle als Open Data.

:::

## Skill-Level & Anforderungen

Appsmith ist Low-Code, hilfreich ist jedoch ein Verständnis von SQL und JavaScript-Snippets. Diese Kenntnisse werden zum Beispiel benötigt, um die Verbindung zur Datenbank zu konfigurieren und Prüflogiken zu implementieren.

**Technisches Know-How notwendig:** <span class="text-yellow-400">●●●○○</span>  
**Komplexität / Einarbeitung:** <span class="text-yellow-400">●●●○○</span>  

👉 Fachabteilungen mit Grundkenntnissen können sehr einfache Oberflächen und Formulare selbst bauen oder bestehende leicht anpassen. Das intitale Aufsetzen von komplexeren Formularen und Logiken sollte über IT- oder Datenexperten durchgeführt werden, wie dem Kompetenzteam des Data Hub.

## Input & Output

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
      Typische Inputs für Appsmith-Anwendungen im Data Hub sind:

      - PostgreSQL-Datenbanken des Data Hub
      - Händische Eingaben durch Nutzende   
      - REST-APIs
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
      Appsmith kann Outputs erzeugen wie:

      - Formulare zur Datenerfassung  
      - Interaktive Dashboards und Tabellen  
      - Rückschreiben in die PostgreSQL-Datenbanken 
      - API-Requests an Backend-Dienste  
      </p>
    </div>
  </>
  </TabItem>

</Tabs>

## Beispiele

AppSmith wird unter anderem in dieser Pilotanwendung eingesetzt, um ein Formular zu erstellen, das von externen Akteuren genutzt wird, um Daten an die Verwaltung zu liefern:

- [Erfassung von Akteuren im Sozialraum](/docs/anwendungen/akteure_erfassen)

## Weiterführende Informationen

- [Offizielle Appsmith-Dokumentation](https://docs.appsmith.com/)  

</div>
