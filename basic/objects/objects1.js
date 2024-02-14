
//const user = new Object()  //creating a new object
const youUser = {}
youUser.id= "34"
youUser.name= "arif"
//console.log(youUser);  //{ id: '34', name: 'arif' }
/*
//combine the two objects
const obj1 = {1: "arif", 2: "areef"};

const obj2 = {3: "ar", 4: "af"};
const obj3 = Object.assign({}, obj1, obj2);  //or (obj1, obj2)
console.log(obj3); //{ '1': 'arif', '2': 'areef', '3': 'ar', '4': 'af' }
const obj4 ={...obj1, ...obj2} //above and below are same but this prefered mostly (easy snytax)
console.log(obj4);

console.log(youUser);  //{ id: '34', name: 'arif' }
console.log(Object.keys(youUser)); // changes to array [ 'id', 'name' ]
console.log(Object.values(youUser)); //[ '34', 'arif' ]
*/
//to check weather porporties exit or not
console.log(youUser.hasOwnProperty('name'));  //true
console.log(youUser.hasOwnProperty('na')); //false