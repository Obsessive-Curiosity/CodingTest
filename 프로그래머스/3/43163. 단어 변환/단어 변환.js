const is1Diff = (word1, word2) => {
  let diffcnt = 0; // 서로 다른 글자 카운트

  [...word1].forEach((word, idx) => {
    if (word !== word2[idx]) {
      diffcnt++;
    }
  });

  // 서로 다른 글자가 1개면 true
  return diffcnt === 1 ? true : false;
};

function solution(begin, target, words) {
  // target이 word에 없을 경우 0 반환
  if (!words.includes(target)) {
    return 0;
  }

  words.unshift(begin); // words에 begin 추가

  const wordList = {}; // 인접리스트 생성
  const visited = {}; // 방문 체크 생성

  for (let word1 of words) {
    wordList[word1] = [];
    visited[word1] = false; // 방문 체크 초기화
    // 인접리스트 추가
    for (let word2 of words) {
      if (word1 !== word2 && is1Diff(word1, word2)) {
        wordList[word1].push(word2);
      }
    }
  }

  const BFS = (start) => {
    // 시작 방문체크
    visited[begin] = true;
    const queue = [[start, 0]];

    while (queue.length) {
      const [word, cnt] = queue.shift();

      // 단어랑 target이랑 같으면 개수 반환
      if (word === target) {
        return cnt;
      }

      // 인접한 글자가 있는 경우 실행
      if (wordList[word].length) {
        for (let w of wordList[word]) {
          // 방문하지 않았을 경우에 방문처리 후 큐에 추가
          if (!visited[w]) {
            visited[w] = true; // 방문 처리
            queue.push([w, cnt + 1]);
          }
        }
      }
    }

    return 0; //target에 도달하지 못하면 0 반환
  };

  return BFS(begin);
}