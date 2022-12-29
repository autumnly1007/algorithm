function solution(survey, choices) {
  let answer = '';
  const types = ['RT', 'CF', 'JM', 'AN'];
  const score = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  choices.forEach((choice, idx) => {
    const [disagree, agree] = survey[idx];
    score[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  types.forEach((type) => {
    const [first, second] = type;
    answer += score[first] < score[second] ? second : first;
  });

  return answer;
}

console.log(solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5])); // TCMA
console.log(solution(['TR', 'RT', 'TR'], [7, 1, 3])); // RCJA
