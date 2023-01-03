function solution(s) {
  let answer = 0;
  let cntX = 0;
  let cntY = 0;
  let target = '';

  for (let i = 0; i < s.length; i++) {
    if (!target) target = s[i];

    target === s[i] ? cntX++ : cntY++;

    if (cntX === cntY) {
      answer++;
      cntX = 0;
      cntY = 0;
      target = '';
    }
  }
  if (target) answer++;
  return answer;
}

console.log(solution('banana')); // 3
console.log(solution('abracadabra')); // 6
console.log(solution('aaabbaccccabba')); // 3
