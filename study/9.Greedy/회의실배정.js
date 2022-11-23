function solution(nums) {
  let answer = 0;
  let endTime = 0;
  nums.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

  nums.forEach((item) => {
    if (item[0] >= endTime) {
      answer++;
      endTime = item[1];
    }
  });
  return answer;
}

console.log(
  solution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
); // 3

console.log(
  solution([
    [3, 3],
    [1, 3],
    [2, 3],
  ])
); // 2

console.log(
  solution([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 7],
    [5, 6],
    [6, 7],
  ])
); // 5
