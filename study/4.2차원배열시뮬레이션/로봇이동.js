function solution(board, k) {
  let answer = [];
  let n = board.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  let x = 0;
  let y = 0;
  let d = 1;
  let nx = 0;
  let ny = 0;
  let count = 0;

  while (count < k) {
    count++;
    [nx, ny] = [x + dx[d], y + dy[d]];
    // 방향만 이동
    if (nx < 0 || nx >= n || ny < 0 || ny >= n || board[nx][ny] === 1) {
      d = (d + 1) % 4;
      continue;
    }
    x = nx;
    y = ny;
  }
  answer.push(x);
  answer.push(y);

  return answer;
}

// [2, 2]
console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 0, 1, 0, 1],
      [0, 0, 0, 0, 0],
    ],
    10
  )
);

// [4, 1]
console.log(
  solution(
    [
      [0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 0],
      [0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [1, 0, 1, 0, 0, 0, 0],
    ],
    25
  )
);
