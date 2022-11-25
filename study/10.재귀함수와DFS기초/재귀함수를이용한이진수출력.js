function solution(n) {
  let answer = 0;
  let temp = [];

  function DFS(n) {
    if (n === 0) return;
    else {
      temp.push(n % 2);
      DFS(parseInt(n / 2));
    }
  }
  DFS(n);
  answer = temp.join('');
  return answer;
}

console.log(solution(11)); // 1011
