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

greet = 'hello everyone' // assigning a data to the variable using assignment operator

let firstName = 'Priyajit'; 
let lastName = 'Mukherjee'
let role = 'instructor';




// hoisting

var placeName = 'New Delhi'

var placeName = 'Mumbai'

// constant
const petName = 'max'

const pi = '3.14'
const dateOfBirth = '1-1-2012'

firstName = 'john'



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
    1. Array
    2. Function
    3. Date

String 

Template String

*/


let someThingOne = 'this is a value'
let someThingTwo = "this is another value"
let somethingThree = `this is a different value`
let somethingFour = "i hate summer, as during summer it's very hot"
let somethingFive = 'i hate summer, as during summer it\'s very hot'

let myName = 'Priyajit Mukherjee'

let greeting = `Hello Mr. ${myName}`

console.log(greeting)