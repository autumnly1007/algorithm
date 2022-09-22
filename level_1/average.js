function solution(arr) {
  let sum = 0;

  arr.forEach((num) => {
    sum += num;
  });

  sum = sum / arr.length;

  return sum;
}

console.log(solution([1, 2, 3, 4])); // 2.5
console.log(solution([5, 5])); // 5
