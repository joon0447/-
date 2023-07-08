function solution(absolutes, signs) {
    let answer = 0;
    absolutes.forEach((e,i)=>{
        signs[i] ? answer+=e : answer -=e;
    })
    return answer;
}
