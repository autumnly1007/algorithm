/*
수열의 원소 중 빈도수가 1인 가장 큰 숫자를 찾으려고 합니다.
매개변수 nums에 수열이 주어지면 빈도수가 1인 숫자 중 가장 큰 숫자를 찾아 반환하는 프로그램을 작성하세요. 
빈도수가 1인 숫자가 없으면 -1를 반환합니다.
*/

function solution(nums) {
  let answer = [];
  let map = new Map();

  for (let x of nums) {
    map.set(x, (map.get(x) || 0) + 1);
  }

  let maxNum = 0;
  for (let [key, val] of map) {
    if (val === 1) {
      if (key > maxNum) {
        maxNum = key;
      }
    }
  }

  return maxNum || -1;

  // 배열 이용
  /*
  let ch = Array(1001).fill(0);

  for (let x of nums) {
    ch[x]++;
  }

  let start = Math.max(...nums);
  for (let i = 1000; i >= 0; i--) {
    if (ch[i] === 1) {
      return i;
    }
  }

  return -1;
  */
}

console.log(solution([1, 1, 2, 2, 3, 4, 5, 7, 7])); // 5
console.log(solution([3, 8, 3, 3, 5, 1, 1, 1, 7, 2, 2])); // 8
