function solution(x, n) {
  let answer = [];
  let i = 0;

  for (i = 0; i < n; i++) {
    answer.push(x);
    x += answer[0];
  }

  return answer;
}

console.log(solution(2, 5)); // [2, 4, 6, 8, 10]
console.log(solution(4, 3)); // [4, 8, 12]
