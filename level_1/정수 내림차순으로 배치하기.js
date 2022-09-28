function solution(n) {
  var answer = '';

  n = n
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .forEach((num) => {
      answer += num;
    });

  return parseInt(answer);
}

console.log(solution(15243)); // 54321
console.log(solution(361)); // 631
