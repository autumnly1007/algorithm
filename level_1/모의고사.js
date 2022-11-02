function solution(answers) {
  let answer = [];

  let pattern = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let count = [0, 0, 0];

  for (let i = 0; i < pattern.length; i++) {
    for (let j = 0; j < answers.length; j++) {
      if (answers[j] === pattern[i][j % pattern[i].length]) {
        count[i]++;
      }
    }
  }

  let max = Math.max(...count);

  for (let i = 0; i < 3; i++) {
    if (count[i] === max) {
      answer.push(i + 1);
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1, 2, 3]
