# Aufgabe 09 – VCT Champions 2026 🏆

## Ziel
Du gestaltest eine Fan-Seite für die **Valorant-Weltmeisterschaft**: die **VCT Champions 2026** in Shanghai.
Die App zeigt die 8 besten Teams der Welt, ihre Platzierung und ihr Preisgeld. Insgesamt ging es um **2,25 Millionen Dollar**!

Das JavaScript ist **komplett fertig**: Turnier laden, Teams sortieren, Ergebnisse auswerten.
**Du schreibst nur HTML und CSS.**

## So soll es am Ende aussehen
```
                 🏆 VCT Champions 2026
           Die Valorant-Weltmeisterschaft

     [Logo]   📍 Shanghai   📅 Sep 24 – Oct 18, 2026   💰 $2,250,000

        +-------------------------------------------+
        |   [Logo]   👑 Weltmeister: LOUD           |
        +-------------------------------------------+

  +-------------+  +-------------+  +-------------+  +-------------+
  |   [Logo]    |  |   [Logo]    |  |   [Logo]    |  |   [Logo]    |
  |    LOUD     |  |Team Vitality|  | 100 Thieves |  | G2 Esports  |
  | 🥇 1. Platz |  | 🥈 2. Platz |  | 🥉 3. Platz |  |  4. Platz   |
  | $1,000,000  |  |  $400,000   |  |  $250,000   |  |  $130,000   |
  +-------------+  +-------------+  +-------------+  +-------------+
     ↑ goldener Rahmen   ↑ silbern         ↑ bronze
```

> 💡 Die Daten kommen von [vlr.gg](https://www.vlr.gg), der größten Valorant-Esport-Seite. Sie liegen schon gespeichert in `daten.js`, deshalb lädt die App sofort. Nur die Logos und Fotos kommen aus dem Internet.

---

## Teil 1 – HTML (in `index.html`)

Suche im Code nach **`DEIN HTML`**. Diese Werte kannst du benutzen:

| Das schreibst du | Das erscheint |
|------------------|---------------|
| `{event.img}` | Adresse vom Turnier-Logo |
| `{event.location}` | Ort, z. B. *Shanghai* |
| `{event.dates}` | Datum, z. B. *Sep 24 – Oct 18, 2026* |
| `{event.prizepool}` | Preisgeld insgesamt, z. B. *$2,250,000* |
| `{weltmeister.name}` / `{weltmeister.logo}` | Name / Logo vom Weltmeister |
| `{team.name}` | Name vom Team, z. B. *Paper Rex* |
| `{logo}` | Adresse vom Team-Logo |
| `{medaille}` | 🥇, 🥈 oder 🥉 (ab Platz 4 nichts) |
| `{platz}` | Platzierung, z. B. *1. Platz* oder *5.–6. Platz* |
| `{preisgeld}` | Preisgeld vom Team, z. B. *$1,000,000* |

### To-do
- [ ] **HTML 1 – Kopf:** `<h1>` mit „🏆 VCT Champions 2026“ und ein `<p className="untertitel">` mit einem Satz deiner Wahl.
- [ ] **HTML 2 – Turnier-Infos:** das Turnier-Logo `<img className="event-logo" src={event.img} alt="VCT Champions" />` und drei `<p>`:
  `📍 {event.location}`, `📅 {event.dates}` und `💰 {event.prizepool}`
- [ ] **HTML 3 – Team-Karte:** Schreibe in die Karte:
  ```jsx
  <img src={logo} alt={team.name} />
  <h3>{team.name}</h3>
  <p className="platz">{medaille} {platz}</p>
  <p className="preisgeld">{preisgeld}</p>
  ```
- [ ] **HTML 4 – Weltmeister:** das Logo `<img src={weltmeister.logo} alt={weltmeister.name} />` und `<h2>👑 Weltmeister: {weltmeister.name}</h2>`
- [ ] **HTML 5 – Fußzeile:** „Daten: vlr.gg“ und „Gebaut von DEIN NAME“ (je ein `<p>`)

---

## Teil 2 – CSS (in `style.css`)

Das **Layout ist oben schon fertig** (Raster, Abstände, Animationen, Handy-Ansicht). Unten im Bereich **`TEIL B – DEIN CSS`** gestaltest du die App.

### To-do
- [ ] **CSS 1 – Seite:** dunkler Hintergrund im Valorant-Look (z. B. `#0f1923`), helle Schrift (`#ece8e1`), eine Schriftart
- [ ] **CSS 2 – Überschrift:** groß, in Großbuchstaben (`text-transform: uppercase;`) und in Valorant-Rot `#ff4655`. Der Untertitel etwas kleiner und grau.
- [ ] **CSS 3 – Turnier-Infos:** Hintergrund (z. B. `#1f2731`), Innenabstand, Rahmen unten in Rot (`border-bottom: 3px solid #ff4655;`)
- [ ] **CSS 4 – Weltmeister-Box:** goldener Farbverlauf `background: linear-gradient(90deg, #b8860b, #ffd700, #b8860b);`, dunkle Schrift, Innenabstand, Schatten
- [ ] **CSS 5 – Team-Karte:** Hintergrund `#1f2731`, dicker grauer Rahmen (`border: 3px solid #3a4553;`), Innenabstand
- [ ] **CSS 6 – Name und Preisgeld:** Name groß und weiß, Preisgeld in Grün (`#4ecb71`) und fett
- [ ] **CSS 7 – Platz-Farben:** Die Karten der ersten drei Plätze haben eine Extra-Klasse. Gib jeder eine **Rahmenfarbe** (`border-color`):

  | Klasse | Vorschlag |
  |--------|-----------|
  | `.gold` (1. Platz) | `#ffd700` |
  | `.silber` (2. Platz) | `#c0c0c0` |
  | `.bronze` (3. Platz) | `#cd7f32` |

- [ ] **CSS 8 – Platz:** fett und etwas größer
- [ ] **CSS 9 – Fußzeile:** klein und grau

> 💡 Esport-Seiten sehen oft **eckig** aus. Probier `border-radius: 0;` oder nur wenig Rundung (`4px`).

---

## Teil 3 – ⭐ Erweiterung: Team-Box mit Spielern und Matches

Klickst du auf eine Team-Karte, öffnet sich eine **Team-Box** über der Seite:
mit allen **5 Spielern** (Foto, Flagge und echter Name) und allen **Matches** des Teams bei der Weltmeisterschaft.
Das JavaScript ist **schon fertig**.

```
   +----------------------------------------------+
   |                                         [✕]  |
   |                  [ Logo ]                    |
   |                    LOUD                      |
   |                    LOUD                      |  ← Kürzel
   |          🥇 1. Platz · $1,000,000            |
   |                                              |
   |  [Foto]   [Foto]   [ 🎮 ]   [ 🎮 ]   [ 🎮 ]  |
   |  Darker   DaviH    lukxo     erde    tkzin   |
   |  🇨🇴 ...   🇵🇹 ...   🇧🇷 ...   🇨🇱 ...   🇧🇷 ...  |
   |                                              |
   |  Viertelfinale   2 : 0   gegen Paper Rex     |  ← grün = gewonnen
   |  Halbfinale      2 : 1   gegen NRG           |
   |  Upper Final     2 : 1   gegen Team Vitality |
   |  Grand Final     3 : 1   gegen Team Vitality |
   |                                              |
   |             [📊 Team auf vlr.gg]             |
   +----------------------------------------------+
```

- Gibt es kein Foto vom Spieler, zeigt die App 🎮. Manche Spieler haben das Team nach dem Turnier verlassen, dann fehlen Foto und echter Name.
- Gewonnene Matches haben die Klasse `gewonnen`, verlorene die Klasse `verloren`.

**Neue Werte, die du benutzen kannst:**

| Das schreibst du | Das erscheint |
|------------------|---------------|
| `{kuerzel}` | Kürzel vom Team, z. B. *PRX* |
| `{spieler.foto}` | Adresse vom Foto des Spielers |
| `{spieler.name}` | Spielername, z. B. *Derke* |
| `{spieler.echterName}` | Echter Name vom Spieler |
| `{spieler.flagge}` | Flagge vom Land, z. B. 🇫🇮 |
| `{m.runde}` | Runde, z. B. *Halbfinale* |
| `{m.ergebnis}` | Ergebnis, z. B. *2 : 1* |
| `{m.gegner}` | Name vom Gegner |
| `{vlrLink}` | Link zum Team auf vlr.gg |

### To-do HTML
- [ ] **HTML 6 – Team-Kopf:** `<img className="team-logo" src={logo} alt={team.name} />`, den Namen in `<h2>`,
  `<p className="kuerzel">{kuerzel}</p>` und `<p>{medaille} {platz} · {preisgeld}</p>`
- [ ] **HTML 7 – Spieler:** das Foto `<img src={spieler.foto} alt={spieler.name} />` (an der Stelle, wo schon `{spieler.foto ? ...}` steht),
  den Spielernamen in `<h4>` und ein `<p>` mit `{spieler.flagge} {spieler.echterName}`
- [ ] **HTML 8 – Matches:** In jede Zeile kommen `<span className="runde">{m.runde}</span>`, `<strong>{m.ergebnis}</strong>` und `<span>gegen {m.gegner}</span>`
- [ ] **HTML 9 – Link:** `<a className="link-button" href={vlrLink} target="_blank">📊 Team auf vlr.gg</a>`

### To-do CSS (unten in `style.css`, Bereich **TEIL C**)
- [ ] **CSS 10 – Team-Box:** Hintergrund `#1f2731`, dicker Rahmen (`border: 4px solid #3a4553;`), Innenabstand.
  Tipp: Die Box hat auch die Platz-Klasse. Deine Farben aus CSS 7 funktionieren hier also automatisch! Das Kürzel grau und mit Abstand zwischen den Buchstaben (`letter-spacing: 3px;`).
- [ ] **CSS 11 – Spieler:** Spieler-Karte mit dunklem Hintergrund (`#0f1923`). Das Foto **rund** (`border-radius: 50%;`) mit einem roten Rahmen.
- [ ] **CSS 12 – Matches:** jede Zeile mit dunklem Hintergrund. Gewonnene Matches mit grünem Rand links (`border-left: 5px solid #4ecb71;`), verlorene mit rotem (`#ff4655`).
- [ ] **CSS 13 – Link-Button:** in Rot `#ff4655` mit weißer fetter Schrift. Beim Drüberfahren dunkler.

### Extra-Ideen zur Erweiterung
- [ ] Die Spielerfotos sollen beim Drüberfahren größer werden: `.spieler-karte img:hover { transform: scale(1.15); }`
- [ ] Gib der Team-Box vom Weltmeister einen goldenen Leuchtrahmen: `.details.gold { box-shadow: 0 0 30px #ffd700; }`

---

## Teil 4 – ⭐⭐ Erweiterung: Turnierbaum und Lieblingsteam

Unter den Karten erscheint jetzt der **Turnierbaum** der Playoffs, mit allen Matches und Ergebnissen.
Die Weltmeisterschaft wird im **Double Elimination**-Modus gespielt: Wer im **Upper Bracket** verliert, bekommt im **Lower Bracket** eine zweite Chance.
Erst wer zweimal verliert, ist raus! Und du kannst ein **Lieblingsteam** wählen: Seine Matches werden hervorgehoben.
Das JavaScript ist **schon fertig**.

```
  🏟️ Turnierbaum
  ⭐ Mein Lieblingsteam: [ LOUD ▼ ]      LOUD: 4 Siege, 0 Niederlagen

  ⬆️ Upper Bracket
   Viertelfinale          Halbfinale            Upper Final
  +------------------+   +------------------+   +------------------+
  |[L] Paper Rex   0 |   |[L] NRG         1 |   |[L] Vitality    1 |  ← Lieblingsteam
  |[L] LOUD        2 |   |[L] LOUD        2 |   |[L] LOUD        2 |    hervorgehoben
  +------------------+   +------------------+   +------------------+
  |[L] 100 Thieves 0 |   |[L] G2 Esports  0 |
  |[L] G2 Esports  2 |   |[L] Vitality    2 |
  +------------------+   +------------------+
  ...

  ⬇️ Lower Bracket
   Runde 1     Runde 2     Runde 3     Lower Final
   ...

  🏆 Grand Final
  +------------------+
  |[L] LOUD        3 |  ← der Gewinner eines Matches ist fett
  |[L] Vitality    1 |
  +------------------+
```

- Der Gewinner in jedem Match hat die Klasse `gewinner`.
- Matches mit deinem Lieblingsteam haben die Klasse `favorit`.
- Auf dem Handy kannst du den Turnierbaum **zur Seite wischen**.

**Neue Werte, die du benutzen kannst:**

| Das schreibst du | Das erscheint |
|------------------|---------------|
| `{abschnitt.titel}` | *⬆️ Upper Bracket*, *⬇️ Lower Bracket* oder *🏆 Grand Final* |
| `{RUNDEN_DEUTSCH[runde.round]}` | Name der Runde, z. B. *Halbfinale* |
| `{t.logo}` / `{t.name}` / `{t.score}` | Logo, Name und Punkte von einem Team im Match |
| `{lieblingsName}` | Name vom Lieblingsteam |
| `{siege}` / `{niederlagen}` | Siege und Niederlagen vom Lieblingsteam |

### To-do HTML
- [ ] **HTML 10 – Überschrift:** `<h2>🏟️ Turnierbaum</h2>`
- [ ] **HTML 11 – Abschnitte und Runden:** In jeden Abschnitt `<h3>{abschnitt.titel}</h3>` und in jede Runde `<h4>{RUNDEN_DEUTSCH[runde.round]}</h4>`
- [ ] **HTML 12 – Teams im Match:** In jede Zeile eines Matches:
  ```jsx
  <img src={t.logo} alt={t.name} />
  <span>{t.name}</span>
  <strong>{t.score}</strong>
  ```
- [ ] **HTML 13 – Lieblingsteam:** vor die Auswahl den Text „⭐ Mein Lieblingsteam:“. Wähle ein Team aus und schreibe dann in die neue Stelle:
  `<p className="bilanz">{lieblingsName}: {siege} Siege, {niederlagen} Niederlagen</p>`

### To-do CSS (unten in `style.css`, Bereich **TEIL D**)
- [ ] **CSS 14 – Turnierbaum:** Box mit Hintergrund (`#1f2731`), Innenabstand. Die Auswahl (`select`) dunkel mit heller Schrift und Rahmen.
- [ ] **CSS 15 – Überschriften:** Abschnitte (`h3`) in Rot und Großbuchstaben, Runden (`h4`) klein und grau.
- [ ] **CSS 16 – Match-Kasten:** dunkler Hintergrund (`#0f1923`), Rahmen (`border: 1px solid #3a4553;`)
- [ ] **CSS 17 – Gewinner:** Die Gewinner-Zeile fett, mit hellerem Hintergrund (z. B. `rgba(78, 203, 113, 0.15)`) und grüner Schrift für die Punkte.
  Tipp: `.match-team.gewinner strong { color: #4ecb71; }`
- [ ] **CSS 18 – Lieblingsteam:** Matches vom Lieblingsteam (`.match.favorit`) mit goldenem Rahmen und Leuchten: `box-shadow: 0 0 12px #ffd700;`. Die Bilanz fett.

> 💡 Wähle mal LOUD als Lieblingsteam und verfolge den Weg zum Titel. Und dann Team Vitality: Wo haben sie verloren?

### Extra-Ideen zu Teil 4
- [ ] Die Verlierer-Zeile soll blasser sein: `.match-team:not(.gewinner) { opacity: 0.6; }`
- [ ] Das Grand Final soll besonders aussehen. Tipp: `.abschnitt:last-child .match { ... }`
- [ ] Für Mutige mit JavaScript: Zeige ein anderes Turnier! Die ID steht in `EVENT_URL`. Dann musst du aber auch `daten.js` neu erzeugen (siehe unten).

---

## Tipps
- In React heißt es **`className`** statt `class`.
- Jedes Tag muss geschlossen werden, auch `<img ... />`.
- Wenn die Seite weiß bleibt: **F12** → Konsole.
- Farben aussuchen: https://htmlcolorcodes.com/de/
- Spieler- und Teamnamen sind so geschrieben wie im Esport üblich, z. B. *f0rsakeN* oder *BABYBAY*.

## Extra-Ideen
- [ ] Die Team-Karte soll beim Drüberfahren rot leuchten: `.karte:hover { box-shadow: 0 0 15px #ff4655; }`
- [ ] Probier eine Esport-Schrift von https://fonts.google.com aus, z. B. „Oswald“ oder „Rajdhani“.

---

> 👩‍🏫 **Für Lehrer:** Die API erlaubt nur 30 Anfragen pro Minute. Deshalb liegen die Daten in `daten.js`.
> Neu erzeugen im Ordner `react-aufgaben`: `node daten-aktualisieren.js vct` (dauert etwa 1 Minute).

*Valorant ist eine Marke von Riot Games. Die Daten kommen von [vlr.gg](https://www.vlr.gg) über die freie API [vlr.orlandomm.net](https://vlr.orlandomm.net). Diese Aufgabe ist nur zum Lernen gedacht.*
