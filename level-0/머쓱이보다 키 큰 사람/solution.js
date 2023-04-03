function solution(array, height) {
    var arr = array.filter((e) => {
       if(e>height){
           return e;
       } 
    });
    return arr.length;
}
