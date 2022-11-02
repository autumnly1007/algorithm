/*
소문자로만 이루어진 문자열이 주어지면 해당 문자열의 문자들의 순서를 재배치해서 팰린드롬 (회문)을 만들 수 있는지를 확인하고 싶습니다. 만약 “abbac"같은 문자열은 문자들을 ”abcba" 로 재 배치하면 팰린드롬을 만들 수 있습니다. 매개변수 s에 문자열이 주어지면 해당 문자열 이 재 배치를 통해 팰린드롬을 만들 수 있으면 true를 못 만들면 false를 반환하는 프로그램을 작성하세요.
*/

function solution(s) {
  let cnt = {};
  let odd = 0;

  for (let x of s) {
    cnt[x] = (cnt[x] || 0) + 1;
  }

  for (let x of Object.keys(cnt)) {
    if (cnt[x] % 2 === 1) odd++;
  }

  return odd <= 1;
}

console.log(solution('abbac')); // true
console.log(solution('abcbbbe')); // false
