function solution(s) {
  let answer = 0;
  const stack = [];

  s.split('').forEach((item, idx) => {
    if (s[idx] === ')') {
      stack.pop();
      answer += s[idx - 1] === '(' ? stack.length : 1;
    } else {
      stack.push(item);
    }
  });

  return answer;
}

console.log(solution('()(((()())(())()))(())')); // 17
console.log(solution('(((()(()()))(())()))(()())')); // 24
console.log(solution('((((()))))')); // 8
console.log(solution('(((())))(())((()))')); // 12
