// 숨어있는 숫자의 덧셈(1)
function solution(my_string) {
    var answer = 0;
    
    for(let i = 0; i < my_string.length; i++) {
        let c = my_string[i].charAt(0);
        console.log("c => " + c);
        if((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) continue;
        console.log("=> " + parseInt(my_string[i]));
        answer += parseInt(my_string[i]);
    }
    
    return answer;
}

console.log(solution("aAb1B2cC34oOp"));