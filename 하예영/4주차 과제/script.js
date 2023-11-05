// 배열 비 구조화 할당 연습
document.getElementById('destructuringBtn').addEventListener('click', () => {
  const fruits = ['사과', '바나나', '오렌지', '포도'];
  // 여기에 비 구조화 할당 연습 코드를 작성하세요.
  const [apple, banana, ...rest] = fruits;
  // 결과를 #output에 표시하세요.
  const output = document.getElementById('output');
  output.innerHTML = '사과: ${사과}, 바나나: &{바나나}, 나머지: [${rest}]';
});

// 배열 합치기 연습
document.getElementById('spreadBtn').addEventListener('click', () => {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  // 여기에 배열 합치기 코드를 작성하세요.
  const allarr = [...arr1, ...arr2];
  // 결과를 #output에 표시하세요.
  const output = document.getElementById('output');
  output.innerHTML = `결과: ${allarr}`;
});

// 동기 처리 연습
document.getElementById('syncBtn').addEventListener('click', () => {
  // 1부터 10까지의 숫자를 순서대로 출력하는 동기 처리 코드를 작성하세요.
  for (let i = 1; i <= 10; i++) {
    output.innerHTML += '${i}';
  }
  // 결과를 #output에 표시하세요.
});

// 비동기 처리 연습
document.getElementById('asyncBtn').addEventListener('click', () => {
  // 1부터 10까지의 숫자를 1초 간격으로 비동기적으로 출력하는 코드를 작성하세요.
  for (let i = 1; i <= 10; i++) {
    setTimeout(() => {
      document.querySelector('#output').innerHTML += `${i} `;
    }, i * 1000);
  }
  // 결과를 #output에 표시하세요.
});
