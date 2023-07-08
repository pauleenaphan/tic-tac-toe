let body = document.getElementsByClassName("board");
let turnStatus = document.getElementById("turn");
let error = document.getElementById("error");

//module
const board = (()=>{
    let board = [" " ," " ," " ," " ," " ," " ," " ," " ," " ,];
    //let board = [["x", "o", "x"], [4,5,6], [7,8,9]];


    //generates the board 
    for(let i = 0; i < board.length; i++){
        let sqr = document.createElement('div');
        sqr.className = "sqr";
        sqr.textContent = board[i];
        body[0].appendChild(sqr);
        sqr.addEventListener("click", play);
    }
})();

//factories
const player = (num, turn) =>{
    const title = "player " + num;
    
    return {title, turn}
}

const playerOne = player(1, true);
const playerTwo = player(2, false);

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
}

