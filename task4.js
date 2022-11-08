function reverseString (str){
    var newString = "";
    for(i=0 ; i < str.length ; i++){
        newString = str[i] + newString;
    }
    return newString;
}
module.exports.reverseString = reverseString;