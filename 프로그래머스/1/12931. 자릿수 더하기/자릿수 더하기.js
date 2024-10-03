function solution(n) {
  return [...String(n)].reduce((acc, cur) => {
    acc += Number(cur);
    return acc;
  }, 0);
}