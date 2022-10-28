/*
한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하세요.
매개변수 s에 문자열이 주어지고, 매개변수 c에 찾을 문자가 주어지면 s문자열에 c문자가 몇 개 있는지 확인하여 그 개수를 반환하는 프로그램을 작성하세요.

제한사항:
• 문자열 s의 길이는 100을 넘지 않습니다.
• 문자열 s는 대문자로만 이루어져 있습니다.
*/

function solution(s, c) {
  let answer = 0;

  // for 문 사용
  /*
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) answer++;
  }

  return answer;
  */

  // for of 문 사용
  /*
  for (let x of s) {
    if (s[i] === x) answer++;
  }

  return answer;
  */

  // filter 함수 사용
  answer = [...s].filter((char) => {
    return char === c;
  });

  return answer.length;
}

console.log(solution('COMPUTERPROGRAMMING', 'R'));
