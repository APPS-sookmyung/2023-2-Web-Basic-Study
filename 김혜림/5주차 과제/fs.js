// "Node"의 많은 method는 동기적 및 비동기적 호출을 제공합니다
// 일반적으로 Node에서는 비동기 버전을 호출하는 것이 코드가 효율적이게 동작하도록 합니다
// "fs" 모듈을 사용하여 파일 정보를 가져오는 것의 동기(statSync 메소드) / 비동기(stat 메소드) 호출을 작성해보고 그 결과를 비교해주세요
// 아래 예제는 앞서 만들어둔 getos.js 파일 정보를 가져오는 코드입니다

// 동기적 처리
var fs = require("fs");

var statSync = fs.statSync("getos.js");
if (statSync.isFile()) {
  console.log("getos.js is a file");
} else {
  console.log("getos.js is not a file");
}
console.log("Okay, we've finished calling statSynch");

// Q1: What is the value printed?
// A1 : (출력된 결과를 이 부분에 작성해주세요)

console.log("=====================================");

// 위 동기적 처리 예제를 참고하여 비동기적 처리 코드를 완성해주세요
var handleStat = (err, stat) => {
  if (err) {
    console.log("handleStat returned error");
    return;
  }
  // 아래 코드를 완성해주세요
  if (stat.isFile()) {
    console.log();
  } else {
    console.log();
  }
};

// 아래 코드를 완성해주세요
fs.stat();

console.log("Okay, we've finished calling stat");

// Q2: What is the value printed?
// A2 : (출력된 결과를 이 부분에 작성해주세요)
