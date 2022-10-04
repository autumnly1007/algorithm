function solution(arr, divisor) {
  let answer = [];

  arr.forEach((num) => {
    if (num % divisor === 0) {
      answer.push(num);
    }
  });

  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

console.log(solution([5, 9, 7, 10], 5)); // [5, 10]
console.log(solution([3, 2, 6], 10)); // [-1]
