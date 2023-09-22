/* -------------------------------------------------------------------------- */
/*                                   Ex 1.1                                   */
/* -------------------------------------------------------------------------- */
// function yesOrNo(bool){
//     if (bool === true){
//         return `Yes`;
//     }
//     else if (bool === false){
//         return `No`;
//     }
//     return `invalid argument`;
// }
/* ---------------------------------- Test ---------------------------------- */
// console.log(yesOrNo(false));

/* -------------------------------------------------------------------------- */
/*                                   Ex 2.1                                   */
/* -------------------------------------------------------------------------- */
// function compareNumbers (a,b){
//     return a-b;
// }
// function sumOfLowestNumbers(array){
//     array.sort(compareNumbers);
//     return array[0]+array[1];

// }
/* ---------------------------------- Test ---------------------------------- */
// const array = [10 ,100 ,3,2 ,7 ,1 ,0 ,500];
// console.log(sumOfLowestNumbers(array));

/* -------------------------------------------------------------------------- */
/*                                   Ex 2.3                                   */
/* -------------------------------------------------------------------------- */
// function findNextSquare(number){
//     if (!(Number.isInteger(Math.sqrt(number)))){
//         return -1;
//     }else{
//         number++;
//         while(!(Number.isInteger(Math.sqrt(number)))){
//             number++;
//         }
//         return number;
//     }
// }
/* ---------------------------------- Test ---------------------------------- */
// console.log(findNextSquare(121));

/* -------------------------------------------------------------------------- */
/*                                   Ex 2.4                                   */
/* -------------------------------------------------------------------------- */
// function unique(array) {
//   for (let i = 0; i < array.length; i++) {
//     let numberOfDifferentElements = 0;
//     let currentElement = array[i];
//     for (let j = 0; j < array.length; j++) {
//       if (currentElement != array[j]) {
//         numberOfDifferentElements++;
//       }
//     }
//     if (numberOfDifferentElements == array.length - 1) {
//       return currentElement;
//     }
//   }
//   return -1; //all numbers are the same
// }
/* ---------------------------------- Test ---------------------------------- */
// const testArray1 = [1, 1, 1, 2, 1, 1];
// const testArray2 = [0, 0, 0, 0, 2];
// console.log(unique(testArray2));

/* -------------------------------------------------------------------------- */
/*                                   Ex 2.5                                   */
/* -------------------------------------------------------------------------- */
// function summataion(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     sum += i;
//   }
//   return sum;
// }
/* ---------------------------------- Test ---------------------------------- */
// console.log(summataion(2));
// console.log(summataion(8));

/* -------------------------------------------------------------------------- */
/*                                   Ex 2.6                                   */
/* -------------------------------------------------------------------------- */
// function centuryFromYear(year) {
//   return Math.ceil(year / 100);
// }
/* ---------------------------------- Test ---------------------------------- */
// console.log(centuryFromYear(1));
// console.log(centuryFromYear(101));
// console.log(centuryFromYear(1705));
// console.log(centuryFromYear(1900));
// console.log(centuryFromYear(1601));
// console.log(centuryFromYear(2000));

/* -------------------------------------------------------------------------- */
/*                                   Ex 2.7                                   */
/* -------------------------------------------------------------------------- */
// function basicOp(operation, value1, value2) {
//   switch (operation) {
//     case "+":
//       return value1 + value2;
//     case "-":
//       return value1 - value2;
//     case "*":
//       return value1 * value2;
//     case "/":
//       return value1 / value2;
//     default:
//       console.log(`Operation is not valid`);
//       return null;
//   }
// }
/* ---------------------------------- Test ---------------------------------- */
// console.log(basicOp("+", 4, 7));
// console.log(basicOp("-", 15, 18));
// console.log(basicOp("*", 5, 5));
// console.log(basicOp("/", 49, 7));

/* -------------------------------------------------------------------------- */
/*                                   Ex 4.1                                   */
/* -------------------------------------------------------------------------- */
// function fibonacci(n) {
//   let firstNum = 0;
//   let secondNum = 1;
//   for (let i = 1; i < n; i++) {
//     let tempSecondNum = secondNum;
//     secondNum += firstNum;
//     firstNum = tempSecondNum;
//   }
//   return secondNum;
// }
/* ---------------------------------- Test ---------------------------------- */
// console.log(fibonacci(3));

/* -------------------------------------------------------------------------- */
/*                                   Ex 5.1                                   */
/* -------------------------------------------------------------------------- */
// function trimStr(str) {
//   let strArr = str.split("");
//   strArr.pop();
//   strArr.shift();
//   let newStr = strArr.join("");
//   return newStr;
// }
/* ---------------------------------- Test ---------------------------------- */
// console.log(trimStr("hello world!"));

/* -------------------------------------------------------------------------- */
/*                                   Ex 5.2                                   */
/* -------------------------------------------------------------------------- */
// function repeatStr(count, str) {
//     let newStr = '';
//   for (let i = 0; i < count; i++) {
//     newStr += str;
//   }
//   return newStr;
// }
/* ---------------------------------- Test ---------------------------------- */
// console.log(repeatStr(6,'I'));
// console.log(repeatStr(5,'Hello'));

/* -------------------------------------------------------------------------- */
/*                                   Ex 5.3                                   */
/* -------------------------------------------------------------------------- */
// function toCamelCase(str) {
//   const arr = str.split("-");
//   for (let i = 1; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//   }
//   let newStr = arr.join("");
//   return newStr;
// }
/* ---------------------------------- Test ---------------------------------- */
// console.log(toCamelCase('the-stealth-warrior'));

/* -------------------------------------------------------------------------- */
/*                                   Ex 5.5                                   */
/* -------------------------------------------------------------------------- */
// function abbreviateTwoWords(word1, word2) {
//   return `${word1.charAt(0).toUpperCase()}.${word2.charAt(0).toUpperCase()}`;
// }
/* ---------------------------------- Test ---------------------------------- */
// console.log(abbreviateTwoWords("Sam", "Harris"));
// console.log(abbreviateTwoWords("patrick", "feeney"));

/* -------------------------------------------------------------------------- */
/*                                   Ex 5.6                                   */
/* -------------------------------------------------------------------------- */
// function maskify(str) {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (i >= str.length - 4) {
//       newStr += str[i];
//     } else {
//       newStr += "#";
//     }
//   }
//   return newStr;
// }
/* ---------------------------------- Test ---------------------------------- */
// console.log(maskify("123456789"));

/* -------------------------------------------------------------------------- */
/*                                   Ex 5.7                                   */
/* -------------------------------------------------------------------------- */
// function lengthOfShortestWord(str) {
//   const wordsArr = str.split(" ");
//   let minLength = wordsArr[0].length;
//   for (let i = 1; i < wordsArr.length; i++) {
//     if (wordsArr[i].length < minLength) {
//       minLength = wordsArr[i].length;
//     }
//   }
//   return minLength;
// }
/* ---------------------------------- Test ---------------------------------- */
// console.log(lengthOfShortestWord("this text is for testing"));

/* -------------------------------------------------------------------------- */
/*                                   Ex 6.1                                   */
/* -------------------------------------------------------------------------- */
// function accum(str) {
//   let newStr = str[0].toUpperCase();
//   for (let i = 1; i < str.length; i++) {
//     newStr += "-";
//     for (let j = 0; j <= i; j++) {
//       if (j == 0) {
//         newStr += str[i].toUpperCase();
//       } else {
//         newStr += str[i].toLowerCase();
//       }
//     }
//   }
//   return newStr;
// }
/* ---------------------------------- Test ---------------------------------- */
// console.log(accum("RqaEzty"));

/* -------------------------------------------------------------------------- */
/*                                   Ex 6.2                                   */
/* -------------------------------------------------------------------------- */
// function countDuplicates(str) {
//   const duplicates = {};
//   for (let i = 0; i < str.length; i++) {
//     let count = 0;
//     let currentChar = str[i].toLowerCase();
//     for (let j = i; j < str.length; j++) {
//       if (str[j].toLowerCase() == currentChar) {
//         count++;
//       }
//     }
//     if (count >= 2 && !(currentChar in duplicates)) {
//       duplicates[currentChar] = count;
//     }
//   }
//   if (Object.keys(duplicates).length == 0) {
//     return `no character repeats more than once`;
//   } else {
//     return duplicates;
//   }
// }
/* ---------------------------------- Test ---------------------------------- */
// console.log(countDuplicates("Indivisibilities"));
// console.log(countDuplicates("aA11"));
// console.log(countDuplicates("ABBA"));

/* -------------------------------------------------------------------------- */
/*                                   Ex 6.4                                   */
/* -------------------------------------------------------------------------- */
// first solution is same as last question only changed the return value.
// function isIsogram(str) {
//   const duplicates = {};
//   for (let i = 0; i < str.length; i++) {
//     let count = 0;
//     let currentChar = str[i].toLowerCase();
//     for (let j = i; j < str.length; j++) {
//       if (str[j].toLowerCase() == currentChar) {
//         count++;
//       }
//     }
//     if (count >= 2 && !(currentChar in duplicates)) {
//       duplicates[currentChar] = count;
//     }
//   }
//   if (Object.keys(duplicates).length == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// Second Solution
// function isIsogram(str){
//     const strArr = [];
//     for (let i = 0; i<str.length;i++){
//         if(strArr.includes(str[i].toLowerCase())){
//             return false;
//         }
//         else{
//             strArr.push(str[i].toLowerCase());
//         }
//     }
//     return true;
// }
// third and best solution I think
// function isIsogram(str){
//     const strObj = {}
//     for (let i = 0; i<str.length;i++){
//         if(strObj[str[i].toLowerCase()]){
//             return false;
//         }
//         else{
//             strObj[str[i].toLowerCase()] =1;
//         }
//     }
//     return true;
// }
/* ---------------------------------- Test ---------------------------------- */
// console.log(isIsogram('Dermatoglyphics'));
// console.log(isIsogram('aba'));
// console.log(isIsogram('moOse'));
// console.log(isIsogram(''));
