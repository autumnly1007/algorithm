function solution(s) {
  let answer = 'YES';
  let stack = [];

  for (let x of s) {
    if (x === ')') {
      if (stack.length === 0) return 'NO';
      stack.pop();
    } else {
      stack.push(x);
    }
  }

  if (stack.length !== 0) {
    answer = 'NO';
  }

  return answer;
}

console.log(solution('(())()')); // YES
console.log(solution('(()(()')); // NO
console.log(solution('()())')); // NO
console.log(solution('())(')); // NO
