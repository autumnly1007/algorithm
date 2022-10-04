function solution(phone_number) {
  let answer = '';

  for (let i = 0; i < phone_number.length - 4; i++) {
    answer += '*';
  }

  answer += phone_number.substring(phone_number.length - 4);

  return answer;
}

console.log(solution('01011112222')); // "*******2222
console.log(solution('023334444')); // "*****4444"
