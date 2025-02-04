// 이진수 더하기 미해결
function solution(bin1, bin2) {
    var answer = '';
    let b1 = parseInt(bin1);
    let b2 = parseInt(bin2);
    
    let r = ((b1 + b2) >= 20) ? "0" + (b1 + b2) : (b1 + b2) + "";
    console.log(r);

    for(let i = r.length - 1; i >= 0; i--) {
        let x = parseInt(r[i]);
        if(x === 3) {
            answer += "1";
            r[i+1] = (parseInt(r[i-1]) + 1) + "";
        } else if(x === 2) {
            answer += "0";
            r[i+1] = (parseInt(r[i-1]) + 1) + "";
        } else {
            answer += x + "";
        }
    }

    return answer;
}

console.log(solution("10", "11"));