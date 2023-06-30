function solution(id_pw, db) {
    var answer = '';
    let arr = [];
    let ID = id_pw[0];
    let PW = id_pw[1];
    db.forEach((e) =>{
        if(e[0] === ID){
            arr.push(e[0]);
            if(e[1] === PW){
                arr.push(e[1]);
            }
        }
    });
    if(arr.length == 2)
        return "login";
    else if(arr.length == 1)
        return "wrong pw";
    else
        return "fail";
}
