// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden


let getal = 5;

let getal2 = 31;

let som = getal + getal2

let product = getal * getal2

let verschil = getal - getal2

let deling= getal / getal2

console.log("de deling is " + deling + " de product is " + product + " de som is " + som + " de verschil is " + verschil );
process.exit();