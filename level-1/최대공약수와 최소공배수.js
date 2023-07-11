function solution(n, m) {
    let gcd, lcm;
    n<m ? [n,m] = [n,m] : [n,m] = [m,n];
    for(let i=1; i<=n; i++){
        if(n%i===0 && m%i===0) gcd = i;
    }
    lcm = n * m / gcd;
    return [gcd,lcm];
}
