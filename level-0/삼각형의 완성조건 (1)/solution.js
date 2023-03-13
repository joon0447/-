function solution(sides) {
    let max = 0;
    let sum = 0;
    sides.forEach(element => {
       if(element > max) {
           max = element;   
       }sum += element;
    });
    if(sum-max>max) return 1;
    else return 2;
}
