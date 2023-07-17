function solution(k, score) {
    let answer = [], first = [];
    for(let i=0; i<score.length; i++){
        first.push(score[i]);
        if(i>=k) first.sort((a,b)=>a-b).shift();
        answer.push(Math.min.apply(null,first));
    }
    return answer;
}
