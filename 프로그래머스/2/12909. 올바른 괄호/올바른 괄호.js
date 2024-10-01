function solution(s) {
  arr = [...s];
  const stk = [];
  while (arr.length > 0) {
    stk.push(arr.pop());
    len = stk.length;
    if (len > 1 && stk.slice(len - 2).join("") === ")(") stk.splice(-2, 2);
  }
  return stk.length === 0 ? true : false;
}