function solution(nums) {
  let answer = 0;
  let left = 0;
  let right = nums.length - 1;

  nums.sort((a, b) => a - b);

  while (left <= right) {
    if (nums[left] + nums[right] <= 5) {
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

// 제한사항 : 모든 물건의 무게는 2kg 이상, 5kg 이하 === 물건을 2개 이상 들 수 없음
console.log(solution([2, 5, 3, 4, 2, 3])); // 4
console.log(solution([2, 3, 4, 5])); // 3
console.log(solution([3, 3, 3, 3, 3])); // 5
