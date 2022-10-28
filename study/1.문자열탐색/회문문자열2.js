/*
문자열 s가 주어지면 s가 최대 문자 1개까지 지워서 회문문자열이 되면 “YES"를 출력하고, 그렇지 않으면 ”NO"를 출력하는 프로그램을 작성하세요.
*/

function solution(s) {
  let answer = 'NO';
  let str = '';

  for (let i = 0; i < s.length; i++) {
    str = s.split('');
    str.splice(i, 1);
    if (str.join('') === str.reverse().join('')) answer = 'YES';
  }

  return answer;
}

console.log(solution('abcbdcba')); // YES
console.log(solution('abcabbakcba')); // YES
console.log(solution('abcacbakcba')); // NO
