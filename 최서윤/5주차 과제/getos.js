// "os" 모듈을 사용하여 현재 사용 중인 OS 유형을 검색하고 출력하는 "getos.js" 프로그램을 작성해주세요
// 출력되는 값은 현재 사용 중인 컴퓨터의 운영 체제에 따라 달라집니다
// 예를 들어, 만약 현재 사용 중인 OS가 Windows라면 "win32"가 출력될 것이고,
// macOS를 사용 중이라면 "darwin"이 출력될 것이고, Linux를 사용 중이라면 "linux"가 출력될 것입니다.
// 참고 문서 : https://nodejs.org/dist/latest-v8.x/docs/api/os.html

// Your Code Starts Here(아래에 코드를 작성해주세요)
const os = require("os");
const platform = os.platform();
console.log(platform);
// Q : What is the value printed?
// A : win32
