function solution(sizes) {
    let row = [], col = [];
    sizes.forEach((e,i)=>{
        sizes[i].sort((a,b)=>a-b);
        row.push(sizes[i][0]);
        col.push(sizes[i][1]);
    })
    let rowMax = row.reduce((a,b)=>Math.max(a,b));
    let colMax = col.reduce((a,b)=>Math.max(a,b));
    return rowMax*colMax;
}
