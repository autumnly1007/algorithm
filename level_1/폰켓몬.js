function solution(nums) {
  let answer = 0;
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }

  answer = set.size > nums.length / 2 ? nums.length / 2 : set.size;
  return answer;
}

console.log(solution([3, 1, 2, 3])); // 2
console.log(solution([3, 3, 3, 2, 2, 4])); // 3
console.log(solution([3, 3, 3, 2, 2, 2])); // 2
