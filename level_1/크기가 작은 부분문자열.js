function solution(t, p) {
  var answer = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    if (t.substr(i, p.length) <= p) answer++;
  }

  return answer;
}

console.log(solution('3141592', '271')); // 2
console.log(solution('500220839878', '7')); // 8
console.log(solution('10203', '15')); // 3
