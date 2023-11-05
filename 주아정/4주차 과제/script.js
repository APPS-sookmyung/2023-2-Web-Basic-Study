// 배열 비 구조화 할당 연습
document.getElementById("destructuringBtn").addEventListener("click", () => {
  const fruits = ["사과", "바나나", "오렌지", "포도"];
  // 여기에 비 구조화 할당 연습 코드를 작성하세요.
  const [apple, banana, orange, grape] = fruits;
  // 결과를 #output에 표시하세요.
  const output = document.getElementById("output");
  output.innerHTML = `사과: ${apple}, 바나나: ${banana}, 나머지: [${orange}, ${grape}]`;
});

// 배열 합치기 연습
document.getElementById("spreadBtn").addEventListener("click", () => {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  // 여기에 배열 합치기 코드를 작성하세요.
  const arr = arr1.concat(arr2);
  // 결과를 #output에 표시하세요.
  output.innerHTML = `결과: [${arr}]`;
});

// 동기 처리 연습
document.getElementById("syncBtn").addEventListener("click", () => {
  // output 초기화
  output.innerHTML = null;
  // 1부터 10까지의 숫자를 순서대로 출력하는 동기 처리 코드를 작성하세요.
  for (let i = 1; i <= 10; i++) {
    // 결과를 #output에 표시하세요.
    output.innerHTML += `${i} `;
  }
});

// 비동기 처리 연습
document.getElementById("asyncBtn").addEventListener("click", () => {
  // output 초기화
  output.innerHTML = null;
  let i = 1;
  // 1부터 10까지의 숫자를 1초 간격으로 비동기적으로 출력하는 코드를 작성하세요.
  function printNum(i) {
    setTimeout(() => {
      output.innerHTML += `${i} `;
      if (i < 10) {
        // 콜백 함수 활용 (1초 간격으로 비동기적 출력)
        printNum(i + 1);
      }
    }, 1000);
  }
  // printNum 함수 호출
  printNum(i);
});
