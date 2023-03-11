function solution(my_string) {
    let arr = [...my_string];
    let answer = [];
    let filter = arr.map(function(value){
        if(!isNaN(value)){
            answer.push(+value);
        }
    });
    answer.sort(function(a,b) {
       return a-b; 
    });
    return answer
}
