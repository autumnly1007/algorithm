/*
바이토닉 수열이란 수열이 증가했다가 감소하는 수열을 의미합니다.
매개변수 nums에 길이가 n인 수열이 주어지면 이 수열의 연속부분수열 중 가장 긴 바이토닉 수열을 찾아 그 길이를 반환하는 프로그램을 작성하세요.
만약 [1, 3, 2, 5, 7, 4, 2, 5, 1]수열이 주어지면 이 수열의 연속부분수열 중 가장 긴 바이토 닉 수열은 [2, 5, 7, 4, 2]이고, 답은 5입니다.
*/

function solution(nums) {
  let answer = [];
  let peaks = [];

  // peak 구하기
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      peaks.push(i);
    }
  }

  for (let p of peaks) {
    let len = 1;
    let left = p;
    let right = p;

    while (nums[left - 1] < nums[left]) {
      len++;
      left--;
    }

    while (nums[right] > nums[right + 1]) {
      len++;
      right++;
    }

    answer.push(len);
  }

  return Math.max(...answer);
}

console.log(solution([1, 3, 2, 5, 7, 4, 2, 5, 1])); // 5
console.log(solution([1, 2, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1])); // 9
console.log(solution([1, 2, 3, 4, 5, 2, 1])); // 7
