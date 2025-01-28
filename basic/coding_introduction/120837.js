function solution(hp) {
    // 장군 개미 5
    // 병정 개미 3
    // 일 개미 1
    var answer = 0;

    while(hp > 0) {
        if(hp >= 5) {
            answer += Math.floor(hp / 5);
            hp %= 5;
        } else if(hp >= 3) {
            answer += Math.floor(hp / 3);
            hp %= 3;
        } else {
            answer += Math.floor(hp / 1);
            hp %= 1;
        }
    }

    return answer;
}

console.log(solution(999))