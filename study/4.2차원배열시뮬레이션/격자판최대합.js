function solution(board) {
  let answer = '';
  let arr = [];

  for (let i = 0; i < board.length; i++) {
    let sum1 = 0;
    let sum2 = 0;
    for (let j = 0; j < board[i].length; j++) {
      sum1 += board[i][j];
      sum2 += board[j][i];
    }
    arr.push(Math.max(sum1, sum2));
  }

  let sum3 = 0;
  let sum4 = 0;
  for (let i = 0; i < board.length; i++) {
    sum3 += board[i][i];
    sum4 += board[i][board.length - i - 1];
  }
  arr.push(Math.max(sum3, sum4));

  answer = Math.max(...arr);
  return answer;
}

// 155
console.log(
  solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);

// 287
console.log(
  solution([
    [17, 19, 12, 11, 15],
    [17, 36, 30, 83, 11],
    [19, 30, 70, 53, 75],
    [17, 22, 67, 47, 37],
    [15, 37, 78, 93, 59],
  ])
);

// 375
console.log(
  solution([
    [57, 65, 22, 33, 11, 11],
    [15, 66, 77, 34, 21, 13],
    [55, 12, 11, 55, 11, 55],
    [54, 33, 66, 88, 11, 22],
    [88, 99, 12, 16, 18, 33],
    [11, 100, 22, 68, 88, 17],
  ])
);
