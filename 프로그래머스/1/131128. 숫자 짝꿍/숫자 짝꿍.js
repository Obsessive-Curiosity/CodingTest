function getArray(array) {
  return array
    .split("")
    .map(Number)
    .sort((a, b) => a - b);
}

function solution(X, Y) {
  const XArray = getArray(X);
  const YArray = getArray(Y);
  let result = [];

  while (XArray.length > 0 && YArray.length > 0) {
    const [x, y] = [XArray.pop(), YArray.pop()];

    if (x === y) {
      result.push(x);
    } else {
      if (x < y) {
        XArray.push(x);
      } else {
        YArray.push(y);
      }
    }
  }

  if (result[0] === 0) {
    result = [...new Set(result)];
  }

  return result.length ? result.join("") : "-1";
}