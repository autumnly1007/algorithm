/*
N개의 문자열이 입력되면 그 중 가장 긴 문자열을 찾으려고 합니다.
매개변수 s에 N개의 문자열이 주어지면 그 중 가장 긴 문자열을 반환하는 프로그램을 작성하세요. 
답이 여러개면 s배열에서 제일 먼저 나타나는 문자열을 답으로 합니다.
*/

function solution(s) {
  // 가장 긴 문자열의 길이 구하기
  /*
  let answer = '';
  
  answer = s.map((str) => {
    return Number.parseInt(str.length);
  });

  return (answer = Math.max(...answer));
  */

  // 가장 긴 문자열 구하기
  let answer = '';
  let maxLeng = 0;

  for (let x of s) {
    if (x.length > maxLeng) {
      maxLeng = x.length;
      answer = x;
    }
  }

  return answer;
}

console.log(solution(['teacher', 'time', 'student', 'beautiful', 'good']));
