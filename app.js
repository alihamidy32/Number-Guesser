let min = 1,
    max = 10,
    winningNum = getRandomNum(min , max),
    guessesLeft = 3;


    const game = document.querySelector('#game'),
          minNum = document.querySelector('.min-num'),
          maxNum = document.querySelector('.max-num'),
          guessBtn = document.querySelector('#guess-btn'),
          guessInput = document.querySelector('#guess-input'),
          message = document.querySelector('#msg');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown' , function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});

guessBtn.addEventListener('click' , function(){
  let guess = parseInt(guessInput.value);
  if(isNaN(guess) || guess < min || guess > max ){
    setMessage(`please right number between ${min} and ${max}` , 'red');
  }else{
    if(guess === winningNum){
      gameOver(true , `congratulation...You win. ${winningNum} is correct`)
    }else{
      guessesLeft -= 1;
      if(guessesLeft === 0){
        gameOver(false , `${guess} is NOT correct ,you lost last chance:( the correct number is ${winningNum}`)
      }else{
        guessInput.value = '';
         guessInput.style.borderColor = 'red';
         message.style.color = 'red';
        setMessage(`${guess} is NOT Correct!!!becarefull you have also ${guessesLeft} chance `)
      }
    }
  }
});

function gameOver(won , msg){
  let color;
   won === true ? color = 'green' : color = 'red';

  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg);
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}
function getRandomNum(min , max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

function setMessage(msg , color){
  message.textContent = msg;
  message.style.color = color;
}
