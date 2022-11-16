function solution(cost, m) {
  let answer = 0;
  let sum = 0;
  let left = 0;

  for (let right = 0; right < cost.length; right++) {
    sum += cost[right];

    while (sum > m) {
      sum -= cost[left];
      left++;
    }

    if (answer < right - left + 1) {
      answer = right - left + 1;
    }
  }
  return answer;
}

console.log(solution([0, 150, 100, 0, 150, 0, 70, 140], 350)); // 5
console.log(solution([100, 200, 300, 400, 500, 100], 300)); // 2
console.log(solution([100, 50, 120, 50, 150, 0, 50, 60], 400)); // 5
