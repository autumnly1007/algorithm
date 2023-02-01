function solution(n, words) {
  let answer = [0, 0];

  for (let i = 1; i < words.length; i++) {
    if (
      words[i - 1][words[i - 1].length - 1] !== words[i][0] ||
      words.slice(0, i).includes(words[i])
    ) {
      answer = [(i % n) + 1, Math.ceil((i + 1) / n)];
      break;
    }
  }

  return answer;
}

console.log(
  solution(3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank'])
); // [3, 3]

console.log(
  solution(5, [
    'hello',
    'observe',
    'effect',
    'take',
    'either',
    'recognize',
    'encourage',
    'ensure',
    'establish',
    'hang',
    'gather',
    'refer',
    'reference',
    'estimate',
    'executive',
  ])
); // [0, 0]

console.log(solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw'])); // [1, 3]
