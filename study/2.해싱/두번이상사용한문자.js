/* 
문자열에서 두 번 이상 사용한 문자를 찾으려고 합니다.
두 번 이상 사용한 문자 중 문자열에서 가장 먼저 두 번 이상 나타난 문자를 반환하는 프로그램을 작성하세요. 
두 번 이상 사용한 문자가 없을 경우 -1를 반환하세요.
*/

function solution(s) {
  let answer = -1;
  let strHash = new Map();

  for (let x of s) {
    strHash.set(x, (strHash.get(x) || 0) + 1);
    if (strHash.get(x) >= 2) {
      answer = x;
      break;
    }
  }

  // 객체를 이용한 방법
  /*
  let answer = -1;
  let strHash = new Map();

  for (let x of s) {
    strHash[x] = (strHash[x] || 0) + 1;
    if (strHash[x] >= 2) {
      answer = x;
      break;
    }
  }
  */

  return answer;
}

console.log(solution('abccbaacz')); // c
console.log(solution('aabb')); // a
console.log(solution('abcdefg')); // -1
