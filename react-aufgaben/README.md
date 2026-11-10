# React-Aufgaben: Sport- und Spiele-Apps ⚽🏀🏊👑⛏️🛠️🎯🔴

In diesen 8 Aufgaben baust du kleine **Sport- und Spiele-Apps** mit **React**.
Die Daten (Teams, Wappen, Sportler) kommen **live aus dem Internet**.

**Das JavaScript ist komplett fertig.** Du schreibst nur:
- **HTML**: was in den Karten und Boxen steht
- **CSS**: wie es aussieht (Farben, Schrift, Abstände, Ecken, Schatten)

Das schwierige CSS (Anordnung, Animationen, Handy-Ansicht) ist auch schon fertig.

## Was ist React?

React hilft dabei, Webseiten aus **Bausteinen** zu bauen, so ähnlich wie mit LEGO.
Einen Baustein nennt man **Komponente**.

```jsx
function Begruessung() {
    return <h1>Hallo!</h1>;
}
```

Das sieht fast aus wie HTML. Man nennt es **JSX**.

## Was ist eine API?

Eine API ist wie ein **Kellner im Restaurant**:

```
Deine App  ──── "Bitte alle Fußball-Teams!" ────▶  Sport-Server
Deine App  ◀──── Liste mit Teams, Wappen ...  ────  Sport-Server
```

Das Bestellen macht der Befehl `fetch`. Den haben wir schon für dich geschrieben.

## Die 8 Aufgaben

| Nr. | Aufgabe | Die fertige App kann … | Du gestaltest … |
|-----|---------|------------------------|-----------------|
| 01 | [Fußball](01-fussball/) | 3 Ligen umschalten, Team anklicken → Details | Kopf, Team-Karten, Detail-Box, Liga-Buttons |
| 02 | [Basketball](02-basketball/) | Teams suchen, sortieren, Favoriten ❤️ merken | Kopf, Team-Karten, Suchfeld, Sortier-Buttons |
| 03 | [Schwimmen](03-schwimmen/) | Schwimm-Stars von Wikipedia laden, suchen, Verlauf | Kopf, Profil mit Foto, Lade- und Fehler-Box |
| 04 | [Clash Royale](04-clash-royale/) | Alle Karten anzeigen, filtern, eigenes Deck aus 8 Karten bauen | Kopf, Karten mit Elixier-Tropfen, Seltenheits-Farben, Deck |
| 05 | [Minecraft](05-minecraft/) | Über 500 Blöcke anzeigen, nach Werkzeug filtern, eigene Hotbar aus 9 Blöcken bauen | Kopf, Block-Karten, Härte-Farben, Hotbar |
| 06 | [Minecraft-Werkbank](06-minecraft-werkbank/) | Items ins 3x3-Feld legen, über 2000 echte Rezepte erkennen, Items bauen | Werkbank-Fenster im 3D-Look, Slots, Ergebnis, Inventar, Rezept-Ideen |
| 07 | [Valorant](07-valorant/) | Alle Agenten anzeigen, nach Rolle filtern, eigenes Team aus 5 Agenten bauen | Kopf, Agenten-Karten, Rollen-Farben, Team |
| 08 | [Pokémon](08-pokemon/) | 151 Pokémon im Pokédex, suchen, nach Typ filtern, eigenes Team aus 6 bauen | Kopf, Pokémon-Karten, Typ-Farben, Team im Pokéball-Look |

Jede Aufgabe hat 2 Teile: **Teil 1 – HTML** und **Teil 2 – CSS**.
Fußball, Basketball, Clash Royale, Valorant und Pokémon haben zusätzlich **Teil 3 – ⭐ Erweiterung**: Klick auf ein Team, eine Karte, einen Agenten oder ein Pokémon → mehr Infos und Links ins Internet.
Und für Profis gibt es dort noch **Teil 4 – ⭐⭐ Erweiterung**:

| Aufgabe | Teil 4 |
|---------|--------|
| ⚽ Fußball | 🏆 Tabelle der Liga und 👥 Spieler mit Foto und Rückennummer |
| 🏀 Basketball | ⚔️ Team-Vergleich: Welches Team gewinnt? |
| 👑 Clash Royale | 🎲 Zufalls-Deck und 📊 Deck-Analyse mit Elixier-Kurve |
| 🎯 Valorant | 🎲 Zufalls-Team, 📊 Team-Analyse und 🗺️ Map-Wahl |
| 🔴 Pokémon | 🎲 Zufalls-Team, 📊 Team-Analyse und ❓ Quiz „Wer ist das Pokémon?“ |

Suche im Code nach **`DEIN HTML`** und **`DEIN CSS`**.

## So startest du

1. Öffne den Ordner der Aufgabe und lies die **`README.md`**.
2. Öffne **`index.html`** im Editor (VS Code). Dein Code steht im Bereich `<script type="text/babel">`.
3. Öffne **`index.html`** auch im **Browser** (Doppelklick).
4. Nach jeder Änderung: **Speichern** (Strg + S) und im Browser **neu laden** (F5).

> ⚠️ Du brauchst **Internet**: React und die Sport-Daten werden aus dem Internet geladen.

## Die 4 wichtigsten Regeln in JSX

| Regel | Beispiel |
|-------|----------|
| JavaScript kommt in **geschweifte Klammern** `{ }` | `<h2>{team.strTeam}</h2>` |
| Statt `class` schreibt man **`className`** | `<div className="karte">` |
| Jedes Tag muss **geschlossen** werden, auch `img` | `<img src={...} />` |
| Kommentare schreibt man so | `{/* Das ist ein Kommentar */}` |

## Wenn etwas nicht klappt

- Die Seite ist **weiß**? Drücke **F12** → **Konsole**. Dort steht der Fehler in Rot.
- Häufige Fehler: Eine Klammer `}` oder `)` fehlt, oder ein Tag ist nicht geschlossen (`<img ... />`).
- Mach die letzte Änderung rückgängig (**Strg + Z**) und probiere es nochmal.

## Woher kommen die Daten?

- Fußball und Basketball: [TheSportsDB](https://www.thesportsdb.com/) (kostenloser Test-Zugang)
  > 👩‍🏫 **Für Lehrer:** Der kostenlose Zugang erlaubt nur **30 Anfragen pro Minute**, für die ganze Klasse zusammen.
  > Deshalb liegen die Daten schon gespeichert in `01-fussball/daten.js` und `02-basketball/daten.js`.
  > Für frische Daten (z. B. die aktuelle Tabelle) vor dem Unterricht im Ordner `react-aufgaben` ausführen:
  > `node daten-aktualisieren.js` (dauert 20 bis 30 Minuten, nur eine Aufgabe: `node daten-aktualisieren.js fussball`).
- Schwimmen: [Wikipedia](https://de.wikipedia.org/)
- Clash Royale: [RoyaleAPI](https://royaleapi.com/) (Clash Royale ist eine Marke von Supercell)
- Minecraft (Hotbar und Werkbank): [PrismarineJS](https://github.com/PrismarineJS) (Minecraft ist eine Marke von Mojang Studios)
- Valorant: [valorant-api.com](https://valorant-api.com) (kostenlos, ohne Key; Valorant ist eine Marke von Riot Games).
  Die Agenten liegen zusätzlich in `07-valorant/daten.js`. Aktualisieren: `node daten-aktualisieren.js valorant` (dauert ein paar Sekunden).
- Pokémon: [PokéAPI](https://pokeapi.co) (kostenlos, ohne Key; Pokémon ist eine Marke von Nintendo, Game Freak und The Pokémon Company).
  Die PokéAPI erlaubt nur 100 Abfragen pro Stunde, deshalb liegen die 151 Pokémon in `08-pokemon/daten.js`. Aktualisieren: `node daten-aktualisieren.js pokemon` (dauert ein paar Sekunden).

Viel Spaß! 🚀
