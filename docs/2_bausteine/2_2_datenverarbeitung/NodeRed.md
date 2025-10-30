---
sidebar_position: 1
sidebar_custom_props:
  iconUrl: /img/blockbox.svg
---

# Node-RED
## Datenflüsse einfach gestalten

Node-RED ist eine Open Source-Software, mit der sich Datenflüsse (Pipelines) visuell zusammenstellen lassen.  
Anstatt Code schreiben zu müssen, können Abläufe per „Drag & Drop“ in einem Editor erstellt werden.  
Im Civitas Core Data Hub wird Node-RED genutzt, um Daten von A nach B zu bewegen, aufzubereiten oder automatisch weiterzugeben.  

So können auch Nutzer:innen ohne tiefes IT-Wissen Datenprozesse nachvollziehen und kleinere Automatisierungen selbst umsetzen.  

---

## Funktionen & Nutzen
- Grafische Oberfläche zum Erstellen von Datenflüssen  
- Verbindung unterschiedlicher Systeme (z. B. Datenbanken, APIs, Dateispeicher)  
- Automatisierte Abläufe: z. B. nächtliche Exporte oder Benachrichtigungen  
- Erweiterbar durch zahlreiche Module („Nodes“)  
- Verwaltungskontext: einfache Datenintegration zwischen Ämtern oder Fachverfahren  

---

## Input & Output
Node-RED kann mit vielen Quellen arbeiten. Typische Inputs:  
- Datenbanken (PostgreSQL, TimescaleDB)  
- CSV- oder Excel-Dateien aus MinIO  
- Schnittstellen (APIs) von Fachverfahren oder externen Diensten  

Outputs sind z. B.:  
- Übertragene oder aufbereitete Daten in MinIO oder Datenbanken  
- Benachrichtigungen (E-Mail, Messenger)  
- Weitergabe an Visualisierungstools wie Superset oder Grafana  

---

## Skill-Level / Einstiegshürde
- **Technisches Wissen:** 🟢 2/5  
- **Einarbeitungszeit:** 🟡 3/5  
- **Komplexität:** 🟢 2/5  

👉 Sehr geeignet für Fachabteilungen, die einfache Automatisierungen ausprobieren möchten.  

---

## Für wen gedacht?
- **Projektteams:** kleine Automatisierungen schnell umsetzen  
- **Fachabteilungen:** Datenflüsse nachvollziehen und gestalten  
- **IT-Abteilungen:** Prototypen oder Schnittstellen einfach testen  

---

## Praxisbeispiel
🔄 **„Automatische Datenweitergabe“**  
Ein Bezirksamt speichert neue CSV-Dateien in MinIO. Node-RED erkennt die neuen Dateien und lädt sie automatisch in die zentrale Datenbank hoch. Fachabteilungen können sofort auf aktuelle Daten zugreifen.  

---

## Mehr erfahren
- [Offizielle Doku](https://nodered.org/docs/)  
- [Beispiele & Tutorials](https://nodered.org/docs/tutorials/)

---

## Erfolgschance-Check 🚀
**Schnell produktiv**: Wer mit Baukästen wie „If This Then That“ vertraut ist, findet sich leicht zurecht.  
Für komplexere Szenarien empfiehlt sich die Unterstützung durch IT-Kolleg:innen.  
