---
sidebar_position: 3
hide_title: true
description: Dies ist der zentrale Wissensspeicher des prototypischen Data Hub Berlins, der urbanen Datenplattform der Berliner Verwaltung. Hier findest du Informationen zu Hintergründen, Aufbau und Anwendungsfällen der Plattform.
title: Masterportal
---

import styles from '/docs/docs.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { ArrowRightEndOnRectangleIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/solid';

<div className={styles.doccontainer}>

  <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-10 xl:pl-16 pt-16">
    <div>
      <h1>Masterportal</h1>
      <p className="text-lg">
        Das Masterportal ist die Grundlage für thematische Kartenanwendungen, um Geodaten darzustellen, zu durchsuchen, zu erfassen oder zu nutzen.
      </p>
    </div>
  </div>

## Was ist Masterportal?

### Ein Kartenviewer für die öffentliche Verwaltung

<div className="flex flex-col xl:flex-row xl:items-center justify-center xl:gap-10 ">
  <p className="mb-0">
    Masterportal ist eine Webanwendung, die konsequent auf offenen Geodaten‑Standards (z. B. WMS, WFS, CS‑W, WPS) basiert. Verwaltungen können damit thematische Geodatenportale erstellen, die Geodaten‑Layer, 3D‑Modelle, simple GIS-Tools, Routingfunktionen und mehr für verschiedenste Endgeräte bereitstellen. 
</p>
    <div className="flex flex-[0_0_250px] xl:pb-10 w-full justify-center items-center">
      <img src="/img/logos/master_portal.svg" alt="Masterportal Logo" className="block h-auto w-[70%] xl:w-[80%]"/>
    </div>
  </div>


### Masterportal im Data Hub

Im Rahmen des Data Hub übernimmt Masterportal die Funktion, Geodaten effizient und standardkonform bereitzustellen und als Webkarten zu visualisieren – sowohl für Fachabteilungen als auch für die Öffentlichkiet. Die Lösung kann direkt auf die bestehende offene Geodaten‑Infrastruktur der Senatsverwaltung für Stadtentwicklung, Bauen und Wohnen (Geoportal) aufsetzen oder die im Data Hub im GeoServer konfigurierten Dienste nutzen. So lassen sich neue, thematische Portale bauen zum Beispiel für verwaltungsinternes Monitoring oder als Produkt zur Information für Bürger und Bürgerinnen.

## Funktionen & Einsatzgebiete

Masterportal wird im Data Hub insbesondere für folgende Aufgaben genutzt:

- Einrichtung von Geoportalen beziehungsweise Kartenanwendungen mit geringem Programmieraufwand zur Betrachtung von Geodaten
- Einrichtung von Kartenanwendungen, die ein Editieren bzw. Einzeichnen von Daten zulassen, zur Erfassung von Geodaten


:::tip Fiktives Praxisbeispiel

**„Grünflächen- und Gartenkarte als Service für Bürger und Bürgerinnen“** 🏛️  
Eine Senatsverwaltung nutzt Masterportal, um alle öffentlichen Parks, Gemeinschaftsgärten und Grünflächen Berlins auf einer interaktiven, öffentlichen Karte darzustellen. Bürger können Öffnungszeiten, Angebote und Standortinfos einsehen, während Fachabteilungen dieselben Geodaten für Planung, Pflegeberichte und Monitoring nutzen. Updates in der Datenbank werden automatisch in die Karte übertragen, sodass diese stets aktuell bleibt.

:::


## Wie nutzt man Masterportal?

### Skill‑Level & Anforderungen  
Das Masterportal richtet sich an Fachabteilungen mit thematischem Kartenbezug. Grundlegende Kenntnisse in Geodatenformaten und Kartenarchitektur sind hilfreich. Für das Erstellen von Standard-Kartenanwendungen sind aber in der Regel keine Programmierkenntnisse notwendig, da die Karten konfiguriert werden.
 
**Technisches Know‑How notwendig:** <span title="Mittel" class="text-yellow-400">●●○○○</span>  
**Komplexität bzw. Einarbeitungszeit:** <span title="Mäßig" class="text-yellow-400">●●○○○</span>  

👉 Für Verwaltungsmitarbeitende bedeutet das: Fachabteilungen können einmal aufgesetzte Geoportale nutzen und leicht anpassen und updaten. Die Einrichtung von Konfiguration, Schnittstellen oder 3D‑Funktionalitäten sollte durch IT‑ oder Daten-Teams unterstützt werden. Umfassende Funktionalitäten wie Routing oder 3D‑Daten erfordern möglicherweise GIS‑Spezialisten oder -Spezialistinnen.

### Input & Output  
<Tabs defaultValue="input" values={[
    { label: 'Input', value: 'input' },
    { label: 'Output', value: 'output' },
]}>

  <TabItem value="input">
    <div className="tabs__content">
      <div className="mb-4"><ArrowRightEndOnRectangleIcon className="w-5 h-5 text-green-600" /><h3 className="inline pl-2">Input</h3></div>
      <p>
        Typische Inputs für Masterportale im Data Hub‑Kontext:

        - Geodaten‑Dienste die über den GeoServer des Data Hub bereitgestellt werden 
        - Offene Geodaten‑Dienste des Berliner Geoportals
        - GeoJSON-Dateien
      </p>
    </div>
  </TabItem>

  <TabItem value="output">
  <>
    <div className="tabs__content">
    <div className="mb-4">
      <ArrowRightStartOnRectangleIcon className="w-5 h-5 text-blue-600" />
      <h3 className="inline pl-2">Output</h3>
    </div>
      <p>
        Das Masterportal liefert oder ermöglicht:

        - Veröffentlichte Geoportale mit Karten, Layern, Texten und interaktiven Tools
        - Metadaten und Links zu den verwendeten Geodaten-Diensten 
      </p>
    </div>
      </>
  </TabItem>

</Tabs>

## Beispiele  
Das Masterportal kommt als Datenvisualisierungskomponente unter anderem in einem unserer Pilotprojekte zum Einsatz, um Daten kartenbasiert zu erfassen und für die Fachämter verfügbar zu machen:

- [Erfassung von Akteuren im Sozialraum](/docs/anwendungen/akteure_erfassen)

Das Masterportal ist als Software weit verbreitet und kommt sowohl in Berlin als auch in anderen Städten und Verwaltungen zum Einsatz. Hier einige Beispiele:

- [Berliner Geodatenportal](https://gdi.berlin.de/viewer/main/)
- [Mein XHain](https://www.geodaten-fk.de/MeinXhain/Portal/)
- [Berlin gärtnert](https://berlingaertnert.odis-berlin.de)
- [Geoportal Hamburg](https://geoportal-hamburg.de)

## Weiterführende Informationen  

Diese Seite ist als erster Einstieg zu Apache Superset im Kontext des Data Hub gedacht. 
Da es sich um ein bekanntes Open Source-Tool handelt, existiert eine offizielle, technische Dokumentation:   
[Masterportal Dokumentation](https://www.masterportal.org/dokumentation)  

In der Dokumentation des CIVITAS/CORE findest du Hinweise dazu, wie das Tool auf Admin-Level genutzt und verwaltet wird:  
[CIVITAS/CORE Admin Docs](https://docs.core.civitasconnect.digital/docs/Administration/Masterportal)

</div>
