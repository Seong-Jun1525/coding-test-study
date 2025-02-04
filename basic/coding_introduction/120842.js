/** 2차원으로 만들기 미해결
 * 문제 설명
 * 정수 배열 num_list와 정수 n이 매개변수로 주어집니다. num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.
 */

function solution(num_list, n) {
    let arr = new Array(Math.floor(num_list.length / n));

    let k = 0;

    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(n);
        for(let j = 0; j < arr[i].length; j++) {
            arr[i][j] = num_list[k++];
        }
    }

    return arr;
}

// 다른 사람의 풀이
function solution2(num_list, n) {
    var answer = [];

    while(num_list.length) {
        answer.push(num_list.splice(0,n));
    }

    return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3));