function solution(s) {
    let arr = [];
    for(let i in s){
        arr.push(s.charCodeAt(i));
    }
    return String.fromCharCode(...arr.sort((a,b)=>b-a));
}
