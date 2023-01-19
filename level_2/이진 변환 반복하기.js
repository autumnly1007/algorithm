function solution(s) {
  let answer = [0, 0];

  while (s !== '1') {
    const zeroCnt = s.match(/0/g) ? s.match(/0/g).length : 0;
    const length = s.length - zeroCnt;
    answer[1] += zeroCnt;

    s = length.toString(2);
    answer[0]++;
  }
  return answer;
}

console.log(solution('110010101001')); // [3, 8]
console.log(solution('01110')); // [3, 3]
console.log(solution('1111111')); // [4, 1]
