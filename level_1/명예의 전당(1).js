function solution(k, score) {
  const answer = [];
  const stack = [];

  for (let i = 0; i < score.length; i++) {
    if (stack.length < k) {
      stack.push(score[i]);
    } else {
      if (score[i] > Math.min(...stack)) {
        stack.pop();
        stack.push(score[i]);
      }
    }
    stack.sort((a, b) => b - a);
    answer.push(stack[stack.length - 1]);
  }
  return answer;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200])); // [10, 10, 10, 20, 20, 100, 100]
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000])); // [0, 0, 0, 0, 20, 40, 70, 70, 150, 300]
