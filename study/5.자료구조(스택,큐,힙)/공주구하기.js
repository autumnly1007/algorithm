function solution(n, k) {
  let answer = 0;

  let queue = Array(n)
    .fill(0)
    .map((val, idx) => idx + 1);

  while (queue.length) {
    for (let i = 1; i < k; i++) {
      queue.push(queue.shift());
    }
    queue.shift();
    if (queue.length === 1) {
      answer = queue.shift();
    }
  }
  return answer;
}

console.log(solution(8, 3)); // 7
console.log(solution(10, 4)); // 5
