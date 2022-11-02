function solution(a, b) {
  let answer = '';
  const dayArr = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  const monArr = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let count = 0;

  for (let i = 0; i < a; i++) {
    count += monArr[i];
  }
  count += b;
  answer = dayArr[count % 7];
  return answer;
}

console.log(solution(5, 24)); // WED
