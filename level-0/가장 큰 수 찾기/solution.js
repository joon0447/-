function solution(array) {
    var copy = [...array];
    var answer = [];
    array.sort((a,b)=>a-b);
    answer.push(array[array.length-1]);
    answer.push(copy.indexOf(array[array.length-1]));
    return answer;
}
