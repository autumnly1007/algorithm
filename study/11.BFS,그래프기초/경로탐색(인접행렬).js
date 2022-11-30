function solution(n, edge) {
  let answer = 0;
  const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  const check = Array(n + 1).fill(0);
  const path = [];

  for (let [start, end] of edge) {
    graph[start][end] = 1;
  }
  function DFS(v) {
    if (v === n) {
      answer++;
      console.log(path);
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && check[i] === 0) {
          check[i] = 1;
          path.push(i);
          DFS(i);
          check[i] = 0;
          path.pop();
        }
      }
    }
  }

  check[1] = 1;
  DFS(1);
  return answer;
}

console.log(
  solution(5, [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ])
); // 6
