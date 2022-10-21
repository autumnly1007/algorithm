function solution(d, budget) {
  let count = 0;
  let amount = 0;

  d.sort((a, b) => a - b).forEach((num) => {
    if (amount + num <= budget) {
      amount += num;
      count++;
    }
  });

  return count;
}

console.log(solution([1, 3, 2, 5, 4], 9)); // 3
console.log(solution([2, 2, 3, 3], 10)); // 4
