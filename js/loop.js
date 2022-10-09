/*
Loops

- While Loop
- Do While Loop
- For Loop
- For In Loop
- For Of Loop

*/

let count = 10

while (count < 10) {
    console.log(count)
    count++
}

// do {
//     console.log(count)
// } while(count < 10)


/* 

variable declaration

while (condition based on the declared variable) {
    if the condition is true, the logic here will run
    if the condition is false, the logic won't run
}


do {
    step 1 - the logic will run and then will check for the condition
    step 2 - if condition is true, this logic will run again until the condition is false
    step 3 - if the condition is false, this logic won't run
} while (condition)


for (variable declaration ; condition ; step(increment)) {
    logic will run only if the condition is true
}


*/


for (let num = 0; num < 3; num++) {
    console.log('num:', num)
    if (num ==1) break
    for (let count = 0; count < 3; count++) {
        console.log('count:', count)
        if(count == 1) break
    }
}
