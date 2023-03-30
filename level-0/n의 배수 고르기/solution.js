function solution(n, numlist) {
    var answer = [];
    numlist.forEach((element,index) => {
       if(element%n===0) 
           answer.push(element);
    });
    return answer;
}
