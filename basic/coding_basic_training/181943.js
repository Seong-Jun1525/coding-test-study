// 문자열 겹쳐쓰기
function solution(my_string, overwrite_string, s) {
    var answer = '';
    let arr = [...my_string];
    
    // my_string = my_string.replace(my_string.substring(s, overwrite_string.length + s), " ");
    // my_string = my_string.replace(" ", overwrite_string);
    
    // answer = my_string;

    // answer = my_string.slice(s, overwrite_string.length, overwrite_string).toString();
    arr.splice(s, overwrite_string.length, overwrite_string)
    // console.log(arr.join(""));
    answer = arr.join("");
    return answer;
}

console.log(solution("aaaaaa", "bbb", 3));

/**
 * 단순히 replace를 사용하면 된다 라고 생각하면 다른건 맞을 수 있어도 my_string에 같은 문자가 여러개 반복될 경우 틀리게 됨
 * 다른 방법을 도저히 못찾아서 구글링 해본 결과 splice를 사용하였다
 * 
 * => splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경함
 */