function solution(absolutes, signs) {
  var answer = 0;

  answer = absolutes.reduce((acc, cur, idx) => {
    return acc + cur * (signs[idx] ? 1 : -1);
  }, 0);

  return answer;
}

console.log(solution([4, 7, 12], [true, false, true])); // 9
console.log(solution([1, 2, 3], [false, false, true])); // 0
