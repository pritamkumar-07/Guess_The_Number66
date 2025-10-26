let randomnum= parseInt(Math.random() * 100 + 1)

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const prevguess = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const loworhi = document.querySelector(".lowOrHi");
const Startover = document.querySelector(".resultParas")

const p = document.createElement('p');

let previousGuess = []
let numguess = 1;

let Playgame = true;

if(Playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
         const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
        if(isNaN(guess)){
            alert(`please enter a valid number`)
        }else if(guess < 0){
            alert(`please enter a number greater tham one`)
        }else if(guess > 100){
            alert(`please enter a number smaller than 100`)
        }else{
            previousGuess.push(guess)
            if(numguess === 11)
            {
                DisplayGuess(guess)
                DisplayMessage(`game over the random number was  ${randomnum}`)
                endGame()
            }
            else{
                DisplayGuess(guess);
                checkGuess(guess);
            }
        }
    }

function checkGuess(guess){
            if(guess === randomnum){
                DisplayMessage(`you guessed it right`)
                endGame()
            }
            else if(guess > randomnum){
                DisplayMessage(`your number is too high`)
            }
            else if(guess < randomnum){
                DisplayMessage(`your number is too low`)
            }
            
}
function DisplayGuess(guess){
   userInput.value=''
   prevguess.innerHTML += `${guess}  `
   numguess++;
   remaining.innerHTML = `${11-numguess}`
}

function DisplayMessage(message){
    loworhi.innerHTML = `<h2>${message}</h2>`

}

function endGame(){
   userInput.value=''
   userInput.setAttribute('disabled','')
   p.classList.add('button')
   p.innerHTML = `<h2 id="newGame" > Start new Game</h2> `
   Startover.appendChild(p)
console.log("h");
   Playgame = false
        newGame();
        console.log("t");
}

function newGame(){
const  newgame=document.querySelector('#newGame')
 newgame.addEventListener('click',function(e){
  randomnum =parseInt(Math.random() * 100 + 1)
  previousGuess=[]
  numguess=1;
  loworhi.innerHTML=''
  prevguess.innerHTML =''
  remaining.innerHTML = `${11-numguess}`
  userInput.removeAttribute('disabled')
  Startover.removeChild(p)
  Playgame = true;
 })


}
