function checkElement(a){
    var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    for (i = 0 ; i < array.length ; i++){
        if (a == array[i]) return true;
    }
    return false;
}
module.exports.checkElement = checkElement;