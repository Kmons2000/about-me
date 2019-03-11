var programmer = promptRequired('What is your name?');
console.log(programmer + ' is their name.');
var game = promptRequired('What is your favorite video game?');
console.log(game + ' is their favorite video game.');
var food = promptRequired('What is your favorite food?');
console.log(food + ' is their favorite food.');
var music = promptRequired('What music genre do you enjoy?');
console.log(music + ' is their favorite music.');
alert('Salutations ' + programmer + ', ' + game + ' sounds like an interesting game, ' + food + ' sounds delicious, and ' + music + ' sounds good to me!');
function answerIsValid(answer) {
  if (!answer) {
    return false;
  }
  answer = answer.trim();
  if (!answer) {
    return false;
  }
  if (answer === 'null' || answer === 'undefined') {
    return false;
  }
  return true;
}
function promptRequired(message) {
  var result = prompt(message);
  while (!answerIsValid(result)) {
    result = prompt('REQUIRED: ' + message);
  }
  return result;
}