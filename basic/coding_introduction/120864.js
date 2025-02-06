/**
 * 문자열 my_string이 매개변수로 주어집니다.
 * my_string은 소문자, 대문자, 자연수로만 구성되어있습니다.
 * my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
 */

function solution(my_string) {
    var answer = "";
    let regExp = new RegExp("[0-9]");
    let s = 0;
    
    for(let i = 0; i < my_string.length; i++) {
        if(regExp.test(my_string[i])) {
            answer += parseInt(my_string[i]);
        } else {
            answer += " ";
        }
    }

    let result = answer.split(" ");

    for(let i = 0; i < result.length; i++) {
        if(result[i] !== "") s += parseInt(result[i]);
    }

    return s;
}

/**
 * 정규식을 사용해서 문자열에 각 인덱스가 숫자일 경우 answer에 추가하고 아닐경우 공백을 추가
 * 
 * answer를 공백을 기준으로 새로운 배열 result를 만들고
 * 
 * result의 각 인덱스 값이 ""이 아닌 경우는 숫자인 경우이기 때문에
 * 이때 해당 값을 숫자형으로 형변환을하고 s에 더함
 */

console.log(solution("aAb1B2cC34oOp"));
console.log(solution("1a2b3c4d123Z"));