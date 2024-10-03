function solution(input) {
  // 공백으로만 이뤄지 "  "일 경우 [""] 이므로 길이가 1이 나올 수 있음
  // 따라서 input.split(/\s+/)[0]을 해줘야 함
  console.log(input.split(/\s+/)[0] === "" ? 0 : input.split(/\s+/).length);
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim();

solution(input);
