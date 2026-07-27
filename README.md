# patsite.de

Eine One-Page-Website für eine fiktive Webagentur ("patsite.de"), die Websites entwirft, baut und hostet. Rein statisch aus drei Dateien aufgebaut, keine Build-Tools oder Frameworks nötig.

## Struktur

- `index.html` – Seiteninhalt (Hero, Designs, Leistungen, Referenzen, Ablauf, Preise, Stimmen, Kontakt)
- `style.css` – Sieben komplette Themes (Aurora, Midnight, Sunset, Mono, Forest, Neon, Poster) als CSS-Variablen-Sets, Sidebar-Navigation, plus Layout für die rechtlichen Seiten
- `script.js` – Design-Cycler (wechselt live durch alle Themes), mobiles Drawer-Menü, Scroll-Spy-Navigation und Kontaktformular (Demo, ohne Backend)
- `impressum.html` – Impressum gemäß § 5 Digitale-Dienste-Gesetz (DDG)
- `datenschutz.html` – Datenschutzerklärung gemäß DSGVO/TTDSG, inkl. Abschnitt zur KI-gestützten Bearbeitung von Kontaktanfragen

## Design-Cycler

Im Abschnitt „Designs" lässt sich das komplette Erscheinungsbild der Seite live umschalten – per Pfeil-Buttons, per Klick auf eine der sieben Design-Kacheln oder automatisch alle 6 Sekunden (pausiert automatisch, während das Kontaktformular ausgefüllt wird oder der Tab inaktiv ist). „Poster" ist bewusst ein Bruch mit den anderen sechs: Papier-Hintergrund, durchgezogene Tinten-Ränder, harte Offset-Schatten statt Blur und großgeschriebene Arial-Black-Headlines statt der sonst üblichen weichen Karten-Optik.

## Referenzen

Die Referenzen-Kacheln laden die Nachbarprojekte im gleichen `webs`-Ordner als Live-Vorschau per `<iframe>`:

- `../friseur-glanz/index.html`
- `../handwerker-allround/index.html`
- `../hundeschule-wuffi/index.html`
- `../ristorante-la-piazza/index.html`

Diese Ordner müssen also als Geschwisterordner erhalten bleiben, damit die Vorschauen funktionieren.

## Rechtliche Seiten

`impressum.html` und `datenschutz.html` sind eigenständige, schlanke Seiten (ohne Design-Cycler, damit rechtliche Texte ruhig und lesbar bleiben) und über den Footer jeder Seite verlinkt. Die Datenschutzerklärung deckt insbesondere ab:

- Hosting & Server-Logfiles
- Kontaktformular
- KI-gestützte Bearbeitung von Anfragen (Art. 6 Abs. 1 lit. f, Art. 22, Art. 28 DSGVO)
- eingebettete Referenzen-Vorschauen
- Cookies/Tracking (§ 25 TTDSG) – aktuell keine im Einsatz
- Betroffenenrechte & Beschwerderecht

**Wichtig:** Beide Seiten sind Vorlagen. Name, Anschrift, USt-ID und die Angaben zu eingesetzten Tools sind Platzhalter bzw. beispielhaft und müssen vor einem echten Einsatz durch die tatsächlichen Angaben ersetzt werden. Sie ersetzen keine individuelle Rechtsberatung.

## Verwendung

Einfach `index.html` im Browser öffnen – kein Server oder Setup erforderlich.

## Hinweis

Alle Inhalte (Adresse, Telefonnummer, Preise, Testimonials, Impressums- und Datenschutzangaben) sind Platzhalter und sollten vor einem echten Einsatz angepasst werden.

Diese Demo-Website (Konzept, Code, Texte und Design-Cycler) wurde mithilfe von KI (Claude Code) erstellt.
