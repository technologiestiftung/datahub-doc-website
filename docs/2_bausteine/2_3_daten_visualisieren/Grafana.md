---
sidebar_position: 2
sidebar_custom_props:
  iconUrl: /img/blockbox.svg
---

# Grafana
## Monitoring und Echtzeit-Visualisierung

Grafana ist eine Open-Source-Plattform, die speziell für das **Monitoring und die Visualisierung von Echtzeitdaten** entwickelt wurde.  
Im Civitas Core Data Hub unterstützt Grafana vor allem technische Teams dabei, Systeme, Sensoren oder Datenströme im Blick zu behalten.  

Anders als Superset richtet sich Grafana stärker an IT- und Betriebsaspekte, bleibt aber durch seine intuitive Oberfläche auch für Fachabteilungen nutzbar.  

---

## Funktionen & Nutzen
- Visualisierung von Zeitreihendaten in Echtzeit  
- Anbindung an viele Datenquellen (z. B. TimescaleDB, Prometheus, PostgreSQL)  
- Erstellung von Alarmen und Benachrichtigungen  
- Interaktive Dashboards für Betrieb und Analyse  
- Verwaltungskontext: Monitoring von IT-Systemen, Überwachung von Sensorwerten (z. B. Umwelt- oder Verkehrsdaten)  

---

## Input & Output
Grafana arbeitet mit Datenquellen, die Messwerte oder Zeitreihen enthalten. Typische Inputs:  
- **TimescaleDB** für Zeitreihen-Daten  
- **Prometheus** für Systemmetriken  
- **CSV oder APIs** mit kontinuierlichen Messwerten  

Outputs sind:  
- **Echtzeit-Dashboards** für Monitoring  
- **Warnmeldungen** bei Grenzwertüberschreitungen  
- **Exportierte Grafiken** für Berichte oder Präsentationen  

---

## Skill-Level / Einstiegshürde
- **Technisches Wissen:** 🟡 3/5  
- **Einarbeitungszeit:** 🟡 3/5  
- **Komplexität:** 🟡 3/5  

👉 Grafana ist besonders wertvoll für technische Abteilungen, eignet sich aber auch für Projekte mit kontinuierlichen Messwerten.  

---

## Für wen gedacht?
- **IT-Abteilungen:** Monitoring von Infrastruktur  
- **Fachabteilungen:** Visualisierung von Sensor- oder Monitoring-Daten  
- **Projektteams:** Echtzeit-Auswertungen für Pilotprojekte  

---

## Praxisbeispiel
📈 **„Luftqualität live überwachen“**  
Ein Pilotprojekt zur Luftqualität in einem Berliner Bezirk speist Sensorwerte in den Data Hub. Grafana stellt die Werte in Echtzeit dar und löst Warnmeldungen aus, wenn Grenzwerte überschritten werden.  

---

## Mehr erfahren
- [Offizielle Doku](https://grafana.com/docs/)  
- [Einführungstutorials](https://grafana.com/tutorials/) 

---

## Erfolgschance-Check 🚀
**Gut geeignet für Monitoring**: Besonders nützlich, wenn laufende Datenströme beobachtet werden müssen.  
Für reine Ad-hoc-Analysen eignet sich Superset meist besser.  
