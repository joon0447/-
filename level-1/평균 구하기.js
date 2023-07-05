function solution(arr) {
    let result = 0;
    arr.map((e)=>result+=e);
    return result/arr.length;
}
