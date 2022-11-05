/*
바이토닉 수열이란 수열이 증가했다가 감소하는 수열을 의미합니다.
길이가 n인 수열이 매개변수 nums에 주어지면 이 수열이 바이토닉 수열인지 판별하는 프로그 램을 작성하세요.
만약 [1, 2, 3, 4, 2, 1]이면 바이토닉 수열입니다. 하지만 [1, 2, 2, 3, 2, 1]과 같이 같은 값 이 연속으로 있으면 바아토닉 수열이라 하지 않습니다.
*/

function solution(nums) {
  let i = 0;
  let len = nums.length;

  // 마지막 배열 요소일 경우 i + 1 은 존재하지 않음
  // i < len - 1
  while (i < len - 1 && nums[i] < nums[i + 1]) i++;
  if (i === 0 || i === len - 1) return 'NO';

  while (nums[i] > nums[i + 1]) i++;
  if (i !== len - 1) return 'NO';

  return 'YES';
}

console.log(solution([1, 2, 3, 4, 5, 3, 1])); // YES
console.log(solution([1, 3, 4, 5, 5, 6, 4, 3])); // NO
console.log(solution([1, 2, 3, 4, 5])); // NO
