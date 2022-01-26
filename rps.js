let round =1
let playerScore = 0
let compScore = 0
let display = document.querySelector('.display')
display.textContent = `GAME ON!!!`

// Click the button to choose player choice
let playerChoices = document.querySelector('.playerChoice')
    playerChoices.addEventListener('click', (e)=>{
        if(e.target.id === 'rock' ||
        e.target.id ==='paper'||
        e.target.id ==='scissors'){
            let playerChoice = e.target.innerText;

// Computer choice is auto generated
let compChoice = Math.random()
if (compChoice <=.33){
    compChoice='ROCK'
} else if (compChoice >.33 && compChoice <= .67){
    compChoice = 'PAPER'
} else{
    compChoice = 'SCISSORS'
}
findWinner(compChoice,playerChoice)
display.innerText = `ROUND ${round}

${compChoice} VS ${playerChoice}

${compScore} VS ${playerScore}`

// Run function to find winner base on both choices
endGame(round)
round++
}  return;
})


// Function to find winner
function findWinner (compChoice, playerChoice){
    if(compChoice === playerChoice){
        playerScore = playerScore
        compScore = compScore
        
    } else if(compChoice === 'ROCK' && playerChoice === 'PAPER'||
    compChoice === 'PAPER' && playerChoice === 'SCISSORS'||
    compChoice === 'SCISSORS' && playerChoice === 'ROCK'){
        playerScore = ++playerScore

    } else{
        compScore = ++compScore
    }
}

function endGame(round){
    if(round === 10){
        let choices = playerChoices.getElementsByTagName('*')
        for(let child of choices){
            child.disabled = true
        }
        if(compScore === playerScore){
            display.textContent=`It's a tie. Good job!`
        } else if(compScore < playerScore){
            display.textContent=`You woooon ${playerScore} over ${compScore}!`
        } else{
            display.textContent=`${compScore} KO ${playerScore}. Looooooser!`
        }; 
    }
}
    let reset = document.querySelector('#reset')
    reset.addEventListener('click',()=>{
        round =1;
        playerScore =0;
        compScore=0;
        let choices = playerChoices.getElementsByTagName('*')
        for(let child of choices){
            child.disabled = false
        }
        display.textContent = `GAME ON!!!`
    })
