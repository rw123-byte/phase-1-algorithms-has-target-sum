function hasTargetSum(array, target) {
    // Write your algorithm here
    for (let i = 0; i < array.length; i++) {
        const complement = target - array[i]
        for (let k = i + 1; k < array.length; k++) {
            if (array[k] === complement)
                return true;
        }
    }
    return false
}



/* 
  Write the Big O time complexity of your function here
 - 0(1) runtime
*/

/* 
  Add your pseudocode here
/*
  Add written explanation of your solution here
    -returns true if any of the two numbers in the array adds to 3 and the target is 3 else returns false.
  -returns true if any of the two numbers in the array adds to 5 and the target is 5 else returns false. 
  -returns true if any of the two numbers in the array adds to 4 and the target is 4 else returns false.
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
    // add your own custom tests in here
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

    console.log("");

    console.log("Expecting: true");
    console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;