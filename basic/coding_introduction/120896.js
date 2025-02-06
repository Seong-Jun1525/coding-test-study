/**
 * 문제 설명
 * 문자열 s가 매개변수로 주어집니다. 
 * s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 
 * 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.
 */

function solution(s) {
    var answer = "";
    let count = 0;

    const strArr = s.split("");
    strArr.sort();

    let i = 0;
    while(i < strArr.length) {
        let s = strArr[i];
        for(let j = i; j < strArr.length; j++) {
            if(s === strArr[j]) {
                strArr[j] = "";
                count++;
            }
        }

        if(count === 1) answer+=s;
        count = 0;
        i++;
    }

    return answer;
}

/** 다른 사람의 풀이
    function solution(s) {
        let res = [];
        for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
        return res.sort().join('');
    }
 */

console.log(solution("abcabcadc"));
console.log(solution("abdc"));
console.log(solution("hello"));