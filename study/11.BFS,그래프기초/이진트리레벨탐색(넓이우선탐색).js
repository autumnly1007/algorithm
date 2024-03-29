function solution() {
  let answer = '';

  function BFS() {
    let queue = [];
    queue.push(1);
    let L = 1;

    while (queue.length) {
      let len = queue.length;
      answer += L + ' : ';

      for (let i = 0; i < len; i++) {
        let v = queue.shift();
        answer += v + ' ';

        for (let nv of [v * 2, v * 2 + 1]) {
          if (nv > 7) continue;
          queue.push(nv);
        }
      }
      console.log(answer);
      answer = '';
      L++;
    }
  }
  BFS();
  return;
}

console.log(solution());
