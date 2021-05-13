let board = [
    [ "_", "_", "_" ],
    [ "_", "_", "_" ],
    [ "_", "_", "_" ]
]

let player = "x";

while(true){
    let boardStr = board[0].join("   ") + 
    "\n" + board[1].join("   ") + 
    "\n" + board[2].join("   ");

    let row = +prompt("Type row: \n" + boardStr)
    let column = +prompt("Type columns: \n" + boardStr)

    if(board[row][column] !== "_"){
        alert("Dont do it!!")
        break;
    }

    board[row][column] = player;
    
    if(player === "x"){
        player = "o";
    }else{
        player = "x";
    }
}




