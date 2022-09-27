function solution(x) {
  let answer = true;
  let sum = 0;

  sum = [...x.toString()].reduce((acc, cur) => parseInt(acc) + parseInt(cur));

  answer = x % sum === 0 ? true : false;

  return answer;
}

console.log(solution(10)); // 10 % 1 === 0, true
console.log(solution(123)); // 123 % 6 === 3, false
