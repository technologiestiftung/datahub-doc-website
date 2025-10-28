---
title: Data Hub Governance
sidebar_position: 2
hide_title: true
---

import styles from '../docs.module.css';

<div className={styles.doccontainer}>

  <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-10 pt-16">
 {/* <div className={styles.heroimage}>
      <img src="/img/wissen.svg" alt="Wissensspeicher Logo" />
    </div>  */}
    <div>
          <h1>Data Hub Governance</h1>
      <p className="text-lg">
        Damit der Data Hub fair, sicher und nachvollziehbar genutzt werden kann, brauch es einen klaren Rahmen für Zusammenarbeit und Verantwortung. Daher wird parallel zum Prototypen eine Governance erarbeitet, die Rollen, Prozesse und Prinzipien für den verantwortungsvollen Umgang mit Daten in der Berliner Verwaltung definiert.
      </p>
    </div>
  </div>


## Was ist eine Data Governance? 

Unter dem Begriff Data Governance wird die Steuerung und Verwaltung von Daten mit dem Ziel der bestmöglichen Nutzbarmachung verstanden. Hierunter fallen unterschiedliche Richtlinien, Prozesse, Rollen und Standards. In öffentlichen Verwaltungen wird hierunter das Zusammenspiel zwischen strategischer Ebene (gesamtstädtische Zielsetzung zu Datennutzung) und operativem Datenmanagement (Datenerfassung, -pflege, -nutzung) verstanden. 

Das Versprechen von zentralen Datenschnittstellen wie dem Data Hub ist, den Wert dieser Daten für Steuerung, Smart City-Initiativen und bessere Entscheidungsgrundlagen für politische Akteure zu heben. 

Die reine technische Infrastruktur des Data Hubs reicht dafür allerdings nicht aus. Es bedarf der Zuarbeit der Nutzer:innen, ähnlich wie beim Thema Open Data, zu den Fragen: 

- Wer ist für welche Daten verantwortlich? 
- Wie werden Daten erfasst, gespeichert, gepflegt und gelöscht (Datenlebenszyklus)?  
- In welcher Qualität, welchem Format und Datenmodell sollen sie vorliegen? 
- Wie werden Metadaten einheitlich dokumentiert? 
- Wie können Datenschutz und Compliance-Vorgaben sichergestellt werden? 

Diese Fragen werden aktuell in den unterschiedlichen Fachverwaltungen und Bezirken jeweils meist in Eigenverantwortung verhandelt. Die Vision besteht darin, datenbasiertes Handeln in Berlin zu verankern und zu standardisieren. Dafür sind über Ebenen und Ressorts hinweg klare Verwantwortlichkeiten und Rollen zu etablieren

## Was bedeutet das konkret mit Blick auf den Data Hub? 

Das Team des Data Hubs kümmert sich in diesem Jahr bei der prototypischen Umsetzung um den fachlichen Betrieb der Datenplattform und die Umsetzung von ersten Use Cases. Ein Team zu stellen, welches sich um die Konfiguration und Vergabe von Rechten (Rechte-/Rollenmanagement) in der Plattform kümmert, wird in anderen Kommunen bereits erfolgreich umgesetzt. Wir dokumentieren hier unsere Learnings und Erkenntnisse zum Thema Governance. 

Der Data Hub verfügt über die Möglichkeit Datenzugriffe auf genau die Datensätze und Module (bspw. Superset oder Grafana) des Data Hubs zu beschränken, die für die Umsetzung des jeweiligen Use Cases nötig sind. Das Data Hub Team setzt die Konfiguration der Plattform in Absprache mit der Verwaltung um. Wir folgen hierbei den Prinzipien minimaler Rechtevergabe zum Schutz ggf. Sensibler Daten und Reduzierung potenzieller Risiken, auch wenn sich die bisherigen Use Cases auf offene Daten beschränken.  

Die dadurch entstehenden, getrennten “Bereiche” innerhalb der Plattform werden als Dataspaces bezeichnet. 

Für jeden Use Case müssen Rollen definiert werden und entschieden werden, welche Privilegien sie haben müssen, um die Umsetzung zu gewährleisten (Daten zu pflegen, Anpassungen am Dashboard vornehmen, Daten zu erfassen u. dgl. m.). Dabei gilt es zukünftig Standardrollen zu definieren, um den Prozess bei jedem Use Case zu beschleunigen, wie: 

<img
  src={require('./assets/Rechte-und-Rollen.jpeg').default}
  alt="Rechte-und-Rollen"
  width={800}
  height={300}              
/>

Dabei Zugriffe sind immer nur möglich, wenn sich die Nutzer:innen vorher authentifiziert haben. 

## Beispielhafter Ablauf einer Use-Case-Umsetzung 

1. **Kontaktaufnahme der Verwaltungsorganisation** (Use-Case-Geber:in) über Data Hub Team der Technologiestiftung oder Arbeitsgruppe Smart City & Datenmanagement (6 B III) der Senatskanzlei 

2. **Rücksprache zwischen Senatskanzlei und Data Hub Team** zu Umsetzbarkeit (Passung zu den techn. Möglichkeiten des Data Hubs) und Kapazitäten 

3. **Rückmeldung an Use-Case-Geber:in:** Kick-Off-Termin zur Klärung von Rahmenbedingungen, konkreter Zieldefinition, Festlegung von Rollen: 
        - Product Owner im Data Hub Team 
        - Data Engineer (techn. Umsetzung) im Data Hub Team 
        - Verfügbarer Ansprechpartner bei Use Case-Geber:in 

4. **Konfiguration des Data Hubs:**
    - Einrichtung eines Dataspaces 
    - Vergabe von Zugriffsrechten im Data Hub  

5. **Umsetzung des Use Case / Erstellung des Datenprodukts**

6. **Übergabe und Festlegung der Pflege- und Aktualisierungsprozesse**

Perspektivisch wäre es empfehlenswert, in den Fach- und Bezirksverwaltungen datenbezogene Prozesse so weit institutionell zu standardisieren, dass jede Behörde über klare, verantwortliche Rollen (bspw. Daten-Stewards) verfügt, die das Zusammenarbeiten mit der Datenplattform Data Hub regeln, Standards gemeinsam aushandeln und weitere Use Cases entwickeln. 

:::warning Hinweis

Bisher existiert noch keine offizielle abgestimmte Governance. Die hier dargestellten Prozesse, sind als erste Vorschläge und als ein Arbeitsstand für die jetzige Phase des prototypischen Betriebs zu verstehen.

:::

  </div>