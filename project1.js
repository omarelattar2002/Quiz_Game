const prompt = require("prompt-sync")();



console.log("Welcome to the Computer Hardware Quiz!");

let correctAnswers = 0;


const answer1 = prompt("What is the brain of the computer? ");
const correctAswer1 = "CPU";

if (answer1.toUpperCase() === correctAswer1) {
    console.log("You got it correct!");
    correctAnswers++;
}else{
    console.log("You got it wrong!");
}

const answer2 = prompt("What is better a 3090ti or a 4060? ");
const correctAswer2 = "3090TI";

if (answer2.toUpperCase() === correctAswer2) {
    console.log("You got it correct!");
    correctAnswers++;
}else{
    console.log("You got it wrong!");
}

const answer3 = prompt("What is the reccomended amount of RAM in 2023? ");
const correctAswer3 = "16GB";

if (answer3.toUpperCase() === correctAswer3) {
    console.log("You got it correct!");
    correctAnswers++;
}else{
    console.log("You got it wrong!");
}


console.log("you got", correctAnswers, "qustions correct!");
console.log("Your score is ", Math.round((correctAnswers/3)*100),"%");


