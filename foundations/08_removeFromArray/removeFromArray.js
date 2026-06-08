const removeFromArray = function(arr, ...removal) {
    return arr.filter(element => !removal.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
