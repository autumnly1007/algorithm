function solution(n) {
  let answer = '';

  for (let i = 1; i <= n; i++) {
    answer += i % 2 ? '수' : '박';
  }

  return answer;
}

console.log(3); // "수박수"
console.log(4); // "수박수박"
