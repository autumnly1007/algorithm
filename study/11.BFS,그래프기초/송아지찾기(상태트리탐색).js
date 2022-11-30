function solution(s, e) {
  let queue = [];
  let check = Array(10001).fill(0);

  check[s] = 1;
  queue.push(s);
  let L = 0;

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let v = queue.shift();

      for (let nv of [v - 1, v + 1, v + 5]) {
        if (nv === e) return L + 1;
        if (nv > 0 && nv <= 10000 && check[nv] === 0) {
          check[nv] = 1;
          queue.push(nv);
        }
      }
    }
    L++;
  }
}

console.log(solution(5, 14)); // 3
console.log(solution(8, 3)); // 5
