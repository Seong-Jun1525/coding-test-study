function solution(num_list) {
    var answer = [];

    num_list.sort((a, b) => a - b);

    for(let i = 0; i < 5; i++) answer.push(num_list[i]);

    return answer;
}

console.log(solution([12, 4, 15, 46, 38, 1, 14]));