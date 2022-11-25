function solution(bodys) {
  bodys.sort((a, b) => b[0] - a[0]);
  let max = bodys[0][1];
  let count = 1;

  for (let i = 1; i < bodys.length; i++) {
    if (max <= bodys[i][1]) {
      max = bodys[i][1];
      count += 1;
    }
  }
  return count;
}

console.log(
  solution([
    [172, 67],
    [183, 65],
    [180, 70],
    [170, 72],
    [181, 60],
  ])
); // 3

console.log(
  solution([
    [177, 50],
    [180, 60],
    [176, 65],
    [175, 67],
  ])
); // 3
