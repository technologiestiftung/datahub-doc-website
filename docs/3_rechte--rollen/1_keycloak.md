---
sidebar_position: 1
---

# Zugangssteuerung mit Keycloak

:::danger[Work in progress]
Achtung diese Seite befindet sich noch im Aufbau!
:::

## Sicherheit, Governance und Datenhoheit

Keycloak ist die zentrale **Zugriffs- und Rechteverwaltung** im Data Hub.  
Es sorgt dafür, dass Mitarbeitende der Berliner Verwaltung nur die Daten und Funktionen sehen, für die sie berechtigt sind.  
So entsteht ein sicherer, transparenter und flexibler Umgang mit Daten, der den Anforderungen moderner **Data Governance** entspricht.

---

## Grundprinzipien von Sicherheit & Governance

- **Single Sign-On**: Ein Login reicht für alle Anwendungen im Data Hub (z. B. MinIO, Superset, Appsmith, GeoServer).  
- **Rollenbasierter Zugriff**: Jede Person erhält definierte Rollen, die die eigenen Rechte klar beschreiben.  
- **Dataspaces**: Daten werden in thematischen oder organisatorischen Räumen verwaltet welche voneinander abgegrenzt sind.  
- **Datenhoheit**: Die Verantwortung für die Inhalte in einem Dataspace liegt bei den jeweiligen Nutzenden oder Rollen.  
- **Kein Automatismus in Richtung Öffentlichkeit**: Daten im Hub sind nicht automatisch öffentlich zugänglich. Veröffentlichung erfolgt bewusst, z. B. über Piveau oder Dashboards.  

---

## Ablauf des Rechte- und Rollenmanagements

1. **Authentifizierung**  
   - Anmeldung erfolgt über Keycloak.  
   - Optional mit Zwei-Faktor-Authentifizierung für besonders sensible Bereiche.  

2. **Rollenvergabe**  
   - Jede Person erhält eine oder mehrere Rollen.  
   - Rollen bestimmen, in welchen Dataspaces gearbeitet werden darf und auf welchem Level (lesen, pflegen, entwickeln).  

3. **Arbeiten im Dataspace**  
   - Datenräume sind wie abgeschlossene Arbeitsbereiche.  
   - Innerhalb eines Dataspace entscheidet die Rolle über die Möglichkeiten: Nur lesen, Daten pflegen, Daten importieren oder Prozesse entwickeln.  
   - **Wichtig:** Daten in einem Dataspace sind **nicht automatisch öffentlich**. Die Veröffentlichung muss aktiv erfolgen.  

4. **Datenhoheit und Verantwortung**  
   - Einzelne Personen tragen die Verantwortung für Inhalte und Berechtigungen innerhalb eines Dataspace.  
   - Damit bleibt die Datenhoheit bei denjenigen, die am besten über die Daten Bescheid wissen.  

5. **Datenteilung zwischen Dataspaces**  
   - Daten können zwischen Dataspaces geteilt werden.  
   - Dies geschieht gezielt und kontrolliert – z. B. wenn eine Fachabteilung Daten für ein Projekt bereitstellt, die von einer anderen Abteilung ergänzt werden sollen.  
   - Zugriffe werden protokolliert, sodass jederzeit nachvollziehbar ist, welche Daten wie geteilt wurden.  

---

## Bereitstellung der Zugänge

Die im Data Hub verfügbaren Rollen werden vom **Data Hub Berlin Team** zentral definiert und bereitgestellt.  
So wird sichergestellt, dass die Rollen einheitlich genutzt werden, zu den Governance-Regeln passen und mit allen angebundenen Anwendungen funktionieren.  

Fachabteilungen müssen Rollen also nicht selbst entwickeln, sondern wählen aus einem klaren Set die passende Rolle für ihre Mitarbeitenden aus.  

---

## Rollentypen für Data Governance

Im Data Hub helfen die folgenden **hierarchischen Rollentypen**, Verantwortlichkeiten klar zu regeln:  

- **Koordinator**  
  Hat die **Verantwortung für den gesamten Dataspace**.  
  Entscheidet über Freigaben (z. B. interne Weitergabe oder Veröffentlichung), steuert die Zusammenarbeit mit anderen Abteilungen und achtet auf die Einhaltung von Governance-Regeln.  
  Es ist die zentrale Schnittstelle zwischen Fachabteilung, IT und Data Governance.   

- **Developer**  
  Hat ebenfalls technische Kontrolle im Dataspace: Einrichten, Verwalten, Rechte vergeben, Datenmodelle entwickeln.  

- **Editor**  
  Darf bestehende Inhalte bearbeiten, Daten pflegen und aktualisieren.  

- **Eingabe**  
  Verantwortlich für das Einpflegen neuer Daten, oft mit klar abgegrenzten Formularen oder Schnittstellen.  

- **LeserIntern**  
  Interner Zugriff auf sensible Daten, die nicht für das Intranet oder die Öffentlichkeit bestimmt sind.  

- **LeserIntranet**  
  Zugriff auf Daten, die für alle Verwaltungsmitarbeitenden im Intranet sichtbar sein sollen.  

- **LeserInternet**  
  Zugriff auf veröffentlichte Open-Data-Datenbestände. Diese Rolle ist auf öffentliche Daten beschränkt.  

---

## Praktische Beispiele

- **Beispiel 1: Projektbezogene Zusammenarbeit**  
  Ein Fachbereich „Umwelt“ führt Umweltdaten im eigenen Dataspace. Ein Projekt im Bereich „Verkehr“ benötigt Zugriff auf diese Daten.  
  Der Developer der Umwelt-Abteilung gibt eine kontrollierte Freigabe für das Verkehrsprojekt.  
  ▶ Ergebnis: Daten werden geteilt, Hoheit und Verantwortung bleiben beim ursprünglichen Fachbereich.  

- **Beispiel 2: Von intern zu öffentlich**  
  Eine Abteilung erfasst Daten zunächst mit der Rolle *Eingabe*. Nach Qualitätssicherung und Freigabe durch den *Developer* werden die Daten ins Intranet verschoben.  
  Erst wenn eine klare Entscheidung getroffen wird, werden sie über **Piveau** ins Open-Data-Portal veröffentlicht.  
  ▶ Ergebnis: Klarer Prozess, keine versehentlichen Veröffentlichungen.  

- **Beispiel 3: Kontrollierte Pflege und Leserechte**  
  Ein Team trägt Daten ein (Rolle *Eingabe*). Andere Abteilungen dürfen nur intern lesen (*LeseIntern*).  
  ▶ Ergebnis: Transparenz im Haus, aber keine unnötige Verbreitung.  

---

## Vorteile des Keycloak-Rollenmodells

Keycloak ermöglicht im Data Hub eine **praktische Umsetzung von Data Governance**:  
Datenräume (Dataspaces) sind klar abgegrenzt, Rechte und Rollen sind nachvollziehbar, und die Datenhoheit bleibt bei denjenigen, die am besten über die Daten verfügen.  
Gleichzeitig erlaubt das Rollenmodell flexible Zusammenarbeit, kontrolliertes Teilen von Daten und eine sichere Brücke zwischen internen, Intranet- und Open-Data-Nutzungen.  

So bleibt die Verwaltung handlungsfähig, sicher und offen zugleich, ohne Kompromisse bei Governance und Verantwortung.  
