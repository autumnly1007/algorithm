function solution(board) {
  let answer = 0;
  let left = 0;
  let right = 0;
  let sum = 0;

  board.forEach((row) => {
    right = Math.max(right, Math.max(...row));
    sum += row.reduce((acc, cur) => acc + cur);
  });

  function fnCount(mid) {
    let count = 0;

    board.forEach((row) => {
      row.forEach((num) => {
        if (num >= mid) count += mid;
        else count += num;
      });
    });
    return count;
  }

  while (left <= right) {
    let mid = parseInt((left + right) / 2);

    if (fnCount(mid) >= sum / 2) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return answer;
}

console.log(
  solution([
    [2, 3, 1, 5, 6],
    [3, 0, 7, 4, 3],
    [8, 5, 7, 5, 6],
    [9, 6, 1, 5, 5],
    [5, 5, 8, 5, 1],
  ])
); // 3

console.log(
  solution([
    [10, 9, 8, 9, 10],
    [3, 0, 7, 4, 3],
    [8, 5, 7, 5, 6],
    [9, 6, 1, 5, 5],
    [5, 5, 8, 5, 1],
  ])
); // 4
