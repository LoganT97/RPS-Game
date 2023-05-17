let round = 1;

document.getElementById('rock').addEventListener('click', function() {
    if (playerScore < 5 && computerScore < 5) {
        game('rock');
        round++;
        document.getElementById('round').textContent = 'Round ' + round;
    if (playerScore == 5 || computerScore == 5) {
        document.getElementById('round').innerHTML = '<button id ="playAgain" onClick="window.location.reload();">Play Again</button>';
    }
    document.getElementById('pscore').textContent = 'Player Score: ' + playerScore;
    document.getElementById('cscore').textContent = 'Computer Score: ' + computerScore;
    document.getElementById('choice').textContent = 'Computer chose ' + capitalizeFirst(computerSelection);
    if (playerScore == 5 && computerScore < 5) {
        document.getElementById('choice').textContent = win;
    } else if (playerScore <5 && computerScore == 5) {
        document.getElementById('choice').textContent = lose;
    }
}
})
document.getElementById('paper').addEventListener('click', function() {
    if (playerScore < 5 && computerScore < 5) {
        game('paper');
        round++;
        document.getElementById('round').textContent = 'Round ' + round;
    if (playerScore == 5 || computerScore == 5) {
        document.getElementById('round').innerHTML = '<button id ="playAgain" onClick="window.location.reload();">Play Again</button>';
    }
    document.getElementById('pscore').textContent = 'Player Score: ' + playerScore;
    document.getElementById('cscore').textContent = 'Computer Score: ' + computerScore;
    document.getElementById('choice').textContent = 'Computer chose ' + capitalizeFirst(computerSelection);
    if (playerScore == 5 && computerScore < 5) {
        document.getElementById('choice').textContent = win;
    } else if (playerScore <5 && computerScore == 5) {
        document.getElementById('choice').textContent = lose;
    }
}
})
document.getElementById('scissors').addEventListener('click', function() {
    if (playerScore < 5 && computerScore < 5) {
        game('scissors');
        round++;
        document.getElementById('round').textContent = 'Round ' + round;
    if (playerScore == 5 || computerScore == 5) {
        document.getElementById('round').innerHTML = '<button id ="playAgain" onClick="window.location.reload();">Play Again</button>';
    }
    document.getElementById('pscore').textContent = 'Player Score: ' + playerScore;
    document.getElementById('cscore').textContent = 'Computer Score: ' + computerScore;
    document.getElementById('choice').textContent = 'Computer chose ' + capitalizeFirst(computerSelection);    
    if (playerScore == 5 && computerScore < 5) {
        document.getElementById('choice').textContent = win;
    } else if (playerScore <5 && computerScore == 5) {
        document.getElementById('choice').textContent = lose;
    }
}
})

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getComputerChoice() {
    const randomnumber = Math.floor(Math.random()*3);
        switch (randomnumber) {
            case 0:
            return 'rock';
            case 1:
            return 'paper';
            case 2:
            return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
        if (playerSelection === 'rock' && computerSelection === 'scissors') {
            return 'You Win!';
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            return 'You Win!';
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            return 'You Win!';
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            return 'Computer Wins!';
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            return 'Computer Wins!';
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            return 'Computer Wins!';
        } else if (playerSelection === computerSelection) {
            return "It's a Tie!";
        }
        
}

let playerScore = 0;
let computerScore = 0;
let computerSelection;
let win;
let lose;


function game(a) {
        const playerSelection = a;
        computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        if (result === 'You Win!') {
            playerScore++;
        } else if (result === 'Computer Wins!') {
            computerScore++;
        } else if (result === "It's a Tie!") {
            console.log('no points')
        }
        if (playerScore == 5 || computerScore == 5 && playerScore > computerScore) {
        win = ('You are the overall winner!');
    } else if (playerScore == 5 || computerScore == 5 && computerScore > playerScore) {
        lose = ('The computer is the overall winner!');
    } else if (playerScore == 5 || computerScore == 5 && computerScore == playerScore) {
        alert('Tie Game!')
    }
    }

