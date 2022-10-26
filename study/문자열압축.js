/*
알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하려고 합니다.
매개변수 s에 문자열이 입력되면 반복횟수를 표기하는 방법으로 문자열을 압축하여 반환하는 프로그램을 작성하세요. 단 반복횟수가 1인 경우 생략합니다.
*/
function solution(s) {
  let answer = '';
  let count = 1;

  s = s + ' ';

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      answer += s[i];
      if (count > 1) {
        answer += count;
        count = 1;
      }
    }
  }

  return answer;
}

console.log(solution('KKHSSSSSSSE'));
console.log(solution('AAABCCCDD'));
