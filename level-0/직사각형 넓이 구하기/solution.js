function solution(dots) {
    var arr = dots.filter((e,i) => {
        if(dots[0][0] !== dots[i][0] && dots[0][1] !== dots[i][1]){
            return e;
        }
    });
    return Math.abs(dots[0][0] - arr[0][0]) * Math.abs(dots[0][1] - arr[0][1]);
}
