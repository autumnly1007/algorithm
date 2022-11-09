function solution(board) {
  let answer = 0;
  let frontMax = [];
  let sideMax = [];

  for (let i = 0; i < board.length; i++) {
    let front = [];
    let side = [];
    for (let j = 0; j < board[i].length; j++) {
      side.push(board[i][j]);
      front.push(board[j][i]);
    }
    sideMax.push(Math.max(...side));
    frontMax.push(Math.max(...front));
  }

  for (let i = 0; i < board.length; i++) {
    let totalMax = 0;
    for (let j = 0; j < board[i].length; j++) {
      totalMax = Math.min(sideMax[j], frontMax[i]);
      answer += totalMax - board[i][j];
    }
  }
  return answer;
}

// 28
console.log(
  solution([
    [2, 5, 7, 3],
    [6, 8, 9, 7],
    [3, 2, 4, 5],
    [7, 2, 5, 8],
  ])
);

// 33
console.log(
  solution([
    [3, 7, 6, 2],
    [5, 3, 8, 7],
    [3, 2, 5, 7],
    [7, 7, 5, 3],
  ])
);

// 53
console.log(
  solution([
    [2, 5, 7, 3, 5],
    [6, 8, 9, 7, 3],
    [3, 2, 4, 5, 7],
    [7, 2, 5, 8, 6],
    [1, 2, 3, 4, 5],
  ])
);

// 89
console.log(
  solution([
    [10, 11, 12, 11, 15],
    [15, 12, 13, 23, 11],
    [11, 13, 23, 25, 1],
    [11, 2, 3, 11, 13],
    [5, 7, 9, 10, 12],
  ])
);
