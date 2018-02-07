'use strict';

var userName = prompt('Hi! Glad you are here!  What is your name?');

alert('Hi, ' + userName + ', nice to meet you! I am going to ask you a few fun questions about ME.  Please only answer with y/n or yes/no.');

var answer1 = prompt('Do you think I am from Seattle?').toLowerCase().trim();

if (answer1 === 'yes' || answer1 === 'y') {
    alert('You are incorrect, ' + userName + ', although I have lived in Seattle for about a decade, I hail from Everett, which is 20 miles NORTH of Seattle.');
} else if (answer1 === 'no' || answer1 === 'n'){
    alert('You are correct, ' + userName + '! Although I have spent about a decade living in Seattle, I am from a town 20 miles to the North called Everett.')
} else {
    alert('I\'m terribly sorry, I didn\'t catch that? y/n yes/no only please. :-)');
}
console.log('User asked if they thought I was from Seattle and responded ' + answer1);

var answer2 = prompt('Do you think that I have ever been to the top of the Space Needle?').toLowerCase().trim(); 

if (answer2 === 'yes' || answer2 === 'y') {
    alert('You are correct, ' + userName + 'Space Needle and me go way back.  I remember when there used to be childrens books about a furry monster that lived on top with a blinking nose.');
} else if (answer2 === 'no' || answer2 === 'n'){
    alert('No, I definitely have.  Better luck next question ' + userName + '.');
} else {
    alert('Sorry, ' + userName + ' I cannot understand what you typed.  Y/N yes/NO only please next time! =)');
}
console.log('User asked if they thought I had ever been to the top of the Space Needle and responded ' + answer2);

var answer3 = prompt('Next question! Do you think I am a parent?').toLowerCase().trim();

if (answer3 === 'yes' || answer3 === 'y') {
    alert('Correct ' + userName + ', a three-year-old named Oliver, or Ollie, for short.');
} else if (answer3 === 'no' || answer3 === 'n'){
    alert('Oh, you are wrong ' + userName + '! I have a three-year-old named Oliver, or Ollie, for short.');
} else {
    alert('Sorry that was not a valid answer ' + userName + ', maybe you made a typo?  Oh well, let\'s move on to the next question.  Next time try Y/n YeS/nO next time.');
}
console.log('User asked if they thought I was a parent and responded ' + answer3);

var answer4 = prompt('Next question ' + userName + '!!! Do you think I am some kind of "doctor"?').toLowerCase().trim();

if (answer4 === 'yes' || answer4 === 'y') {
    alert('You are technically correct ("THE BEST KIND OF CORRECT"), I am a "juris" doctor.  PLEASE NOTE: If we were on a plane and someone shouted, "HEY, is there a doctor on the plane?!" I would not be the droid they were looking for.  PLEASE ALSO NOTE: by reading this far you have deeded all your internets to your nearest relative, and Steve.');
} else if (answer4 === 'no' || answer4 === 'n'){
    alert('Although I wouldn\'t call myself a doctor, as I am not an MD, I am a JD.  The D stands for Doctor and the J stands for Juris.  PLEASE NOTE: reading this text means you have been "served", and I will see you in the unPeoples Court. (sorry/not sorry)');
} else {
    alert('It seems like you\'re having trouble with y/n or e/o or the s key(s) on your keyboard.  Your answer did not compute.');
}
console.log('User asked if they thought I was a "doctor" and responded ' + answer4);

var answer5 = prompt('Final question ' + userName + '! Do you think I think it rains too much in Seattle?').toLowerCase().trim(); 

if (answer5 === 'yes' || answer5 === 'y') {
    alert('inCorrect ' + userName + '! I think it rains the appropriate amount and it could rain slightly more and I would probably be fine with it.');
} else if (answer5 === 'no' || answer5 === 'n'){
    alert('Correct, ' + userName + ', I do not think it rains too much in Seattle.');
} else {
    alert('Sorry, ' + userName + ' I cannot understand what you typed.  Better luck next time! =)');
}
console.log('User asked if they thought I thought rained too much in Seattle and responded ' + answer5);