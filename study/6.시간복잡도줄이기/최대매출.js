function solution(nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let answer = sum;

  let left = 0;
  for (let right = k; right < nums.length; right++) {
    sum += nums[right] - nums[left];
    answer = Math.max(sum, answer);
    left++;
  }

  return answer;
}

console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3)); // 56
console.log(solution([1, 2, 3, 5, 6, 7, 1, 3, 9], 5)); // 26
console.log(solution([12, 34, 56, 72, 93, 121, 33, 11, 23, 52], 4)); // 342
