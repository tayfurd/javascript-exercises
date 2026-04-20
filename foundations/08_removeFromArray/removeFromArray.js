const removeFromArray = function(arr, ...rmvItem) {
    let result = [];
        for(i = 0; i < arr.length; i++) { 
        if (!rmvItem.includes(arr[i])) {
            result.push(arr[i]);
            }
        }
    return result;
};


/* 
Array, remove
remove from array by given input 
    for
    if (!items.includes(remove)) result.push(items)
    return result

*/
// Do not edit below this line
module.exports = removeFromArray;
