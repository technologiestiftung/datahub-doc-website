---
title: Sichere Zugänge mit Keycloak
sidebar_position: 1
hide_title: true
---

import styles from '../docs.module.css';

<div className={styles.doccontainer}>

  <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-10 xl:pl-16 pt-16">
 {/* <div className={styles.heroimage}>
      <img src="/img/wissen.svg" alt="Wissensspeicher Logo" />
    </div>  */}
    <div>
          <h1>Zugänge und Rollen mit Keycloak</h1>
      <p className="text-lg">
        Die Software Keycloak regelt die Berechtigungssteuerung im Data Hub. Über sogenannte Dataspaces und Rollen werden Zugriffsrechte granular vergeben und verwaltet. Auf dieser Seite liest du wie das, wie das Rechte- und Rollenmanagement technisch umgesetzt wird.
      </p>
    </div>
  </div>

## Was ist Keycloak?

Damit der Data Hub Berlin funktioniert, müssen viele Menschen und Systeme miteinander arbeiten: Fachabteilungen, Projektteams, Entwicklerinnen und Entwickler, aber auch Anwendungen, die Daten verarbeiten oder visualisieren. Alle greifen auf gemeinsame Daten zu. Diese sind manchmal intern, manchmal berlinweit, manchmal öffentlich.  
Damit dieser Zugriff sicher, nachvollziehbar und zugleich einfach bleibt, übernimmt die Software Keycloak eine zentrale Rolle im Data Hub.

:::info[Hinweis]
Auf dieser Seite wird das Rechte- und Rollenmanagement von der technischen Seite beleuchtet. Die zugrundeliegenden organisatorischen Rollen, Verantwortlichkeiten und Prozesse des Data Hub Berlin sollen zukünftig in der [Data Hub Governance](/docs/3_rechte--rollen/2_data_governance.md) beschrieben und geregelt werden.
:::


### Einmal anmelden, alle Tools des Data Hubs nutzen

Keycloak ist so etwas wie das Tor zum Data Hub Berlin. Es sorgt dafür, dass sich alle Nutzerinnen und Nutzer mit einem einzigen Login anmelden können, egal ob sie Daten analysieren, neue Inhalte einpflegen oder nur etwas nachlesen möchten. Anstatt für jede Anwendung ein separates Benutzerkonto zu benötigen, genügt eine Anmeldung über Keycloak. Dieses Prinzip nennt sich „Single Sign-On“. Es spart Zeit, reduziert technische Hürden und erhöht gleichzeitig die Sicherheit, weil Zugriffe kontrolliert und nachvollzogen werden können.  



## Sicherheit und Datenhoheit

Im Data Hub Berlin gilt das Prinzip der geteilten Verantwortung. Fachabteilungen und andere Nutzende behalten die Hoheit über ihre eigenen Daten und entscheiden selbst, wer darauf zugreifen darf. Keycloak macht diese Entscheidungen technisch umsetzbar. Jede Person erhält definierte Dataspace-Zuweisungen und Rollen, die festlegen, welche Rechte sie hat.  

### Dataspaces 
Die Daten sind in sogenannten Dataspaces organisiert – also in thematischen oder organisatorischen Datenräumen.  
Ein Dataspace kann beispielsweise einem Fachbereich, einem Projekt oder einem Thema wie Umwelt oder Mobilität zugeordnet sein.  
Daten innerhalb eines Dataspace sind grundsätzlich geschützt und nicht automatisch öffentlich. Wenn sie geteilt werden, passiert das bewusst und gezielt – etwa, wenn eine andere Abteilung sie benötigt oder wenn sie über das Berliner Open Data Portal veröffentlicht werden sollen.


### Rollen und Verantwortlichkeiten

Damit die Zusammenarbeit reibungslos funktioniert, gibt es im Data Hub verschiedene Rollen, die klar beschreiben, wer was tun darf.  
- Die Rolle Koordinatorin oder Koordinator trägt die Verantwortung für einen gesamten Datenraum. Sie entscheidet über Freigaben, steuert die Zusammenarbeit mit anderen Abteilungen und sorgt dafür, dass die Daten verantwortungsvoll genutzt werden.  
- Unterstützt wird sie oder er von Developerinnen und Developern, die sich um die technischen Aspekte kümmern, Schnittstellen einrichten und Prozesse automatisieren.  
- Editorinnen und Editoren pflegen Inhalte und stellen sicher, dass die Daten aktuell und vollständig sind.  
- Darüber hinaus gibt es verschiedene Leseberechtigungen, für den internen Gebrauch oder für die Öffentlichkeit.  


### Konfiguration von Rechten

Für die Nutzenden des Data Hubs ist eine Konfiguration ihrerseits nicht notwendig, Keycloak sorgt im Hintergrund dafür, dass die richtigen Personen nur auf die Daten zugreifen, die sie auch wirklich sehen oder bearbeiten dürfen. Das Anlegen von Accounts und zuweisen von Rollen und Dataspaces, wird durch eine zentrale Stelle vorgenommen. Für den Prototypen in der Pilotphase übernimmt diese Rolle das Team der Technologiestiftung in Absprache mit der Senatskanzlei und den Nutzenden.


### Zusammenarbeit über Grenzen hinweg

Ein großer Vorteil von Keycloak liegt darin, dass Daten zwischen unterschiedlichen Datenräumen geteilt werden können, ohne dass jemand die Kontrolle über sie verliert. Wenn beispielsweise ein Projekt der Stadtplanung auf Umweltdaten zugreifen möchte, kann die Koordinatorin oder der Koordinator des Umwelt-Datenraums diesen Zugriff gezielt freigeben. Das passiert kontrolliert, nachvollziehbar und immer mit Zustimmung der Verantwortlichen.  

So entsteht eine neue Form der Zusammenarbeit: Die Abteilungen behalten die Verantwortung für ihre Daten, können sie aber dort teilen, wo es für die Stadtentwicklung oder für gemeinsame Projekte sinnvoll ist.


## Transparenz und Vertrauen

Jede Anmeldung, jede Freigabe und jeder Zugriff wird in Keycloak protokolliert.  
Das schafft Transparenz und stärkt das Vertrauen innerhalb der Verwaltung – und später auch gegenüber der Öffentlichkeit, wenn Daten freigegeben oder veröffentlicht werden.  

Sicherheit bedeutet hier nicht Abschottung, sondern den bewussten, verantwortungsvollen Umgang mit Daten.  
Keycloak sorgt dafür, dass sensible Informationen geschützt bleiben, während gleichzei

:::danger[Work in progress]
Achtung dieser Abschnitt befindet sich noch im Aufbau!
:::


</div>