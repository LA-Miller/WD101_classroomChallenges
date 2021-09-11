/*
BRONZE:
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.

SILVER:
Write a conditional that checks the type of one of the values stored 
in the object and console logs the data type. If the value is not a string, 
number, boolean, or object console log 'What are you?!'
*/

// bronze answer
let bronze = {string: 'hello', num: 3, boolean: true, obj: {key: 'test'}};
console.log(typeof bronze.num);

// if(typeof bronze.string == 'string'){
//     console.log(typeof bronze.string);
// } else if (typeof bronze.num == number) {
//     console.log(typeof bronze.num);
// } else if (typeof bronze.boolean

//SILVER ANSWER
let type = typeof bronze.num;
if (type === 'string' || type === 'number' || type === 'boolean' || type === 'object'){
    console.log(type);
} else {
    console.log('What are you?!');
}
