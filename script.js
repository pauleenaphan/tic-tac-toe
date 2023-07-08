let body = document.getElementsByClassName("board");

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


console.log(playerOne.title, playerOne.turn);

function play(player){
    //rotate by player
    if(playerOne.turn == true){
        this.innerHTML = "x";
        playerOne.turn = false;
        playerTwo.turn = true;
    }else{
        this.innerHTML = "o";
        playerTwo.turn = false;
        playerOne.turn = true;
    }
    
    //check if the sqr is empty

    //check for win condition
}