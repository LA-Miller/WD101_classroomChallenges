// Create a Monsters Object 
// the monsters object should contain three keys in the object containing a monster name
// Each monster name key should contain an object including:
// traits: array containing at least 2 strings
// size: string
// description: string
// dangerous: boolean
// defeatMethods: an object containing tools to defeat as keys and descriptions of how to use as a string

//Console.log the following
//*Description for monster 1
//*The last trait for monster 2
//*One of the defeat methods for monster 3

let monsters = {
    snake: { traits: ['slimy', 'slithery'], 
        size: '10 feet long', 
        description: 'No legs, strong tail, and 6 inch long teeth', 
        dangerous: true, 
        defeatMethods: { fire: "This monster doesn't like fire"}
    },
    redMonster: {
        traits: ['red', 'redder'],
        size: 'small',
        description: 'Very Red',
        dangerous: true,
        defeatMethods: { seeRed: 'Sees all red', changeColor: 'turns dark red' }
   },
   Raum: {
        traits: ['seven feet tall', 'left side ivory', 'right side obsidian'],
        size: 'Bulky.',
        description: 'red eyes, hovers with his feet seven inches off the ground, no features',
        dangerous: true,
        defeatMethods: { method1:"Sunlight", method2: "Charity", method3: "Dippindots" }
    }
}

//*Description for monster 1
console.log(monsters.snake.description);

//*The last trait for monster 2
console.log(monsters.redMonster.traits[1]);

//*One of the defeat methods for monster 3
console.log(monsters.Raum.defeatMethods.method1);