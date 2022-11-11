function solution(s) {
  let answer = '';
  let stack = [];

  s.split('').forEach((char) => {
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  });
  answer = stack.join('');
  return answer;
}

console.log(solution('acbbcaa')); // "a"
console.log(solution('bacccaba')); // "bacaba"
console.log(solution('aabaababbaa')); // "a"
console.log(solution('bcaacccbaabccabbaa')); // "ba"
