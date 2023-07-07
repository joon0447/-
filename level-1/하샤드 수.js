function solution(x) {
    let sum = 0;
    [...x.toString()].forEach((e)=> sum+=parseInt(e));
    return x%sum===0;
}
