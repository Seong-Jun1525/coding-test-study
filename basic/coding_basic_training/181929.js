/** 문제 설명
 * 정수가 담긴 리스트 num_list가 주어질 때,
 * 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.
 */

function solution(num_list) {
    var answer = 0;

    const sum = num_list.reduce((a, b) => a + b, 0);
    const multiply = num_list.reduce((a, b) => a * b, 1);

    if(multiply < Math.pow(sum, 2)) {
        answer = 1;
    }

    return answer;
}

console.log(solution([3, 4, 5, 2, 1]));
console.log(solution([5, 7, 8, 3]));