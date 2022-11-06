// function getMeMedicine () {
//     console.log('take money')
//     console.log('go out')
//     console.log('reach the store')
//     console.log('ask for med')
//     console.log('pay for the med')
//     console.log('take the med')
//     console.log('give the med')
// }


// Function - First Class Citizen

let isLoggedIn = false

function greetUser () {
    console.log('Hello! How are you?')
}


function takeInput(statement, task) {
    if (statement) {
        task()
    }
}



takeInput(isLoggedIn, greetUser)


const greetUserTwo = (username) => {
    console.log('Hello! ' + username)
    console.log('welcome')
}




const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function functionName (...params) {
    console.log(params)
    const initialVal = 0
    const res = params.reduce((accumulator, currentItem, currIndex, array) => 
       accumulator + currentItem, initialVal
    )
   
    console.log(res)
   
}

// functionName(...values)

// Rest => Creates an array with all the values
// Spread => Take values out of an array/object

const someObj = {
    a: 1,
    b: 2,
    c: 3
}

const ll = {...someObj}

ll['b'] = 20

console.log(someObj)
console.log(ll)