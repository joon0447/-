function solution(my_string) {
    const str = my_string.split(' ');
    var answer = Number(str[0]);
    str.forEach((element,index) => {
        if(element == '+')
            answer += Number(str[index+=1]);
        else if(element == '-')
            answer -= Number(str[index+=1]);
    });
    return answer;
}
