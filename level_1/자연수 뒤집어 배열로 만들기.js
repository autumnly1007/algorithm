function solution(n) {
  let answer = n
    .toString()
    .split('')
    .reverse()
    .map((num) => num);
  return answer;
}

console.log(solution(12345));
console.log(solution(678));
