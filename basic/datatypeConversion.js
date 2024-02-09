let result = 24;

console.log(typeof result) // number

let score  = "24";
console.log(typeof score)  // string
let valueInNuber =  Number(score)
console.log(typeof valueInNuber)   //number

//but
//there is no granent that we have input as number
let newScore = "23aa";
console.log(typeof newScore)  //string

let valueInNuber2 =  Number(newScore)
console.log(typeof valueInNuber2)   //number
console.log(valueInNuber2)          //o/p ->NaN(not a number)
//while covernting Number
//"23" ==> 23
//"23aa"==>NaN
//true =>1; false =>0