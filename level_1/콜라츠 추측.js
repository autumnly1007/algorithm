function solution(num) {
  let count = 0;

  while (num > 1) {
    if (count === 500) {
      return -1;
    }
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    count++;
  }

  return count || 0;
}

console.log(solution(6)); // 8
console.log(solution(626331)); // -1
console.log(solution(1)); // 0
