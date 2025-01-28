// 아이스 아메리카노

function solution(money) {
    var answer = [];
    let americano = 0;

    americano += Math.floor(money / 5500);
    money %= 5500;

    if(money >= 5500) solution(money);

    answer.push(americano);
    answer.push(money);

    return answer;
}

console.log(solution(5500));