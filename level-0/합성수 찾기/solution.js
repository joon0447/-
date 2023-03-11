function solution(n) {
    let answer = 0;
    let temp =0;
    for(let i=1; i<=n; i++){
        for(let j=1; j<=i; j++){
            if(i%j==0){
                temp++;
            }
        }
        if(temp>=3){
            answer++;
        }
        temp = 0;
    }
    return answer;
}
