function solution(numbers) {
  let answer = [];
  let set = new Set();

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      set.add(numbers[i] + numbers[j]);
    }
  }
  answer = Array.from(set).sort((a, b) => a - b);
  return answer;
}

console.log(solution([2, 1, 3, 4, 1])); // [2,3,4,5,6,7]
