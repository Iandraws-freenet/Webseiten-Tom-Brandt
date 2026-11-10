# Aufgabe 07 – Valorant 🎯

## Ziel
Du gestaltest einen **Teambuilder** für Valorant. Die App zeigt alle Agenten. Klickt man auf einen Agenten, kommt er ins **eigene Team** (5 Plätze).
Jeder Agent hat eine **Rolle**: Duellant, Initiator, Wächter oder Taktiker. Jede Rolle bekommt bei dir eine eigene Farbe.

Das JavaScript ist **komplett fertig**: Agenten laden, filtern, Team bauen.
**Du schreibst nur HTML und CSS.**

## So soll es am Ende aussehen
```
                🎯 Valorant-Teambuilder
              Stell dein bestes Team zusammen!

  +------------------- Dein Team -------------------+
  |  [Jett]  [Sova]  [Sage]  [ Omen ]  [      ]     |
  |                 4 / 5 Agenten                   |
  +-------------------------------------------------+

     [Alle] [Duellant] [Initiator] [Wächter] [Taktiker]

  +----------+  +----------+  +----------+  +----------+
  |      [ℹ️]|  |      [ℹ️]|  |      [ℹ️]|  |      [ℹ️]|
  |  [Bild]  |  |  [Bild]  |  |  [Bild]  |  |  [Bild]  |
  |  Astra   |  |  Breach  |  | Brimstone|  | Chamber  |
  | Taktiker |  | Initiator|  | Taktiker |  | Wächter  |
  +----------+  +----------+  +----------+  +----------+
     ↑ Rahmenfarbe je nach Rolle
```

**So funktioniert die App:**
- Klick auf einen Agenten unten → er kommt ins Team
- Klick auf einen Agenten im Team → er fliegt wieder raus
- Mehr als 5 Agenten gehen nicht

> 💡 Die Daten kommen von [valorant-api.com](https://valorant-api.com). Die Agenten liegen zusätzlich gespeichert in `daten.js`, deshalb geht die App auch, wenn das Internet mal hakt. Nur die Bilder brauchen Internet.

---

## Teil 1 – HTML (in `index.html`)

Suche im Code nach **`DEIN HTML`**. Diese Werte kannst du benutzen:

| Das schreibst du | Das erscheint |
|------------------|---------------|
| `{agent.displayName}` | Name vom Agenten, z. B. *Jett* |
| `{bild}` | Adresse vom Bild des Agenten |
| `{rolle}` | *Duellant*, *Initiator*, *Wächter* oder *Taktiker* |
| `{anzahlImTeam}` | Wie viele Agenten im Team sind |

### To-do
- [ ] **HTML 1 – Kopf:** `<h1>` mit „🎯 Valorant-Teambuilder“ und ein `<p className="untertitel">` mit einem Satz deiner Wahl.
- [ ] **HTML 2 – Agenten-Karte:** Schreibe in die Karte:
  ```jsx
  <img src={bild} alt={agent.displayName} />
  <h3>{agent.displayName}</h3>
  <p className="rolle">{rolle}</p>
  ```
- [ ] **HTML 3 – Team-Platz:** Klicke ein paar Agenten an. Oben im Team erscheinen leere Felder. Schreibe hinein: das Bild und den Namen in einem `<p>`.
- [ ] **HTML 4 – Team-Info:** Unter dem Team: `<p>{anzahlImTeam} / 5 Agenten</p>`
- [ ] **HTML 5 – Team bereit:** Wähle 5 Agenten. Jetzt erscheint eine leere Box. Schreibe hinein: „🏆 Dein Team ist bereit!“
- [ ] **HTML 6 – Fußzeile:** „Daten und Bilder: valorant-api.com“ und „Gebaut von DEIN NAME“ (je ein `<p>`)

---

## Teil 2 – CSS (in `style.css`)

Das **Layout ist oben schon fertig** (Raster, Team-Plätze, Animationen, Handy-Ansicht). Unten im Bereich **`TEIL B – DEIN CSS`** gestaltest du die App.

### To-do
- [ ] **CSS 1 – Seite:** Valorant ist dunkel: Hintergrund z. B. `#0f1923`, helle Schrift (`#ece8e1`), eine Schriftart.
  Tipp für Profis: `background-image: linear-gradient(180deg, #0f1923, #1f2731);`
- [ ] **CSS 2 – Überschrift:** in Valorant-Rot `#ff4655`, groß, in Großbuchstaben (`text-transform: uppercase;`). Der Untertitel etwas kleiner.
- [ ] **CSS 3 – Team-Box:** Hintergrund (z. B. `rgba(255, 255, 255, 0.05)`), roter Rahmen, Innenabstand. Die Agenten im Team (`.team-agent`) mit dunklem Hintergrund und Rahmen.
- [ ] **CSS 4 – Leere Plätze (`.leer-platz`):** gestrichelter Rahmen (`border: 2px dashed ...`)
- [ ] **CSS 5 – Filter-Buttons:** dunkler Hintergrund, helle Schrift, Rahmen. Der aktive (`.filter-button.aktiv`) in Rot.
- [ ] **CSS 6 – Agenten-Karte:** Hintergrund (z. B. `#1f2731`), dicker Rahmen (`border: 3px solid gray;`)
- [ ] **CSS 7 – Rollen-Farben:** Jede Karte hat zusätzlich eine Klasse für ihre Rolle. Gib jeder eine andere **Rahmenfarbe** (`border-color`):

  | Klasse | Vorschlag |
  |--------|-----------|
  | `.duellant` (Duellant) | Rot `#ff4655` |
  | `.initiator` (Initiator) | Grün `#4ecb71` |
  | `.waechter` (Wächter) | Gelb `#f5c542` |
  | `.taktiker` (Taktiker) | Blau `#5aa9e6` |

- [ ] **CSS 8 – Agent im Team:** Agenten, die schon im Team sind, haben die Klasse `im-team`. Mache sie halb durchsichtig: `opacity: 0.4;`
- [ ] **CSS 9 – „Team bereit“-Box und Fußzeile:** Box in Rot mit weißer, fetter Schrift. Fußzeile klein und grau.

> 💡 Valorant hat **eckige** Buttons und Karten. Probier mal `border-radius: 0;` oder nur ganz wenig Rundung (`4px`). Das sieht sofort nach Valorant aus!

---

## Teil 3 – ⭐ Erweiterung: Agenten-Infos und Fähigkeiten

Jede Karte hat oben rechts einen **ℹ️-Knopf**. Klickt man darauf, öffnet sich eine **Info-Box** über der Seite:
mit großem Bild, Beschreibung und allen **Fähigkeiten** mit ihren Tasten (C, Q, E, X).
Den Hintergrund in den Farben vom Agenten macht das JavaScript. Das JavaScript ist **schon fertig**.

```
   +----------------------------------------+
   |                                   [✕]  |
   |          [ großes Bild von Jett ]      |
   |                  Jett                  |
   |                Duellant                |
   |   Jett repräsentiert ihre Heimat       |
   |   Südkorea ...                         |
   |                                        |
   |   [Icon] [C]  Wolkenbruch              |
   |               Wirf SOFORT eine Wolke.. |
   |   [Icon] [Q]  Aufwind                  |
   |               ...                      |
   |   [Icon] [E]  Rückenwind               |
   |   [Icon] [X]  Klingensturm             |
   |          [Passiv] Gleiten              |
   |                                        |
   |        [📖 Wiki]   [▶️ YouTube]         |
   |   [           ➕ Ins Team           ]   |
   +----------------------------------------+
```

**Neue Werte, die du benutzen kannst:**

| Das schreibst du | Das erscheint |
|------------------|---------------|
| `{portraet}` | Adresse vom großen Bild |
| `{agent.displayName}` | Name vom Agenten |
| `{rolle}` | Rolle vom Agenten |
| `{beschreibung}` | Beschreibung vom Agenten |
| `{faehigkeit.displayIcon}` | Adresse vom Icon der Fähigkeit |
| `{TASTEN[faehigkeit.slot]}` | Die Taste: *C*, *Q*, *E*, *X* oder *Passiv* |
| `{faehigkeit.displayName}` | Name der Fähigkeit |
| `{faehigkeit.description}` | Was die Fähigkeit macht |
| `{wiki}` | Link zum Agenten im Valorant-Wiki (Englisch) |
| `{youtube}` | Link zu YouTube-Guides über den Agenten |

### To-do HTML
- [ ] **HTML 7 – Info-Box oben:** großes Bild `<img className="portraet" src={portraet} alt={agent.displayName} />`,
  den Namen in `<h2>`, die Rolle in `<p className="rolle">` und die Beschreibung in `<p className="beschreibung">`.
- [ ] **HTML 8 – Fähigkeiten:** In jede Fähigkeit kommen:
  - das Icon: `<img src={faehigkeit.displayIcon} alt={faehigkeit.displayName} />` (an der Stelle, wo schon `{faehigkeit.displayIcon && ...}` steht)
  - die Taste: `<span className="taste">{TASTEN[faehigkeit.slot]}</span>`
  - der Name in einer `<h4>` und die Beschreibung in einem `<p>`
- [ ] **HTML 9 – Links:** zwei Links, z. B. `<a className="link-button" href={wiki} target="_blank">📖 Wiki</a>`. Dann noch ▶️ YouTube mit `{youtube}`.

> 💡 `target="_blank"` heißt: Der Link öffnet sich in einem **neuen Tab**. So bleibt deine App offen.

### To-do CSS (unten in `style.css`, Bereich **TEIL C**)
- [ ] **CSS 10 – Info-Box:** dicker Rahmen (`border: 4px solid gray;`), Innenabstand, helle Schrift. Name groß und in Großbuchstaben. Beschreibung kursiv (`font-style: italic`).
  Tipp: Die Box hat auch die Rollen-Klasse. Deine Rahmenfarben aus CSS 7 funktionieren hier also automatisch!
- [ ] **CSS 11 – Fähigkeiten und Tasten:** Jede Fähigkeit mit halbdurchsichtigem dunklem Hintergrund (`rgba(15, 25, 35, 0.8)`).
  Die Taste (`.taste`) wie eine Tastatur-Taste: heller Hintergrund, dunkle fette Schrift, kleine runde Ecken.
- [ ] **CSS 12 – Link-Buttons:** Farben und Rahmen. Beim Drüberfahren in Rot.
- [ ] **CSS 13 – „Ins Team“-Button:** groß und auffällig in Valorant-Rot `#ff4655` mit weißer fetter Schrift, ohne Rahmen

### Extra-Ideen zur Erweiterung
- [ ] Mach den ℹ️-Knopf erst sichtbar, wenn man mit der Maus über die Karte fährt. Tipp: `.info-button { opacity: 0; }` und `.karte:hover .info-button { opacity: 1; }`
- [ ] Die Ultimate (Taste X) ist besonders! Färbe die letzte Taste gold. Tipp: `.faehigkeit:nth-child(4) .taste { ... }`
- [ ] Gib dem Namen in der Info-Box einen Schatten: `text-shadow: 2px 2px 0 #000000;`

---

## Teil 4 – ⭐⭐ Erweiterung: Zufalls-Team, Team-Analyse und Map-Wahl

Keine Idee für ein Team? Unter dem Team gibt es jetzt einen **🎲 Zufalls-Knopf**: Er wählt aus **jeder Rolle einen Agenten** und noch einen fünften dazu.
Die **📊 Team-Analyse** zeigt, wie viele Agenten jeder Rolle im Team sind, und warnt, wenn eine Rolle fehlt.
Und in der **🗺️ Map-Wahl** sucht ihr aus, auf welcher Map ihr spielt.
Das JavaScript ist **schon fertig**.

```
  +------------------- Dein Team -------------------+
  |  [Jett]  [Sova]  [Sage]  [Omen]  [Raze]         |
  |                 5 / 5 Agenten                   |
  |       [🎲 Zufalls-Team]  [🗑️ Team leeren]        |
  +-------------------------------------------------+

  +---------------- 📊 Team-Analyse ----------------+
  |       ✅ Jede Rolle ist dabei. Starkes Team!    |
  |                                                 |
  |  ⚔️ Duellant   🔍 Initiator  🛡️ Wächter  🌫️ Taktiker |
  |      2             1            1           1   |
  +-------------------------------------------------+

  +------------ 🗺️ Auf welcher Map spielt ihr? -----------+
  | [Ascent] [Bind] [Breeze] [Haven] [Icebox] [Lotus] ... |
  |                                                      |
  | [================ Bild der Map =================]     |
  |                       Haven                          |
  |                   Areale A/B/C                       |
  +------------------------------------------------------+
```

**So funktioniert es:**
- 🎲 Zufalls-Team → aus jeder Rolle ein Agent, dazu ein fünfter beliebiger
- 🗑️ Team leeren → alle Agenten fliegen raus (der Knopf ist grau, wenn das Team leer ist)
- Rollen, die im Team **fehlen**, haben in der Analyse die Klasse `fehlt`. Rollen, die dabei sind, haben ihre Rollen-Klasse (z. B. `duellant`). Deine Farben aus CSS 7 funktionieren also auch hier!
- Die gewählte Map hat die Klasse `aktiv`

**Neue Werte, die du benutzen kannst:**

| Das schreibst du | Das erscheint |
|------------------|---------------|
| `{hinweis}` | *✅ Jede Rolle ist dabei. Starkes Team!* oder *⚠️ Dir fehlt noch: Taktiker* |
| `{rolle.emoji}` / `{rolle.name}` | Emoji und Name der Rolle, z. B. 🛡️ *Wächter* |
| `{rolle.anzahl}` | Wie viele Agenten dieser Rolle im Team sind |
| `{m.displayName}` | Name einer Map (in den Map-Buttons) |
| `{map.splash}` | Adresse vom Bild der gewählten Map |
| `{map.displayName}` | Name der gewählten Map |
| `{map.tacticalDescription}` | Die Areale der Map, z. B. *Areale A/B/C* |

### To-do HTML
- [ ] **HTML 10 – Knöpfe:** In die zwei leeren Knöpfe unter dem Team kommt „🎲 Zufalls-Team“ und „🗑️ Team leeren“.
- [ ] **HTML 11 – Analyse-Kopf:** Lege einen Agenten ins Team. Jetzt erscheint die Analyse-Box. Schreibe hinein:
  `<h2>📊 Team-Analyse</h2>` und `<p className="hinweis">{hinweis}</p>`
- [ ] **HTML 12 – Rollen:** In jede Rolle kommt:
  ```jsx
  <span>{rolle.emoji} {rolle.name}</span>
  <strong>{rolle.anzahl}</strong>
  ```
- [ ] **HTML 13 – Map-Wahl:** `<h2>🗺️ Auf welcher Map spielt ihr?</h2>`. In jeden Map-Button kommt `{m.displayName}`.
- [ ] **HTML 14 – Gewählte Map:** Klicke auf eine Map. Schreibe in die neue Box:
  `<img className="map-bild" src={map.splash} alt={map.displayName} />`, den Namen in `<h3>` und `{map.tacticalDescription}` in einem `<p>`.

### To-do CSS (unten in `style.css`, Bereich **TEIL D**)
- [ ] **CSS 14 – Knöpfe:** Zufalls-Knopf in Rot mit weißer fetter Schrift, Leeren-Knopf dunkel mit grauem Rahmen. Beide ohne oder mit wenig Rundung.
- [ ] **CSS 15 – Analyse-Box:** Hintergrund wie die Team-Box, Rahmen, Innenabstand. Der Hinweis groß und fett.
- [ ] **CSS 16 – Rollen:** Jede Rolle mit dunklem Hintergrund und dickem Rahmen (`border: 3px solid gray;`), die Zahl (`strong`) groß.
  Fehlende Rollen (`.rollen-zeile.fehlt`) halb durchsichtig (`opacity: 0.4;`) mit gestricheltem Rahmen.
- [ ] **CSS 17 – Map-Wahl:** Box mit Hintergrund und Innenabstand. Map-Buttons dunkel mit heller Schrift, der aktive (`.map-button.aktiv`) in Rot.
- [ ] **CSS 18 – Map-Bild:** Rahmen in Rot und ein Schatten (`box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);`)

> 💡 Drück ein paar Mal auf 🎲 und schau, wie sich die Analyse ändert. Nimm dann einen Taktiker raus: Was steht jetzt im Hinweis?

### Extra-Ideen zu Teil 4
- [ ] Das Map-Bild soll beim Drüberfahren etwas heller werden: `.map-bild:hover { filter: brightness(1.2); }`
- [ ] Der Zufalls-Knopf soll sich beim Drüberfahren drehen: `.zufall-button:hover { transform: rotate(-4deg) scale(1.05); }`
- [ ] Für Mutige mit JavaScript: Füge eine Zufalls-Map hinzu. Tipp: `maps[Math.floor(Math.random() * maps.length)]`

---

## Tipps
- In React heißt es **`className`** statt `class`.
- Jedes Tag muss geschlossen werden, auch `<img ... />`.
- Wenn die Seite weiß bleibt: **F12** → Konsole.
- Farben aussuchen: https://htmlcolorcodes.com/de/
- Agenten- und Fähigkeitsnamen sind manchmal auf Englisch, weil sie im Spiel so heißen.

## Extra-Ideen
- [ ] Zeige auf der Agenten-Karte auch das Rollen-Icon: `<img className="rollen-icon" src={agent.role.displayIcon} alt="" />` (Größe mit CSS festlegen: `.karte .rollen-icon { width: 20px; height: 20px; }`)
- [ ] Die Karte soll beim Drüberfahren (`:hover`) rot leuchten: `box-shadow: 0 0 15px #ff4655;`
- [ ] Probier eine Schrift im Valorant-Stil von https://fonts.google.com aus, z. B. „Oswald“ oder „Bebas Neue“.

---

*Valorant ist eine Marke von Riot Games. Die Daten und Bilder kommen von [valorant-api.com](https://valorant-api.com). Diese Aufgabe ist nur zum Lernen gedacht.*
