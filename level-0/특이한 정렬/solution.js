function solution(numlist, n) {
    let answer = [];
    answer = numlist.sort((a,b) => {
        const [A,B] = [Math.abs(a-n), Math.abs(b-n)];
        if(A === B){
            return b-a;
        }
        return A-B;
    });
    return answer;            
}
