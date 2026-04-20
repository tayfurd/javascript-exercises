const leapYears = function(year) {
    if (year % 100 == 0 && year % 400 !== 0) return false;
        else if (year % 4 == 0) return true;
        else if (year % 400 == 0) return true;
        else return false;
};
/* 
IF year % 4 == 0
    leap year
IF year % 400 == 0
    leap year
IF year % 100 == 0 && year % 400 !== 0
    not a leap year 
*/

// Do not edit below this line
module.exports = leapYears;
