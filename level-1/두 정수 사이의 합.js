function solution(a, b) {
    let sum = 0;
    [a,b] = b>=a ? [a,b] : [b,a];
    for(let i = a; i<=b; i++){
        sum += i;
    }
    return sum;
}
