function solution(number) {
    let arr = [];
    for(let i=0; i<number.length; i++){
        for(let k=i+1; k<number.length; k++){
            for(let j=k+1; j<number.length; j++){
                arr.push(number[i]+number[k]+number[j]);
            }
        }
    }
    return arr.filter((e)=> e===0).length;
}
