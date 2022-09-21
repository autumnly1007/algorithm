function solution(n) {
  var answer = 0;
  let i = 0;

  for (i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }

  return answer;
}

console.log(solution(6)); // 12
console.log(solution(12)); // 28
