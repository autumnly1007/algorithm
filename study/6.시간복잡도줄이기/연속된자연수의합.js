function solution(n) {
  let answer = 0;
  let sum = 0;
  let m = parseInt(n / 2) + 1;
  let nums = Array(m).fill(0);

  for (let i = 0; i < m; i++) {
    nums[i] = i + 1;
  }

  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum > n) {
      sum -= nums[left];
      left++;
    }

    if (sum === n) {
      answer++;
    }
  }
  return answer;
}

console.log(solution(15)); // 3
console.log(solution(45678)); // 7
console.log(solution(98765)); // 3
