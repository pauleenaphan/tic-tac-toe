let body = document.getElementsByClassName("board");


const board = (()=>{
    let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    //let board = [["x", "o", "x"], [4,5,6], [7,8,9]];


    //generates the board 
    for(let i = 0; i < board.length; i++){
        let sqr = document.createElement('div');
        sqr.className = "sqr";
        sqr.textContent = board[i];
        body[0].appendChild(sqr);
    }

    return board;
})();