const palindromes = function (word) {
    let replaceAll = word.replaceAll(/[.,?!:;'"` ()\-\[\]']/g, "")
    let result = ""
    for(i = replaceAll.length - 1; i >= 0; i--){
        result += replaceAll.at(i)
    }
    
    if (result.toLowerCase() === replaceAll.toLowerCase()) {return true}
    else if (result.toLowerCase() !== replaceAll.toLowerCase()) {return false}
};

/* 
toLowerCase
delete commas and dots
delete spaces

replaceAll | //gi
*/

// Do not edit below this line
module.exports = palindromes;
