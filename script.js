let body = document.getElementsByClassName("board");
let turnStatus = document.getElementById("turn"); //player turn status
let error = document.getElementById("error"); //sqr taken error
let count = 0; //counts the number of player turns

//module
const board = (()=>{
    const gameboard = ["0" ,"1" ,"2" ,"3" ,"4" ,"5" ,"6" ,"7" ,"8"];
    

    //generates the board 
    for(let i = 0; i < gameboard.length; i++){
        let sqr = document.createElement('div');
        sqr.className = "sqr";
        sqr.textContent = gameboard[i];
        body[0].appendChild(sqr);
        sqr.addEventListener("click", play);
    }

    const updateSqr = (sqr, player) => (gameboard[sqr] = player);
    

    return {gameboard, updateSqr};
})();


//factories
const player = (num, turn) =>{
    const title = "player " + num;
    
    return {title, turn}
}

const playerOne = player(1, true);
const playerTwo = player(2, false);

//gets index 0 of the board 


function play(){  
    //rotate by player
    if(playerOne.turn == true){
        //need to check if sqr is taken 
        if(this.innerHTML == "o"){
            error.innerHTML = "the square you chose is taken please chose another one";
        }
        //check if sqr is empty
        if(this.innerHTML != "o"){
            //when the sqr is not empty the player will be able to place a x or o
            turnStatus.innerHTML = "Player 2's turn";
            //console.log(board.gameboard.indexOf(this.innerHTML));
            board.updateSqr(board.gameboard.indexOf(this.innerHTML), 'x');
            //console.log("index: " + index);
            this.innerHTML = "x";
            playerOne.turn = false;
            playerTwo.turn = true;
            error.innerHTML = " ";

            checkBoard();
            console.log(board.gameboard);
        }
    }else{
        if(this.innerHTML == "x"){
            error.innerHTML = "the square you chose is taken please chose another one";
        }
        if(this.innerHTML != "x"){
            turnStatus.innerHTML = "Player 1's turn";
            this.innerHTML = "o";
            playerTwo.turn = false;
            playerOne.turn = true;
            error.innerHTML = " ";

            checkBoard();
        }
    }
}

function checkBoard(){
    console.log("checking board");
    //checking horizontally
    for(let i = 0; i < 9; i+=3){
        console.log("board test" + ((board.gameboard)[i]) + ((board.gameboard)[1 + i]) + ((board.gameboard)[2 + i]));
        console.log("check for matching values")
        if((board.gameboard[i]) == (board.gameboard[1 + i]) == (board.gameboard[2 + i])){
            console.log("player has won horizontally!")
            break;
        }
    }
}