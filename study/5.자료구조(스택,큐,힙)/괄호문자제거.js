function solution(s) {
  let answer = '';
  let stack = [];

  for (let x of s) {
    if (x === ')') {
      while (stack.pop() != '(');
    } else {
      stack.push(x);
    }
  }
  answer = stack.join('');
  return answer;
}

console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)')); // EFLM
console.log(solution('((AF)B)(D)E(F)')); // E
console.log(solution('(Aab)(EsG)FFD')); // FFD
console.log(solution('(YYYDD)sh(kkf(hfs))')); // sh
