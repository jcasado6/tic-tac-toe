let nodeList = document.querySelectorAll('.square')
let array = Array.from(nodeList)
console.log(array)

function winner() {
    if ((array[0].innerHTML === array[1].innerHTML && array[1].innerHTML === array[2].innerHTML)
    (array[3].innerHTML === array[4].innerHTML && array[4].innerHTML === array[5].innerHTML)) {
    console.log('winner') }
}


for (let i = 0; i < 9; i++) {
    let square = document.querySelectorAll('.square')
    square[i].addEventListener('click', function(evt) {
        evt.preventDefault();
        if (document.querySelector('h2').innerHTML === "Player 1") {
        evt.target.style.backgroundColor = "blue"
        evt.target.innerHTML = "x"
        evt.target.style.pointerEvents = "none"
        winner()
        document.querySelector('h2').innerHTML = 'Player 2'
        } 
        else if (document.querySelector('h2').innerHTML === "Player 2") {
        evt.target.style.backgroundColor = "red"
        evt.target.innerHTML = "o"
        evt.target.style.pointerEvents = "none"
        winner()
        document.querySelector('h2').innerHTML = 'Player 1'
        }
    })
}


// const squares = document.querySelectorAll('.square')
// const player = document.querySelector('h2')
// const container = document.querySelector('.container')

// let playerTurn = 1;

// function beginGame() {
//     container.forEach =>
//     squares.addEventListener('click', function(evt) {
//         evt.preventDefault()
//         if (playerTurn % 2 == 1 ) {
//             squares.style.backgroundColor = "blue", playerTurn ++,
//             squares.style.pointerEvents = "none"
//             document.querySelector('h2').innerHTML = "player 1"
//         } 
//         else if (playerTurn % 2 !== 1) {
//             squares.style.backgroundColor = "red", playerTurn ++,
//             squares.style.pointerEvents = "none"  
//             document.querySelector('h2').innerHTML = "player 2"
//         }
//     })
// }
// beginGame()