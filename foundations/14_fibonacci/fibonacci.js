const fibonacci = function(number) {
    let result = [0, 1]
    if (number == 0) {return 0}
    if (number < 0) {return "OOPS"}

    // keep FOR loop until array length is number + 1
    for(let i = number; i > 1; i--) {
        for(let i = (result.length - 1); i > (result.length - 2); i--){
            let nextFibonacci = result[i] + result[i-1]
            result.push(nextFibonacci)
        }
    }
    return result[result.length - 1]
};

/* 
the sum of the two preceding ones
0, 1 - 1 - 2 - 3 - 5 ...

start with 0 1
add the current number with previous one
add it to the array

let result = [0, 1]


    FOR i = result.length - 1; i < result.length - 2; i--
        let nextFibonacci = result[i] + result[i-]
        result.push(nextFibonacci)

*/


// Do not edit below this line
module.exports = fibonacci;
