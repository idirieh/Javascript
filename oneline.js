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

// same as the above

function mergeAndOrder(array1, array2) {
    return [...array1, ...array2].sort();
}

console.log(mergeAndOrder([1, 2], [4, 3])); // [1, 2, 3, 4]
