## Getting Started

To play this game, you need to have Node.js and TypeScript installed on your system. You can install them from [here](https://nodejs.org/) and [here](https://www.typescriptlang.org/), respectively.

Once you have Node.js and TypeScript installed, you can clone this repository and navigate to the directory containing the game.

## Installing Dependencies

Before running the game, you need to install the required dependencies using npm:
This will install the inquirer package, which is used for handling user input.

## Building the Game

Before running the game, you need to compile the TypeScript code into JavaScript. You can do this by running the following command:
This will compile the TypeScript files in the src directory and output the JavaScript files in the dist directory.

## Running the Game

To run the game, simply execute the following command in your terminal:
This will start the game and prompt you to enter a range for the random number. After specifying the range, the game will generate a random number within that range and prompt you to guess the number. You can continue guessing until you guess the correct number.

## Supported Features

The game supports the following features:

- Specifying a range for the random number
- Guessing a number within the specified range
- Providing feedback on each guess (too high, too low, or correct)
- Keeping track of the number of guesses
- Allowing the player to play again after guessing the correct number

## Example

Here's an example of how to play the game:
$ node dist/index.js? Enter the minimum number: 1 ? Enter the maximum number: 100 ? Guess a number between 1 and 100: 50 Too low! Try again. ? Guess a number between 1 and 100: 75 Too high! Try again. ? Guess a number between 1 and 100: 63 Too high! Try again. ? Guess a number between 1 and 100: 55 Too low! Try again. ? Guess a number between 1 and 100: 59 Too high! Try again. ? Guess a number between 1 and 100: 57 Congratulations! You guessed the correct number (57) in 6 guesses. Do you want to play again? Yes ? Enter the minimum number: 1 ? Enter the maximum number: 100 ? Guess a number between 1 and 100:

## Acknowledgments

Special thanks to the creators of the inquirer package for providing a simple and intuitive way to handle user input in Node.js applications.

## Feedback

If you have any feedback, suggestions, or issues with the exercises or solutions, feel free to open an issue or reach out to me directly.
account:awais123ashfaq@gmail.com
