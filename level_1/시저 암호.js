function solution(s, n) {
  let answer = '';

  answer = s.split('').map((char) => {
    let num = char.charCodeAt();
    if (num === 32) {
      return ' ';
    } else if ((num <= 90 && num + n > 90) || (num <= 122 && num + n > 122)) {
      return String.fromCharCode(num + n - 26);
    } else {
      return String.fromCharCode(num + n);
    }
  });

  return answer.join('');
}

console.log(solution('AB', 1)); // "BC"
console.log(solution('z', 1)); // "a"
console.log(solution('a B z', 4)); // "e F d"
