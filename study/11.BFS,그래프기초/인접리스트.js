function solution(n, edge) {
  let answer = 0;
  const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  const check = Array(n + 1).fill(0);
  const path = [];

  for (let [a, b] of edge) {
    graph[a].push(b);
  }
  function DFS(v) {
    if (v === n) {
      answer++;
      console.log(path);
    } else {
      for (let nv of graph[v]) {
        if (check[nv] === 0) {
          path.push(nv);
          check[nv] = 1;
          DFS(nv);
          check[nv] = 0;
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
