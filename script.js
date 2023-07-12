let body = document.getElementsByClassName("board");
let turnStatus = document.getElementById("turn"); //player turn status
let error = document.getElementById("error"); //sqr taken error
let winmsg = document.getElementById("winmsg"); //msg when a player wins
let count = 0; //counts the number of player turns
let rematch = document.getElementById("rematch"); //rematch button
let sqrs = document.querySelector("board");


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


rematch.addEventListener("click", display);

function display(){
    //clear the board
    for(let i = 0; i < 9; i++){
        (board.gameboard[i]) = i;
    }
    //now remove rematch button anymore
    rematch.style.visibility = "hidden";
    console.log(board.gameboard);
    for(let i = 0; i < 9; i++){
        //console.log(body[i]);
        sqrs.style.color = "lightpink";
    }
}


function play(){  
    winmsg.innerHTML = ("Game in Progress");
    //rotate by player
    if(playerOne.turn == true){
        //need to check if sqr is taken 
        if(this.innerHTML == "o"){
            error.innerHTML = "the square you chose is taken please chose another one";
        }
        //check if sqr is empty
        if(this.innerHTML != "o"){
            //when the sqr is taken by the other player
            turnStatus.innerHTML = "Player 2's turn";
            //the board will update with the player value
            board.updateSqr(board.gameboard.indexOf(this.innerHTML), 'x');
            this.innerHTML = "x";

            //changes player turn 
            playerOne.turn = false;
            playerTwo.turn = true;
            error.innerHTML = " ";

            //adds x onto the board by changing the color
            this.style.color = "black";

            //checks the board to see if a player has won yet
            checkBoard(1);
        }
    }else{
        if(this.innerHTML == "x"){
            error.innerHTML = "the square you chose is taken please chose another one";
        }
        if(this.innerHTML != "x"){
            turnStatus.innerHTML = "Player 1's turn";
            board.updateSqr(board.gameboard.indexOf(this.innerHTML), 'o');
            this.innerHTML = "o";

            playerTwo.turn = false;
            playerOne.turn = true;

            error.innerHTML = " ";
            this.style.color = "black";
            checkBoard(2);
        }
    }
    count++;
    if(count == 9){
        //match is a tie
        winmsg.innerHTML = ("You are both losers!");
        turnStatus.innerHTML = " ";
        rematch.style.visibility = "visible";
    }
}

function checkBoard(player){
    //checking horizontally
    for(let i = 0; i < 9; i+=3){
        if((board.gameboard[i]) == (board.gameboard[1 + i]) && (board.gameboard[i]) == (board.gameboard[2 + i])){
            winmsg.innerHTML = ("Player " + player + " has won horizontally!");
            turnStatus.innerHTML = " ";
            rematch.style.visibility = "visible";
            break;
        }
    }

    //checking vertically
    for(let i = 0; i < 3; i++){
        if((board.gameboard[i]) == (board.gameboard[3 + i]) && (board.gameboard[i]) == (board.gameboard[6 + i])){
            winmsg.innerHTML = ("Player " + player + " has won vertically!");
            turnStatus.innerHTML = " ";
            rematch.style.visibility = "visible";
            break;
        }
    }

    //checking diagonally
    if(((board.gameboard[0]) == (board.gameboard[4]) && (board.gameboard[0]) == (board.gameboard[8])) || ((board.gameboard[2]) == (board.gameboard[4]) && (board.gameboard[2]) == (board.gameboard[6]))){
        winmsg.innerHTML = ("Player " + player + " has won diagonally!");
        turnStatus.innerHTML = " ";
        rematch.style.visibility = "visible";
    }
}


