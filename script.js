let body = document.getElementsByClassName("board");
let turnStatus = document.getElementById("turn"); //player turn status
let error = document.getElementById("error"); //sqr taken error
let count = 0; //counts the number of player turns

//module
const createBoard = (()=>{
    const board = [" 1" ," " ," " ," " ," " ," " ," " ," " ," "];

    //generates the board 
    for(let i = 0; i < board.length; i++){
        let sqr = document.createElement('div');
        sqr.className = "sqr";
        sqr.textContent = board[i];
        body[0].appendChild(sqr);
        sqr.addEventListener("click", play);
    }

    return {board};
})();


//factories
const player = (num, turn) =>{
    const title = "player " + num;
    
    return {title, turn}
}

const playerOne = player(1, true);
const playerTwo = player(2, false);

console.log((createBoard.board)[0]);

function play(){  
    //rotate by player
    if(playerOne.turn == true){
        //need to check if sqr is taken 
        if(this.innerHTML != " "){
            error.innerHTML = "the square you chose is taken please chose another one";
        }
        //check if sqr is empty
        if(this.innerHTML == " "){
            //when the sqr is not empty the player will be able to place a x or o
            turnStatus.innerHTML = "Player 2's turn";
            this.innerHTML = "x";
            console.log((createBoard.board)[createBoard.board.indexOf(this.innerHTML)]);
            playerOne.turn = false;
            playerTwo.turn = true;
            error.innerHTML = " ";
        }
    }else{
        if(this.innerHTML != " "){
            error.innerHTML = "the square you chose is taken please chose another one";
        }
        if(this.innerHTML == " "){
            turnStatus.innerHTML = "Player 1's turn";
            this.innerHTML = "o";
            playerTwo.turn = false;
            playerOne.turn = true;
            error.innerHTML = " ";
        }
    }
    count++;

    // if(count == 9){
    //     for(let i = 0; i <= 8; i++){
    //         console.log((createBoard.board)[i]);
    //     }
    // }
    //console.log(createBoard.board);
}

