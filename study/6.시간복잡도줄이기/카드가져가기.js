function solution(nums, k) {
  let answer = nums.reduce((acc, cur) => acc + cur, 0);
  let sum = 0;
  let len = nums.length - k;

  for (let i = 0; i < len; i++) {
    sum += nums[i];
  }
  let minSum = sum;

  let left = 0;
  for (let right = len; right < nums.length; right++) {
    sum += nums[right] - nums[left];
    minSum = Math.min(sum, minSum);
    left++;
  }

  answer -= minSum;
  return answer;
}

console.log(solution([2, 3, 7, 1, 2, 1, 5], 4)); // 17
console.log(solution([1, 30, 5, 6, 7], 3)); // 38
console.log(solution([1, 2, 3, 5, 6, 7, 1, 3, 9], 5)); // 26
