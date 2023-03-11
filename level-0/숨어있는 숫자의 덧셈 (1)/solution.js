function solution(my_string) {
    let answer = 0;
    let filter = /[^0-9]/g;
    let str = my_string.replace(filter,"");
    for(let i of str){
        answer += parseInt(i);
    }
    return answer;
}
