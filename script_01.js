
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsrumpf (body)
function test()
{
    console.log("Hallo Silvia!");
}

// Funktionsaufruf (call)
//test();

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

function ausgabeNamen() {
    let firstName = "Jeromina"; // Parameter | Variablen
    console.log("Hallo " + firstName + "!");
}

//ausgabeNamen();
//console.log(firstName); // var lokal --> Fehler!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

function ausgabeNamenParam(firstName) {
    console.log("Hallo " + firstName + "!");
}

// Calls  name(args);
/* ausgabeNamenParam();
ausgabeNamenParam("Imran");  // Argumente --> Daten, die an Fkt. gesendet werden
ausgabeNamenParam("Jeromina")
ausgabeNamenParam("Harald");
ausgabeNamenParam(prompt("Bitte Vornamen eingeben:"));
 */

/***** Funktionen 02c *****/
// 2b. Mehrere Parameter

function ausgabeNamenParams(firstName, familyName) {
    console.log("Hallo " + firstName + " " + familyName + "!");  
}

/* ausgabeNamenParams("Imran","Malik");
ausgabeNamenParams("Silvia","Neumann");
ausgabeNamenParams(prompt("Vornamen? :"), prompt("Fam.-Namen? :"));
 */

/***** Funktionen 03a *****/
// 03a. Vorbereitung
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

function ausgabeNamenParams2(firstName, familyName) {
    
    // 1. Job: string composing
    let gap = " ";
    let outputStr = "Hallo " + firstName + gap + familyName + "!";
    
    // 2. Job: output 
    console.log(outputStr);  
}

//ausgabeNamenParams2("Kerles", "Makso");

/***** Funktionen 03b *****/
// 03a. Datenrückgabe an Fkt.-Call mit return

// Test
//ausgabe("Hi"); 
function ausgabe(outputStr) {
     console.log(outputStr); 
}

//ausgabe(getString("Imran","Malik"));
//ausgabe("Hallo Imran Malik!");
function getString(firstName, familyName) {
    let gap = " ";
    let outputStr = "Hallo " + firstName + gap + familyName + "!";
    return outputStr;
}


