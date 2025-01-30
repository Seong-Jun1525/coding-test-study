// 주사위게임2
function solution(a, b, c) {
    var answer = 0;
    
    let arr = [a, b, c];

    if(arr.every(e => e === a)) {
        // (a + b + c) × (a² + b² + c²) × (a³ + b³ + c³)
        answer += ((a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3));
        return answer;
    }

    if (new Set(arr).size === arr.length) {
        // (a + b + c)
        answer += a + b + c;
        return answer;
    }

    // (a + b + c) × (a² + b² + c²)
    const count = {};
    arr.forEach(num => count[num] = (count[num] || 0) + 1);
    const values = Object.values(count);        // 각 숫자의 등장 횟수

    if (values.includes(2)) { // 3번 등장하는 숫자가 있을 경우
        answer = ((a + b + c) * (a ** 2 + b ** 2 + c ** 2))
        return answer;
    }
}

console.log(solution(2, 6, 1));
console.log(solution(5, 3, 3));
console.log(solution(4, 4, 4));