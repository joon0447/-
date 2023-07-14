function solution(s) {
    const map = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    for(let i=0; i<map.length; i++){
        s = s.replaceAll(map[i], i); 
    }
    return Number(s);
}
