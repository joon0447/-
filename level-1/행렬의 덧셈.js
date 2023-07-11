function solution(arr1, arr2) {
    let answer = [];
    let sum = [];
    arr1.forEach((e,i)=>{
        sum = [];
        arr1[i].forEach((k,j)=>{
            sum.push(arr1[i][j]+arr2[i][j]);
        })
        answer.push(sum);
    })
    return answer;
}
