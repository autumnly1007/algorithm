function solution(n) {
  let answer = 1;

  for (let i = 3; i <= n; i++) {
    let count = 0;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        count++;
      }
    }
    if (count == 0) {
      answer++;
    }
  }
  return answer;
}

console.log(solution(10)); // 4
console.log(solution(5)); // 3
