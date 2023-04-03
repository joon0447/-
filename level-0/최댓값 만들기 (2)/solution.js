function solution(numbers) {
    numbers.sort((a,b)=> b-a);
    var num1 = numbers[0]*numbers[1];
    var num2 = numbers[numbers.length-1]*numbers[numbers.length-2];
    var answer = num1 > num2 ? num1 : num2;
    return answer;
}
