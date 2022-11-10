function solution(N, stages) {
  let answer = [];
  let failPer = [];
  let userNum = 0;
  let notClear = 0;

  for (let i = 1; i <= N; i++) {
    userNum = userNum || stages.length;
    notClear = [...stages].filter((item) => item === i).length;
    failPer.push({ stage: i, per: notClear / userNum });
    answer.push(notClear / userNum);
    userNum -= notClear;
  }
  answer.sort((a, b) => b - a);

  for (let i = 0; i < answer.length; i++) {
    for (let j = 0; j < failPer.length; j++) {
      if (answer[i] === failPer[j].per) {
        answer[i] = failPer[j].stage;
        failPer.splice(j, 1);
      }
    }
  }
  return answer;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3, 4, 2, 1, 5]
console.log(solution(4, [4, 4, 4, 4, 4])); // [4, 1, 2, 3]
