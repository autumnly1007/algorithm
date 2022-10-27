function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] > b[n]) {
      return 1;
    } else if (a[n] < b[n]) {
      return -1;
    } else {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  return strings;
}

console.log(solution(['sun', 'bed', 'car'], 1)); // ["car", "bed", "sun"]
console.log(solution(['abce', 'abcd', 'cdx'], 2)); // ["abcd", "abce", "cdx"]
