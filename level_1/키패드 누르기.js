function solution(numbers, hand) {
  const answer = [];
  const left = [1, 4, 7];
  const right = [3, 6, 9];
  const center = [2, 5, 8, 0];
  const move = [[], [1, 2, 3, 4], [0, 1, 2, 3], [1, 2, 3, 4], [2, 1, 2, 3], [1, 0, 1, 2], [2, 1, 2, 3], [3, 2, 1, 2], [2, 1, 0, 1], [3, 2, 1, 2], [4, 3, 2, 1], [3, 2, 1, 0], [4, 3, 2, 1]];
  let curLeft = 10;
  let curRight = 12;

  for (let i = 0; i < numbers.length; i++) {
    if (left.includes(numbers[i])) {
      answer.push('L');
    } else if (right.includes(numbers[i])) {
      answer.push('R');
    } else {
      let idx = center.indexOf(numbers[i]);
      if (move[curLeft][idx] < move[curRight][idx]) {
        answer.push('L');
      } else if (move[curLeft][idx] > move[curRight][idx]) {
        answer.push('R');
      } else {
        if (hand === 'left') answer.push('L');
        else answer.push('R');
      }
    }
    const direction = answer[answer.length - 1];
    if (numbers[i] === 0) {
      if (direction === 'L') curLeft = 11;
      else curRight = 11;
    } else {
      if (direction === 'L') curLeft = numbers[i];
      else curRight = numbers[i];
    }
  }
  return answer.join('');
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right')); // "LRLLLRLLRRL"
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left')); // "LRLLRRLLLRR"
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right')); // "LLRLLRLLRL"
