---
sidebar_position: 2
sidebar_custom_props:
  iconUrl: /img/blockbox.svg
---

# Apache Airflow
## Automatisierte Datenprozesse steuern

Apache Airflow ist eine Open Source-Software zur **Planung, Steuerung und Überwachung von Datenprozessen** (ETL-Pipelines).  
Im Civitas Core Data Hub sorgt Airflow dafür, dass Daten regelmäßig gesammelt, verarbeitet und bereitgestellt werden – ohne manuelles Zutun.  

---

## Funktionen & Nutzen
- Automatisierung wiederkehrender Prozesse  
- Übersichtliche Darstellung komplexer Workflows  
- Zeitgesteuerte Abläufe (z. B. tägliche, wöchentliche Jobs)  
- Fehlererkennung und Monitoring von Prozessen  
- Verwaltungskontext: Routinen wie Datenimporte aus Fachverfahren oder regelmäßige Berichte laufen automatisch  

---

## Input & Output
Inputs:  
- **Quellsysteme** wie Datenbanken, MinIO oder externe APIs  
- **Prozessdefinitionen** (Workflows)  

Outputs:  
- **Aufbereitete Daten** in Datenbanken oder MinIO  
- **Benachrichtigungen** bei erfolgreichen oder fehlerhaften Läufen  
- **Logs** für Nachvollziehbarkeit  

---

## Skill-Level / Einstiegshürde
- **Technisches Wissen:** 🟡 3/5  
- **Einarbeitungszeit:** 🔴 4/5  
- **Komplexität:** 🔴 4/5  

👉 Airflow richtet sich stärker an IT- und Daten-Teams. Für Fachabteilungen ist es meist unsichtbar – sie profitieren indirekt von den automatisierten Datenbereitstellungen.  

---

## Für wen gedacht?
- **IT-Abteilungen:** Automatisierung und Monitoring von Datenprozessen  
- **Fachabteilungen:** profitieren von regelmäßig aktualisierten Daten  
- **Projektleitungen:** transparente Abläufe und Planbarkeit  

---

## Praxisbeispiel
⚙️ **„Automatische Monatsberichte“**  
Ein Workflow in Airflow lädt am Monatsende Daten aus einem Fachverfahren, bereitet sie auf und schreibt die Ergebnisse in eine Datenbank. Superset greift automatisch auf die aktualisierten Daten zu.  

---

## Mehr erfahren
- [Offizielle Doku](https://airflow.apache.org/docs/)  
- [Einführung & Beispiele](https://airflow.apache.org/start/)   

---

## Erfolgschance-Check 🚀
**Enormer Nutzen, aber komplex**: Airflow ist ein technisches Werkzeug, das Fachabteilungen vor allem indirekt unterstützt.  
