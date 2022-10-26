/*
한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램 을 작성하려 합니다.
매개변수 s에 문자열이 주어지면 s문자열에 대문자가 몇 개있는지 개수를 반환하는 프로그램 을 작성하세요.
*/

function solution(s) {
  let answer = 0;

  // for of 문 사용
  for (let x of s) {
    if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) answer++;
  }

  return answer;

  // toUpperCase 함수 사용
  /*
  s = s.split(' ').join('');
  
  for (let x of s) {
    if (x === x.toUpperCase()) answer++;
  }

  return answer;
  */

  // filter 함수 사용
  /*
  answer = [...s].filter((num) => {
    return num.charCodeAt() >= 65 && num.charCodeAt() <= 90;
  });

  return answer.length;
  */
}

console.log(solution('KoreaTimeGood'));
