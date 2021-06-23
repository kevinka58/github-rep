// /*----- constants -----*/
// variables that are not going to be re-assigned

let gridRow = document.getElementsByTagName('tr');
let gridCell = document.getElementsByTagName('td');
const player = document.getElementsByClassName('current-player');
const result = document.getElementById('result')

const playerOption =['player1', 'player2']

const token = {
    player1: {
        item: 1
    },
    player2: {
        item: -1
    },
    empty: {
        item: 0
    }

}

/*----- app's state (variables) -----*/
let player1
let player2
let winner

const gameBoard = [
    [0, 0, 0, 0, 0, 0, 0]
    [0, 0, 0, 0, 0, 0, 0]
    [0, 0, 0, 0, 0, 0, 0]

]

// player1Color = 'red';
// player2Color = 'yellow';

// let currentPlayer = 1;
// player.currentPlayer = `${player1}'s turn!`;

/*----- cached element references -----*/
const p1ScoreEl = document.querySelector('#player1 h2')
const tScoreEl = document.querySelector('#tie h2')
const p2ScoreEl = document.querySelector('#player2 h2')

/*----- event listeners -----*/
// gridCell.addEventListener('click', function(event){
// console.log(event.target)
// })
// This allows us to iterate through the rows and and respond to a click event

/*----- functions -----*/

function initilization() {
    scores = {
        player1: 0,
        player2: 0,
        tie: 0
    }

    winner = null
    render()
}
function getWinner() {
    return 
}


const board = [0, 1, 0, 0, 2, 0, 0]
function render() {
	// every time the board state changes, invoke this function
	gameBoard.forEach((gridCell, idx) => {
        gridCell.addEventListener('click', function(event){
            console.log(event.target)
            })
		document.querySelector(`#${idx}`).style.color = handleColor(gridCell);
	})
}
function handleColor(playerSel) {
	// returns a string for the right color of a gridcell
	// 0 returns white
	// 1 returns blue
	// 2 returns red
	if (playerSel === 1) {
		return 'blue'
	} else if (playerSel === 2) {
		return 'red'
	} else {
		return 'white'
	}
}
