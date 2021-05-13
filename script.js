// creating board
let board = [
    [ "_", "_", "_" ],
    [ "_", "_", "_" ],
    [ "_", "_", "_" ]
]

// player name
let player = "x";

// game loop
while(true){
    let boardStr = board[0].join("   ") + 
    "\n" + board[1].join("   ") +   // creating string of board
    "\n" + board[2].join("   ");

    alert("You are " + player + " player !")
    
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




