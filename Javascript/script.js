//! TYPES OF PRINTING STATEMENTS
// 1) console.log()
// 2) document.write() <------ deprecate
// 3) document.writeln() <---- deprecate

//! TOKEN :  Smallest unit of any programming language
// There are 4 types of tokens

// 1) keywords : are the reserved words. ex: for, if , class, etc

// 2) identifier : name given to variables, methods, class, functions

// 3) literals :  values that are stored in a variable

// 4) operator :  symbols used to perform some specific operations

//! DATATYPES : Which type of data we store in a variable
// There are 2 types:

//! 1) PRIMITIVE : (immutable | call by value )
// // number
// var a1 = 10.9;
// console.log(a1, typeof a1); // 10.9 number

// // string
// var a2 = "Hello";
// console.log(a2, typeof a2); // Hello string

// // boolean
// var a3 = true;
// console.log(a3, typeof a3); // true boolean

// // undefined
// var a4;
// console.log(a4, typeof a4); // undefined undefined

// // null
// var a5 = null;
// console.log(a5, typeof a5); // null object

// // bigint : (-2^53 - 1 to 2^53 - 1)
// var a6 = 9n;
// console.log(a6, typeof a6);

// // symbol
// var s1 = Symbol("Hello");
// var s2 = Symbol("Hello");

// console.log(s1, typeof s1); // Symbol(Hello) 'symbol'
// console.log(s2, typeof s2); // Symbol(Hello) 'symbol'

// console.log(s1 == s2); // false

// console.log(10 == "10"); // true
// console.log(10 === "10"); // false

//! 2) NON-PRIMITIVE : (mutable | call by reference )
// array
// object
// function

//! MUTABLE VS IMMUTABLE
var arr = [10, 20, 30];
arr[0] = 100;
console.log(arr); // [100, 20, 30]

var str = "Hello";
str[0] = "X";
console.log(str); // Hello
