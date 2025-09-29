---
sidebar_position: 1
sidebar_custom_props:
  iconUrl: /img/blockbox.svg
---

# Keycloak
## Einheitliche Anmeldung und Rechteverwaltung

Keycloak ist eine Open-Source-Lösung für **Identity & Access Management**.  
Im Civitas Core Data Hub sorgt Keycloak dafür, dass Nutzer:innen sich mit einem einzigen Login anmelden können und die passenden Zugriffsrechte erhalten.  

Damit wird die Verwaltung von Nutzerkonten vereinfacht und die Sicherheit erhöht.  

---

## Funktionen & Nutzen
- Zentrale Anmeldung für alle Anwendungen im Data Hub (Single Sign-On)  
- Verwaltung von Benutzerrollen und Zugriffsrechten  
- Integration mit bestehenden Identitätssystemen (z. B. LDAP)  
- Zwei-Faktor-Authentifizierung möglich  
- Verwaltungskontext: einheitliche Anmeldung für Mitarbeitende, sichere Rechtevergabe für sensible Daten  

---

## Input & Output
Inputs:  
- **Nutzerkonten** und Rollen aus der Verwaltung  
- **Login-Daten** (Benutzername, Passwort, ggf. 2FA)  

Outputs:  
- **Authentifizierungstoken** für die Anwendungen im Data Hub  
- **Zugriffsentscheidungen** (wer darf was sehen?)  
- **Protokolle** zur Nachvollziehbarkeit von Anmeldungen  

---

## Skill-Level / Einstiegshürde
- **Technisches Wissen:** 🟡 3/5  
- **Einarbeitungszeit:** 🟡 3/5  
- **Komplexität:** 🟡 3/5  

👉 Für Endnutzer:innen ist Keycloak unsichtbar – sie profitieren von einer bequemen Anmeldung. Die Einrichtung liegt bei IT-Teams.  

---

## Für wen gedacht?
- **Mitarbeitende in Fachabteilungen:** einfacher Login  
- **Projektleitungen:** Übersichtliche Rechtevergabe  
- **IT-Abteilungen:** zentrale Verwaltung der Identitäten  

---

## Praxisbeispiel
🔐 **„Ein Login für alles“**  
Ein:e Mitarbeiter:in meldet sich einmal über Keycloak an und kann anschließend sowohl MinIO, Superset als auch Grafana nutzen – ohne sich mehrfach einloggen zu müssen.  

---

## Mehr erfahren
- [Offizielle Doku](https://www.keycloak.org/documentation)  
- [Tutorials](https://www.keycloak.org/getting-started)  

---

## Erfolgschance-Check 🚀
**Hoher Mehrwert**: Für Nutzer:innen macht Keycloak den Zugang zum Data Hub komfortabel.  
Die Einrichtung ist technischer Natur, aber für den Betrieb unverzichtbar.  
