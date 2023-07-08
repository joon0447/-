function solution(numbers) {
    let arr = [0,1,2,3,4,5,6,7,8,9];
    let answer = 0;
    arr.forEach((e)=>{
        if (!numbers.includes(e)) answer +=e;
    })
    return answer;
}
