/*******************************************************************************
Write a function `reject` that accepts an array and callback as arguments. The
function should call the callback for each element of the array, passing in the
element. The function should return a new array
containing elements of the original array that result in false when given to the
callback.

Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.

Examples:

let isEven = function(n) {
    return n % 2 === 0;
};
console.log(reject([7, 8, 5, 6, 12, 11], isEven)); // [ 7, 5, 11 ]

let hasA = function(s) {
    return s.toLowerCase().includes('a');
};
console.log(reject(['breadth', 'GRAPH', 'depth', 'height'], hasA)); // [ 'depth', 'height' ]
*******************************************************************************/

function reject(array, cb) {
    let newArr = [];

    for(let ele of array) {

        if(cb(ele) === false) {
            newArr.push(ele);
            console.log(newArr);
        }
    }
    console.log(newArr);
    return newArr;
}

let isEven = function(n) {
  return n % 2 === 0;
};
console.log(reject([7, 8, 5, 6, 12, 11], isEven)); // [ 7, 5, 11 ]

let hasA = function(s) {
  return s.toLowerCase().includes('a');
};
console.log(reject(['breadth', 'GRAPH', 'depth', 'height'], hasA)); // [ 'depth', 'height' ]

// play code

let Simpsons = {
    name: 'Homer',
    traits: 'fat',
    job: 'power plant',
    key: 'you messed up'
}
for(let key in Simpsons) {
    let value = Simpsons[key];
    Simpsons['new key'] = 'more stuff'

    console.log(Object.keys(Simpsons));
    // Simpsons[new key] = not working
    console.log(value);
    // Simpsons['key'] = 'you messed up again'
    console.log(key);
    console.log(value);
}


/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = reject;
} catch(e) {
  return null;
}
