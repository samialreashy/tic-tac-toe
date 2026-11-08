//this like a list contain all possibles numbers to win 

const   sqEl=document.querySelectorAll(".sqr")
const   mesgEl=document.querySelector("#message")
const   resetBtn=document.querySelector("#reset")
let board   
let turn   
let winner


const allOptionsTowin=
[
  [0,1,2], 
  [3,4,5], 
  [6,7,8], 
  [0,3,6], 
  [1,4, 7], 
  [2,5, 8], 
  [0,4, 8], 
  [2,4, 6]  
];

function init(){
board=['', '', '', '', '', '', '', '', '']
 turn="X"
winner=false
call()
}


function call(){

    update()
    updateMes()
}
resetBtn.addEventListener("click", () => {
  init()
})

function update() {
  board.forEach((val, element) => {
    sqEl[element].textContent = val
  })
}

function updateMes(){
    if(winner===false){
        mesgEl.textContent=`its ${turn} turn`

    }
else{
        mesgEl.textContent=`${winner} wins`
    }
}
function checkWinner() {
  allOptionsTowin.forEach((option) => {
    const first = option[0]
    const second = option[1]
    const third= option[2]

    if (
      board[first] !== "" &&
      board[first] === board[second] &&
      board[second] === board[third]
    ) {
      winner = board[first]
    }
  })
}









sqEl.forEach((square,item) => {
  square.addEventListener("click", () => {
    if(board[item] !== ""|| winner !=false){
        return
    }
board[item] = turn
checkWinner()
if(turn==="X"){
    turn="O"
}
else{
    turn="X"
}
    call()
  })
})


init()