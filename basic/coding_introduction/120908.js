// 문자열 안에 문자열
function solution(str1, str2) {
    var answer = 0;
    
    const r = str1.split(str2).join("");
    console.log(str1);
    console.log(r);
    
    answer = (str1.length === r.length) ? 2 : 1;
    
    return answer;
}

console.log(solution("ab6CDE443fgh22iJKlmn1o", "6CD"));
console.log(solution("ppprrrogrammers", "pppp"));