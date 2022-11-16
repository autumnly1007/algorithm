function solution(nums, m) {
  let answer = 0;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum > m) {
      sum -= nums[left];
      left++;
    }

    if (sum === m) {
      answer++;
    }
  }

  return answer;
}

console.log(solution([1, 1, 2, 1, 3, 1, 1, 1, 2], 6)); // 3
console.log(solution([1, 1, 1, 1, 1, 1, 3], 3)); // 5
console.log(solution([1, 2, 1, 2, 1, 2, 1], 3)); // 6
