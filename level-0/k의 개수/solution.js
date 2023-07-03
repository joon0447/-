function solution(i, j, k) {
    let arr = [];
    let answer = 0;
    for(let num = i; num <=j; num++){
        arr.push(num);
    }
    arr.join("").split("").forEach((e) =>{
        if(e == k)
            answer+=1;
    });
    return answer;
}
