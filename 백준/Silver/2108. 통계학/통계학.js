function meanFunc(N, array) {
  const sum = array.reduce((sum, cur) => {
    sum += cur;
    return sum;
  }, 0);

  return Math.round(sum / N);
}

function medianFunc(N, array) {
  return array[(N / 2) >> 0];
}

function modeFunc(N, array) {
  const hash = {};

  // 최빈값 찾기 위해 hash 이용
  for (const num of array) {
    hash[num] = (hash[num] ?? 0) + 1;
  }

  const max = Math.max(...Object.values(hash));
  const modes = Object.entries(hash)
    .filter(([key, val]) => val === max)
    .map(([key]) => Number(key))
    .sort((a, b) => a - b);

  return modes.length > 1 ? modes[1] : modes[0];
}

function diffFunc(N, array) {
  return array[N - 1] - array[0];
}

function solution(input) {
  const N = Number(input.shift());
  const array = input.map(Number);

  array.sort((a, b) => a - b); // 오름차순

  const mean = meanFunc(N, array);
  const median = medianFunc(N, array);
  const mode = modeFunc(N, array);
  const diff = diffFunc(N, array);

  console.log([mean, median, mode, diff].join("\n"));
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "241128.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);