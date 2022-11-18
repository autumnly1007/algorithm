function solution(nums, n) {
  let answer = 0;

  function fnCount(len) {
    let count = 0;
    nums.forEach((num) => {
      count += Math.floor(num / len);
    });
    return count;
  }

  let left = 0;
  let right = Math.max(...nums);

  while (left <= right) {
    let mid = parseInt((left + right) / 2);

    if (fnCount(mid) >= n) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return answer;
}

console.log(solution([802, 743, 457, 539], 11)); // 200
