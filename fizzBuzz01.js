// JS reads top to bottom
// Once the statement is true, the logic is executed and JS exits the conditional
// if (statements) { Logic }

let FB = 15;

//Write the solution using an if/else conditional
// will run without a else statement
if (FB % 3 == 0 && FB % 5 == 0){
    console.log('Fizz Buzz');
} else if (FB % 5 == 0){
    console.log('Buzz');
} else if (FB % 3 == 0){
    console.log('Fizz');
} else {
    console.log(FB);
}


//Write the solution using a switch conditional
// will run without a default case

switch(true) {
    case FB % 3 === 0 && FB % 5 === 0:
        console.log('Fizz Buzz');
        break;
    case FB % 3 === 0:
        console.log('Fizz');
        break;
    case FB % 5 === 0:
        console.log('Buzz');
        break;   
    default:
        console.log(FB);
}

// Write the solution using a ternary
// kinda like a shortcut for IF/else statement
// Ternaries require the default/else catch all, without it, it will throw an error

FB % 3 == 0 && FB % 5 == 0 ? console.log('Fizz Buzz'):
FB % 3 == 0 ? console.log('Fizz'):
FB % 5 == 0 ? console.log('buzz'): 
console.log(FB);