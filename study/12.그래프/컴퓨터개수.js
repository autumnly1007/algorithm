function solution(n, edge) {
  let answer = n;
  let graph = Array.from(Array(n + 1), () => Array());
  let check = Array(n + 1).fill(0);

  for (let [a, b] of edge) {
    graph[a].push(b);
    graph[b].push(a);
  }

  let count = 0;
  function DFS(v) {
    count++;
    for (let nv of graph[v]) {
      if (check[nv] === 0) {
        check[nv] = 1;
        DFS(nv);
      }
    }
  }
  check[1] = 1;
  DFS(1);

  return answer - count;
}

console.log(
  solution(11, [
    [1, 2],
    [1, 4],
    [2, 3],
    [4, 5],
    [5, 6],
    [7, 8],
    [7, 10],
    [8, 9],
    [10, 11],
  ])
); // 5

console.log(
  solution(12, [
    [1, 2],
    [1, 7],
    [1, 8],
    [1, 6],
    [8, 11],
    [11, 12],
  ])
); // 5
