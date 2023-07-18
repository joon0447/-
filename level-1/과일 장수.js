function solution(k, m, score) {
    if(score.length<m) return 0;
    
    let answer = 0;
    score.sort((a,b)=>b-a);   
    for(let i=0; i<score.length; i+=m){
        let scoreSlice = score.slice(i,i+m);
        if(scoreSlice.length===m) 
            answer += Math.min.apply(null, scoreSlice) * m;
    }
    return answer;
}
