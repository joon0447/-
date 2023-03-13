function solution(my_string) {
    let s = [...my_string];
    let arr = Array.from(new Set(s));
    return arr.join("");
}
