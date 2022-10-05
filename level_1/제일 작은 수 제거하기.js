function solution(arr) {
  let answer = [];

  let min = [...arr].sort((a, b) => a - b).shift();
  answer = arr.filter((num) => num !== min);

  return answer.length ? answer : [-1];
}

console.log(solution([4, 3, 2, 1])); // [4, 3, 2]
console.log(solution([10])); // [-1]
