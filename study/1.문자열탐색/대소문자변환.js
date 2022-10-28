/* 
대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로 변환하려고 합니다.
매개변수 s에 대소문자가 존재하는 문자열이 입력되면 문자열 s의 대문자는 소문자로, 소문자 는 대문자로 변환하여 반환하는 프로그램을 작성하세요.
*/

function solution(s) {
  let answer = [...s];

  // forEach 사용
  answer.forEach((char, idx) => {
    if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
      answer[idx] = char.toLowerCase();
    } else if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
      answer[idx] = char.toUpperCase();
    }
  });

  return answer.join('');

  // map 함수 사용
  // answer = answer.map((char) => {
  //   if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
  //     return (char = char.toLowerCase());
  //   } else if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
  //     return (char = char.toUpperCase());
  //   }
  // });

  // return answer.join('');

  // for 문 사용
  /*
  for (let x of s) {
    if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
      answer += char.toLowerCase();
    } else if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
      answer += char.toUpperCase();
    }
  }

  return answer;
  */
}

console.log(solution('StuDY'));
