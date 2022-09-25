function solution(n) {
  let answer = n
    .toString()
    .split('')
    .reverse()
    .map((num) => parseInt(num));
  return answer;
}

console.log(solution(12345));
console.log(solution(678));
