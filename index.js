// this is a simple example of a recursive function which adds 1 each time based on the number times specified in the argument x

// function loop(x) {
//   if (x >= 10) {
//     // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
//     return 0;
//   } else {
//     return loop(x + 1) + 1;
//   }
//   +1; // the recursive call
// }
// console.log(loop(1));

/// Here we build an array using recursion counting up ///

// function countup(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }
// console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]

// Only change code below this line
// function countdown(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countdown(n - 1);
//     countArray.unshift(n);

//     return countArray;
//   }
// }

// console.log(countdown(5));

// Only change code above this line

// Below shows how the functions are wound up and then wound down

// function foo(i) {
//   if (i < 0) return;
//   console.log('begin: ' + i);
//   foo(i - 1);
//   console.log('end: ' + i);
// }
// foo(3);

/*------- recursion practice, range of numbers --------*/

// function rangeOfNumbers(startNum, endNum) {
//   console.log(endNum);
//   if (startNum > endNum) {
//     return [];
//   } else {
//     // Note i have to pass the all the parameters from the main function back in, otherwise the recursive function cant see them
//     const countArray = rangeOfNumbers(startNum + 1, endNum);
//     countArray.unshift(startNum);
//     return countArray;
//   }
// }

// console.log(rangeOfNumbers(1, 3));
