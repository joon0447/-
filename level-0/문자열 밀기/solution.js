function solution(A, B) {
    let answer = 0;
    let arr = [...A];
    arr.forEach((e)=>{
       let temp = arr[arr.length-1]
       if (arr.join("") === B)
           return false;
        arr.unshift(temp);
        arr.pop();
        answer+=1;
    });
    if(answer === arr.length){
        answer = -1;
    }
    return answer;
}
