function solution(n, arr1, arr2) {
    let line = "", answer=[];
    arr1.forEach((e,i)=>{
        arr1[i] = e.toString(2).padStart(n,'0');
    })
    arr2.forEach((e,i)=>{
        arr2[i] = e.toString(2).padStart(n,'0');
    })
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(arr1[i][j] === "1" || arr2[i][j] === "1") line += "#";
            else line += " ";
        }
        answer.push(line);
        line = "";
   }
    return answer; 
}
