function solution(s) {
  var answer = [-1];

  for (let i = 1; i < s.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (s[i] === s[j]) {
        answer.push(i - j);
        break;
      } else if (j === 0) {
        answer.push(-1);
        break;
      }
    }
  }

  return answer;
}

console.log(solution('banana')); // [-1, -1, -1, 2, 2, 2]
console.log(solution('foobar')); // [-1, -1, 1, -1, -1, -1]
