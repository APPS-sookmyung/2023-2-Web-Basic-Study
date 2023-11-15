# 5주차 강의내용 정리

## 3-8 Promise 

### 비동기 작업이 가질 수 있는 3가지 상태
1. Pending(대기상태)
2. Fulfilled(성공)
3. Rejected(실패)

### 콜백을 이용한 비동기 처리 
'''js
function isPositive(number,resolve,reject){
  setTimeout(()=> {
    if(typeof number === 'number') {
      // 성공 -> resolve
      resolve(number >= 0)? "양수":"음수")
    } else {
      // 실패 -> reject
      reject("주어진 값이 숫자형 값이 아닙니다");
    } 
  }, 2000)
}   

isPositive(
  10,
  (res))=>{
    console.log("성공적으로 수행됨 : ", res);
  },
  (err)=>{
    console.log("실패 하였음 : ", err);
  }
);  
'''
### promise를 이용한 비동기 처리
'''js
function isPositive(number,resolve,reject){
  setTimeout(()=> {
    if(typeof number === 'number') {
      // 성공 -> resolve
      resolve(number >= 0)? "양수":"음수")
    } else {
      // 실패 -> reject
      reject("주어진 값이 숫자형 값이 아닙니다");
    } 
  }, 2000)
}   

function isPositiveP(number) {
  const executor = (resolve, reject)=>{
    setTimeout(()=>{
       if(typeof number === 'number') {
      // 성공 -> resolve
        console.log(number);
        resolve(number >= 0)? "양수":"음수")
    } else {
      // 실패 -> reject
      reject("주어진 값이 숫자형 값이 아닙니다");
    }  
  }, 2000); 

  const asyncTask = new Promise(executor); 
  return asyncTask;
}

const res =  isPositiveP(101);
res.then((res)=>{console.log("작업 성공 :"), res }).catch((res)=>{console.log("작업 실패 : ", err)}) 

## 3-9 async / await : 직관적인 비동기처리

'''js
function hello(){
  return 'hello';
}

async function helloAsync(){
  return 'hello Async';
}

console.log(hello());
console.log(helloAsync()); 
'''
위의 코드를 실행해보면 hello() 함수는 잘 실행되어 hello 라고 출력되지만 helloAsync() 함수는 Promise {<pending>} 이렇게 출력됨을 볼 수 있다. 

함수 앞에 async를 붙이면 이 함수는 자동적으로 promise 형태로 값을 반환한다는 뜻이다. 이 말은 console.log(helloAsync()); 가 아닌 helloAsync().then((res)=>{console.log(res);}) 을 이용해도 된다는 뜻이므로

'''js
function hello(){
  return 'hello';
}

async function helloAsync(){
  return 'hello Async';
}

helloAsync().then(res) => {
  console.log(res);
}
'''
로 코드를 바꿔 실행해보면 hello Async가 출력됨을 알 수 있다.
helloAsync의 반환값을 res에 저장하여 console.log로 출력된 값이다. 

### await
'''js
// 밀리세컨을 파라미터로 받아 대기했다가 끝나는 함수
function delay (ms) {
  return new Promise((resolve)=>{
     setTimeout(()=>{resolve();}, ms)
  });
}

async function helloAsync() {
  return delay(3000).then(()=>{
    return "hello Async"
  });
}

helloAsync().then(res) => {
  console.log(res);
}
'''

위 코드를 아래와 같이 await를 이용하여 바꿀 수 있다.

'''js
// 밀리세컨을 파라미터로 받아 대기했다가 끝나는 함수
function delay (ms) {
  return new Promise((resolve)=>{
     setTimeout(()=>{resolve();}, ms)
  });
}

async function helloAsync() {
  await delay(3000);
  return "hello async";
}

helloAsync().then(res) => {
  console.log(res);
}
'''
await 키워드가 이용된 줄은 다 동기적으로 수행된다.
await 키워드는 async 키워드가 붙은 함수 내에서만 이용할 수 있다.

## 3-10 API & fetch

### API란?
API(Application Programming Interface)
: 응용프로그램 프로그래밍 인터페이스
- CLIENT(클라이언트, ex: 웹브라우저)가 SERVER(프로그램들 사이의 연결다리)에게 데이터 요청(Request)하고 서버가 클라이언트에게 요청데이터를 전달하는 Response 과정을 API 호출이라고 한다.

### API 호출방법 
'''js
let response = fetch('https://jsonplaceholder.typicode.com/posts').then((res)=> console.log(res)
);
// 응답을 response라는 변수에 저장 
'''
위 코드를 실행해보면 Response 객체 자체가 출력됨을 볼 수 있다. 웹사이트에 들어가서 확인했던 형식의 데이터들이 담겨져 있지 않다.
(이유는 예를 들어 편지를 보내서 상대방이 편지를 보냈는데 우리는 지금 우체통에서 편지봉투만을 꺼낸 것이라고 생각하면 된다.)

'''js
async function getData () {
  let rawResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
  let jsonResponse = await rawResponse.json();
  console.log(jsonResponse);
}
getData()
'''
위 코드를 실행하면 웹사이트에서 확인했던 모든 데이터들을 볼 수 있다.



