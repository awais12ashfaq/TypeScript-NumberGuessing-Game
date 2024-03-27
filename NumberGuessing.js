#! /usr/bin/env node
import inquirer from "inquirer";
const systemGeneratedNo = Math.floor(Math.random() * 10);
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Write Your Guess: "
    }
]);
const { userGuess } = answer;
console.log(userGuess, "userGuess", systemGeneratedNo, "SYS");
if (userGuess === systemGeneratedNo) {
    console.log("You Guessed It Right");
}
else {
    console.log("Please Try Again, Better Luck Next Time");
}
