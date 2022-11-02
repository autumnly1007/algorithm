/*
선생님이 반 학생을 일렬로 세웠습니다. 일렬로 서 있는 학생의 키가 앞에서부터 순서대로 주 어질 때, 맨 앞에 서 있는 선생님이 볼 수 있는 학생수가 몇 명인지 알고싶습니다. (앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.)
매개변수 nums에 일렬로 선 학생의 키가 앞학생부터 차례대로 주어지면 선생님이 볼 수 있는 학생수를 반환하는 프로그램을 작성하세요.
*/

function solution(nums) {
  let answer = 1;

  // 최대값 구해서 비교
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      answer++;
    }
  }

  // 앞에 것들 모두 비교
  /*
  for (let i = 1; i < nums.length; i++) {
    let flag = true;
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] <= nums[j]) {
        flag = false;
        break;
      }
    }
    if (flag === true) answer++;
  }
  */

  return answer;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153])); // 5
console.log(solution([1, 2, 3, 4, 5])); // 5
console.log(solution([5, 4, 3, 2, 1])); // 1
