function solution(board) {
  let answer = 0;
  let blen = board.length;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let flag = true;
      for (let k = 0; k < dx.length; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (nx >= 0 && nx < blen && ny >= 0 && ny < blen) {
          if (board[i][j] <= board[i + dx[k]][j + dy[k]]) {
            flag = false;
            break;
          }
        }
      }
      answer += flag ? 1 : 0;
    }
  }

  return answer;
}

// 10
console.log(
  solution([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);

// 10
console.log(
  solution([
    [11, 15, 17, 23, 13, 5, 12],
    [25, 18, 11, 16, 21, 7, 22],
    [37, 13, 17, 22, 14, 11, 33],
    [35, 27, 38, 34, 31, 22, 12],
    [38, 22, 33, 21, 25, 33, 11],
    [11, 33, 12, 13, 26, 35, 12],
    [17, 22, 23, 11, 15, 13, 21],
  ])
);
