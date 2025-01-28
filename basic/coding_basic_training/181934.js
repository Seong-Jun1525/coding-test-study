function solution(ineq, eq, n, m) {
    var answer = 0;

    let r = ineq + eq;

    switch(r) {
        case ">=":
            answer = n >= m ? 1 : 0;
            break;
        case "<=":
            answer = n <= m ? 1 : 0;
            break;
        case ">!":
            answer = n > m ? 1 : 0;
            break;
        case "<!":
            answer = n < m ? 1 : 0;
            break;
                    
    }

    return answer;
}

console.log(solution("<", "=", 20, 50));
console.log(solution(">", "!", 41, 78));