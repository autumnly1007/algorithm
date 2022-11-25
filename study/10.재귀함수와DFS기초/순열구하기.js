function solution(nums, m) {
  let answer = [];
  let temp = [];
  let n = nums.length;
  let check = Array(n + 1).fill(0);

  function DFS(L) {
    if (L === m) {
      answer.push(temp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          temp.push(i);
          DFS(L + 1);
          check[i] = 0;
          temp.pop();
        }
      }
    }
  }

  DFS(0);
  return answer;
}

console.log(solution([3, 6, 9], 2));
