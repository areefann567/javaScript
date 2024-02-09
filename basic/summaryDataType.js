/*
JavaScript is a dynamically typed language.
variable types are determined at runtime, meaning you don't need to specify the data type of a variable 
*/
//data types are are divided in such how the data is stored how we can access them
/*
primitive data type
Call by value means that when a value is passed from one variable to another, a copy of the data is made, rather than a reference to the memory location where the data is stored

7 types: String, Number, Boolean,null,Symbol,undefined,BigInt

*/
const id = Symbol('111');
const anotherId = Symbol('111');

console.log(id === anotherId); // Output: false

/*
non-primitive data type(reference type)

Call by reference means that when a value is passed from one variable to another, a reference to the memory location where the data is stored

Array, object,function
*/
