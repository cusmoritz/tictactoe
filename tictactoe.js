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

function createGame() {

    for (let firstArray = 0; firstArray < game.length; firstArray++){ // create divs for  plays
        for (let nestedArray = 0; nestedArray < game[firstArray].length; nestedArray++){
            let gameSquare = document.createElement('div');
            gameSquare.dataset.index = [firstArray, nestedArray];
            console.log(gameSquare.dataset.index);
            gameBoard.appendChild(gameSquare);
            
        }
    }

}

createGame();

// make it so that when we click in a box x shows up
main.addEventListener('click', function(event){
    event.target.innerText = "X";
    let cellClicked = event.target;
    
    console.log(cellClicked);
    game[cellClicked];
})

// define whose turn it is
