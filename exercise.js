// The following arrays will be used through the questions:
const words = [ 'cattywampus', 'snickersnee', 'lollygag', 'pandiculation', 'ratoon' ];
const numbers = [ 8, 3, 22, 0, -73, 15 ];

// Question 1: 
// Use forEach to console.log all the words in the words array. Do not write a for loop. 
function logWords(){
  words.forEach(function(element) {
    console.log(element);
  });
}

logWords();

// Question 2: Use forEach to console.log the each number in the numbers array divided by two
// It should console.log: 
// 4
// 1.5
// ...etc. 
function logHalfNumbers(){
  // write your code here
  numbers.forEach(function(x) {
    console.log(x / 2);
  });
}

logHalfNumbers();

// Question 3: Using the getFirstLetter function below as your callback,
//             use map to create an array contaning the first letter of 
//             every word from the words array.

function getFirstLetter(word) {
  const first = word[0];
  return first;
}

const firstLetters = words.map(getFirstLetter);

console.log(firstLetters);

// Question 4: Use map to create an array containing the last letter of every word
//             from the words array. 

function getLastLetter(word) {
  const last = word[word.length - 1];
  return last;
}

const lastLetters = words.map(getLastLetter);

console.log(lastLetters);

// Question 5: Use map to create an array containing the reversed version of each word
//             from the word array. For example, the first entry will be 'supmawyttac'.

const reversedWords = words.map(function(word) {
  return word.split('').reverse().join('');
}); 


console.log(reversedWords); 

// Question 6: Use map to create an array containing the absolute value of every number
//             in the numbers array.

const absoluteNumbers = numbers.map(function(x) {
  return Math.abs(x);
});

console.log(absoluteNumbers);

// Question 7: Use map to create an array containing each number from the numbers array
//             rounded to the nearest 10. For example: 10, 0, 20, 0, etc. 

const roundedToTenNumbers = numbers.map(function(x) {
  return Math.round(x / 10) * 10;
});

console.log(roundedToTenNumbers);


// Question 8: Use map to create an array that contains only the words from the words
//             array containing 's'. All other words should be replaced with null.
//             For example: 'cattywampus', 'snickersnee', null, etc. 

const wordsWithS = words.map(function(x) {
  if (x.includes('s') === true) {
    return x
  } else {
    return null;
  }
});

console.log(wordsWithS);

// Stretch Questions:
// The stretch question will use the array method reduce, which was only briefly reviewed 
// in the lecture. Refer to online documentation for more information on reduce. 

// Question 9: Use reduce to sum up all of the numbers in the numbers array. 

function sum(currentTotal, nextNumber) {
  return currentTotal + nextNumber;
}

const sumTotal = numbers.reduce(sum);

console.log(sumTotal);

// Question 10: Use reduce to find the word from the words array that is last in the alphabet.

const alphabeticallyLast = words.reduce(function(x, y) {
  if (x < y) {
    return y
  } else {
    return x
  }
}); 


console.log(alphabeticallyLast);
