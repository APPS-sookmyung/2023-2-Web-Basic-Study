// 배열 비 구조화 할당 연습
document.getElementById("destructuringBtn").addEventListener("click", () => {
  const fruits = ["사과", "바나나", "오렌지", "포도"];
  const [one, two, three, four] = fruits;
  const output = document.getElementById("output");
  output.innerHTML = "";
  for (let j = 0; j < fruits.length; j++) {
    output.innerHTML += fruits[j] + " ";
  }
});

// 배열 합치기 연습
document.getElementById("spreadBtn").addEventListener("click", () => {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  arr1.push(arr2);
  const output = document.getElementById("output");
  output.innerHTML = arr1;
});

// 동기 처리 연습
document.getElementById("syncBtn").addEventListener("click", () => {
  const output = document.getElementById("output");
  output.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    output.innerHTML += i + " ";
  }
});

// 비동기 처리 연습
document.getElementById("asyncBtn").addEventListener("click", () => {
  const output = document.getElementById("output");
  output.innerHTML = "";
  let k = 1;
  const printNumbers = () => {
    if (k <= 10) {
      setTimeout(() => {
        output.innerHTML += k + " ";
        k++;
        printNumbers();
      }, 1000);
    }
  };

  printNumbers();
});
