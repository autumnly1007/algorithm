function solution(food) {
  let answer = [];
  answer.push(0);

  for (let i = food.length - 1; i > 0; i--) {
    while (food[i] > 1) {
      answer.unshift(i);
      answer.push(i);
      food[i] = food[i] - 2;
    }
  }
  return answer.join('');
}

console.log(solution([1, 3, 4, 6])); // 1223330333221
console.log(solution([1, 7, 1, 2])); // 111303111
