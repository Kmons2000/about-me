'use strict';

var myName;

function firstQuestion() {
  myName = prompt('Is my name Skylar?');
  if(myName.toUpperCase() === 'YES' || myName.toUpperCase() === 'Y'){
    console.log('You are correct!');
  }else{
    console.log('Get to know me bro');
  }
  return;
}

var myAge;
function secondQuestion() {
  myAge = prompt('Am I 18 years old?');
  if(myAge.toUpperCase() === 'YES' || myAge.toUpperCase() === 'Y'){
    console.log('Good job!');
  }else{
    console.log('I get it, I look older than I am');
  }
  return;
}

var favColor;
function thirdQuestion() {
  favColor = prompt('Is my favorite color pink?');
  if(favColor.toUpperCase() === 'YES' || favColor.toUpperCase() === 'Y'){
    console.log('Pink is best color ever');
  }else{
    console.log('You are just wrong');
  }
  return;
}

var myHeight;
function fourthQuestion() {
  myHeight = prompt('Am I 5 foot 6 inches?');
  if(myHeight.toUpperCase() === 'NO' || myHeight.toUpperCase() === 'N'){
    console.log('I am actually 5 foot 11 inches');
  }else{
    console.log('Why do you think I am so short');
  }
  return;
}

var meFunny;
function fifthQuestion() {
  meFunny = prompt('Am I funny?');
  if(meFunny.toUpperCase() === 'YES' || meFunny.toUpperCase() === 'Y'){
    console.log('This question was just a given answer: OBVIOUSLY I AM!');
  }else{
    console.log('You are just straight up wrong and have no taste in humor');
  }
  return;
}

var myPets;
function sixthQuestion() {
  var incorrect = true;
  while(incorrect){
    myPets = parseInt(prompt('How many pets do I have?'));
    if(myPets > 1){
      alert('lower');
    } else if(myPets < 1){
      alert('higher');
    } else if(myPets === 1){
      incorrect = false;
      alert('Correct!');
    }
  }
  return;
}

var favGame;
function seventhQuestion() {
  var gameArray = ['celeste', 'borderlands 2'];
  for(var i=0; i <= 6; i++){
    favGame = prompt('What is my favorite game?').toLowerCase();
    for(var j=0; j<gameArray.length; j++){
      if(gameArray[j] === favGame){
        alert('Correct!');
        var correct = true;
        break;
      }
    }
    if(correct){
      break;
    }
  } return;
}

function start() {
  firstQuestion();
  secondQuestion();
  thirdQuestion();
  fourthQuestion();
  fifthQuestion();
  sixthQuestion();
  seventhQuestion();
  return;
}

start();

var answerYes ='. Correct answer was yes!';
var answer4 ='. Correct answer was no!';
var answer6 ='. Correct answer was 1!';
var answer7 ='. Correct answer was Celeste and Borderlands 2!';
var answers = document.getElementById('name');
var answers2 = document.getElementById('age');
var answers3 = document.getElementById('color');
var answers4 = document.getElementById('height');
var answers5 = document.getElementById('funny');
var answers6 = document.getElementById('pet');
var answers7 = document.getElementById('game');
answers.innerText=' You answered: ' + myName + answerYes;
answers2.innerText=' You answered: ' + myAge + answerYes;
answers3.innerText=' You answered: ' + favColor + answerYes;
answers4.innerText=' You answered: ' + myHeight + answer4;
answers5.innerText=' You answered: ' + meFunny + answerYes;
answers6.innerText=' You answered: ' + myPets + answer6;
answers7.innerText=' You answered: ' + favGame + answer7;

