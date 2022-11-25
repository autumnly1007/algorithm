/*
바이토닉 수열이란 수열이 증가했다가 감소하는 수열을 의미합니다.
길이가 n인 수열이 주어지면 이 수열의 연속부분수열 중 바이토익 수열이 몇 개 있는지 알아 내는 프로그램을 작성하세요. 
만약 [1, 3, 2, 5, 7, 4, 2, 5, 1]수열이 주어지면 
이 수열의 연속부분 수열 중 바이토닉 수열은 [1, 3, 2], [2, 5, 7, 4], [2, 5, 7, 4, 2], [5, 7, 4], [5, 7, 4, 2], [2, 5, 1]로 6개가 있습니다.
*/

function solution(nums) {
  let answer = 0;
  let n = nums.length;
  let peak = [];

  // peak 구하기
  for (let i = 1; i < n - 1; i++) {
    if (nums[i - 1] < nums[i] && nums[i] > nums[i + 1]) peak.push(i);
  }

  for (let p of peak) {
    let lt = p;
    let rt = p;
    let lcnt = 0;
    let rcnt = 0;
    while (lt > 0 && nums[lt - 1] < nums[lt]) {
      lcnt++;
      lt--;
    }
    while (rt < n - 1 && nums[rt] > nums[rt + 1]) {
      rcnt++;
      rt++;
    }
    answer += lcnt * rcnt;
  }
  return answer;
}
console.log(solution([1, 3, 2, 5, 7, 4, 2, 5, 1]));
