// function getMeMedicine () {
//     console.log('take money')
//     console.log('go out')
//     console.log('reach the store')
//     console.log('ask for med')
//     console.log('pay for the med')
//     console.log('take the med')
//     console.log('give the med')
// }
let count = 0

function addition(num1, num2) {
    const result = num1 + num2
    count = result
    return console.log(count)
}

addition(20, 2)

console.log(count)


/* 

Game Logic:
- Rock-Paper: paper Wins
- Paper-Scissor: Scissor Wins
- Scissor-Rock: Rock Wins

Steps
- take input from user (rock, scissor, paper)
- if input is empty, return an alert that input is empty
- once you have an input from user, run a computer generated input
- match the input from user and computer and run the game logic
- declare the winner and alert on screen


*/