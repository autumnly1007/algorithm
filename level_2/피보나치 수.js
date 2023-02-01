function solution(n) {
  let stack = [0, 1];

  for (let i = 2; i <= n; i++) {
    stack.push((stack[0] % 1234567) + (stack[1] % 1234567));
    stack.shift();
  }
  return stack[1];
}

console.log(solution(3)); // 2
console.log(solution(5)); // 5
