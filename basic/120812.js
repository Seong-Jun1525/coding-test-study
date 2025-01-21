// 최빈값 미해결
function solution(array) {
    var answer = 0;
    const stack = [];
    array.sort();

    if(array.length === 1) {
        return array[0];
    } else {
        for(let i = 0; i < array.length; i++) {
            if(stack.length === 0 || stack[stack.length - 1] === array[i]) {
                stack.push(array[i]);
            } else if(stack[stack.length - 1] !== array[i]) {
                answer = stack.length > answer ? stack[stack.length - 1] : (stack.length === answer ? -1 : answer);
                for(let i = 0; i < stack.length; i++) {
                    stack.pop();
                }
            }
        }
    }
    

    return answer;
}

console.log(solution([1, 1, 2, 2, 3, 3, 3]));