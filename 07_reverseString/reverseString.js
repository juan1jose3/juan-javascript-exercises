const reverseString = function(str) {

    let reversed = "";
    let index = str.length-1;
    
    for(let i = 0; i<str.length;i++){
        reversed += str[index];
        index --;
    }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
