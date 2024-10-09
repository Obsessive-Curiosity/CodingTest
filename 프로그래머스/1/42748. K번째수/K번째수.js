function solution(array, commands) {
  const result = [];

  for (const command of commands) {
    const [i, j, k] = command;
    const filtered = array.slice(i - 1, j);
    const sorted = filtered.sort((a, b) => a - b);
    result.push(sorted[k - 1]);
  }

  return result;
}