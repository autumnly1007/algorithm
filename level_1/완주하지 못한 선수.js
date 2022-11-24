function solution(participant, completion) {
  let strHash = new Map();

  for (let x of participant) {
    strHash.set(x, (strHash.get(x) || 0) + 1);
  }

  for (let x of completion) {
    strHash.set(x, (strHash.get(x) || 0) - 1);
  }

  for (let [key, val] of strHash) {
    if (val === 1) {
      return key;
    }
  }
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki'])); // leo
console.log(solution(['marina', 'josipa', 'nikola', 'vinko', 'filipa'], ['josipa', 'filipa', 'marina', 'nikola'])); // vinko
console.log(solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])); // mislav
