//alert("Welcome to Js from external file")

console.log("Welcome to Js from external file");
console.log(2345);
console.log(true);
console.log([43,54,34,53]);
console.log({fname: "Ansaf", age: 23});
console.table({fname: "Ansaf", age: 23});
console.error("Custom Sample error");
console.warn("Custom Sample warning");
console.clear();
console.time("Timer");
for(i=0;i<10;i++)
{
    console.log(i);
}
console.timeEnd("Timer");

/*
1997
var
2015 E6
let
const
*/


//Scope
var a = 25;
var b = 24;
console.log(a+b);

if (true) {
    
        const testConst = "const variable.";
        let testLet = "let variable.";
        var testVar = "var variable.";

        console.log(testVar);
        console.log(testConst);
        console.log(testLet);
}
console.log(testVar);


//Variable Re-Declarations

var x = 10;
var x = 20;
console.log(x);

let y = 10;
console.log(y);

//let y = 20; // Uncomment to see error (Same name can't assign to let variable scope) *can't re-declare*

const z = 10;
console.log(z);
//const z = 10; //(Same name can't assign to let variable scope)


//Value Assignment

var a = 25;
console.log(a);

a = 34;
console.log(a);

let test = 43;
console.log(test);
test = 23;
console.log(test);

const A = 73;
console.log(A);
A = 36; //constant error

const student = {'name':"Ansaf",'Age':23};
console.log(student);
