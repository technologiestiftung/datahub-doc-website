---
title: Sichere Zugänge mit Keycloak
sidebar_position: 1
---
# Sichere Zugänge und klare Rollen mit Keycloak

:::info[Hinweis]
Die organisatorischen Rollen, Verantwortlichkeiten und Prozesse des Data Hub Berlin werden in der [Data Hub Governance](/docs/3_rechte--rollen/2_data_governance.md) beschrieben.  
Diese Seite ergänzt diese Perspektive und zeigt, **wie das Rechte- und Rollenmanagement technisch umgesetzt wird** 
:::

Damit der Data Hub Berlin funktioniert, müssen viele Menschen und Systeme miteinander arbeiten: Fachabteilungen, Projektteams, Entwicklerinnen und Entwickler, aber auch Anwendungen, die Daten verarbeiten oder visualisieren.  
Alle greifen auf gemeinsame Daten zu. Diese sind manchmal intern, manchmal berlinweit, manchmal öffentlich.  
Damit dieser Zugriff sicher, nachvollziehbar und zugleich einfach bleibt, übernimmt **Keycloak** eine zentrale Rolle im Data Hub.

---

## Warum Keycloak wichtig ist

Keycloak ist so etwas wie das Tor zum Data Hub Berlin.  
Es sorgt dafür, dass sich alle Nutzerinnen und Nutzer mit einem einzigen Login anmelden können, egal ob sie Daten analysieren, neue Inhalte einpflegen oder nur etwas nachlesen möchten.  
Anstatt für jede Anwendung ein separates Benutzerkonto zu benötigen, genügt eine Anmeldung über Keycloak.  

Dieses Prinzip nennt sich „Single Sign-On“. Es spart Zeit, reduziert technische Hürden und erhöht gleichzeitig die Sicherheit, weil Zugriffe kontrolliert und nachvollzogen werden können.  
Für die Mitarbeitenden fühlt es sich einfach an, im Hintergrund aber sorgt Keycloak dafür, dass die richtigen Personen nur auf die Daten zugreifen, die sie auch wirklich sehen oder bearbeiten dürfen.

---

## Sicherheit und Datenhoheit

Im Data Hub Berlin gilt das Prinzip der geteilten Verantwortung.  
Fachabteilungen behalten die Hoheit über ihre eigenen Daten und entscheiden selbst, wer darauf zugreifen darf.  
Keycloak macht diese Entscheidungen technisch umsetzbar. Jede Person erhält definierte Rollen, die festlegen, welche Rechte sie hat.  

Die Daten sind in sogenannten **Dataspaces** organisiert – also in thematischen oder organisatorischen Datenräumen.  
Ein Dataspace kann beispielsweise einem Fachbereich, einem Projekt oder einem Thema wie Umwelt oder Mobilität zugeordnet sein.  
Daten innerhalb eines Dataspace sind grundsätzlich geschützt und nicht automatisch öffentlich. Wenn sie geteilt werden, passiert das bewusst und gezielt – etwa, wenn eine andere Abteilung sie benötigt oder wenn sie über das Berliner Open Data Portal veröffentlicht werden sollen.

---

## Rollen und Verantwortlichkeiten

Damit die Zusammenarbeit reibungslos funktioniert, gibt es im Data Hub verschiedene Rollen, die klar beschreiben, wer was tun darf.  
Die Rolle **Koordinatorin** oder **Koordinator** trägt die Verantwortung für einen gesamten Datenraum. Sie entscheidet über Freigaben, steuert die Zusammenarbeit mit anderen Abteilungen und sorgt dafür, dass die Daten verantwortungsvoll genutzt werden.  

Unterstützt wird sie oder er von **Developerinnen** und **Developern**, die sich um die technischen Aspekte kümmern, Schnittstellen einrichten und Prozesse automatisieren.  
**Editorinnen** und **Editoren** pflegen Inhalte und stellen sicher, dass die Daten aktuell und vollständig sind.  
Darüber hinaus gibt es verschiedene Leseberechtigungen, für den internen Gebrauch oder für die Öffentlichkeit.  

Alle Rollen werden zentral vom **Data Hub Berlin Team** bereitgestellt. Dadurch bleibt das System einheitlich, sicher und nachvollziehbar.

---

## Zusammenarbeit über Grenzen hinweg

Ein großer Vorteil von Keycloak liegt darin, dass Daten zwischen unterschiedlichen Datenräumen geteilt werden können, ohne dass jemand die Kontrolle über sie verliert.  
Wenn beispielsweise ein Projekt der Stadtplanung auf Umweltdaten zugreifen möchte, kann die Koordinatorin oder der Koordinator des Umwelt-Datenraums diesen Zugriff gezielt freigeben.  
Das passiert kontrolliert, nachvollziehbar und immer mit Zustimmung der Verantwortlichen.  

So entsteht eine neue Form der Zusammenarbeit: Die Abteilungen behalten die Verantwortung für ihre Daten, können sie aber dort teilen, wo es für die Stadtentwicklung oder für gemeinsame Projekte sinnvoll ist.

---

## Transparenz und Vertrauen

Jede Anmeldung, jede Freigabe und jeder Zugriff wird in Keycloak protokolliert.  
Das schafft Transparenz und stärkt das Vertrauen innerhalb der Verwaltung – und später auch gegenüber der Öffentlichkeit, wenn Daten freigegeben oder veröffentlicht werden.  

Sicherheit bedeutet hier nicht Abschottung, sondern den bewussten, verantwortungsvollen Umgang mit Daten.  
Keycloak sorgt dafür, dass sensible Informationen geschützt bleiben, während gleichzei
