function solution(n) {
  let x = 0;

  for (x = 0; x < n; x++) {
    if (n % x === 1) {
      return x;
    }
  }
}

console.log(solution(10)); // 3
console.log(solution(17)); // 2
