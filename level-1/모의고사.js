function solution(answers) {
    let count = [0,0,0], answer = [];
    let arr1 = [1,2,3,4,5], arr2 = [2,1,2,3,2,4,2,5], arr3 = [3,3,1,1,2,2,4,4,5,5];
    let iterator = answers.values();
    for(let i=0; i<answers.length; i++){
        let value = iterator.next().value;
        if(value == arr1[i%arr1.length]) count[0]+=1;
        if(value == arr2[i%arr2.length]) count[1]+=1;
        if(value == arr3[i%arr3.length]) count[2]+=1;
    }
    let max = Math.max.apply(null, count);
    count.forEach((e,i)=>{
        if(max===e) answer.push(i+1);
    })
    return answer;
}
