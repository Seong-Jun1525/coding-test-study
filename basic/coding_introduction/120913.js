/**
 * 문자열 my_str과 n이 매개변수로 주어질 때,
 * 
 * my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.
 */

function solution(my_str, n) {
    var answer = [];
    let strArr = my_str.split("");
    while(true) {
        answer.push(strArr.slice(0, n).join(""));
        strArr.splice(0, n);
        if(strArr.length <= 0) break;
    }

    return answer;
}

console.log(solution("abc1Addfggg4556b", 6));
console.log(solution("abcdef123", 3));