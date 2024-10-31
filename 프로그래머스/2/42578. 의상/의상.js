function solution(clothes) {
  const closet = {};
  let result = 1;

  // 옷장에 옷 분류해서 넣기
  for (const clothe of clothes) {
    const [name, type] = clothe;

    if (closet[type]) {
      // 옷장에 type이 있는 경우
      closet[type].push(name);
    } else {
      // 옷장에 type이 없는 경우
      closet[type] = [name];
    }
  }

  for (const type in closet) {
    result *= closet[type].length + 1;
  }

  return result - 1;
}