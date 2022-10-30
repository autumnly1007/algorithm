/*
자기 분열수란 배열의 원소 중 자기 숫자만큼 빈도수를 갖는 숫자를 의미합니다.
만약 배열이 [1, 2, 3, 1, 3, 3, 2, 4] 라면 1의 빈도수는 2, 2의 빈도수는 2, 3의 빈도수는 3, 4의 빈도수는 1입니다. 
여기서 자기 숫자와 같은 빈도수를 갖는 자기 분열수는 2와 3입니다.
매개변수 nums에 자연수가 원소인 배열이 주어지면 이 배열에서 자기 분열수 중 가장 작은 수를 찾아 반환하는 프로그램을 작성하세요. 
자기 분열수가 존재하지 않으면 -1를 반환하세 요.
*/

function solution(nums) {
  let answer = Number.MAX_SAFE_INTEGER;
  let numHash = new Map();

  for (let x of nums) {
    numHash.set(x, (numHash.get(x) || 0) + 1);
  }

  for (let [key, val] of numHash) {
    if (key === val) {
      if (key < answer) {
        answer = key;
      }
    }
  }

  return answer === Number.MAX_SAFE_INTEGER ? -1 : answer;
}

console.log(solution([1, 2, 3, 1, 3, 3, 2, 4])); // 2
console.log(solution([1, 2, 3, 3, 3, 2, 4, 5, 5, 5])); // 1
