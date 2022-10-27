/*
앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
매개변수 s에 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력하는 프로그램을 작성하세요.
단 회문을 검사할 때 대소문자를 구분하지 않습니다.
*/

function solution(s) {
  let answer = '';
  let str = s.split('').reverse().join('');
  answer = s.toUpperCase() === str.toUpperCase() ? 'YES' : 'NO';
  return answer;
}

console.log(solution('gooG')); // YES
console.log(solution('Moon')); // NO
