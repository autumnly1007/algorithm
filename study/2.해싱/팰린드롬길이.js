/*
문자열이 주어지면 해당 문자열의 문자들을 가지고 만들 수 있는 최대길이 팰린드롬을 만들고 그 길이를 구하세요. 문자열은 소문자로만 이루어져 있습니다.
만약 "abcbbbccaa" 가 주어진다면 만들 수 있는 가장 긴 팰린드롬은 "bbcaaacbb"이고 답은 9입니다.
*/

function solution(s) {
  let answer = 0;
  let cnt = {};
  let odd = 0;

  for (let x of s) {
    cnt[x] = (cnt[x] || 0) + 1;
  }

  for (let x of Object.keys(cnt)) {
    if (cnt[x] % 2 === 1) {
      odd++;
    }
  }

  answer = odd > 0 ? s.length - odd + 1 : s.length;

  return answer;
}

console.log(solution('abcbbbccaa')); // 9
console.log(solution('abcde')); // 1
console.log(solution('ccc')); // 3
console.log(solution('aabbcc')); // 6
