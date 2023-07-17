function solution(name, yearning, photo) {
    let answer = [], sum = 0;
    for(let i=0;i<photo.length;i++){
        photo[i].forEach((e,i)=>{
            if(name.indexOf(e)!==-1) sum+=yearning[name.indexOf(e)]
        });
        answer.push(sum);
        sum = 0;
    }
    return answer;
}
