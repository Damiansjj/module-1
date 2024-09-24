// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden


let getal = parseFloat (await userInput.question('Wat is je eerste getal? '));

let getal2 = parseFloat (await userInput.question('Wat is je tweede getal? '));

let som = getal + getal2 

console.log(" uw getal is " + getal+""+ " en " + getal2 + " wordt de som "+ som);

process.exit();