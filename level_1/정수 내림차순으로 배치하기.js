function solution(n) {
  var answer = '';

  n = n
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .forEach((num) => {
      answer += num;
    });

  return parseInt(answer);
}
