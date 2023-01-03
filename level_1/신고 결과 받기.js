function solution(id_list, report, k) {
  const answer = [];
  const reportList = {};
  const mailCount = {};

  id_list.forEach((id) => {
    reportList[id] = [];
    mailCount[id] = 0;
  });

  report = [...new Set(report)];
  report.forEach((item) => {
    const [from, to] = item.split(' ');
    reportList[to].push(from);
  });

  for (let key in reportList) {
    if (reportList[key].length >= k) {
      reportList[key].forEach((id) => {
        mailCount[id] = mailCount[id] ? mailCount[id] + 1 : 1;
      });
    }
  }

  for (let key in mailCount) {
    answer.push(mailCount[key]);
  }

  return answer;
}

console.log(
  solution(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    2
  )
); // [2, 1, 1, 0]
console.log(solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3)); // [0, 0]
