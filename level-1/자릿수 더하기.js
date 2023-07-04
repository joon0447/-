function solution(n)
{
    let answer = 0;
    n.toString().split("").forEach((e)=>{
        answer += parseInt(e);
    });
    return answer;
}
