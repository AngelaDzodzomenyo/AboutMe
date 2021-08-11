'use strict'

console.log('Hello World')

let userName = prompt('Hello! What is your name?')
console.log('The userName is ' + userName);
let alertuserName = alert('Hi '+userName + '! Welcome to my page!');

let userName_2 = prompt('Well, '+userName +', my favorite number is 2 and my favorite color is green. Do you like the color green?')
console.log(userName_2);
let userName_Three = userName_2.toLowerCase();
console.log(userName_Three)

if (userName_Three === 'yes' || userName_Three === 'y') {
  alert('Dope!')
} else if (userName_Three === 'no' || userName_Three === 'n') {
  alert('Thats ok! We all have our preferences.');
} else {
  alert('ok...lets keep going')
}

let playagame = prompt('I just told you what my favorite number was. Do you remember?')
console.log(typeof playagame);
let playagame_2 = playagame.toLowerCase();
console.log(playagame_2)

if (playagame_2 === 'yes' || playagame_2 === 'y') {
  alert('Good memory, '+userName+ '!')
} else if (playagame_2 === 'no' || playagame_2 === 'n') {
  alert('Refresh if you really want to know!');
} else {
  alert('Refresh if you really want to know!')
}


let randomQues = prompt('Ever been to Ghana?')
console.log(typeof randomQues);
let randomQues_2 = randomQues.toLowerCase();
console.log(randomQues_2)

if (randomQues_2 === 'yes' || randomQues_2 === 'y') {
  alert('Wow! Thats great!, '+userName+ '!')
} else if (randomQues_2 === 'no' || randomQues_2 === 'n') {
  alert('My family is from there!');
} else {
  alert('Lets move on...')
}


let catGame = prompt('I like cats. Do you?')
console.log(typeof catGame);
let catGame_2 = catGame.toLowerCase();
console.log(catGame_2)

if (catGame_2 === 'yes' || catGame_2 === 'y') {
  alert('Right! They are so soft and cuddly! '+userName+ '!')
} else if (catGame_2 === 'no' || catGame_2 === 'n') {
  alert('Yes you do!');
} else {
  alert('Meow?')
}


let clownGame = prompt('Want to see a clown?')
console.log(typeof clownGame);
let clownGame_2 = clownGame.toLowerCase();
console.log(clownGame_2)

if (clownGame_2 === 'yes' || clownGame_2 === 'y') {
  alert('Look in the mirror! :P')
} else if (clownGame_2 === 'no' || clownGame_2 === 'n') {
  alert('Thanks ok! Just look in the mirror!');
} else {
  alert('....')
}

let alertuserName_2 = alert('Thanks ' +userName + ' for visiting! Stay a while!');