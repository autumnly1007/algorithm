function solution(nums, hour) {
  let answer = 0;

  let left = 1;
  let right = Math.max(...nums);

  function fnCount(len) {
    let count = 0;
    nums.forEach((num) => {
      count += Math.ceil(num / len);
    });
    return count;
  }

  while (left <= right) {
    let mid = parseInt((left + right) / 2);

    if (fnCount(mid) <= hour) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return answer;
}

console.log(solution([29, 12, 24, 5, 19], 6)); // 24
console.log(solution([12, 24, 15, 7, 9], 8)); // 12
