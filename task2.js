function task2(x,y,z){
    var i = 1;
    var answer = 0;
    for(i; i<z; i++){
        if(i%x == 0 || i%y == 0) answer = answer+i;
    }
    return answer;
}

module.exports = task2;