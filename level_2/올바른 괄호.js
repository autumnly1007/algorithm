function solution(s) {
  const stack = [];
  if (s.length === 1 || s[0] === ')') return false;

  for (let i = 0; i < s.length; i++) {
    s[i] === ')' ? stack.pop() : stack.push(s[i]);
  }

  return stack.length > 0 ? false : true;
}

console.log(solution('()()')); // true
console.log(solution('(())()')); // true
console.log(solution(')()(')); // false
console.log(solution('(()(')); // false
