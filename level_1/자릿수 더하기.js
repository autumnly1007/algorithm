function solution(n) {
  let answer = 0;
  let i = 0;

  const arr = [...n.toString()];

  for (i = 0; i < arr.length; i++) {
    answer += parseInt(arr[i]);
  }

  return answer;
}

console.log(solution(23)); // 5
console.log(solution(987)); // 24
