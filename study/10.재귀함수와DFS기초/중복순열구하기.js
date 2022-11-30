function solution(n, m) {
  let answer = [];
  let temp = [];

  function DFS(L) {
    if (L === m) {
      answer.push(temp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        temp.push(i);
        DFS(L + 1);
        temp.pop();
      }
    }
  }

  DFS(0);
  return answer;
}

solution(3, 2);
