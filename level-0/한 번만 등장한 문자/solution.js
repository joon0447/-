function solution(s) {
    var answer = [];
    var arr = s.split("");
    arr.forEach((element) => {
        if(arr.indexOf(element) === arr.lastIndexOf(element)){
            answer.push(element);
        }
    });
    return answer.sort().join("");
}
