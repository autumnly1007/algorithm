function solution(cost, m) {
  let answer = 0;
  let count = 0;
  let left = 0;

  for (let right = 0; right < cost.length; right++) {
    if (cost[right] === 0) {
      count++;
    }

    while (count > m) {
      if (cost[left] === 0) {
        count--;
      }
      left++;
    }

    if (answer < right - left + 1) {
      answer = right - left + 1;
    }
  }
  return answer;
}

console.log(solution([1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1], 2)); // 8
