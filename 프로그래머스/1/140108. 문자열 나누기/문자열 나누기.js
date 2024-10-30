function solution(s) {
  let [i, j] = [0, 1];
  let [xcnt, nxcnt] = [0, 0];
  let result = 0;

  while (i < s.length) {
    xcnt = 1;
    nxcnt = 0;

    while (j < s.length) {
      if (s[i] === s[j]) xcnt++;
      else nxcnt++;

      if (xcnt === nxcnt) {
        result++;
        break;
      }

      j++;
    }

    i = j + 1;
    j = i + 1;
  }

  if (xcnt !== nxcnt) result++;

  return result;
}