function solution(s) {
    let regExp = /[a-zA-Z]/g; 
    return !regExp.test(s) && (s.length === 4 || s.length === 6);
}
