function solution(quiz) {
    quiz.forEach((element,index) => {
        arrSplit = element.split(' ');
        if(arrSplit[1]== '+'){
            if(Number(arrSplit[0]) + Number(arrSplit[2]) == Number(arrSplit[4]))
                quiz[index] = "O";
            else
                quiz[index] = "X";
        }else{
            if(arrSplit[0] - arrSplit[2] == arrSplit[4])
                quiz[index] = "O";
            else
                quiz[index] = "X";
        }
    });
    return quiz;
}
