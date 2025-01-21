function solution(before, after) {
    var answer = 0;
    let check = 0;

    const beforeS = before.split("");
    const afterS = after.split("");

    for(let i = 0; i < beforeS.length; i++) {
        for(let j = 0; j < afterS.length; j++) {
            if(beforeS[i] === afterS[j]) {
                beforeS[i] = 0;
                afterS[j] = 1;
                check++;
            }
        }
    }

    answer = before.length === check ? 1 : 0;

    return answer;
}

console.log(solution("hello", "hleol"));
console.log(solution("allpe", "apple"));
console.log(solution("acaa", "aaca"));