//objects can be created two ways
// when ever we create an object thought an constructorn we call it has singleton

//object literals
const sym = Symbol("key");
const userDeatials={
    name: "arif" ,  //key : value ;we can also change key as per need
    [sym]: "mykey",
    "newName": "areef" ,
    location: "HYD",
    email: "areefann567@gmail.com"
}

//we can acces the object in two ways
console.log(userDeatials.email);
console.log(userDeatials.name);  // it track it as string
console.log(userDeatials["name"]); 

console.log(userDeatials["newName"]);
console.log(userDeatials.newName);
/*Both ways are valid, but the bracket notation allows you to access properties dynamically using variables or expressions, while the dot notation does not.
*/
console.log(userDeatials[sym])   //o/p ->mykey

//userDeatials.email = "aree777@gmail.com"; // for changing the email in the object


//Object.freeze(userDeatials)   //prevents any modifications to an object, including changing existing properties, adding new properties, or removing existing ones.

console.log(userDeatials)

userDeatials.book = function(){
    console.log("my book")
}
console.log(userDeatials.book) //you're trying to log a function reference rather than the expected value.
console.log(userDeatials.book())  //o/p ->my book