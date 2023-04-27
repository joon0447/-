function solution(my_string) {
    let answer = 0;
    let arr = [...my_string];
    let filter = [];
    let tmp = '';
    for(let i=0; i<arr.length; i++){
        if(!isNaN(Number(arr[i]))){
            tmp += arr[i];
            if(isNaN(Number(arr[i+1]))){
                filter.push(tmp);
                tmp = '';
            }
        }
    }
    filter.forEach((e) =>{
       answer +=Number(e); 
    });
    return answer;
}
