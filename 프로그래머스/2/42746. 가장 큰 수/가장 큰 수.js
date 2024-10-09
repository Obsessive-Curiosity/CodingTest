function solution(numbers) {
  const sorted = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`);
  return sorted[0] === 0 ? "0" : sorted.join("");
}