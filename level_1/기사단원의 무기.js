function solution(number, limit, power) {
  let answer = 0;
  const countArr = [];

  for (let num = 1; num <= number; num++) {
    let count = 0;

    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        if (num / i === i) {
          count += 1;
        } else {
          count += 2;
        }
      }
    }
    countArr.push(count > limit ? power : count);
  }
  answer = countArr.reduce((acc, cur) => acc + cur, 0);
  return answer;
}

console.log(solution(5, 3, 2)); // 10
console.log(solution(10, 3, 2)); // 21
