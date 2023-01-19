function solution(n) {
  let answer = 0;
  let start = 1;

  while (start <= n) {
    let sum = 0;

    for (let i = start; sum <= n; i++) {
      sum += i;
      if (sum === n) answer++;
    }
    start++;
  }
  return answer;
}

console.log(solution(15)); // 4
