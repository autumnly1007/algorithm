function solution(num) {
  let answer = '';

  if (num % 2 === 0) {
    answer = 'Even';
  } else {
    answer = 'Odd';
  }

  return answer;
}

console.log(solution(1)); // "Odd"
console.log(solution(2)); // "Even"
