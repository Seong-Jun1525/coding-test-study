/**
 * 문제 설명
 * 1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다.
 * 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.
 */

function solution(i, j, k) {
    var answer = 0;
    let strKNum = k + "";

    for(let x = i; x <= j; x++) {
        let strNum = x + "";
        for(let n = 0; n < strNum.length; n++) {
            if(strNum[n] === strKNum) {
                answer++;
            }
        }
    }

    return answer;
}

console.log(solution(1, 13, 1));
console.log(solution(10, 50, 5));
console.log(solution(3, 10, 2));