// create game board within html"body"
let main = document.getElementById('main'); 

let gameBoard = document.createElement('div');
gameBoard.className = "gameBoard";

main.appendChild(gameBoard);


//   0,0   0,1   0,2
//   1,0   1,1   1,2
//   2,0   2,1   2,2
let game = [
    [null, null, null],
    [null, null, null], 
    [null, null, null]
]

// let game = {
//     1: null,
//     2: null,
//     3: null,
//     4: null,
//     5: null,
//     6: null,
//     7: null,
//     8: null,
//     9: null
// }

let firstArray;
let secondArray;

function createGame() {

    for (firstArray = 0; firstArray < game.length; firstArray++){ // create divs for  plays
        for (secondArray = 0; secondArray < game[firstArray].length; secondArray++){
            let gameSquare = document.createElement('div');

            gameSquare.dataset.index = [firstArray + secondArray];

            gameBoard.appendChild(gameSquare);
            console.log(gameSquare.dataset.index);

            // game[firstArray][secondArray] = "X";
            // console.log(game);
            
        }
    }
}

createGame();

// make it so that when we click in a box x shows up

main.addEventListener('click', function(event){
    let cellClicked = event.target;
    cellClicked.innerText = "X";

    // console.log(cellClicked.dataset.index);
    
    let firstValue;
    let secondValue;

    for (let k = 0; k < cellClicked.dataset.index[0]; k++){
        firstValue = cellClicked.dataset.index[k];
        console.log(firstValue);

        if (cellClicked.dataset.index[k] === 0) {
        for (let j = 0; j < cellClicked.dataset.index[k]; j++)
        firstValue = cellClicked.dataset.index[k];
        secondValue = cellClicked.dataset.index[k][j];
        console.log(cellClicked.dataset.index[k][j]);
        }
    }

    // console.log(cellClicked.dataset.index[0]);

    // console.log(cellClicked.dataset.index[0][0]);

    // console.log(firstArrayValue);
    // console.log(secondArrayValue);

    // return both parts of our dataset array

    // and update our game array

    // game[firstArrayValue][secondArrayValue] = cellClicked.innerText;
    // console.log(game);
})

// define whose turn it is
