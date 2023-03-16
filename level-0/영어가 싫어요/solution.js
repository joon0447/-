function solution(numbers) {
    var change = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = change.forEach((element,index) => {
        numbers = numbers.split(element).join(index);
    });
    return Number(numbers);
}
