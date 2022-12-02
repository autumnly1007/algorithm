function solution(n, edge) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array());
  let check = Array(n + 1).fill(0);

  for (let [a, b] of edge) {
    graph[a].push(b);
    graph[b].push(a);
  }

  function DFS(v) {
    for (let nv of graph[v]) {
      if (check[nv] === 0) {
        check[nv] = 1;
        DFS(nv);
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    if (check[i] === 0) {
      answer++;
      check[i] = 1;
      DFS(i);
    }
  }
  return answer;
}

console.log(
  solution(7, [
    [1, 2],
    [2, 3],
    [1, 4],
    [1, 5],
  ])
); // 3
