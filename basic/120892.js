function solution(cipher, code) {
    var answer = '';

    let cipherArr = cipher.split("");
    let i = 0;

    while(cipherArr.length != 0) {
        if(i == code - 1) {
            answer += cipherArr.shift();
            i = 0;
        } else {
            cipherArr.shift();
            i++;
        }
    }

    return answer;
}

console.log(solution("dfjardstddetckdaccccdegk", 4));