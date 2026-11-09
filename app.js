const sqrEl=document.querySelectorAll(".sqr")
const messEl=document.querySelector(".message")
const resetBtn=document.querySelector(".reset")
const allOptions=
[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let board
let player
let winner=false

const init=()=>
{
    board=['','','','','','','','','']
    player="X"
    winner=false
    call()
}

const call =()=>{
    update()
    messageFun()
}

const update=()=>{
    board.forEach((element,item) => {
        sqrEl[item].textContent= element
    });
}

const messageFun=()=>{
    if (winner===false){
        messEl.textContent=`its ${player} turn`
    }
    else{ messEl.textContent=`${winner} is the winner congrats ohhhho`}
       
}

const checkWhoWin=()=>{
    allOptions.forEach((options)=>{
        const first=options[0]
        const second=options[1]
        const thired=options[2]
        if(board[first]!==''&&board[first]==board[second]&&
            board[second]==board[thired]
        )
        {
            winner=true
        }
    })
}

sqrEl.forEach((item,val) =>{
    item.addEventListener('click', () => {
        if (board[val] !== '' || winner !== false) {
          return;
        }
        board[val]=player
        checkWhoWin()
        
        if (winner === false) {
            if(player==="X"){
                player="O"
            }
            else
                player="X"
        }

        call()
    })
})

if (resetBtn) {
    resetBtn.addEventListener('click', init)
}

init()