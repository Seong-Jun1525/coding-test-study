/**
 * 문제 설명
 * 정수 배열 array와 정수 n이 매개변수로 주어질 때,
 * array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.
 */

function solution(array, n) {
    // let answer = [...array];
    // for(let i = 0; i < array.length; i++) {
    //     answer[i] = Math.abs(n - array[i]);
    // }

    // console.log(Math.min(...array));

    // console.log(answer.indexOf(Math.min(...array)));

    // return array[answer.indexOf(Math.min(...answer))];

    let result = array[0];
    for(let i = 1; i < array.length; i++) {
        let a = Math.abs(n - array[i]);
        let b = Math.abs(n - result);
        
        if(a < b || (a === b && array[i] < result)) {
            result = array[i];
        }
    }

    return result;
}

/**
 * 가까운 수가 여러개일 경우에는 더 작은 수를 반환해야함
 */

console.log(solution([3, 10, 28], 20));
console.log(solution([10, 11, 12], 13));