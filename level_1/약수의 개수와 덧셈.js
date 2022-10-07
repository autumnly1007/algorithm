function solution(left, right) {
  let answer = 0;

  for (let num = left; num <= right; num++) {
    let count = 0;

    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        count++;
      }
    }
    answer += count % 2 === 0 ? num : -num;
  }
  return answer;
}

console.log(solution(13, 17)); // 43
console.log(solution(24, 27)); // 52
