/*
현수의 키보드 자판은 k개의 자판만 사용할 수 있습니다.
만약 teacher 이라는 단어를 완성하려면 6개의 자판이 필요합니다.
만약 Teacher 단어를 완성하려면 7개의 자판이 필요합니다. 이 단어를 완성하려면 대문자 T를 써야 하는데 이 때는 shift키와 소문자 ‘t'키를 눌러야 하기 때문입니다.
하나의 단어를 k개의 키로 완성할 수 있는지를 알고 싶습니다.
매개변수 s에 단어가 주어지고, 매개변수 k에 사용할 수 있는 키의 개수가 주어지면 s단어를 k개의 키로 완성할 수 있으면 true, 없으면 false를 반환하는 프로그램을 작성하세요.
*/

function solution(s, k) {
  let answer = 0;
  let len = 0;

  for (let x of s) {
    if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) {
      len = 1;
      break;
    }
  }

  len += new Set(s.toLowerCase()).size;
  answer = len <= k ? true : false;
  return answer;
}

console.log(solution('teacher', 6)); // true
console.log(solution('Teacher', 6)); // false
console.log(solution('TeacHer', 7)); // true
console.log(solution('LifeisGood', 8)); // false
console.log(solution('Gabg', 4)); // true
