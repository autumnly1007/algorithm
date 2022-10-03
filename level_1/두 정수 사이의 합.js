function solution(a, b) {
  let answer = 0;
  let min = 0;
  let max = 0;

  if (a === b) return a;

  min = a > b ? b : a;
  max = a > b ? a : b;

  for (let i = min; i <= max; i++) {
    answer += i;
  }

  return answer;
}

console.log(solution(3, 5)); // 12
console.log(solution(3, 3)); // 3
