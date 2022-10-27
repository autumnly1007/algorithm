/*
영어문자열이 주어지면 숫자로 변환하는 프로그램을 작성하고 싶습니다. "zero"=0,
"one"=1,
"two"=2,
"three"=3,
"four"=4,
"five"=5,
"six"=6,
"seven"=7,
"eight"=8,
"nine"=9
위와 같이 문자열을 숫자로 변환합니다.
만약 입력된 문자열이 "fivesevenzero"는 570으로 변환됩니다.
만약 입력된 문자열이 "zerofiveseven"는 057이지만 첫 자리 0은 무시하고 57로 변환합니다.
*/

function solution(s) {
  const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  arr.forEach((str, idx) => {
    if (s.includes(str)) {
      s = s.split(str).join(idx);
    }
  });

  return Number(s);
}

console.log(solution('fivesevenzero')); // 570
console.log(solution('zerofiveseven')); // 57
