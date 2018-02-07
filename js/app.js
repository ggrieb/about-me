'use strict';

var userName = prompt('Hi! Glad you are here!  What is your name?');

alert('Hi, ' + userName + ', nice to meet you! I am going to ask you a few fun questions about ME.  Please answer with y/n or yes/no.');

var answer1 = prompt('Do you think I was once a licensed kickboxer?').toLowerCase().trim();

if (answer1 === 'yes' || answer1 === 'y') {
    alert('Correct ' + userName + ', while living in London in 2006 I was a member of a competitive kickboxing club that required a type of insurance licensing for competitions in the UK and Commonwealth.');
} else if (answer1 === 'no' || answer1 === 'n') {
    alert('You are incorrect ' + userName + '! Back in 2006 I was living in London and the club I trained with required a type of insurance licensing that allowed for competitions in the UK and Commonwealth.');
} else {
    alert('Sorry that was not a valid answer, maybe you made a typo?  Oh well, let\'s move on to the next question.');
}
console.log('User asked if they knew I had kickboxed and responded ' + answer1);

var answer2 = prompt('Next question! Do you think I have a kid?').toLowerCase().trim();

if (answer2 === 'yes' || answer2 === 'y') {
    alert('Correct ' + userName + ', his name is Oliver, but we mostly call him Ollie.');
} else if (answer2 === 'no' || answer2 === 'n'){
    alert('You are wrong ' + userName + '! I have a son named Oliver, or Ollie, for short.');
} else {
    alert('Sorry that was not a valid answer ' + userName + ', maybe you made a typo?  Oh well, let\'s move on to the next question.');
}
console.log('User asked if they knew if I had a child and responded ' + answer2);

var answer3 = prompt('Next question! Do you think I am from Seattle?').toLowerCase().trim();

if (answer3 === 'yes' || answer3 === 'y') {
    alert('You are incorrect, ' + userName + ', I was born and raised in Everett, which is 20 miles NORTH of Seattle.');
} else if (answer3 === 'no' || answer3 === 'n'){
    alert('You are correct, ' + userName + '! Although I have spent about a decade living in Seattle, I in fact hail from a town 20 miles to the North called Everett.')
} else {
    alert('Why can\'t you just follow the directions?');
}
console.log('User asked if they thought I was from Seattle and responded ' + answer3);

var answer4 = prompt('Next question ' + userName + '!!! Do you think I am a doctor?').toLowerCase().trim();

if (answer4 === 'yes' || answer4 === 'y') {
    alert('You are technically correct (THE BEST KIND OF CORRECT), I am a law doctor (JD), not a medical doctor.');
} else if (answer4 === 'no' || answer4 === 'n'){
    alert('Incorrect.  Although I am not an MD I am a JD.  The D stands for Doctor and the J stands for Juris.  Please take this as meaning you have been "served" and I will see you in the unPeoples Court for defamation. (sorry/not sorry)');
} else {
    alert('It seems like you\'re having trouble with y/n keys on your keyboard.  Your answer did not compute.');
}
console.log('User asked if they thought I was a doctor and responded ' + answer4);

var answer5 = prompt('Final question ' + userName + '! Do you think I have ever been to Asia?').toLowerCase().trim(); 

if (answer5 === 'yes' || answer5 === 'y') {
    alert('Oh, sorry, that\'s wrong ' + userName + ' I have not yet had the privilege of traveling to the other side of the Pacific (yet).');
} else if (answer5 === 'no' || answer5 === 'n'){
    alert('Alas, ' + userName + ', you are correct in ascertaining my lack of travel across the Great Pacific Ocean.');
} else {
    alert('Sorry, ' + userName + ' I cannot understand what you typed.  Better luck next time! =)');
}
console.log('User asked if they thought I had ever been to Asia and responded ' + answer5);