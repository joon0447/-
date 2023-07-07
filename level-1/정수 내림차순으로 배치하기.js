function solution(n) {
    return parseInt([...n.toString()].sort().reverse().join(""));
}
