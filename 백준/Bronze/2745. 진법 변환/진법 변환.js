const changeChar2Num = (char) => {
  if (isNaN(Number(char))) {
    // 문자일 때
    return char.charCodeAt() - 55;
  } else {
    // 숫자일 때
    return Number(char);
  }
};

function solution(input) {
  const str = input.shift().split("");
  const num = Number(input);

  const sum = str.reduce((sum, char, idx) => {
    sum += changeChar2Num(char) * num ** (str.length - idx - 1);
    return sum;
  }, 0);

  console.log(sum);
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "2745/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

solution(input);
