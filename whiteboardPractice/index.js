// Challenge 1
for (let i = 0; i <= 100; i++) {
    if (i % 6 === 0 && i % 8 === 0) {
        console.log('Fizz Buzz');
    } else if (i % 6 === 0) {
        console.log('Fizz');
    } else if (i % 8 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

// Challenge 2
function Name(first, last) {
    return (`${first} ${last}`);
}

console.log(Name('Luke', 'Miller'));

// Challenge 3
function findParameters(length, width) {
    let perimeter = length + width;
    if (perimeter > 20) {
        console.log(`True. The perimeter is ${perimeter}`)
    } else if (perimeter < 20) {
        console.log(`False. The perimeter is ${perimeter}`);
    }
}

console.log(findParameters(1, 12));

// Challenge 4
let library = {
    name: 'name',
    address: 'address',
    sections: { collections: [{ classification: 'string1', count: 12, aisle: 'string2' }, { classification: 'string1', count: 12, aisle: 'string2' }] }
}

console.log(library.sections.collections[0].count);




for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('Fizz Buzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

