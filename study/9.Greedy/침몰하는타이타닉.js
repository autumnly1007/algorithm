function solution(nums, m) {
  let answer = 0;
  let left = 0;
  let right = nums.length - 1;

  nums.sort((a, b) => a - b);

  while (left <= right) {
    if (nums[left] + nums[right] <= m) {
      answer++;
      left += 1;
      right -= 1;
    } else {
      answer++;
      right -= 1;
    }
  }
  return answer;
}

console.log(solution([90, 50, 70, 100, 60], 140)); // 3
console.log(solution([86, 95, 107, 67, 38, 49, 116, 22, 78, 53], 150)); // 5
console.log(solution([68, 72, 30, 105, 55, 115, 36, 67, 119, 111, 95, 24, 25, 80, 55, 85, 75, 83, 21, 81], 120)); // 14
