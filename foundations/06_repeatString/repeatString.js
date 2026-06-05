const repeatString = function(str, instances) {
    let string = "";
    if (instances < 0) {
        return "Error";
    }
    else {
        for (let i = 0; i < instances; i++) {
            string += str;
        }
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
