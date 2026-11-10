// =========================================
// Aufgabe 01 – Variablen und Ausgabe
// Starten mit:  node aufgabe.js
// =========================================

console.log("Hallo, ich bin JavaScript!");


// ---------- Teil A – Steckbrief ----------

// TODO: Variablen erstellen: vorname, nachname, alter, stadt, istAzubi
let alter = 15;
let vorname = "Tom";
let nachname = "Brandt";
let stadt = "Rickert";
let istAzubi = false;

let rucksack = ["Kohle", "Schwert", "spitzhacke", "basketball"];

function oeffneInventar(inventarInhalt) {
    for (let i = 0; i < inventarInhalt.length; i++) {
        console.log(inventarInhalt[i]);
    }
}

oeffneInventar(rucksack);
 

// TODO: Steckbrief ausgeben (siehe README)
// --- Steckbrief ---
// Name: ... 
console.log(vorname)
// Alter: ...
console.log(alter)
// Stadt: ...
console.log(stadt)
// Azubi: ...
console.log(istAzubi)
console.log(alter,vorname,nachname,stadt,istAzubi)


// ---------- Teil B – Ändern ----------
alter++
// TODO: Alter um 1 erhöhen
console.log(alter);
// TODO: Ausgeben: "Nächstes Jahr bin ich ..."
console.log("naechstes Jahr bin ich" + " " + alter)


// ---------- Teil C – Datentypen ----------

// TODO: Mit typeof den Typ von vorname, alter und istAzubi ausgeben

function addieren(a, b) {
    console.log (a + b);

}

addieren(15,10)

function multiplizieren(a, b) {
    console.log (a * b);

}

multiplizieren(15,10)

function azubicheck(istAzubi) {
if(istAzubi === true){
console.log("Ich bin ein Azubi")
}    
else{
    console.log("Ich bin kein Azubi")

}
}azubicheck(istAzubi)

// ---------- Teil D – Ein Satz ----------

// TODO: Mit Backticks ausgeben:
// "Ich heiße ... ..., bin ... Jahre alt und wohne in ...."

