function solution(arr, n) {
    return arr.map((e,i)=>{
        if(arr.length%2===0){
            if(i%2!==0) return e+n;
            else return e;            
        }else{
            if(i%2===0) return e+n;
            else return e;     
        }
    });
}
