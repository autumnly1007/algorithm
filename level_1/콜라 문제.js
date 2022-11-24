function solution(a, b, n) {
  let answer = 0;

  while (n >= a) {
    n = n - a + b;
    answer += b;
  }
  return answer;
}

console.log(solution(2, 1, 20)); // 19
console.log(solution(3, 1, 20)); // 9
