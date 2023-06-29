function solution(score) {
    score.forEach((e,i) => {
       score[i] = (score[i][0] + score[i][1]) / 2;
    });
    let sorted = score.slice().sort((a,b)=>b-a);
    return score.map(v => sorted.indexOf(v) + 1);
}
