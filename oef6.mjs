// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

let dagen = parseFloat (await userInput.question('geef aantal dagen? '));
let dagensec = dagen * 86400
let uren = parseFloat (await userInput.question('geef aantal uren? '));
let urensec = uren * 3600
let minuten = parseFloat (await userInput.question('geef aantal minuten? '));
let minuutsec = minuten * 60
let seconden = parseFloat (await userInput.question('geef aantal seconden? '));

let som = dagensec + urensec + minuutsec + seconden
console.log(" aantal seconden " + som );

process.exit();