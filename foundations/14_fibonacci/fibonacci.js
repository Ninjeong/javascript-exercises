const fibonacci = function(target) {

    if(Number(target) === 0) return 0;
    if(Number(target) < 0) return "OOPS";
    
    let sum1 = 0;
    let sum2 = 1;
    let sum3 = 1;
    for (let i = 1; i < Number(target); i++) {

        sum3 = sum1 + sum2;
        sum1 = sum2;
        sum2 = sum3;
    }
    return sum3;
};

// Do not edit below this line
module.exports = fibonacci;
