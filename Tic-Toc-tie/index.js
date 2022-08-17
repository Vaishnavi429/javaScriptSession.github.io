let boxes = document.getElementsByClassName('box');
let showTurnP = document.getElementById('ShowTurn')

let player = 'o'
const HandlePlayer = () => {
    if (player == 'x') {
        player = 'o'
        showTurnP.innerText = 'Turn: Player 1'
    } else {
        player = 'x'
        showTurnP.innerText = 'Turn: Player 2'
    }
    return player
}
const wonPlayerChecking=()=>{
    let wonArray  = [[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]]
    wonArray.forEach(possible=>{
        if((boxes[possible[0]].innerText === boxes[possible[1]].innerText) &&(boxes[possible[1]].innerText === boxes[possible[2]].innerText) && boxes[possible[0]].innerText !=='')
        {
           showTurnP.innerHTML ='WON'
        }
    })
}


Array.from(boxes).forEach(Element => {
    Element.addEventListener('click', () => {
        if (!Element.innerText) {
            Element.innerText = HandlePlayer()
            wonPlayerChecking()
        }
    })
})

