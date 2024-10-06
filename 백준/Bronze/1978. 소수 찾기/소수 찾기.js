function solution(input) {
  const [N, arr] = input;
  const setarr = new Set(arr.split(" ").map(Number));
  let cnt = 0;

  // 소수 판별
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  // 에라토스테네스의 체
  for (let num of setarr) {
    if (isPrime(num)) {
      cnt++;
    }
  }

  // 출력
  console.log(cnt);
}
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "1978/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);