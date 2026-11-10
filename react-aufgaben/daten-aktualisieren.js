// =====================================================
// Lädt die Sport-Daten für Fußball und Basketball EINMAL herunter
// und speichert sie als daten.js im jeweiligen Aufgaben-Ordner.
//
// Warum? TheSportsDB erlaubt mit dem kostenlosen Key nur 30 Anfragen pro Minute.
// Mit den gespeicherten Daten fragen die Apps im Unterricht (fast) nie im Internet nach.
//
// Ausführen (für Lehrer, vor dem Unterricht), im Ordner react-aufgaben:
//     node daten-aktualisieren.js                  (alles)
//     node daten-aktualisieren.js valorant         (nur eine Aufgabe: fussball, basketball, valorant oder pokemon)
// Dauer: Fußball und Basketball 20 bis 30 Minuten (langsam wegen des Limits), Valorant und Pokémon ein paar Sekunden.
// =====================================================

const fs = require("fs");
const os = require("os");
const path = require("path");

const API = "https://www.thesportsdb.com/api/v1/json/123/";
const PAUSE_MS = 4000;          // 15 Anfragen pro Minute, deutlich unter dem Limit
const MAX_VERSUCHE = 15;

// Fortschritt merken: bricht das Skript ab, macht der nächste Start hier weiter
const FORTSCHRITT = path.join(os.tmpdir(), "react-aufgaben-daten-fortschritt.json");
let fortschritt = {};
try { fortschritt = JSON.parse(fs.readFileSync(FORTSCHRITT, "utf8")); } catch (e) { /* neu anfangen */ }

// Muss genauso berechnet werden wie SAISON in 01-fussball/index.html
const heute = new Date();
const startJahr = heute.getMonth() >= 6 ? heute.getFullYear() : heute.getFullYear() - 1;
const SAISON = startJahr + "-" + (startJahr + 1);

const LIGEN = [
    { code: "German_Bundesliga", id: 4331 },
    { code: "English_Premier_League", id: 4328 },
    { code: "Spanish_La_Liga", id: 4335 }
];

const pause = (ms) => new Promise((fertig) => setTimeout(fertig, ms));

// Lange Texte in anderen Sprachen braucht die App nicht, die machen die Datei nur groß
function verkleinern(daten) {
    return JSON.parse(JSON.stringify(daten), (schluessel, wert) =>
        /^strDescription(?!EN$|DE$)/.test(schluessel) ? undefined : wert
    );
}

async function hole(adresse) {
    for (let versuch = 1; versuch <= MAX_VERSUCHE; versuch++) {
        await pause(PAUSE_MS);
        let antwort, text;
        try {
            antwort = await fetch(adresse);
            text = await antwort.text();
        } catch (fehler) {
            console.log("   Verbindung abgebrochen (" + fehler.message + "), neuer Versuch in 10 Sekunden ...");
            await pause(10000);
            continue;
        }
        if (antwort.status === 429 || text.trim() === "") {
            // Der Server sagt mit "Retry-After", wie viele Sekunden wir warten sollen
            const sekunden = Number(antwort.headers.get("retry-after")) || 60;
            console.log("   Limit erreicht, warte " + (sekunden + 5) + " Sekunden ...");
            await pause((sekunden + 5) * 1000);
            continue;
        }
        if (!antwort.ok) throw new Error(antwort.status + " bei " + adresse);
        return JSON.parse(text);
    }
    throw new Error("Keine Daten nach " + MAX_VERSUCHE + " Versuchen: " + adresse +
        " (einfach nochmal starten, das Skript macht dort weiter)");
}

async function sammle(adressen, ergebnis) {
    for (const adresse of adressen) {
        if (ergebnis[adresse]) continue;
        if (!fortschritt[adresse]) {
            console.log("   " + adresse.replace(API, ""));
            fortschritt[adresse] = verkleinern(await hole(adresse));
            fs.writeFileSync(FORTSCHRITT, JSON.stringify(fortschritt), "utf8");
        }
        ergebnis[adresse] = fortschritt[adresse];
    }
}

function speichern(ordner, ergebnis) {
    const datei = path.join(__dirname, ordner, "daten.js");
    const inhalt =
        "// Automatisch erzeugt mit: node daten-aktualisieren.js (Stand: " + heute.toLocaleDateString("de-DE") + ")\n" +
        "// Nicht von Hand ändern. Die App liest hier zuerst nach und fragt nur sonst im Internet.\n" +
        "window.GESPEICHERTE_DATEN = " + JSON.stringify(ergebnis) + ";\n";
    fs.writeFileSync(datei, inhalt, "utf8");
    console.log("✔ " + ordner + "/daten.js gespeichert (" + Object.keys(ergebnis).length + " Adressen, " +
        Math.round(inhalt.length / 1024) + " KB)\n");
}

async function fussball() {
    console.log("⚽ Fußball (Saison " + SAISON + ")");
    const ergebnis = {};
    for (const liga of LIGEN) {
        const teamsAdresse = API + "search_all_teams.php?l=" + liga.code;
        await sammle([teamsAdresse, API + "lookuptable.php?l=" + liga.id + "&s=" + SAISON], ergebnis);
        for (const team of ergebnis[teamsAdresse].teams || []) {
            await sammle([
                API + "eventslast.php?id=" + team.idTeam,
                API + "lookup_all_players.php?id=" + team.idTeam
            ], ergebnis);
        }
    }
    speichern("01-fussball", ergebnis);
}

async function basketball() {
    console.log("🏀 Basketball");
    const ergebnis = {};
    const listen = [
        API + "search_all_teams.php?l=NBA",
        API + "searchteams.php?t=San_Antonio_Spurs"
    ];
    await sammle(listen, ergebnis);
    const teams = listen.flatMap((a) => ergebnis[a].teams || []).filter((t) => t.strSport === "Basketball");
    await sammle(teams.map((t) => API + "eventslast.php?id=" + t.idTeam), ergebnis);
    speichern("02-basketball", ergebnis);
}

// Valorant: valorant-api.com hat kein strenges Limit, deshalb ohne Pause und ohne Fortschritt.
// Nur die Felder, die die App braucht, damit daten.js klein bleibt.
async function valorant() {
    console.log("🎯 Valorant");
    const AGENTEN_URL = "https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=de-DE";
    const MAPS_URL = "https://valorant-api.com/v1/maps?language=de-DE";
    const nur = (objekt, felder) => Object.fromEntries(felder.map((f) => [f, objekt[f]]));

    const agenten = await (await fetch(AGENTEN_URL)).json();
    const maps = await (await fetch(MAPS_URL)).json();

    const ergebnis = {
        [AGENTEN_URL]: {
            status: agenten.status,
            data: agenten.data.map((a) => ({
                ...nur(a, ["uuid", "displayName", "description", "displayIcon", "fullPortrait", "background", "backgroundGradientColors"]),
                role: nur(a.role, ["displayName", "displayIcon"]),
                abilities: a.abilities.map((f) => nur(f, ["slot", "displayName", "description", "displayIcon"]))
            }))
        },
        [MAPS_URL]: {
            status: maps.status,
            data: maps.data
                .filter((m) => m.tacticalDescription)
                .map((m) => nur(m, ["uuid", "displayName", "tacticalDescription", "splash"]))
        }
    };
    speichern("07-valorant", ergebnis);
}

// Pokémon: die ersten 151 mit EINER GraphQL-Abfrage (PokéAPI erlaubt 100 Abfragen pro Stunde).
// Die Abfrage muss genauso lauten wie POKEMON_ABFRAGE in 08-pokemon/index.html.
async function pokemon() {
    console.log("🔴 Pokémon");
    const html = fs.readFileSync(path.join(__dirname, "08-pokemon", "index.html"), "utf8");
    const abfrage = html.match(/const POKEMON_ABFRAGE = `([\s\S]*?)`;/)[1];
    const antwort = await fetch("https://graphql.pokeapi.co/v1beta2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: abfrage })
    });
    const daten = await antwort.json();
    if (!daten.data) throw new Error("PokéAPI: " + JSON.stringify(daten).slice(0, 200));
    speichern("08-pokemon", { "pokemon-151": daten });
}

// Ohne Angabe wird alles geladen. Nur eine Aufgabe: node daten-aktualisieren.js valorant
const AUFGABEN = { fussball, basketball, valorant, pokemon };

(async () => {
    const auswahl = process.argv.slice(2);
    const namen = auswahl.length > 0 ? auswahl : Object.keys(AUFGABEN);
    for (const name of namen) {
        if (!AUFGABEN[name]) throw new Error("Unbekannt: " + name + " (möglich: " + Object.keys(AUFGABEN).join(", ") + ")");
        await AUFGABEN[name]();
    }
    fs.rmSync(FORTSCHRITT, { force: true });   // alles da, beim nächsten Mal frisch laden
    console.log("Fertig! 🎉");
})().catch((fehler) => {
    console.error("❌ " + fehler.message);
    process.exit(1);
});
