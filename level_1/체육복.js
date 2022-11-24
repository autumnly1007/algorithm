function solution(n, lost, reserve) {
  let answer = 0;
  let map = new Map();

  for (let i = 1; i <= n; i++) {
    let count = 1;
    if (lost.includes(i)) count -= 1;
    if (reserve.includes(i)) count += 1;
    map.set(i, count);
  }

  for (let i = 1; i <= n; i++) {
    if (map.get(i) === 0) {
      if (map.get(i - 1) === 2) {
        map.set(i, 1);
        map.set(i - 1, 1);
      } else if (map.get(i + 1) === 2) {
        map.set(i, 1);
        map.set(i + 1, 1);
      }
    }
  }

  map.forEach((item) => {
    if (item >= 1) answer += 1;
  });

  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
