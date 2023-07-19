function solution(nums) {
    var answer = 0;
    let sumArr = [];
    let isPrime;
    
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let k=j+1; k<nums.length; k++){
                sumArr.push(nums[i]+nums[j]+nums[k]);
            }
        }
    }
    
    sumArr.forEach((e)=>{
        for(let i=2; i<=Math.floor(Math.sqrt(e)); i++){
            if(e%i===0){
                isPrime = false;
                break;
            }
            else isPrime = true;
        }
        if(isPrime === true) answer+=1;
    })

    return answer;
}
