const getAge = (person) => {
    const death = person.yearOfDeath || new Date().getFullYear();
    return death - person.yearOfBirth;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        return getAge(current) > getAge(oldest) ? current : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
