---
sidebar_position: 3
hide_title: true
description: Dies ist der zentrale Wissensspeicher des prototypischen Data Hub Berlins, der urbanen Datenplattform der Berliner Verwaltung. Hier findest du Informationen zu Hintergründen, Aufbau und Anwendungsfällen der Plattform.
title: GeoServer
---

import styles from '/docs/docs.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { ArrowRightEndOnRectangleIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/solid';

<div className={styles.doccontainer}>

  <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-10 xl:pl-16 pt-16">
    <div>
      <h1>GeoServer</h1>
      <p className="text-lg">
        GeoServer stellt Geodaten über standardisierte Webdienste bereit und ermöglicht diese in andere Anwendungen wie das Masterportal zu integrieren.
      </p>
    </div>
  </div>

## Was ist GeoServer?

### Veröffentlichung von Geodaten über offene Standards

<div className="flex flex-col xl:flex-row xl:items-center justify-center xl:gap-10">
  <p className="mb-0">
    GeoServer ist eine Software, die Geodaten aus verschiedensten Quellen aufbereitet und über Webservices bereitstellt. Unterstützt werden Standards wie WMS (Web Map Service), WFS (Web Feature Service) und WCS (Web Coverage Service). Fachabteilungen können so Karten, Layer und raumbezogene Daten einfach zugänglich machen, ohne komplexe Serverinfrastruktur selbst aufbauen zu müssen.
  </p>
      <div className="flex flex-[0_0_250px] xl:pb-20 w-full justify-center items-center">
      <img src="/img/logos/geoserver.svg" alt="GeoServer Logo" className="block h-auto w-[70%] xl:w-full"/>
    </div>
</div>

### GeoServer im Data Hub

Im Data Hub dient GeoServer als zentrale Komponente, um aus Daten mit Raumbezug standardisierte Geo-Webservices zu machen. Open Data, Daten aus Fachverfahren oder andere projektbasierte Datensätzen werden über die Benutzeroberfläche des GeoServers registriert und es wird ein WFS- oder WMS-Dienst konfiguriert. Dies fördert die Wiederverwendbarkeit und Interoperabilität von Geodaten. Bestimmte Tools wie das Masterportal benötigen die Daten in diesen Formaten. Die offenen Geodaten aus dem Geoportal des Landes Berlin liegen ebenfalls in diesen Formaten vor.

## Funktionen & Einsatzgebiete

GeoServer bietet im Data Hub insbesondere:

- Bereitstellung von Geodaten über WMS, WFS, WCS für Dashboards, Web-Apps oder GIS-Anwendungen  
- Transformation von Geodaten, z.B. Bereitstellung in anderen Referenzsystemen

:::tip Fiktives Praxisbeispiel

**„Für den Bezirk relevante Baumaßnahmen filtern“** 🌍  
Eine Senatsverwaltung pflegt über ein Formular eine Liste von Baumaßnahmen und deren Status in Berlin. Die Daten aus dem Formular fließen automatisiert in die Datenbank des Data Hub. Der GeoSever ist mit dieser Datenbank verbunden und erstellt in Echtzeit aus den Daten einen WFS-Dienst. Ein Bezirksamt nutzt den WFS-Dienst, indem es ihn automatisch filtert, um nur die Daten für den eigenen Bezirk anzuzeigen und spielt diese in einer interaktiven Karte für das bezirkliche Stadtplanungsamt aus.

:::

## Wie nutzt man GeoServer?

### Skill-Level & Anforderungen

GeoServer richtet sich an Nutzende mit Kenntnissen in Geoinformationssystemen, Datenbanken und Web-Services. Für einfache Layer-Registrierung reicht ein gutes Verständnis der Oberfläche; für automatisierte Abläufe oder komplexe Rechteverwaltung sind Kenntnisse in GIS-Standards, WMS/WFS/WCS und SRS (Spatial Reference Systems) hilfreich.  

**Technisches Know-How notwendig:** <span title="Mittel" class="text-yellow-400">●●●○○</span>  
**Komplexität bzw. Einarbeitungszeit:** <span title="Mittel" class="text-yellow-400">●●●○○</span>  

👉 Für die Verwaltung bedeutet das: Über bereitgestellte Layer können Karten und Daten genutzt werden, ohne die technische Infrastruktur selbst verwalten zu müssen. IT- oder Geo-Teams sollten die Einrichtung, das Anlegen von automatisierten Prozessen und die Rechteverwaltung vornehmen.

### Input & Output

<Tabs defaultValue="input" values={[
    { label: 'Input', value: 'input' },
    { label: 'Output', value: 'output' },
  ]}>

  <TabItem value="input">
    <>
      <div className="tabs__content">
        <div className="mb-4">
          <ArrowRightEndOnRectangleIcon className="w-5 h-5 text-green-600"/>
          <h3 className="inline pl-2">Input</h3>
        </div>
        <p>
          Typische Inputs für GeoServer sind:
          - Geodaten aus der PostgreSQL/PostGIS-Datenbank des Data Hub  
        </p>
      </div>
    </>
  </TabItem>

  <TabItem value="output">
    <>
      <div className="tabs__content">
        <div className="mb-4">
          <ArrowRightStartOnRectangleIcon className="w-5 h-5 text-blue-600"/>
          <h3 className="inline pl-2">Output</h3>
        </div>
        <p>
          Über GeoServer werden bereitgestellt:
          - Karten- und Layer-Dienste (WMS) für Visualisierungen  
          - Feature-Dienste (WFS) für Geodatenzugriff und Abfragen
          - Feature-Dienste mit Schreibzugriffen (WFS-T) zum Anlegen und Editieren von Geodaten
          - Rasterdienste (WCS) für großflächige Datensätze  
        </p>
      </div>
    </>
  </TabItem>

</Tabs>

## Beispiele

GeoServer wird unter anderem in dieser Pilotanwendung eingesetzt, um Daten mit Adressen aus einer Erhebung in eine Masterportal-Karte zu bringen:

- [Erfassung von Akteuren im Sozialraum](/docs/anwendungen/akteure_erfassen)


## Weiterführende Informationen

- [Offizielle GeoServer-Dokumentation](https://docs.geoserver.org)  
- [CIVITAS/CORE Admin Docs](https://docs.core.civitasconnect.digital/docs/Administration/Geoserver)

</div>
