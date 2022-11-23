function solution(nums) {
  nums.sort((a, b) => a[0] - b[0]);
  let answer = 0;
  let start = nums[0][0];
  let end = nums[0][1];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i][0] <= end && nums[i][1] > end) {
      end = nums[i][1];
    } else if (nums[i][0] > end) {
      answer += end - start;
      start = nums[i][0];
      end = nums[i][1];
    }
  }
  answer += end - start;
  return answer;
}

console.log(
  solution([
    [1, 3],
    [2, 5],
    [7, 10],
  ])
); // 7

console.log(
  solution([
    [5, 6],
    [1, 3],
    [7, 8],
    [9, 10],
  ])
); // 5
