function solution(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[minIdx] > nums[j]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      [nums[i], nums[minIdx]] = [nums[minIdx], nums[i]];
    }
  }
  return nums;
}

console.log(solution([2, 8, 3, 6, 1, 7, 5, 9])); // [1, 2, 3, 5, 6, 7, 8, 9]
