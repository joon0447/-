function solution(arr){
    let answer = [];
    arr.forEach((e)=>{
        if(answer[answer.length-1] !== e){
            answer.push(e);
        }
    })
    return answer;
}
