function solution(s) {
  const str = s.toLowerCase(); // 모두 소문자로 만들기

  // match로 p 또는 y 추출 후 길이(개수) 구하기 
  // 런타임 에러 : 원인 match로 값이 없을 경우 null반환 후 length사용이 불가하여
  // ?. 사용으로 해결 후 ?? 사용으로 null일 경우 0 디폴트값 지정
  const pCnt = str.match(/p/g)?.length ?? 0;
  const yCnt = str.match(/y/g)?.length ?? 0;

  return pCnt === yCnt;
}