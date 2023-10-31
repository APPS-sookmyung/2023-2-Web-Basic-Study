// 배열 비 구조화 할당 연습
document.getElementById('destructuringBtn').addEventListener('click', () => {
  const fruits = ['사과', '바나나', '오렌지', '포도'];
  let object ={사과:"사과",바나나:"바나나",나머지:"[오렌지,포도]"};
  console.log(사과,바나나,나머지);
  // 결과를 #output에 표시하세요.
  const output = document.getElementById('output');
  output.innerHTML = '필요한 코드 채우기';
});

// 배열 합치기 연습
document.getElementById('spreadBtn').addEventListener('click', () => {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  console.log(arr1.concat(arr2));
  // 결과를 #output에 표시하세요.
});

// 동기 처리 연습
document.getElementById('syncBtn').addEventListener('click', () => {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
}
  // 결과를 #output에 표시하세요.
});

// 비동기 처리 연습
document.getElementById('asyncBtn').addEventListener('click', () => {
  function taskA(){
    setTimeout(()=>{
      console.log("1","2","3","4","5","6","7","8","9","10");
    },2000)
  }
  taskA();
  // 결과를 #output에 표시하세요.
});
