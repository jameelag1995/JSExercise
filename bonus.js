/* -------------------------------------------------------------------------- */
/*                                   Ex 2.2                                   */
/* -------------------------------------------------------------------------- */
// 1st Solution
// function binaryToInt (array) {
//     let sum = 0;
//     let power = 0;
//     for(let i = array.length-1 ;i >= 0;i--) {
//         if(array[i] === 1){
//             sum += Math.pow(2,power);
//         }
//         power++;
//     }
//     return sum;
// }
// 2nd Solution
// function binaryToInt2(array) {
//   let binaryToStr = array.join("");
//   let result = parseInt(binaryToStr, 2);
//   return result;
// }
/* ---------------------------------- Test ---------------------------------- */
// console.log(binaryToInt([1,1,1,1]));
// console.log(binaryToInt2([1,1,1,1]));

/* -------------------------------------------------------------------------- */
/*                                   Ex 3.1                                   */
/* -------------------------------------------------------------------------- */
// function nbYear(p0, percent, aug, p) {
//   let years = 0;
//   while (p0 < p) {
//     p0 = p0 + p0 * (percent / 100) + aug;
//     years++;
//   }
//   return years;
// }
/* ---------------------------------- Test ---------------------------------- */
// console.log(nbYear(1000, 2, 50, 1200));
// console.log(nbYear(1500, 5, 100, 5000));
// console.log(nbYear(1500000, 2.5, 10000, 2000000));

/* -------------------------------------------------------------------------- */
/*                                   Ex 3.2                                   */
/* -------------------------------------------------------------------------- */
// function peopleOnTheBus(array) {
//   let numOfPeopleOnTheBus = 0;
//   for (let i = 0; i < array.length; i++) {
//     numOfPeopleOnTheBus += array[i][0];
//     numOfPeopleOnTheBus -= array[i][1];
//   }
//   return numOfPeopleOnTheBus;
// }
/* ---------------------------------- Test ---------------------------------- */
// console.log(
//   peopleOnTheBus([
//     [10, 5],
//     [8, 3],
//     [12, 10],
//     [0, 2],
//   ])
// );

/* -------------------------------------------------------------------------- */
/*                                   Ex 4.2                                   */
/* -------------------------------------------------------------------------- */
// function tribonacci(n){
//     let num1=num2=num3=1;
//     for(let i = 2;i<n;i++){
//         let tempNum3 =num3;
//         let tempNum2= num2;
//         num3 = num1 + num2 +num3
//         num2 = tempNum3;
//         num1 =tempNum2;
//     }
//     return num3;
// }
/* ---------------------------------- Test ---------------------------------- */
// console.log(tribonacci(7));

/* -------------------------------------------------------------------------- */
/*                                   Ex 5.4                                   */
/* -------------------------------------------------------------------------- */
// function toWeirdCase(str) {
//   let newStr = "";
//   let strArray = str.split(" ");
//   for (const word of strArray) {
//     for (let i = 0; i < word.length; i++) {
//       if (i % 2 == 0) {
//         newStr += word[i].toUpperCase();
//       } else {
//         newStr += word[i].toLowerCase();
//       }
//     }
//     newStr += " ";
//   }
//   return newStr;
// }
/* ---------------------------------- Test ---------------------------------- */
// console.log(toWeirdCase('String'));
// console.log(toWeirdCase("Weird string case"));

/* -------------------------------------------------------------------------- */
/*                                   Ex 6.3                                   */
/* -------------------------------------------------------------------------- */
// function longestString(str1, str2) {
//   const str1Arr = str1.split("");
//   const str2Arr = str2.split("");
//   const joinedArrays = str1Arr.concat(str2Arr);
//   joinedArrays.sort();
//   let longestStr = "";
//   for (const char of joinedArrays) {
//     if (!longestStr.includes(char)) {
//       longestStr += char;
//     }
//   }
//   return longestStr;
// }
/* ---------------------------------- Test ---------------------------------- */
// console.log(longestString("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
// console.log(
//   longestString("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz")
// );

/* -------------------------------------------------------------------------- */
/*                    Ex Find the Perimeter of a Rectangle                    */
/* -------------------------------------------------------------------------- */
// function rectanglePerimeter(length, width) {
//   return 2 * length + 2 * width;
// }
/* ---------------------------------- Test ---------------------------------- */
// console.log(rectanglePerimeter(6,7));
// console.log(rectanglePerimeter(20,10));
// console.log(rectanglePerimeter(2,9));

/* -------------------------------------------------------------------------- */
/*                              Ex Linear Search                              */
/* -------------------------------------------------------------------------- */
// function linearSearch(arr, numToFind) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === numToFind) {
//       return i;
//     }
//   }
//   return -1;
// }
/* ---------------------------------- Test ---------------------------------- */
// console.log(linearSearch([10, 20, 50, 180, 350, 900], 20));

/* -------------------------------------------------------------------------- */
/*                              Ex Binary Search                              */
/* -------------------------------------------------------------------------- */
// function binarySearch(arr, numToFind) {
//   let low = 0;
//   let high = arr.length - 1;
//   let mid;
//   while (high >= low) {
//     mid = 1 + Math.floor((high - low) / 2);
//     if (arr[mid] == numToFind) {
//       return mid;
//     } else if (arr[mid] > numToFind) {
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }
//   return -1;
// }
/* ---------------------------------- Test ---------------------------------- */
// console.log(binarySearch([10, 20, 50, 180, 350, 900], 18));
