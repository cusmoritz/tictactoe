let siteMain = document.getElementById('main'); // get main element

let gameBoard = document.createElement('div'); // put a game board inside
gameBoard.classList.add('gameboard');

siteMain.appendChild(gameBoard);

let game = { // create game object
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: ""
}

function createGame(){

for (let i = 0; i < 9; i++){ // create 9 game squares
    let gameSquare = document.createElement('div');

    gameSquare.classList.add('cell'); // each square is a cell class

    gameSquare.id = i + 1; // each cell is also an id of 1-9 (matching our game obj)

    gameBoard.appendChild(gameSquare); // PUT GAME squares inside gameboard
}
whoTurn();
}

createGame();


//define turn
function whoTurn (){

    let nextPlayer = ""
    let lastPlayer = "";

    if (lastPlayer === ""){
        nextPlayer = "X"
    } else {
        nextPlayer = "O";
    }
    // alert(`It is ${nextPlayer}'s turn.`);
    
}


    gameBoard.addEventListener('click', function(event){
        let cellClicked = event.target;
        cellClicked.innerText = "X";
    })

