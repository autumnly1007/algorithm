function solution(n, edge) {
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

  for (let [a, b] of edge) {
    graph[a][b] = 1;
    graph[b][a] = 1;
  }
  return graph;
}

console.log(
  solution(5, [
    [1, 2],
    [1, 5],
    [2, 4],
    [3, 5],
    [1, 3],
  ])
);
