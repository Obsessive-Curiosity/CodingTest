function solution(input) {
  const N = Number(input.shift());
  const arr = input.map((item) => item.split(" "));

  arr.sort((a, b) => {
    if (a[0] === b[0]) {
      // 나이가 같은 경우 먼저 가입한 사람이 앞에
      return 0;
    } else {
      // 나이 오름차순
      return a[0] - b[0];
    }
  });

  arr.forEach((i) => console.log(i.join(" ")));
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);