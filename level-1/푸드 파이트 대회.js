function solution(food) {
    let divArr = [], arr = [];
    for(let i=1; i<food.length; i++){
        divArr.push(Math.floor(food[i]/2));
        arr.push(i.toString().repeat(divArr[i-1]));
    }
    return arr.join("") + "0" + arr.reverse().join("");
}
