const val = 2 == 3 //false


// if (2 > 1) {
//     console.log('this is true')
// } else {
//     console.log('this is false')
// }


// if (2 < 1) {
//     console.log('first line')
// } else if (2 === '2') {
//     console.log('second line')
// } else {
//     console.log('last line')
// }

// if (2 > 5) {
//     console.log('two is smaller number')
// }


// 4 < 3 ? console.log('yes, true') : console.log('no, false')

// 2 > 3 ? console.log('yes, true') : 2 > 1 ? console.log('yes, this is true') : console.log('no, false')


/* 

Logical Operator

- || (or)
- && (and)
- ! (not)

if (condition1 || condition2 ) {
    // run if logic
}

if (condition1 && condition2 ) {
    // run if logic
}

if (!condition) {
    // run this logic
}


*/

// if (false || true) {
//     console.log('hi')
// }

// if (true && true) {
//     console.log('hello')
// }

const count = 2

switch(true) {
    case 0:
        console.log('score is zero')
        break;
    case (count < 3):
        console.log('score is less')
        break
    case '3':
        console.log('score is three')
        break
    default:
        console.log('none of the conditions are true')
}