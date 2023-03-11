function solution(n) {
    let factorial=1;
    var answer = 0;
    let i =1;
    for(i=1;;i++){
        factorial *=i;
        if(factorial>n){
            i--;
            break;
        }else if(factorial==n){
            break;
        }
    }
    return i;
}
