function solution(X, Y) {
  let answer = [];
  const nums = new Map();

  for (let x of X) {
    nums.set(x, (nums.get(x) || 0) + 1);
  }
  for (let y of Y) {
    if (nums.get(y) > 0) {
      answer.push(y);
      nums.set(y, nums.get(y) - 1);
    }
  }
  answer = answer.length > 0 ? answer.sort((a, b) => b - a).join('') : '-1';
  if (Number(answer) === 0) {
    answer = '0';
  }
  return answer;
}

console.log(solution('100', '2345')); // "-1"
console.log(solution('100', '203045')); // "0"
console.log(solution('100', '123450')); // "10"
console.log(solution('12321', '42531')); // "321"
console.log(solution('5525', '1255')); // "552"
