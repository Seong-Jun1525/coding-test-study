// 이진수 더하기 미해결
function solution(bin1, bin2) {
    var answer = '';
    let flag = false;

    for(let i = bin1.length - 1; i >= 0; i--) {
        if(bin1[i] == "1" && (bin1[i] == bin2[i])) {
            answer.push("0");
            flag = true;
        } else if(bin1[i] == "1" && (bin1[i] != bin2[i])) {
            if(flag) {
                answer.push("0");
            } else {
                answer.push("1");
            }
        }
    }

    return answer;
}

console.log(solution("1001", "1111"));