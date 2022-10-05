function solution(numbers) {
  let sum = 0;

  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) {
      sum += i;
    }
  }

  return sum;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0])); // 5 + 9 = 14
console.log(solution([5, 8, 4, 0, 6, 7, 9])); // 1 + 2 + 3 = 6
