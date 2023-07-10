function solution(left, right) {
    let answer = 0;
    let count = 0;
    for(let i = left; i<=right; i++){
        count = 0;
        for(let k=1; k<=i; k++){
            if(i%k===0) count++;
        }
        count%2===0 ? answer += i : answer -= i;
    }
    return answer;
}
