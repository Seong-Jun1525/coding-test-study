/**
 * 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
 * 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
 * 삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다.
 * 나머지 한 변이 될 수 있는 정수의 개수를 return하도록 solution 함수를 완성해주세요.
 */

function solution(sides) {
    // 큰 수 작은 수 구하기
    let [x, y] = sides.sort((a, b) => a - b);

    let n = x + y - 1; // 다른 한 변의 길이가 큰 변일 경우
    let m = y - x; // 큰 수가 sides 배열에서 큰 수 인 경우

    let a = 0;
    for(let i = y; i < n; i++) {
        a++;
    }
    // console.log("a : " + a);
    let b = 0;
    for(let i = y; i > m; i--) {
        b++;
    }
    // console.log("b : " + b);

    return a + b;
}

console.log(solution([1, 2]));
console.log(solution([3, 6]));
console.log(solution([11, 7]));