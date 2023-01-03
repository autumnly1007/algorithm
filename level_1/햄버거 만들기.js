function solution(ingredient) {
  let answer = 0;
  const stack = [];

  ingredient.forEach((item) => {
    stack.push(item);

    if (stack.length >= 4) {
      if (stack.slice(-4).join('') === '1231') {
        answer++;
        stack.splice(-4, 4);
      }
    }
  });

  return answer;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])); // 2
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])); // 0
