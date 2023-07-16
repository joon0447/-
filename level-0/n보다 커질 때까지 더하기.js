function solution(numbers, n) {
    let answer = numbers.reduce((a,c)=>{
        if (a+c>n) numbers.splice(1);
        return a+c;
    }, 0);
    return answer;
}
