function solution(s) {
  const dict = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  // s 문자열에 문자가 있는 경우 Number(s)는 NaN이므로
  // isNaN(Number(s)) === true
  // s문자열이 모두 숫자일때까지 문자를 숫자로 변환하는 작업 반복
  while (isNaN(Number(s))) {
    // 문자를 숫자로 변환
    for (const key in dict) {
      s = s.replace(key, dict[key]);
    }
  }

  return Number(s);
}