# ✨ Promise | 콜백 지옥 탈출

## 비동기 작업이 가질 수 있는 3가지 상태

1. Pending (대기 상태)

2. Fulfilled (성공)

3. Rejected (실패)

- resolve & reject 작업

> ex) 콜백 함수를 이용한 비동기 처리 핸들링

```js
function isPositive(number, resolve, reject) {
  setTimeout(() => {
    if (typeof number === "number") {
      // 성공 -> resolve
      resolve(number >= 0 ? "양수" : "음수");
    } else {
      // 실패 -> reject
      reject("주어진 값이 숫자형 값이 아닙니다");
    }
  }, 2000);
}

isPositive(
  10,
  (res) => {
    console.log("성공적으로 수행됨 : ", res);
  },
  (err) => {
    console.log("실패하였음 : ", err);
  }
);
```

## Promise를 이용한 비동기 처리 핸들링

>

```js
function isPositive(number, resolve, reject) {
  setTimeout(() => {
    if (typeof number === "number") {
      // 성공 -> resolve
      resolve(number >= 0 ? "양수" : "음수");
    } else {
      // 실패 -> reject
      reject("주어진 값이 숫자형 값이 아닙니다");
    }
  }, 2000);
}

function isPositiveP(number) {
  const executor = (resolve, reject) => {
    // 실행자
    setTimeout(() => {
      if (typeof number === "number") {
        // 성공 -> resolve
        resolve(number >= 0 ? "양수" : "음수");
      } else {
        // 실패 -> reject
        reject("주어진 값이 숫자형 값이 아닙니다");
      }
    }, 2000);
  };
  const asyncTask = new Promise(executor);
  return asyncTask;
}
```

- Promise 객체의 생성자로 비동기 작업의 실질적인 실행자 함수를 전달해준다

>

```js
const asyncTask = new Promise(executor);
```

- 작업의 결과를 Promise 객체 반환

## Promise 객체의 비동기 처리 함수 사용 방법

>

```js
res
  .then((res) => {
    console.log("작업 성공 : ", res);
  })
  .catch((err) => {
    console.log("작업 실패 : ", err);
  });
```

## Promise 객체로 콜백 지옥 탈출하기

1. return new Promise(...) 로 감싸기

2. 콜백 함수 없애기 (executor로 넣어줌)

   -> 파라미터 없애기

   -> 콜백 대신 resolve로 바꾸기

> ex)

```js
// 기존
function task(a, cb) {
    setTimeout(() => {
    const res = a _ -1;
    cb(res);
    }, 2000);
}
```

>

```js
// Promise 객체 사용
function task(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a _ -1;
            resolve(res);
        }, 2000);
    });
}
```

- Promise 객체로 바꾼다는 것 = 비동기적s으로 동작

## then chaining

>

```js
// 바꾸기 전
taskA(3, 4, (a_res) => {
  console.log("task A : ", a_res);
  taskB(a_res, (b_res) => {
    console.log("task B : ", b_res);
    taskC(b_res, (c_res) => {
      console.log("task C : ", c_res);
    });
  });
});
```

>

```js
// 바꾼 후
taskA(5, 1)
  .then((a_res) => {
    console.log("A RESULT : ", a_res);
    return taskB(a_res);
  })
  .then((b_res) => {
    console.log("B RESULT : ", b_res);
    return taskC(b_res);
  })
  .then((c_res) => {
    console.log("C RESULT : ", c_res);
  });
```

# ✨ async

- `async`를 붙이면 Promise 객체를 리턴하는 비동기 처리 함수가 된다

  -> then도 사용 가능

- `async` 만 붙이고 리턴해도 resolve를 값으로 가진다

# ✨ await

- 비동기 함수 호출 앞에 붙이게 되면 await 줄은 모두 동기적으로 처리하게 된다

- async 키워드가 붙은 함수 안에서만 사용 가능

# ✨ API 호출

## API

- JsonPlaceHolder

>

```js
let response = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (res) => {
    console.log(res);
  }
);
```

- fetch : 자바스크립트에서 API 호출을 할 수 있도록 도와주는 내장 함수

  -> then과 함께 사용

## JSON으로 불러오기

>

```js
async function getData() {
  let rawResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  let jsonResponse = await rawResponse.json();
  console.log(jsonResponse);
}

getData();
```

# ✨ Node.js

- 자바스크립트 코드는 브라우저 내장 자바스크립트 엔진을 이용하여 실행

- 크롬은 V8 자바스크립트 엔진 사용

- Node.js : V8 엔진을 사용해 자바스크립트를 브라우저가 아닌 어디에서도 사용할 수 있도록 만듦

  -> 자바스크립트의 실행 환경

## 모듈 내보내기

- 모듈 : 어떤 기능을 담당하는 분리된 파일

- 다른 파일에서 함수를 불러와 쓰고 싶다면 `함수 내보내기`를 이용할 것

>

```js
module.exports = {
  moduleName: "calc module",
  add: add,
  sub: sub,
};
```

## 모듈 사용하기

>

```js
const calc = require("./calc");
// 객체 출력
console.log(calc);
```

## 모듈 내 함수 사용

>

```js
const calc = require("./calc");

console.log(calc.add(1, 2));
console.log(calc.add(4, 5));
console.log(calc.sub(10, 2));
```

# ✨ npm

- Node.js의 패키지 관리 도구

## package.json

- spritps : 명령어들을 사전에 정의해두는 곳

- dependencies : 어떤 외부 패키지를 사용했는지 보여준다

- package-lock.json : 실제로 어떤 버전인지 등 정확한 정보 제공

# ✨ randomColor 실습

>

```js
// 외부 패키지 실습 : randomColor

const randomColor = require("randomcolor"); // 외부 모듈은 경로를 명시할 필요가 없다

console.log(randomColor());
```
