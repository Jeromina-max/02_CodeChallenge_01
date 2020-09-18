
/*********   CODE CHALLENGE 1 **********/
 
/*
Geben Sie über eine Promt-Anforderung eine Zahl ein
Geben Sie über eine Promt-Anforderung eine zweite Zahl ein
Berechnen Sie die Summe der Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
‘Die Summe der Zahlen ist: summe ‘
*/

/*********** Variante 1  ****************/

// Gut lesbar, aber unnötig viele Variablen

/* let input1, input2;
let zahl1, zahl2;
let summe;

input1 = prompt("Zahl 1 eingeben");
input2 = prompt("Zahl 2 eingeben");
console.log(typeof input1);

zahl1 = parseInt(input1);
zahl2 = parseInt(input2);
console.log(typeof zahl1);

summe = zahl1 + zahl1;
console.log("Die Summe der Zahlen ist: " + summe);
 */

/*********** Variante 2  ****************/

// Kompaktere Lösung
/* 
let zahl1,zahl2,summe;

zahl1 = parseInt(prompt("Zahl 1 eingeben"));
zahl2 = parseInt(prompt("Zahl 2 eingeben"));
summe = zahl1 + zahl2;
console.log("Die Summe der Zahlen ist: " + summe);
 */

/*********** Variante 3  ****************/
// Kompakt, aber schlecht lesbar
/* 
console.log("Die Summe der Zahlen ist: " + 
(parseInt(prompt("Zahl 1 eingeben")) + 
parseInt(prompt("Zahl 2 eingeben")))
);
 */


