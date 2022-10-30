/*
학급 회장을 뽑는데 후보로 기호 A, B, C, D, E 후보가 등록을 했습니다.
투표용지에는 반 학생들이 자기가 선택한 후보의 기호(알파벳)가 쓰여져 있으며 선생님은 그 기호를 발표하고 있습니다.
매개변수 s에 투표용지에 쓰여져 있던 각 후보의 기호가 선생님이 발표한 순서대로 문자열로 주어지면 어떤 기호의 후보가 학급 회장이 되었는지 반환하는 프로그램을 작성하세요.
반드시 한 명의 학급회장이 선출되도록 투표결과가 나왔다고 가정합니다.
*/

function solution(s) {
  let answer = '';
  let strHash = new Map();

  for (let x of s) {
    strHash.set(x, (strHash.get(x) || 0) + 1);
  }

  let max = 0;
  for (let [key, val] of strHash) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }

  return answer;
}

console.log(solution('BACBACCACCBDEDE')); // C
console.log(solution('AAAAABBCCDDDD')); // A
