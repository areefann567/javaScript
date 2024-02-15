// object de-structure

const student = {
    name: "arif",
    age: 23,
    city: "Hyderabad"
}
//normaly we do student.name to access the object
//but it done another ways also we can't repeart all time student.name

const {name}= student
console.log(name);