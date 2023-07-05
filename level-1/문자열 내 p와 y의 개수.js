function solution(s){
    if ((/[Pp]/g.test(s))&&(/[Yy]/g.test(s))){
        return (s.match(/[Pp]/g).length === s.match(/[Yy]/g).length) ? true : false;
    }else
        return ((/[Pp]/g.test(s))||(/[Yy]/g.test(s))) ? false : true;
}
