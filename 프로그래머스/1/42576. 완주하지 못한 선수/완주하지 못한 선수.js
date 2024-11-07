function solution(participant, completion) {
  const hash = {};

  for (const p of participant) {
    hash[p] = (hash[p] ?? 0) + 1;
  }

  for (const c of completion) {
    hash[c] = (hash[c] ?? 0) + 1;
  }

  for (const key in hash) {
    if (hash[key] % 2) return key;
  }
}