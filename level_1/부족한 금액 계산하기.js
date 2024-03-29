function solution(price, money, count) {
  let total = 0;

  for (let i = 1; i <= count; i++) {
    total += price * i;
  }

  return money - total < 0 ? Math.abs(money - total) : 0;
}

console.log(solution(3, 20, 4)); // 10
