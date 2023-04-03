function solution(keyinput, board) {
    var answer = [0,0];
    keyinput.forEach((e) => {
       if(e.startsWith('l')){
           answer[0]--;
           if(Math.abs(answer[0])>parseInt(board[0]/2)){
               answer[0]++;
           }
       }else if(e.startsWith('r')){
           answer[0]++;
           if(Math.abs(answer[0])>parseInt(board[0]/2)){
               answer[0]--;
           }
       }else if(e.startsWith('u')){
           answer[1]++;
           if(Math.abs(answer[1])>parseInt(board[1]/2)){
               answer[1]--;
           }
       }else if(e.startsWith('d')){
           answer[1]--;
           if(Math.abs(answer[1])>parseInt(board[1]/2)){
               answer[1]++;
           }
       }
    });
    return answer;
}
