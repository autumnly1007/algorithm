function solution(s) {
  let answer = true;
  let pCount = 0;
  let yCount = 0;

  s = s
    .toLowerCase()
    .split('')
    .forEach((char) => {
      if (char === 'p') {
        pCount++;
      } else if (char === 'y') {
        yCount++;
      }
    });

  answer = pCount === yCount ? true : false;

  return answer;
}

console.log(solution('pPoooyY')); // true
console.log(solution('Pyy')); // false
