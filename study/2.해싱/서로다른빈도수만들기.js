/*
소문자로 이루어진 문자열이 주어지면 해당 문자열의 문자를 지워서 모든 문자의 빈도수가 서 로 다르게 만들려고 합니다.
만약 주어진 문자열이 "aaabbbcc" 라면 빈도수는 a:3 , b:3, c:2 이고 b문자를 2개 지우면 a:3 , b:1, c:2 가 되어 빈도수가 모두 다르게 됩니다.
매개변수 s에 문자열이 주어지면 s의 모든 문자의 빈도수가 서로 다르도록 하기 위해 지워야 할 최소 개수를 반환하는 프로그램을 작성하세요.
*/

function solution(s) {
  let answer = 0;
  let cnt = {};

  for (let x of s) {
    cnt[x] = (cnt[x] || 0) + 1;
  }

  let set = new Set();

  for (let key of Object.keys(cnt)) {
    //console.log(`key : ${key} / val : ${cnt[key]}`);
    while (set.has(cnt[key])) {
      cnt[key]--;
      answer++;
    }
    if (cnt[key] > 0) {
      set.add(cnt[key]);
    }
  }

  return answer;
}

console.log(solution('aaabbc')); // 0
console.log(solution('aebbbbc')); // 2
console.log(solution('aaabbbcc')); // 2
