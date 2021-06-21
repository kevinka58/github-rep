/*----- constants -----*/
// variables that are not going to be re-assigned

let gridRow = document.getElementsByTagName('tr');
let gridCell = document.getElementsByTagName('td');
let circle = document.getElementsByClassName('grid-item');
const player = document.getElementsByClassName('current-player');
const result = document.getElementById('result')


/*----- app's state (variables) -----*/
let player1
let player2 

player1Color = 'red';
player2Color = 'yellow';

let currentPlayer = 1;
player.currentPlayer = `${player1}'s turn!`;

/*----- cached element references -----*/
const p1ScoreEl = document.querySelector('#player1 h2')
const tScoreEl = document.querySelector('#tie h2')
const p2ScoreEl = document.querySelector('#player2 h2')

/*----- event listeners -----*/

for( let i = 0; i < gridCell.length; i++) {
    gridCell[i].addEventListener('click', (e) => {
        console.log(`${e.target.parentElement.rowIndex}, ${e.target.cellIndex}`)
    })
}

Array.prototype.forEach.call(gridCell, (cell) =>{
    cell.addEventListener('click', colorChange);
        cell.style.backgroundColor = 'white';
    })

/*----- functions -----*/

function colorChange(e){
    let column = e.target.cellIndex;
    let row = [];

    for(let i = 5; i > -1; i--){
        if (gridRow[i].children[column].style.backgroundColor == 'white'){
            row.push(gridRow[i].children[column]);
            if(currentPlayer === 1){
                row[0].style.backgroundColor = player1Color;
                player.currentPlayer = `${player2}'s turn!`;
                return currentPlayer = 2;
            } else {
                row[0].style.backgroundColor = player2Color; 
                return currentPlayer = 1;
                }
            }
        }
    }


