// 미해결
function solution(age) {
    var answer = '';

    let ageArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

    

    answer += ageArr[Math.floor(age / 10)] + ageArr[Math.floor(age % 10)];

    return answer;
}

console.log(solution(23));