// 함수 호출 시 stack frame 이 생성되어 쌓임
// 매개변수, 지역변수, 복귀주소를 저장함
function DFS(n) {
  if (n === 0) return;
  else {
    DFS(n - 1);
    console.log(n);
  }
}

DFS(3);
