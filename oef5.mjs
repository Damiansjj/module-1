// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

let geboortejaar = await userInput.question('Wat is je geboortejaar? ');

let toekomstjaar = 2031 - geboortejaar
;

console.log( "In 2031 zal je " + toekomstjaar + " hebben" );
process.exit();