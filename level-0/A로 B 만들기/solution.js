function solution(before, after) {
    let arr_before = [...before].sort();
    let arr_after = [...after].sort();
    let answer = 0;
    for(let i=0; i<arr_before.length; i++){
        if(arr_before[i] === arr_after[i])
            answer+=1;
    }
    if(answer === arr_before.length){
        return 1;
    }else
        return 0;
}
