class Button { // this will create object for an individual button(box) in our tic-tac-toe grid
    constructor(elementId) {
        this.mark = "";
        this.marked = false;
        this.id = elementId;
    }

    isMarked() {
        return this.marked;
    }

    getMark() {
        return this.mark;
    }

    getId() {
        return this.id;
    }

    setMark(moveNumber) { 
        if(currentMoveNumber % 2 === 0){
            this.id.innerHTML = "<img src='assets/images/O.svg'>";
            this.mark = "O";
        } else {
            this.id.innerHTML = "<img src='assets/images/X.svg'>";
            this.mark = "X";
        }
        this.marked = true;
    }
}

// class TicTacToeGrid {// This is the class of all the 9 boxes 
//     constructor() { // idk how to shorten this repetetive code
//         this.button1 = new Button(document.getElementById("1"));
//         this.button2 = new Button(document.getElementById("2")); 
//         this.button3 = new Button(document.getElementById("3"));
//         this.button4 = new Button(document.getElementById("4"));
//         this.button5 = new Button(document.getElementById("5"));
//         this.button6 = new Button(document.getElementById("6"));
//         this.button7 = new Button(document.getElementById("7"));
//         this.button8 = new Button(document.getElementById("8"));
//         this.button9 = new Button(document.getElementById("9"));
//     }
// }
//
// let grid = new TicTacToeGrid();

let button1 = new Button(document.getElementById("1"));
let button2 = new Button(document.getElementById("2")); 
let button3 = new Button(document.getElementById("3"));
let button4 = new Button(document.getElementById("4"));
let button5 = new Button(document.getElementById("5"));
let button6 = new Button(document.getElementById("6"));
let button7 = new Button(document.getElementById("7"));
let button8 = new Button(document.getElementById("8"));
let button9 = new Button(document.getElementById("9"));

let ticTacToeGrid = [button1, button2, button3, button4, button5, button6, button7, button8, button9];
let currentMoveNumber = 1; // to check whos turn it is
const TicTacToeButton = document.querySelector('.tic-tac-toe-grid');

TicTacToeButton.addEventListener('click', event => {
    if(event.target !== event.currentTarget) {
        ticTacToeGrid.forEach(clickedButton => {
            if(event.target === clickedButton.getId() && !clickedButton.isMarked()){
                clickedButton.setMark(currentMoveNumber);
            }
        });
        currentMoveNumber++;
    }
    event.stopPropagation();
})