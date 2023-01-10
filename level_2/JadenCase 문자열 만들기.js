function solution(s) {
  return s
    .split(' ')
    .map((str) => (str ? str[0].toUpperCase() + str.substring(1).toLowerCase() : ''))
    .join(' ');
}

console.log(solution('3people unFollowed me')); // "3people Unfollowed Me"
console.log(solution('for the last week')); // "For The Last Week"
