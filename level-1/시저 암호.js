function solution(s, n) {
    var answer = '';
    for(let i=0; i<s.length; i++){
        let code = s.charCodeAt(i);
        let tCode = s.charCodeAt(i) + n;
        if(s[i]===' '){
            answer += s[i];
            continue;
        }
        if(code>=65 && code<=90){
            if(tCode>90){
                answer += String.fromCharCode(tCode - 26);
            }else{
                answer += String.fromCharCode(tCode);
            }
        }else{
            if(tCode>122){
                answer += String.fromCharCode(tCode - 26);
            }else{
                answer += String.fromCharCode(tCode);
            }
        }
    }
    return answer;
}
