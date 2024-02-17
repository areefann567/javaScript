function studentDet(val1,val2,...valz){
    return valz     // val1->12 val2->13
}
//console.log(studentDet(12,13,5));   // valz--> [5]      val1->12 val2->13
//... (rest parameter) -->It allows a function to accept an indefinite number of arguments as an array

const members = {
    name: "arif",
    rollno: 12,
    city: "Hyderabad"
}
function result(ex){
    console.log(`${ex.name}`);
}

//result(members);   //o/p->arif  or

result({name: "areef", rollno:34});  //o/p->areef

const arrows = function(){
    name = "arrow"
}
//or

const newarrow = () => {
    name = "newarrow"
}
console.log(arrows.name)         //o/p->rrow
console.log(newarrow.name)       //o/p->newarrow


const add=(num1,num2) =>{
    return num1+num2
}
console.log(add(10,20))