function solution(ipnut) {
  const strArr = new Set(input.slice(1)); // 겹치는 글자 제거
  const sortedStrArr = [];
  for (let str of strArr) {
    sortedStrArr.push({ str, len: str.length });
  }

  // 오름차순으로 정렬 A -> Z
  // str.localeCompare()
  // 길이순으로 정렬
  sortedStrArr.sort((a, b) => a.str.localeCompare(b.str));
  sortedStrArr.sort((a, b) => a.len - b.len);

  for (let sortedStr of sortedStrArr) {
    console.log(sortedStr.str);
  }
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);