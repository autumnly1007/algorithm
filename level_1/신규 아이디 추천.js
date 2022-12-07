function solution(new_id) {
  return new_id
    .toLowerCase()
    .replace(/[^\w-.]/g, '')
    .replace(/\.+/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/g, 'a')
    .substr(0, 15)
    .replace(/\.$/g, '')
    .replace(/^(.)$/g, '$1$1$1')
    .replace(/^(.)(.)$/g, '$1$2$2');
}

console.log(solution('...!@BaT#*..y.abcdefghijklm')); // "bat.y.abcdefghi"
console.log(solution('z-+.^.')); // "z--"
console.log(solution('=.=')); // "aaa"
console.log(solution('123_.def')); // "123_.def"
console.log(solution('abcdefghijklmn.p')); // "abcdefghijklmn"
