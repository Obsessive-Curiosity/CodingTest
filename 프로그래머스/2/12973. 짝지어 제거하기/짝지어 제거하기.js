function solution(s) {
  const sArr = [...s];
  const stk = [];

  while (sArr.length > 0) {
    stk.push(sArr.pop());
    const len = stk.length;
    if (len > 1 && stk[len - 1] === stk[len - 2]) {
      stk.splice(-2, 2);
    }
  }

  return stk.length === 0 ? 1 : 0;
}