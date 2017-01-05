// 01 | containsVowel
// Write a function called containsVowel that takes a single string and returns true if there is at least one value or false otherwise.

// function isVowel(letter) {
//     if(letter ==='a') {
//         return true;
//     } else {
//         return false;
//     }
// }

console.log('#1');
function isVowel(letter) {
    if(['a','e','i','o','u'].includes(letter)) {
        return true;
    } else {
        return false;
    }   
}


function containsVowel(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let letters = word.split('');

    //Steps: 
    //1. break the word into letters (split)
    //2. find out which of those letters are vowels
    //3. if one or more are, return true

    return letters.filter(isVowel).length > 0;
}

console.log(containsVowel('hey'));


//-------------------------------------------------------------------------------------------------------------------------------------

// 02 | divisors
// Write a function called divisors that accepts a number and returns an array of all of the numbers that divide evenly into it.


//input: num
//output: array

console.log('#2');

function range(min, max) {
  let arr = [];
  
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  
  return arr;
}


function divisors(num) {
    let arr = range (1, num);

    let divisibles = arr.filter(function(element) {
        if (num % element === 0) {
            return true;
        }
    });

    return divisibles;
}

console.log(divisors(25));



//-------------------------------------------------------------------------------------------------------------------------------------



// 03 | boost
// Write a function called boost that accepts a number as a parameter and increments all of the digits of the number individually. If the digit is 0-8, 
//it should be incremented, but if its 9 then it should be reset to 0. Return the incremented number.
// boost(129);   // 230
// boost(49);    // 50
// boost(48);    // 59
// boost(412);   // 523

//For example: 
    //boost(48) // result should be 59
    //1. Convert 48 to [4,8] --suggestion: convert to string, then split, then parseInt
    //2. Increment all the digits
    //3. Recombine them with join() and then parseInt
    //Note: num.toString().split('') = array of STRINGS


    console.log('#3');

    function boost(num) {
    
    function parse(digit) {
        return parseInt(digit);
    }
    
    
    function increment(single) {
        if (single < 9) {
        return single + 1;
        } else {
        return 0;
        }
    }
    
    let digits = num.toString().split('');  
    return parseInt(digits.map(parse).map(increment).join(''));
    }
    
    console.log(boost(129)); 




//-------------------------------------------------------------------------------------------------------------------------------------



// 04 | multiples
// Write a function called multiples that accepts two numbers and returns an array of all 
//numbers from 1 - 100 that are evenly divisible by both.


//input: two numbers
//output: returns array 

console.log('#4');

function range(min, max) {
  let arr = [];
  
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  
  return arr;
}

function multiples(first, second) {
    function isDivisible(current) {
        return (current % first === 0) && (current % second === 0); //true if divisible by 'first', false otherwise
    }
    //Steps: 
    //1. start with an array 1 -100 (range)
    //2. keep things divisible by first and second, discard the rest (filter)
    let nums = range(1, 100).filter(isDivisible);
    return nums;
}

console.log(multiples(5,7));


