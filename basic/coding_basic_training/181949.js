// 대소문자 바꿔서 출력하기
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let output = "";
const regExp1 = new RegExp("[a-z]");

rl.on("line", function(line) {
    input = [line];
}).on("close", function() {
    str = input[0];

    for(let i = 0; i < str.length; i++) {
        if(regExp1.test(str[i])) {
            output += str[i].toUpperCase();
        } else {
            output += str[i].toLowerCase();
        }
    }

    console.log(output);
});