function solution(polynomial) {
    let a = 0;
    let b = 0;
    const arr = polynomial.split(" + ");
    arr.forEach((e) =>{
        if(e.includes('x')){
            if(e[0]=='x'){
                a += 1;
            }else{
                 a += parseInt(e.split("x"));
            }
        }else{
            b += parseInt(e);
        }
    });
    let answer = (() =>{
       if(a==0){
           return String(b);
       }else if(a==1){
           if(b!=0){
              return "x" + " + " + b; 
           }else{
               return "x";
           }
       }else if(a>1){
           if(b!=0){
               return a + "x" + " + " + b;
           }else{
               return a + "x";
           }
       }
    });
    return answer();
}
