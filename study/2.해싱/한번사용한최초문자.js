/*
문자열에서 한번만 사용한 문자를 찾으려고 합니다.
한번만 사용한 문자 중 문자열에서 가장 먼저 나타난 문자의 인덱스 번호를 반환하는 프로그램을 작성하세요. 
인덱스는 1부터 시작합니다. 한번만 사용한 문자가 없을 경우 -1를 반환하세요.
*/

function solution(s) {
  let answer = -1;
  let strHash = new Map();

  for (let x of s) {
    strHash.set(x, (strHash.get(x) || 0) + 1);
  }

  for (let [key, val] of strHash) {
    if (val === 1) {
      answer = s.indexOf(key) + 1;
      break;
    }
  }

  return answer;
}

console.log(solution('statitsics')); // 3
console.log(solution('aabb')); // -1
console.log(solution('stringshowtime')); // 3
