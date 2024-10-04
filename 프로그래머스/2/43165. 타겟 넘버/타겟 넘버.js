function solution(numbers, target) {
  const len = numbers.length;
  const ele = numbers.map((num) => [-num, +num]);
  let cnt = 0;

  for (let i = 0; i < 2 ** len; i++) {
    const signs = i.toString(2).padStart(len, "0").split("").map(Number);

    const sum = signs.reduce((acc, sign, idx) => {
      acc += ele[idx][sign];
      return acc;
    }, 0);

    if (sum === target) cnt++;
  }

  return cnt;
}