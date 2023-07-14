function solution(t, p) {
    let arr = [...t], sliceArr = [], answer = 0;
    while(arr.length>=p.length){
        sliceArr.push(arr.slice(0,p.length).join(""));
        arr.shift();
    }
    sliceArr.forEach((e)=>{
        if(e<=p) answer++;
    })
    return answer;
}
