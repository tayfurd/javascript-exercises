const findTheOldest = function(array) {

    let cloneArray = array.concat()

    cloneArray.sort((person, person2) => {
        if (person.yearOfDeath == undefined) {
            person.yearOfDeath = parseInt(new Date().getFullYear())
        }
        else if (person2.yearOfDeath == undefined) {
            person2.yearOfDeath = parseInt(new Date().getFullYear())
        }

       let age = person.yearOfDeath - person.yearOfBirth
       let age2 = person2.yearOfDeath - person2.yearOfBirth
       return age > age2 ? 1 : -1
    })

    return cloneArray[array.length-1]
};

// Do not edit below this line
module.exports = findTheOldest;
