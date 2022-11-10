function solution(s) {
  let answer = '';
  let stack = [];

  for (let x of s) {
    if (x === ')') {
      // stack.pop() 의 반환값이 ( 일 경우 괄호세트가 제거된 상태임
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
