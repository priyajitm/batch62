// const arrayOne = new Array()

// const arrayTwo = []

// const arrayThree = ['one', 2, null, undefined, {name: 'john', age: 22}, ['data1', 'data2']]

// const newArr = ['one', 'two', 'three']

// newArr.push('four')
// newArr.pop()

// newArr.unshift('zero')
// newArr.shift()

//const arr = ['one', 'two', 'three', 'four', 'five', 1, 2, 3, 4, 5]


// // MAP
// const data = arr.map((elem, idx) => elem)
// console.log(data)
// console.log('------------1-----------')

// // FILTER
// const datan = arr.filter(elem => typeof elem == 'number') 
// console.log(datan)
// console.log('------------2-----------')
// // MAP now assigned to a constant
// const data1 = arr.map(elem => {
//     if (typeof elem == 'number') {
//         return elem
//     }
// })

// const res = arr.splice(3,1)

// const anArr = [1,21,13,4,50]

// const res = anArr.sort((a, b) => {
//     console.log('first', a, b)
//     console.log('second', a - b)
// })

// console.log(res)

// const res = anArr.sort((a, b) => a - b).reverse()

// console.log(res)

const arr = ['one', 'two']

const [one, two, three] = arr


console.log(one, two, three)