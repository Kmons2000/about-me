'use strict';
var programmer = prompt('What is your name?');
console.log(programmer + ' is their name.');
var game = prompt('What is your favorite video game?');
console.log(game + ' is their favorite video game.');
var food = prompt('What is your favorite food?');
console.log(food + ' is their favorite food.');
var music = prompt('What music genre do you enjoy?');
console.log(music + ' is their favorite music.');
var answers = ('Salutations ' + programmer + ', ' + game + ' sounds like an interesting game, ' + food + ' sounds delicious, and ' + music + ' sounds good to me!');
alert('Salutations ' + programmer + ', ' + game + ' sounds like an interesting game, ' + food + ' sounds delicious, and ' + music + ' sounds good to me!');

var results = document.getElementById('results');
results.innerHTML=answers;

