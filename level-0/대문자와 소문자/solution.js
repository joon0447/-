function solution(my_string) {
    var answer = "";
    for(var element of my_string){
        if(element === element.toUpperCase()) answer += element.toLowerCase();
        else answer += element.toUpperCase();  
    }
    return answer;
}
