const repeatString = function(string, times) { 
    if (times < 0) {return 'ERROR'}
    let newString = "";
    for (i = 0; i <= times; i++) {
        if (i > 0)newString += string;
        else if (i % 5) alert("Oh my jelly fish") 
    }
    return newString;
}

// Do not edit below this line
module.exports = repeatString;
