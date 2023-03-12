function solution(s) {
    let arr = s.split(' ');
    let filter = [];
    arr.forEach((element, index) => {
        if((!isNaN(arr[++index]) && !isNaN(element)) || (index == arr.length && !isNaN(element))){
            filter.push(+element);
        }
    });
    let result = filter.reduce((a,b) => a+b,0);
    return result;
}
