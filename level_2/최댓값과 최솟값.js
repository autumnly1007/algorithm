function solution(s) {
  let answer = '';
  const numbers = s.split(' ');
  answer = Math.min(...numbers) + ' ' + Math.max(...numbers);
  return answer;
}

console.log(solution('1 2 3 4')); // 1 4
console.log(solution('-1 -2 -3 -4')); // -4 -1
console.log(solution('-1 -1')); // -1 -1
