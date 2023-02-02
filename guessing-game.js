function guessingGame() {
  const answer = Math.floor(Math.random() * 100);
  let numGuesses = 0;
  let isWon = false;

  return (guess) => {
    if (isWon) return "The game is over, you already won!";

    numGuesses++;

    if (guess > answer) {
      return `${guess} is too high!`;
    }
    if (guess < answer) {
      return `${guess} is too low!`;
    }

    if (guess === answer) {
      isWon = true;
      return `You win! You found ${answer} in ${numGuesses} guesses.`;
    }
  };
}

module.exports = { guessingGame };
