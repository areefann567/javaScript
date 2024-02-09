const studentId = 434    // we can't changes this value once it is declared
let accountEmail = "areefann567@gmail.com"   //  prefer  mostly 
var accountPassword = "123143"            //we don't use var, var doesn't knows about scope(block)
cityCode = "HYD"                         // js automatically declared, but it bad 
cityCode = "kzp"                        // o/p changes to kzp
let pinCode;           //  o/p will be undefined(value is not defined)
console.log(cityCode);
console.log(studentId);


console.table([accountEmail,accountPassword,cityCode])

