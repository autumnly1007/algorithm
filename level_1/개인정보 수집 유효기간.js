function solution(today, terms, privacies) {
  let answer = [];

  const map = new Map();
  terms.forEach((term) => {
    const [type, month] = term.split(' ');
    map.set(type, month);
  });

  privacies.forEach((privacy, idx) => {
    const [date, type] = privacy.split(' ');
    const expiredDate = new Date(date);
    expiredDate.setMonth(expiredDate.getMonth() + Number(map.get(type)));
    if (new Date(today) >= expiredDate) {
      answer.push(idx + 1);
    }
  });

  answer.sort((a, b) => a - b);
  return answer;
}

console.log(
  solution(
    '2022.05.19',
    ['A 6', 'B 12', 'C 3'],
    ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C']
  )
); // [1, 3]
console.log(
  solution(
    '2020.01.01',
    ['Z 3', 'D 5'],
    ['2019.01.01 D', '2019.11.15 Z', '2019.08.02 D', '2019.07.01 D', '2018.12.28 Z']
  )
); // [1, 4, 5]
