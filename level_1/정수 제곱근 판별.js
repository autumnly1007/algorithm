function solution(n) {
  let answer = 0;

  console.log(Math.sqrt(n) % 1);

  if (Math.sqrt(n) % 1 === 0) {
    answer = (Math.sqrt(n) + 1) ** 2;
  } else {
    answer = -1;
  }
  return answer;
}

// Math.sqrt(9) === 3
// Math.sqrt(9) % 1 === 0
// return 16
console.log(solution(9));

// Math.sqrt(8) === 2.8284271247461903
// Math.sqrt(8) % 1 === 0.8284271247461903
// return -1
console.log(solution(8));
