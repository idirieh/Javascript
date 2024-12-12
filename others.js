// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function main() {
//     while (true) {
//         console.log(Math.floor(Math.random() * 11));
//         await sleep(1000);
//     }
// }

// main();

function rgbToHex(r, g, b) {
  const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  const hexR = componentToHex(r);
  const hexG = componentToHex(g);
  const hexB = componentToHex(b);
  return "#" + hexR + hexG + hexB;
}

console.log(rgbToHex(255, 255, 255));


function mergeAndOrder(array1, array2) {
    // write your code here
    let mergedArray  = [];
    array1.forEach(element => {
        mergedArray.push(element)
    });
    array2.forEach(element => {
        mergedArray.push(element)
    });
    return mergedArray.sort();
}

console.log(mergeAndOrder([1,2], [4,3])) // [1, 2, 3, 4]


console.log("*********** JS Closure ***********");

function outer(x) {
  function inner(y) {
    return x + y; // this inner func is the closure
  }
  return inner
}

let outerReturn = outer(10);
console.log(outerReturn);

outerReturn(2) // 12


console.log("*********** IIFE ***********");
(function () {
  console.log("IIFE")
})()

console.log("*********** Call Stack ***********");

function f1(){
  console.log('Call Stack')
}

function f2(){
  return f1()
}

function f3(){
  return f2()
}

f3()

console.log("*********** Recursion ***********");

function fetchWater(count){
  if(count == 0){
    console.log('No more water left!');
    return 
  }
  console.log('Fetching water...')
  fetchWater(count - 1)
}


console.log("*********** Coder Hub ***********");

// function repetitions(s) {
//   // write your code here
//   let myArr = s.split("");
//   let count = 0;
//   let newArr = []
//   console.log(s)
//   console.log(myArr);
//   for (let i = 0; i <= myArr.length; i++) {
//     if (myArr[i] == myArr[0]){
//       count++;
//     }
//     else if (myArr[i]) {

//     }
//   }
//   console.log(count);
// };

// let s = 'AAAAAAAAABBB';

// repetitions(s);

// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find( e => e > 18);

// function myFunction(value, index, array) {
//   return value > 18;
// }

// console.log(first)

// function repetitions(s) {
//   // write your code here
//   let current_count = 1;
//   let largest = 1;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] == s[i+1]) {
//       current_count ++;
//     }else {
//       if (current_count > largest){
//         largest = current_count;
//       }
//       current_count = 1
//     }
//   }

//   if (current_count > largest) {
//     largest = current_count;
//   }
//   console.log(largest)
// };

// let s = 'MZSDDDD';

// repetitions(s);



console.log("*********** largest and smallest***********");

let myNumbers = [2, 1, 21, 7, 99, 33, 5, 8];



function largest_number(arr) {
  let largest = 0;
  myNumbers.forEach(e => {
    if (e > largest) {
      largest = e;
    }
  });
  console.log(largest);
  
}

largest_number(myNumbers)

function smallest_number(arr) {
  let smallest = null;
  myNumbers.forEach(e => {
    if (smallest == null || e < smallest) {
      smallest = e;
    }
  });
  console.log(smallest);
  
}

smallest_number(myNumbers)

let word = 'Whaat';

console.log(word.slice(0, -1))
