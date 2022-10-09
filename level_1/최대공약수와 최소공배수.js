function solution(n, m) {
  let answer = [];
  let min = n > m ? m : n;
  let max = n > m ? n : m;
  let multiply = max * min;

  while (min > 0) {
    let temp = 0;

    if (max % min === 0) {
      answer.push(min);
      break;
    } else {
      temp = max;
      max = min;
      min = temp % min;
    }
  }

  answer.push(multiply / answer[0]);

  return answer;
}

console.log(solution(3, 12)); // [3, 12]
console.log(solution(2, 5)); // [1, 10]
