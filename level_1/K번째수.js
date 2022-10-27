function solution(array, commands) {
  let answer = [];

  commands.forEach((item, idx) => {
    let tempArr = [];
    tempArr = array.slice(item[0] - 1, item[1]);
    tempArr.sort((a, b) => a - b);
    answer.push(tempArr[item[2] - 1]);
  });

  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
); // [5, 6, 3]
