const sumAll = function(a, b) {
    let result = 0;
    if (a < 0 || b < 0) {
        return `ERROR`
        }
        else if (a % 1 !== 0 || b % 1 !== 0) {
            return `ERROR`
            }
        else if (typeof a == `string` || typeof b == `string`) {
            return `ERROR`
            }
        else if (typeof a !== `number` || typeof b !== `number`){
            return `ERROR`
        }
        else if (a < b) {
            for (let i = a; i <= b; i++) {
                result += i
            }
        }
        else if (a > b) {
            for (let i = b; i <= a; i++) {
                result += i
            }
        }
    return result;
};

/* 
sumAll(1, 4) = 1+2+3+4
a, b
let result = 0
FOR i = a, i <= b, i++
    i += result
*/
// Do not edit below this line
module.exports = sumAll;
