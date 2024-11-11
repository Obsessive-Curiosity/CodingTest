function solution(arr) {
  const stack = [];

  for (const num of arr) {
    stack.push(num);

    if (stack.length > 1) {
      const preNum = stack.slice(-2, -1)[0];
      if (preNum === num) stack.pop();
    }
  }

  return stack;
}