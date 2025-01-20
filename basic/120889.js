// 삼각형의 완성조건(1)
const sides = [3, 2, 1];

function solution(sides) {
    var answer = 0;

    sides.sort((a, b) => a - b);

    answer = sides[0] + sides[1];

    return answer <= sides[2] ? 2 : 1;
}

console.log(solution(sides));