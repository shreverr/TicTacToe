class Button { // this will create object for an individual button(box) in our tic-tac-toe grid
    constructor(elementId, pos) {
        this.marked = false;
        this.id = elementId;
        this.position = pos;
    }

    isMarked() {
        return this.marked;
    }

    getElement() {
        return this.id;
    }

    setMark(moveNumber) { 
        if(currentMoveNumber % 2 === 0){
            this.id.innerHTML = "<img src='assets/images/X.svg'>";
            this.mark = "X";
        } else {
            this.id.innerHTML = "<img src='assets/images/O.svg'>";
            this.mark = "O";
        }
        this.marked = true;
    }
}

class TicTacToeGrid {// This is the class of all the 9 boxes 
    constructor() { 
        this.Xgrid = [false, false, false, false, false, false, false, false, false];
        this.Ogrid = [false, false, false, false, false, false, false, false, false];  
    }

    setMarkInGrid(moveNumber, position){
        if(currentMoveNumber % 2 === 0){
            this.Xgrid[position] = true;
        } else {
            this.Ogrid[position] = true;
        }
    }
}

let grid = new TicTacToeGrid();
let button1 = new Button(document.getElementById("1"), 0);
let button2 = new Button(document.getElementById("2"), 1); 
let button3 = new Button(document.getElementById("3"), 2);
let button4 = new Button(document.getElementById("4"), 3);
let button5 = new Button(document.getElementById("5"), 4);
let button6 = new Button(document.getElementById("6"), 5);
let button7 = new Button(document.getElementById("7"), 6);
let button8 = new Button(document.getElementById("8"), 7);
let button9 = new Button(document.getElementById("9"), 8);
let ticTacToeGrid = [button1, button2, button3, button4, button5, button6, button7, button8, button9];
let currentMoveNumber = 0;      // to check whos turn it is
let p1Score = 0;
let p2Score = 0;
let drawScore = 0;
const TicTacToeButton = document.querySelector('.tic-tac-toe-grid');

TicTacToeButton.addEventListener('click', event => {
    if(event.target !== event.currentTarget) {
        ticTacToeGrid.forEach(clickedButton => {
            if(event.target === clickedButton.getElement() && !clickedButton.isMarked()){
                clickedButton.setMark(currentMoveNumber);
                grid.setMarkInGrid(currentMoveNumber, clickedButton.position);
            }
        });
        checkWinner();
        currentMoveNumber++;
    }
    event.stopPropagation();
})

function checkWinner(){
    let winningPositions = [[0,1,2], [2,5,8], [6,7,8], [0,3,6], [0,4,8], [2,4,6], [1,4,7], [3,4,5]];

    for (let i = 0; i < winningPositions.length; i++) {
        if(grid.Xgrid[winningPositions[i][0]] == true && grid.Xgrid[winningPositions[i][1]] == true 
            && grid.Xgrid[winningPositions[i][2]] == true){
                p1IsWinner();
                resetBoard();
                return;
        }
    }

    for (let i = 0; i < winningPositions.length; i++) {
        if(grid.Ogrid[winningPositions[i][0]] == true && grid.Ogrid[winningPositions[i][1]] == true 
            && grid.Ogrid[winningPositions[i][2]] == true){
                p2IsWinner();
                resetBoard();
                return;
        }
    }

    if(ticTacToeGrid[0].isMarked() && ticTacToeGrid[1].isMarked() && ticTacToeGrid[2].isMarked() &&
        ticTacToeGrid[3].isMarked() && ticTacToeGrid[4].isMarked() && ticTacToeGrid[5].isMarked() &&
        ticTacToeGrid[6].isMarked() && ticTacToeGrid[7].isMarked() && ticTacToeGrid[8].isMarked() ){
            gameIsDraw();
            resetBoard();
        }
}

function p1IsWinner() {
    p1Score++;
    console.log(p1Score);
    document.getElementById("player1").innerHTML = `Player 1: ${p1Score}`;
}

function p2IsWinner() {
    p2Score++;
    document.getElementById("player2").innerHTML = `Player 2: ${p2Score}`;
}

function gameIsDraw() {
    drawScore++;
    document.getElementById("draw").innerHTML = `Draw: ${drawScore}`;
}

let resetButton = document.getElementById("reset");

resetButton.addEventListener('click', evnt => {
    resetGame();
})

function resetGame() {
    resetBoard();
    resetScore();
}

function resetBoard() {
    ticTacToeGrid.forEach(element => {
        element.marked = false;
        element.id.innerHTML = "";
    });
    debugger;
    for (let index = 0; index < grid.Ogrid.length; index++) {
        grid.Ogrid[index] = false;
        grid.Xgrid[index] = false;
    }

    console.log(grid.Ogrid);
    currentMoveNumber = 0;
}   

function resetScore() {
    p1Score = 0;
    p2Score = 0;
    drawScore = 0;
    document.getElementById("player1").innerHTML = `Player 1: ${p1Score}`;
    document.getElementById("player2").innerHTML = `Player 2: ${p2Score}`;
    document.getElementById("draw").innerHTML = `Draw: ${drawScore}`;
}
