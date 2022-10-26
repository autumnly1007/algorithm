/*
N개의 문자열이 주어지면 이 문자열들의 최대 공통 접두사를 출력하는 프로그램을 작성하세 요. 만약 문자열들이 [“long", "longtime", "longest"] 라면 세 단어의 최대 공통 접두사는 ”long"입니다.
매개변수 s에 N개의 문자열이 주어지면 각 문자열들의 최대 공통 접두사를 반환하는 프로그램 을 작성하세요. 공통 접두사는 반드시 존재합니다.
*/
function solution(s) {
  let answer = '';

  for (let i = 0; i < s[0].length; i++) {
    let set = new Set();

    for (let x of s) {
      set.add(x[i]);
    }

    if (set.size === 1) {
      answer += s[0][i];
    } else {
      break;
    }
  }
  return answer;
}

console.log(solution(['long', 'longtime', 'longest']));
