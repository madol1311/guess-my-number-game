'use strict';

let secretNumber = Math.trunc(Math.random() * 25) + 1;

let score = 25;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  /* const refreshPage = () => {
    location.reload();
  };
  document.querySelector('.again').addEventListener('click', refreshPage);
  //ne može ovako jer se refresha i highscore
  */

  document.querySelector('.again').addEventListener('click', function () {
    score = 25;
    secretNumber = Math.trunc(Math.random() * 25) + 1;
    displayMessage('Start guessing...');
    displayNumber('?');
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#163429';
    document.querySelector('.number').style.width = '15rem';
  });

  if (!guess) {
    //ako je prazan input guess je 0 tj falsy value pa stavimo ! da se executa
    displayMessage('No number!🛑');
  } else if (guess === secretNumber) {
    displayMessage('Correct number!👌');
    displayNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? 'Number too high!⬇️' : 'Number too low!⬆️'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game😒');
      document.querySelector('.score').textContent = 0;
    }
  }
});
