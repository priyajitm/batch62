/* 
This is a multiline comment
we can add another line here as well
*/

// "use strict"
// alert('Hello from external file');
// alert('how are you?')

// Variables

//var phoneType = undefined;

let greet = undefined; // variable data declared

greet = "hello everyone"; // assigning a data to the variable using assignment operator

// let firstName = 'Priyajit';
// let lastName = 'Mukherjee'
// let role = 'instructor';

// hoisting

// var placeName = 'New Delhi'

// var placeName = 'Mumbai'

// constant
// const petName = 'max'

// const pi = '3.14'
// const dateOfBirth = '1-1-2012'

// firstName = 'john'

//petName = 'shiro'

/* 
var - let - const

VAR
1. var is the old way to declare variables
2. we can re-assign values to a variable declared using var
3. we can re-declare variable name using var

LET
1. let is the new way in practice to declare variable 
2. we can re-assign values to a variable declared using let 
3. we cannot re-declare variable name using let

CONST
1. const is the new way in practice to declare variable that have a constant/fixed value
2. we cannot re-assign values to a variable/constant declared using const 
3. we cannot re-declare variable name using const


VAR
if called a variable declared using var before initialization, we get it's value as undefined
if initialized before calling the variable, we get it's value as undefined

LET
if called a variable declared using var before initialization, we get a referenceError
if initialized before calling the variable, we get it's value as undefined

CONST
if called a variable declared using var before initialization, we get a referenceError
you CANNOT declare a constant without initializing it with a value

TEMPORAL DEAD ZONE

Data Types

- Primitives

1. String
2. Numbers
3. Boolean
4. undefined
5. null
6. bigInt
7. symbol

- Reference

1. Object
2. Array
3. Function
4. Date

String 

Template String

*/

// let someThingOne = 'this is a value'
// let someThingTwo = "this is another value"
// let somethingThree = `this is a different value`
// let somethingFour = "i hate summer, as during summer it's very hot"
// let somethingFive = 'i hate summer, as during summer it\'s very hot'

// let myName = 'Priyajit Mukherjee'

// let greeting = `Hello Mr. ${myName}`

// const count = 2
// const price = 5.99

// const totalPrice = count * price

// const totalPriceNew = count * 'price'

// const res = 2 / 0

// const isSunday = false
// const isSaturday = true

// const age = undefined
// let address;

// const job = undefined || null

// const newString = 'hello'
// const newNum = 2
// const newBool = false
// let newUndef;
// const newNull = null

/* 
Falsy Values:

- false
- undefined
- null
- ''
- 0
-NaN


*/

// const someNum = 25
// const someOtherNum = 2

// const resOne = ''

//const response = prompt('What is your name?', 'First Name', 'another parameter')

// const response = confirm('Are you above 18?')
// console.log(response)

// console.log(`This is my score: ${someNum}`)

// const someStr = 200

// const resNew = Number(someStr)
// const resNew = parseInt(someStr)

// const resNew = String(someStr)
// const resNew = someStr.toString()

// console.log(Boolean(0))

/* 
Object Data Type

// Object Constructor
let firstObj = new Object()

// Object Literal
let secondObj = {} 

// Object - key:value pair
const player = { 
    name: 'john',
    age: '18'
}

Dot Notation
player.sports

Bracket Notation
player['sports']

*/

let ageKeyName = "old";

//delete player.age
//player['age'] = 20

// player.spouse = 'jane doe'
// player['children'] = null

// player.age = 19
// player['in Current Team'] = false

// delete player.netWorth
// delete player['children']

// Player is added to the league and has assigned a Team
// Player is a added to the league and has not been assigned a team
// Player is not in the league

const player = {
  name: "john doe",
  [ageKeyName]: 17,
  sports: "football",
  "in Current Team": true,
  teamName: undefined,
  netWorth: null,
  key: "lala",
};

for (key in player) {
  console.log("Object Keys", key);
}

for (key in player) {
  console.log("Object Key Values", player[key]);
}
