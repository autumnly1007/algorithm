function solution(nums) {
  let pair = [];

  nums.forEach((item) => {
    let temp = item;
    let count = 0;

    while (temp > 0) {
      count += temp % 2;
      temp = parseInt(temp / 2);
    }
    pair.push([item, count]);
  });

  pair.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });
  pair = pair.map((item) => item[0]);

  return pair;
}

console.log(solution([5, 6, 7, 8, 9])); // [8, 5, 6, 9, 7]
console.log(solution([5, 4, 3, 2, 1])); // [1, 2, 4, 3, 5]
