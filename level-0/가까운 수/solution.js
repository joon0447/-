function solution(array, n) {
    array.push(n);
    array.sort((a,b) => a-b);
    var index = array.findIndex((element) => element == n);
    if(index == array.length-1){
        return array[index-1]; 
    } 
    else if(array[index]-array[index-1] <= array[index+1]-array[index]){
        return array[index-1];
    } 
    else if(array[index]-array[index-1] > array[index+1]-array[index]){
        return array[index+1];  
    } 
}
