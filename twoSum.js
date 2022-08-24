// TWO SUM 
// GIVEN AN ARRAY OF INTERGERS (nums) AND AN INTEGER target RETURN indices OF THE two numbers SUCH THAT THEY ADD UP TO target. 
// example 1 
    // input: nums= [2 , 7, 11, 15 ], target = 9 
    // output: [ 0, 1 ]
    // explantation because nums[0] + nums [1] == 9, we return [ 0,1 ]

// first way to solve it // two loops (nested loops )
    let nums = [ 2, 7, 11, 15 ]

    for ( let i =0; i<arr.length; i ++ ){
        for ( let j= 0; j<arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [arr[i], arr[j]]
            } 
        }
    } // TIME COMPLEXITY : O(N^2) // SPACE COMPLEXITY : O(1) CONSTANT


// second way to solve it // use a map 
    // create a set 
    // add every element to the set 
    // loop through the array to find if  9-a[i] = x is in the set 

    let arr= [ 1, 2, 6, 4, 7]

    const twoSumswSet= (arr, target) => {
        const map = new set()
        for (let i=0; i<arr.length; i ++) {
            set.add(arr[i]) // THIS ACTS LIKE AN OBJECT WHERE THE KEY AND THE VALUE ARE THE SAME THING 
        }
        for (let i=0; i < arr.length; i++){
            const num= target- arr[i]
            if (set.has(num)){
                return [arr[i].num]
            }
        }
    } // TIME COMPLEXITY : O(N) // SPACE COMPLEXITY: O(N)

// third way of solving it //Sorting the Array 
    // sort the array 
    // use 2 pointer for algorithm to find target

const twoSumSort= (arr, target) => {
    const sorted = arr.sort((a,b) => a-b )
    let i = 0, j= sorted.length-1
    while (i<j) {
        const sum = sorted[i] + sorted[j]
        if (sum > t) {
            j --
        } else if ( sum < t ) {
            i ++ 
        } else {
            return sorted[i], sorted[i]
        }
    } // TIME COMPLEXITY: O(NlogN) // SPACE COMPLEXITY: O(N)
}








//BIG O Notation Explanation 

// Display everything in a= [ 1, 2, 6, 4, 7 ] once 

a= [ 1, 2, 6, 4, 7 ]

for ( let i= 0; i < a.length; i ++ ) {
    console.log(a[i]) // TIME COMPLEXITY this has processing power O(N) // SPACE COMPLEXITY O(1)
}

// a[3] // this is constant 0(1) // we do not using any processsing power where looking for a specific location within an array. 

// with copy 

const b = a.splice(0)
for ( let i=0; i< b.length; i ++ ) {
    console.log(b[i]) // TIME COMPLEXITY O(N) // SPACE COMPLEXITY 0(N)
}


const c = array.sort(a) // TIME COMPLEXITY O(Nlog(N)) / SPACE COMPLEXITY O(N)

for( let i= 0; i < a.length; i ++ ){
    for ( let j=0; j <a.length; i++ ) {
        console.log( a[j] )
    }
}
// TIME COMPLETITY O(N^2) // SPACE COMPLEXITY O(1)

