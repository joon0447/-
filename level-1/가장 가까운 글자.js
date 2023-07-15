function solution(s) {
    let arr = [], answer = [];
    for(e of s){
        arr.includes(e) ? answer.push(arr.length - arr.lastIndexOf(e)) : answer.push(-1);
        arr.push(e);
    }
    return answer;
}
