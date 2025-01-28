function solution(array) {
    var answer = 0;

    let m = array.map((i) => i.toString());
    m = m.join("");

    console.log(m);

    for(let i = 0; i < m.length; i++) {
        if(m[i] === "7") {
            answer++;
        }
    }

    return answer;
}

console.log(solution([7, 77, 17]));