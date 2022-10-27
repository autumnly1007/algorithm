function solution(s) {
  const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  arr.forEach((item, idx) => {
    if (s.includes(item)) {
      s = s.split(item).join(idx);
    }
  });

  return Number(s);
}

console.log(solution('one4seveneight')); // 1478
