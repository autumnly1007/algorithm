/*
소문자로만 이루어진 문자열이 주어지면 해당 문자열의 문자를 모두 사용해서 k개의 팰린드롬 을 만들 수 있는지 확인하고 싶습니다. 만약 문자열이 "aabbccee"이고, k=2이면 해당 문자열 을 다 사용해서 "abba", "ceec"와 같이 2개를 만들 수 있습니다.
매개변수 s에 문자열이 주어지고, 매개변수 k에 팰린드롬을 만들 개수가 주어지면 s문자열의 모든 문자를 사용해서 k개의 팰린드롬을 만들 수 있으면 true, 만들 수 없으면 false를 반환하 는 프로그램을 작성하세요.
*/

function solution(s, k) {
  let cnt = {};
  let odd = 0;

  for (let x of s) {
    cnt[x] = (cnt[x] || 0) + 1;
  }

  for (let x of Object.keys(cnt)) {
    if (cnt[x] % 2 === 1) odd++;
  }

  return odd <= k;
}

console.log(solution('abcabcabc', 2)); // false
console.log(solution('abcabcabcca', 3)); // true
