function solution(my_string) {  
    const str = "aeiou";
    let answer = my_string.split('').filter((e)=>(!str.includes(e))).join('');
    return answer;
}
