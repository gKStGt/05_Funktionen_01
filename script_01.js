
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

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

function ausgabeNamenParam(firstName) {
    console.log("Hallo " + firstName + "!");
}

/*
// Calls  name(args);
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

ausgabeNamenParams("Imran","Malik");
ausgabeNamenParams("Silvia","Neumann");
ausgabeNamenParams(prompt("Vornamen? :"), prompt("Fam.-Namen? :"));

