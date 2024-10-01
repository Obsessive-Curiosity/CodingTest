function solution(s) {
  const str = s.split(" ").map((item) => Number(item));
  return `${Math.min(...str)} ${Math.max(...str)}`;
}