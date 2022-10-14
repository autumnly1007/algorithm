function solution(s) {
  let answer = '';

  answer = s.split(' ').map((str) => {
    str = str
      .split('')
      .map((char, idx) =>
        idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
      )
      .join('');

    return str;
  });

  answer = answer.join(' ');

  return answer;
}

console.log(solution('try hello world'));
