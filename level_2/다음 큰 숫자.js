function solution(n) {
  let answer = 0;
  let bigNum = n;

  while (true) {
    bigNum++;
    if (bigNum.toString(2).match(/1/g).length === n.toString(2).match(/1/g).length) {
      answer = bigNum;
      break;
    }
  }

  return answer;
}

console.log(solution(78)); // 83
console.log(solution(15)); // 23
