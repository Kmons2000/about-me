'use strict';

var myName = prompt('Is my name Skylar?');
if(myName.toUpperCase() === 'YES' || myName.toUpperCase() === 'Y'){
  console.log('You are correct!');
}else{
  console.log('Get to know me bro');
}

var myAge = prompt('Am I 18 years old?');
if(myAge.toUpperCase() === 'YES' || myAge.toUpperCase() === 'Y'){
  console.log('Good job!');
}else{
  console.log('I get it, I look older than I am');
}

var favColor = prompt('Is my favorite color pink?');
if(favColor.toUpperCase() === 'YES' || favColor.toUpperCase() === 'Y'){
  console.log('Pink is best color ever');
}else{
  console.log('You are just wrong');
}

var myHeight = prompt('Am I 5 foot 6 inches?');
if(myHeight.toUpperCase() === 'NO' || myHeight.toUpperCase() === 'N'){
  console.log('I am actually 5 foot 11 inches');
}else{
  console.log('Why do you think I am so short');
}

var meFunny = prompt('Am I funny?');
if(meFunny.toUpperCase() === 'YES' || meFunny.toUpperCase() === 'Y'){
  console.log('This question was just a given answer: OBVIOUSLY I AM!');
}else{
  console.log('You are just straight up wrong and have no taste in humor');
}

var answer1 ='. Correct answer was yes!';
var answer2 ='. Correct answer was yes!';
var answer3 ='. Correct answer was yes!';
var answer4 ='. Correct answer was no!';
var answer5 ='. Correct answer was yes!';
var answers = document.getElementById('name');
var answers2 = document.getElementById('age');
var answers3 = document.getElementById('color');
var answers4 = document.getElementById('height');
var answers5 = document.getElementById('funny');
answers.innerHTML='You answered: ' + myName + answer1;
answers2.innerHTML='You answered: ' + myAge + answer2;
answers3.innerHTML='You answered: ' + favColor + answer3;
answers4.innerHTML='You answered: ' + myHeight + answer4;
answers5.innerHTML='You answered: ' + meFunny + answer5;