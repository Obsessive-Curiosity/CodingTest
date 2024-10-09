function solution(input) {
  const N = Number(input.shift());
  const arr = input.shift().split(" ").map(Number);
  const setArr = Array.from(new Set(arr));
  const MapArr = new Map();

  setArr.sort((a, b) => a - b); // 명시하지 않으면 문자열로 계산
  setArr.forEach((num, idx) => MapArr.set(num, idx));

  const result = arr.map((num) => MapArr.get(num)).join(" ");
  console.log(result);
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);