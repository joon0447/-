function solution(array, n) {
    var a = 0;
    var answer = array.filter((element) => {
        if(element === n){
            a++;
        }
    });
    return a;
}
