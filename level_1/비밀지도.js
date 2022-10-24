function solution(n, arr1, arr2) {
  let answer = [];

  for (let i = 0; i < n; i++) {
    let str = '';
    arr1[i] = arr1[i].toString(2).padStart(n, '0');
    arr2[i] = arr2[i].toString(2).padStart(n, '0');

    for (let j = 0; j < n; j++) {
      str += parseInt(arr1[i][j]) || parseInt(arr2[i][j]) ? '#' : ' ';
    }
    answer.push(str);
  }

  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
