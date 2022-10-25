function solution(sizes) {
  let arrMax = [];
  let arrMin = [];

  for (let i = 0; i < sizes.length; i++) {
    arrMax.push(Math.max(...sizes[i]));
    arrMin.push(Math.min(...sizes[i]));
  }

  return Math.max(...arrMax) * Math.max(...arrMin);
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
