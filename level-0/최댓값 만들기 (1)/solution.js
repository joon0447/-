function solution(numbers) {
    let max1 = Math.max(...numbers);
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]==max1){
            numbers.splice(i,1);
            break;
        }
    }
    let max2 = Math.max(...numbers);
    return max1*max2;
    
}
