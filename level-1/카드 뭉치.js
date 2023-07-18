function solution(cards1, cards2, goal) {
    let answer = [];
    for(let i=0; i<goal.length; i++){
        if(cards1[0]===goal[i]) answer.push(cards1.shift());
        else if(cards2[0]===goal[i]) answer.push(cards2.shift());
        else return "No";
    }
    return "Yes";
}
