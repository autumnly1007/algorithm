function solution(nums, c) {
  let answer = 0;
  nums.sort((a, b) => a - b);

  let left = 1;
  let right = Math.max(...nums);

  function fnCount(mid) {
    let cnt = 1;
    let endPoint = nums[0];

    for (let i = 1; i < nums.length; i++) {
      if (nums[i] - endPoint >= mid) {
        cnt++;
        endPoint = nums[i];
      }
    }
    return cnt;
  }

  while (left <= right) {
    let mid = parseInt((left + right) / 2);

    if (fnCount(mid) >= c) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return answer;
}

console.log(solution([1, 2, 8, 4, 9], 3)); // 3
console.log(solution([5, 9, 10, 12, 14, 15], 3)); // 5
