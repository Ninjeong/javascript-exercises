const palindromes = function (str) {
    let newStr = str.toLowerCase();
    let newNewStr = newStr.replace(/[^a-zA-Z0-9]/g, "");
    let reversed = "";

    for (let i = newNewStr.length - 1; i >= 0; i--) {
        reversed += newNewStr[i];
    }

    return reversed === newNewStr;
};

// Do not edit below this line
module.exports = palindromes;
