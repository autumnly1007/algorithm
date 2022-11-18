function solution(nums, m) {
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = parseInt((left + right) / 2);

    if (nums[mid] === m) {
      return mid + 1;
    } else if (nums[mid] > m) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return;
}

console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 32)); // 3
