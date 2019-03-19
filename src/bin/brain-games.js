#!/usr/bin/env node
import { question } from '/home/ilya/BrainGames/node_modules/readline-sync/lib/readline-sync';
console.log('Welcome to the Brain Games!');
let userName = question('May i have your name?');
console.log('Hello ' + userName + '!');
