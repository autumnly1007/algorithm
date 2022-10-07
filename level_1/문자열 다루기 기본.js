function solution(s) {
  return (
    (s.length === 4 || s.length === 6) &&
    [...s].filter((char) => !isNaN(char)).length === s.length
  );
}

console.log(solution('a123')); // false
console.log(solution('1234')); // true
