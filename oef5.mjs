// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

let geboortejaar = await userInput.question('Wat is je geboortejaar? ');

let toekomstjaar = await userInput.question('Wat is je toekomstejaar? ');

console.log( "In " + toekomstjaar + " zal ik " +( toekomstjaar - geboortejaar) + " of "  + ( toekomstjaar - geboortejaar + 1) + " hebben")
process.exit();