# Aufgabe 12 – Die Spurs und ihre Spieler 🏀

## Ziel
Du gestaltest eine Fan-App für die **San Antonio Spurs**: mit Logo, Bilanz, Tabellenplatz und **allen Spielern** vom Team.
Man kann Spieler suchen, nach **Position** filtern und sich seine eigene **Starting Five** aufstellen. Das sind die 5 Spieler, die ein Spiel beginnen.
Natürlich im Spurs-Look: **Schwarz und Silber**!

Das JavaScript ist **komplett fertig**: Daten laden, suchen, filtern, Starting Five bauen.
**Du schreibst nur HTML und CSS.**

## So soll es am Ende aussehen
```
                     [Spurs-Logo]
                     GO SPURS GO!
                9 Siege · 2 Niederlagen
           1. Platz in der Southwest Division

  +--------------- Deine Starting Five ---------------+
  |   (Fox)  (Castle)  (Vassell)  (Wemby)  (    )     |
  |                  4 / 5 Spieler                    |
  +---------------------------------------------------+

         [ Spieler suchen (Name oder Nummer) ... ]
            [Alle] [Flügel] [Aufbau] [Center]

  +----------+  +----------+  +----------+  +----------+
  |#1    [ℹ️]|  |#4    [ℹ️]|  |#5    [ℹ️]|  |#7    [ℹ️]|
  |  [Foto]  |  |  [Foto]  |  |  [Foto]  |  |  [Foto]  |
  |  Victor  |  | De'Aaron |  | Stephon  |  |   Luke   |
  |Wembanyama|  |   Fox    |  |  Castle  |  |  Kornet  |
  | [Flügel] |  | [Aufbau] |  | [Aufbau] |  | [Center] |
  +----------+  +----------+  +----------+  +----------+

    Hintergrund schwarz, Schrift und Rahmen silbern
```

**So funktioniert die App:**
- Klick auf einen Spieler unten → er kommt in die Starting Five
- Klick auf einen Spieler in der Starting Five → er geht wieder auf die Bank
- Mehr als 5 Spieler gehen nicht (wie im echten Spiel!)
- Im Suchfeld kannst du einen Namen (z. B. *Wemb*) oder eine Rückennummer (z. B. *1*) eingeben

> 💡 Die Daten kommen **live** von [ESPN](https://www.espn.com/nba/team/_/name/sa/san-antonio-spurs). Die Bilanz und die Spiele sind also immer aktuell!
> Falls das Internet mal streikt, nimmt die App die gespeicherten Daten aus `daten.js`. Nur die Fotos brauchen immer Internet.

---

## Teil 1 – HTML (in `index.html`)

Suche im Code nach **`DEIN HTML`**. Diese Werte kannst du benutzen:

| Das schreibst du | Das erscheint |
|------------------|---------------|
| `{team.logo}` | Adresse vom Spurs-Logo |
| `{team.siege}` / `{team.niederlagen}` | Siege und Niederlagen in dieser Saison |
| `{team.platz}` | Tabellenplatz, z. B. *1. Platz in der Southwest Division* |
| `{team.trainer}` | Name vom Trainer |
| `{spieler.nummer}` | Rückennummer, z. B. *#1* |
| `{spieler.name}` | Name, z. B. *Victor Wembanyama* |
| `{spieler.foto}` | Adresse vom Foto |
| `{spieler.position}` | Position: *Aufbau*, *Flügel* oder *Center* |
| `{anzahlInFive}` | Wie viele Spieler in der Starting Five sind |

### To-do
- [ ] **HTML 1 – Kopf:** Schreibe in den Kopf:
  ```jsx
  <img className="logo" src={team.logo} alt="Spurs-Logo" />
  <h1>Go Spurs Go!</h1>
  <p className="bilanz">{team.siege} Siege · {team.niederlagen} Niederlagen</p>
  <p className="platz">{team.platz}</p>
  ```
- [ ] **HTML 2 – Spieler-Karte:** Schreibe in die Karte:
  ```jsx
  <span className="nummer">{spieler.nummer}</span>
  <img src={spieler.foto} alt={spieler.name} />
  <h3>{spieler.name}</h3>
  ```
  Darunter ist schon das Positions-Schild. Dort hinein kommt `{spieler.position}`.
- [ ] **HTML 3 – Platz in der Starting Five:** Klicke ein paar Spieler an. Oben erscheinen leere Felder. Schreibe hinein: das Foto und den Namen in einem `<p>`.
- [ ] **HTML 4 – Info:** Unter der Starting Five: `<p>{anzahlInFive} / 5 Spieler</p>`
- [ ] **HTML 5 – Starting Five komplett:** Wähle 5 Spieler. Jetzt erscheint eine leere Box. Schreibe hinein: „🔥 Deine Starting Five ist komplett!“
- [ ] **HTML 6 – Fußzeile:** „Daten: ESPN“ und „Gebaut von DEIN NAME“ (je ein `<p>`)

---

## Teil 2 – CSS (in `style.css`)

Das **Layout ist oben schon fertig** (Raster, Plätze, Animationen, Handy-Ansicht). Unten im Bereich **`TEIL B – DEIN CSS`** gestaltest du die App im **Spurs-Look**.

**Die Spurs-Farben:**

| Farbe | Code |
|-------|------|
| Schwarz | `#000000` |
| Silber | `#c4ced4` |
| Grau | `#8a8d8f` |
| Weiß | `#ffffff` |

### To-do
- [ ] **CSS 1 – Seite:** schwarzer Hintergrund (oder ein Verlauf: `background: linear-gradient(180deg, #000000, #2b2b2b);`), weiße Schrift, eine Schriftart
- [ ] **CSS 2 – Überschrift, Bilanz und Tabellenplatz:** Die Überschrift in Silber und in Großbuchstaben (`text-transform: uppercase;`), Tipp: `letter-spacing: 3px;`.
  Die Bilanz etwas größer und fett, der Tabellenplatz in Grau.
- [ ] **CSS 3 – Suchfeld und Filter-Buttons:** Suchfeld mit Innenabstand, ohne Rahmen, runde Ecken (`border-radius: 30px;`).
  Filter-Buttons schwarz mit silberner Schrift und silbernem Rahmen. Der aktive Button (`.filter-button.aktiv`) silbern mit schwarzer Schrift.
- [ ] **CSS 4 – Starting-Five-Box:** Hintergrund (z. B. `#1a1a1a`), runde Ecken, Innenabstand.
  Die Spieler in der Starting Five sind **rund** (`border-radius: 50%;`) mit silbernem Hintergrund, schwarzer Schrift und weißem Rahmen.
  Die leeren Plätze auch rund, aber nur mit gestricheltem Rahmen: `border: 3px dashed #8a8d8f;`
- [ ] **CSS 5 – Karte:** dunkler Hintergrund (`#1a1a1a`), grauer Rahmen, runde Ecken, Schatten
- [ ] **CSS 6 – Rückennummer und Name:** Die Nummer groß, fett und silbern (wie auf dem Trikot). Der Name in Weiß.
- [ ] **CSS 7 – Positions-Schild:** wie ein kleines Schild: schwarze fette Schrift, Innenabstand (`padding: 3px 10px;`), runde Ecken
- [ ] **CSS 8 – Farben für die Positionen:** Jedes Schild hat eine Klasse für seine Position. Gib jeder eine **Hintergrundfarbe**:

  | Klasse | Position | Farbe |
  |--------|----------|-------|
  | `.aufbau` | Aufbau (Guard): bringt den Ball nach vorne | Silber `#c4ced4` |
  | `.fluegel` | Flügel (Forward): spielt an der Seite | Weiß `#ffffff` |
  | `.center` | Center: der Große unter dem Korb | Grau `#8a8d8f` |

- [ ] **CSS 9 – Spieler in der Starting Five, „komplett“-Box und Fußzeile:** Karten von Spielern in der Starting Five (`.karte.in-five`) halb durchsichtig (`opacity: 0.4;`).
  Die Box in Silber mit schwarzer fetter Schrift, Innenabstand und runden Ecken. Fußzeile klein und grau.

---

## Teil 3 – ⭐ Erweiterung: Spieler-Infos

Jede Karte hat oben rechts einen **ℹ️-Knopf**. Klickt man darauf, öffnet sich eine **Info-Box** über den Spieler:
großes Foto, Größe, Gewicht, Alter, College, Herkunft und Links ins Internet.
Das JavaScript ist **schon fertig**. Es hat sogar die Größe in Meter und das Gewicht in Kilogramm umgerechnet (in den USA misst man in Fuß und Pfund).

```
   +----------------------------------------+
   |                                   [✕]  |
   |            [ großes Foto ]             |
   |         #1 Victor Wembanyama           |
   |               [Flügel]                 |
   |                                        |
   |  +----------+ +----------+ +---------+ |
   |  | 📏 Größe | |⚖️ Gewicht| | 🎂 Alter| |
   |  |  2,24 m  | |  109 kg  | |   22    | |
   |  +----------+ +----------+ +---------+ |
   |                                        |
   |  🎓 College: kein College              |
   |  🌍 Herkunft: Paris, Frankreich        |
   |  ⏱️ Erfahrung: 4 Jahre in der NBA      |
   |                                        |
   |   [📊 ESPN] [▶️ YouTube] [📖 Wikipedia] |
   |   [     ➕ In die Starting Five     ]   |
   +----------------------------------------+
     Klick auf ✕ oder daneben → Box geht zu
```

**Neue Werte, die du benutzen kannst:**

| Das schreibst du | Das erscheint |
|------------------|---------------|
| `{spieler.groesse}` | Größe in Metern, z. B. *2,24* |
| `{spieler.gewicht}` | Gewicht in Kilogramm, z. B. *109* |
| `{spieler.alter}` | Alter in Jahren |
| `{spieler.college}` | Die Uni, an der er gespielt hat, z. B. *Kentucky* |
| `{spieler.herkunft}` | Geburtsort, z. B. *Paris, Frankreich* |
| `{spieler.erfahrung}` | z. B. *4 Jahre in der NBA* oder *Neuling (Rookie)* |
| `{espn}` | Link zur Spieler-Seite bei ESPN (mit allen Statistiken) |
| `{youtube}` | Link zu YouTube-Videos über den Spieler |
| `{wikipedia}` | Link zur Wikipedia-Suche nach dem Spieler |

### To-do HTML (in der Komponente `SpielerDetails`)
- [ ] **HTML 7 – Kopf der Info-Box:** großes Foto `<img className="grossfoto" src={spieler.foto} alt={spieler.name} />`
  und eine `<h2>` mit `{spieler.nummer} {spieler.name}`. In das Positions-Schild darunter kommt wieder `{spieler.position}`.
- [ ] **HTML 8 – Größe, Gewicht und Alter:** drei Kästchen:
  ```jsx
  <div className="mass">
      <span>📏 Größe</span>
      <strong>{spieler.groesse} m</strong>
  </div>
  ```
  Mach dasselbe für ⚖️ Gewicht mit `{spieler.gewicht} kg` und 🎂 Alter mit `{spieler.alter}`.
- [ ] **HTML 9 – Infos:** drei Zeilen, z. B. `<p><strong>🎓 College:</strong> {spieler.college}</p>`.
  Dann noch 🌍 Herkunft mit `{spieler.herkunft}` und ⏱️ Erfahrung mit `{spieler.erfahrung}`.
- [ ] **HTML 10 – Links:** drei Links, z. B. `<a className="link-button" href={espn} target="_blank">📊 ESPN</a>`.
  Dann noch ▶️ YouTube mit `{youtube}` und 📖 Wikipedia mit `{wikipedia}`.

> 💡 `target="_blank"` heißt: Der Link öffnet sich in einem **neuen Tab**. So bleibt deine App offen.

### To-do CSS (unten in `style.css`, Bereich **TEIL C**)
- [ ] **CSS 10 – Info-Box:** dunkler Hintergrund (`#1a1a1a`), silberner Rahmen (`border: 3px solid #c4ced4;`), Innenabstand, runde Ecken. Die `h2` in Silber.
- [ ] **CSS 11 – Größe, Gewicht und Alter:** Kästchen mit Hintergrund (z. B. `#2b2b2b`) und runden Ecken. Der Wert (`strong`) groß.
- [ ] **CSS 12 – Infos:** etwas kleinere Schrift in Silber
- [ ] **CSS 13 – Link-Buttons und „Starting Five“-Button:** Link-Buttons im Spurs-Look: silberner Hintergrund, schwarze Schrift, runde Ecken. Beim Drüberfahren umgekehrt (schwarz mit silberner Schrift).
  Der „Starting Five“-Button groß in Weiß mit schwarzer fetter Schrift, ohne Rahmen, mit runden Ecken.

### Extra-Ideen zur Erweiterung
- [ ] Gib der Info-Box einen silbernen Leuchtrahmen: `box-shadow: 0 0 25px #c4ced4;`
- [ ] Mach den ℹ️-Knopf erst sichtbar, wenn man mit der Maus über die Karte fährt. Tipp: `.info-button { opacity: 0; }` und `.karte:hover .info-button { opacity: 1; }`
- [ ] Das große Foto soll einen silbernen Strich unten haben: `.grossfoto { border-bottom: 4px solid #c4ced4; }`

---

## Teil 4 – ⭐⭐ Erweiterung: Spiele, Analyse und Quiz

Jetzt wird die App zur echten Fan-Seite:
Die **🏀 letzten Spiele** und die **📅 nächsten Spiele** der Spurs erscheinen, mit Gegner, Logo und Ergebnis.
Die **📊 Analyse** rechnet aus, wie groß und wie alt deine Starting Five im Durchschnitt ist.
Und das **❓ Quiz** fragt: **Wer ist dieser Spieler?** Das Foto ist verschwommen und du musst raten!
Das JavaScript ist **schon fertig**.

```
  +--------- 📊 Analyse der Starting Five ----------+
  |      📏 Größe im Durchschnitt: 2,04 m           |
  |      🎂 Alter im Durchschnitt: 24 Jahre         |
  |  🦒 Größter Spieler: Victor Wembanyama (2,24 m) |
  +-------------------------------------------------+

       🏀 Letzte Spiele                  📅 Nächste Spiele
  |Di., 10.11. ✈️ [Logo] Suns   122 : 96 |  |Do., 12.11. ✈️ [Logo] Bulls    02:00 Uhr|
  |So., 08.11. ✈️ [Logo] Blazers 125 : 103|  |Sa., 14.11. 🏠 [Logo] Warriors 03:30 Uhr|
  |Do., 05.11. 🏠 [Logo] Mavs   112 : 111|  |...                                    |
   ↑ grün = Sieg, rot = Niederlage

  +------------ ❓ Wer ist dieser Spieler? ----------+
  |                  Punkte: 3 / 4                  |
  |                 [ ░░░░░░░░░░░ ]                 |  ← verschwommenes Foto
  |      [ De'Aaron Fox ]     [ Luke Kornet ]       |
  |      [ Dylan Harper ]     [ Devin Vassell ]     |
  |        🎉 Richtig! Das ist De'Aaron Fox!        |
  |              [➡️ Nächster Spieler]              |
  +-------------------------------------------------+
```

**So funktioniert es:**
- Die Analyse erscheint, sobald **ein Spieler** in der Starting Five ist.
- Das Ergebnis steht immer **aus Sicht der Spurs**: Die Punkte der Spurs stehen vorne.
- 🏠 heißt Heimspiel in San Antonio, ✈️ heißt Auswärtsspiel.
- Jede Spiel-Zeile hat eine Klasse: `sieg`, `niederlage` oder `kommt` (das Spiel kommt noch). Bei Spielen, die noch kommen, steht statt dem Ergebnis die **Uhrzeit** (deutsche Zeit, deshalb oft mitten in der Nacht 😴).
- Im Quiz hat das Foto die Klasse `versteckt`, **bis du geantwortet hast**. Das Verschwimmen machst du selbst mit CSS!
- Nach der Antwort hat der richtige Button die Klasse `richtig`. Hast du falsch geraten, hat dein Button die Klasse `falsch`.

**Neue Werte, die du benutzen kannst:**

| Das schreibst du | Das erscheint |
|------------------|---------------|
| `{durchschnittGroesse}` | Größe der Starting Five im Durchschnitt, z. B. *2,04* |
| `{durchschnittAlter}` | Alter der Starting Five im Durchschnitt, z. B. *24* |
| `{groesster.name}` / `{groesster.groesse}` | Der größte Spieler in der Starting Five |
| `{juengster.name}` | Der jüngste Spieler in der Starting Five |
| `{spiel.datum}` | Datum, z. B. *Di., 10.11.* |
| `{spiel.wo}` | 🏠 (Heimspiel) oder ✈️ (Auswärtsspiel) |
| `{spiel.gegner}` | Name vom Gegner, z. B. *Phoenix Suns* |
| `{spiel.gegnerLogo}` | Adresse vom Logo des Gegners |
| `{spiel.ergebnis}` | *122 : 96* oder die Uhrzeit, z. B. *02:00 Uhr* |
| `{spiel.kurz}` | *Sieg*, *Niederlage* oder *kommt noch* |
| `{punkte}` / `{runden}` | Richtige Antworten / gespielte Runden im Quiz |
| `{s.name}` | Name auf einem Antwort-Button |
| `{ergebnisText}` | *🎉 Richtig! Das ist De'Aaron Fox!* oder *😅 Leider falsch! Das ist De'Aaron Fox.* |

### To-do HTML
- [ ] **HTML 11 – Überschriften:** Über die zwei Listen kommen `<h2>🏀 Letzte Spiele</h2>` und `<h2>📅 Nächste Spiele</h2>`.
- [ ] **HTML 12 – Spiel-Zeile** (in der Komponente `SpielZeile`):
  ```jsx
  <span className="datum">{spiel.datum} {spiel.wo}</span>
  <img src={spiel.gegnerLogo} alt={spiel.gegner} />
  <span className="gegner">{spiel.gegner}</span>
  <strong>{spiel.ergebnis}</strong>
  ```
- [ ] **HTML 13 – Analyse:** Stelle einen Spieler in die Starting Five. In die neue Box kommen `<h2>📊 Analyse der Starting Five</h2>`,
  `<p className="schnitt">📏 Größe im Durchschnitt: {durchschnittGroesse} m</p>`,
  `<p>🎂 Alter im Durchschnitt: {durchschnittAlter} Jahre</p>` und
  `<p>🦒 Größter Spieler: {groesster.name} ({groesster.groesse} m)</p>`.
- [ ] **HTML 14 – Quiz-Kopf:** `<h2>❓ Wer ist dieser Spieler?</h2>` und `<p className="punkte">Punkte: {punkte} / {runden}</p>`
- [ ] **HTML 15 – Antworten:** In jeden Antwort-Button kommt `{s.name}`.
- [ ] **HTML 16 – Ergebnis:** Klicke auf eine Antwort. In die neue Box kommt `<p>{ergebnisText}</p>` und in den Button „➡️ Nächster Spieler“.

### To-do CSS (unten in `style.css`, Bereich **TEIL D**)
- [ ] **CSS 14 – Analyse-Box:** dunkler Hintergrund (`#1a1a1a`), silberner Rahmen, Innenabstand, runde Ecken. Die erste Zeile (`.schnitt`) groß und fett.
- [ ] **CSS 15 – Spiele:** Überschriften in Silber. Jede Zeile (`.spiel`) mit dunklem Hintergrund, runden Ecken und einem dicken Strich links: `border-left: 6px solid #8a8d8f;`
- [ ] **CSS 16 – Sieg und Niederlage:** Der Strich links wird bei einem Sieg grün (`border-left-color: #4caf50;`) und bei einer Niederlage rot (`#e53935`).
  Spiele, die noch kommen (`.spiel.kommt`), etwas blasser, z. B. `opacity: 0.8;`
- [ ] **CSS 17 – Quiz-Box:** dunkler Hintergrund, dicker silberner Rahmen, Innenabstand, runde Ecken. Die Punkte fett.
- [ ] **CSS 18 – Das verschwommene Foto:** Das ist der Trick vom Quiz! Mach das versteckte Foto unscharf und grau:
  ```css
  .quiz-bild.versteckt {
      filter: blur(14px) grayscale(1);
  }
  ```
  Sobald du antwortest, verschwindet die Klasse und das Foto wird **langsam scharf** (die Animation ist schon fertig).
- [ ] **CSS 19 – Antwort-Buttons:** silbern mit schwarzer Schrift, ohne Rahmen, runde Ecken.
  Der richtige Button (`.richtig`) grün `#4caf50`, der falsche (`.falsch`) rot `#e53935`, beide mit weißer Schrift.
- [ ] **CSS 20 – „Nächster Spieler“-Button:** in Weiß mit schwarzer fetter Schrift, ohne Rahmen, mit runden Ecken

> 💡 Spiel ein paar Runden! Wie viele Punkte schaffst du von 10? Echte Fans erkennen jeden Spieler!

### Extra-Ideen zu Teil 4
- [ ] Zeige in der Analyse auch den jüngsten Spieler: `<p>👶 Jüngster Spieler: {juengster.name}</p>`
- [ ] Schreibe in jede Spiel-Zeile zusätzlich `{spiel.kurz}` (*Sieg* oder *Niederlage*).
- [ ] Mach das Quiz schwerer: `filter: blur(25px) grayscale(1);`. Oder leichter: `blur(6px)`. Oder ganz schwarz wie ein Schatten: `filter: brightness(0);`
- [ ] Für Mutige mit JavaScript: Zeige die letzten 10 statt 5 Spiele. Tipp: Suche nach `.slice(0, 5)`.

---

## Tipps
- In React heißt es **`className`** statt `class`.
- Jedes Tag muss geschlossen werden, auch `<img ... />`.
- Wenn die Seite weiß bleibt: **F12** → Konsole.
- Farben aussuchen: https://htmlcolorcodes.com/de/
- Fehlt ein Foto? Dann zeigt die App automatisch das Spurs-Logo.
- Die Filter-Buttons haben **dieselben Klassen** wie die Positions-Schilder (`.aufbau`, `.fluegel`, `.center`). Sie bekommen also dieselbe Hintergrundfarbe. Wenn die Schrift dann schlecht zu lesen ist: Gib ihnen eine schwarze Schrift, z. B. `.filter-button.center { color: #000000; }`

## Extra-Ideen
- [ ] Die Karte soll beim Drüberfahren silbern leuchten: `.karte:hover { box-shadow: 0 0 18px #c4ced4; }`
- [ ] Zeige im Kopf auch den Trainer und die Saison: `<p>Trainer: {team.trainer} · Saison {team.saison}</p>`
- [ ] Zeige auf der Karte auch die Größe: `<p>{spieler.groesse} m</p>`
- [ ] Für Mutige mit JavaScript: Die Karte von deinem Lieblingsspieler soll immer besonders aussehen. Tipp: `spieler.name === "Victor Wembanyama"`
- [ ] Probiere andere Schriftarten aus, zum Beispiel „Bebas Neue“ von https://fonts.google.com

---

*Die San Antonio Spurs und die NBA sind Marken der NBA und ihrer Teams. Die Daten und Fotos kommen von [ESPN](https://www.espn.com). Diese Aufgabe ist nur zum Lernen gedacht.*
