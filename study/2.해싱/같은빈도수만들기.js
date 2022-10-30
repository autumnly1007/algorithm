/*
소문자 a, b, c로 이루어진 문자열이 주어지면 
해당 문자열에서 a, b, c의 최소의 개수를 추가하여 a, b, c의 빈도수가 동일하게 되도록 해야 합니다. 
동일빈도수가 되는 최소 추가 개수를 알파벳 a, b, c순으로 배열에 저장하여 반환하는 프로그램을 작성하세요.
만약 주어진 문자열이 "aaabc" 라면 빈도수는 a:3 , b:1, c:1 이고 
최소 개수를 추가하여 동일 빈도수가 되게 하려면 b를 2개 추가, c를 2개 추가하면 모두 빈도수가 3개로 동일해집니다.
*/

function solution(s) {
  let answer = [];
  let strHash = new Map();

  for (let x of s) {
    strHash.set(x, (strHash.get(x) || 0) + 1);
  }

  let maxNum = Math.max(...strHash.values());

  for (let x of 'abc') {
    answer.push(maxNum - (strHash.get(x) || 0));
  }

  return answer;
}

console.log(solution('aaabc')); // [0, 2, 2]
console.log(solution('aabb')); // [0, 0, 2]
console.log(solution('abc')); // [0, 0, 0]
