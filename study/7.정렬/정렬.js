// [x, y]에서
// x 값에 의한 오름차순 정렬
// x 값이 같은 경우는 y 값에 따라 오름차순 정렬

function solution(nums) {
  nums.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });
  return nums;
}

console.log(
  solution([
    [2, 3],
    [1, 4],
    [3, 1],
    [1, 2],
  ])
);
