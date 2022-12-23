function solution(babbling) {
  let answer = 0;

  const invalid = /(aya|ye|woo|ma)\1+/g;
  const valid = /^(aya|ye|woo|ma)+$/g;

  babbling.forEach((item) => {
    answer += !invalid.test(item) && valid.test(item) ? 1 : 0;
  });
  return answer;
}

console.log(solution(['aya', 'yee', 'u', 'maa'])); // 1
console.log(solution(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa'])); // 2
