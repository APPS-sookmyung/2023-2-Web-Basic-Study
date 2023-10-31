# S2 : Javascript 기본

> `한입 크기로 잘라 먹는 리액트 (React.js)` 강의를 듣고 정리한 자료입니다

</br>

## ✨ 배열

- 비 원시 자료형
- 자료형에 영향을 받지 않는다
- 객체에서의 `키`와 다르게 `인덱스`로 접근이 가능하다

### 생성

1. let arr = new Array();
2. let arr = []; // 배열 리터럴

### 배열 관련 문법

- push() : 가장 마지막에 원소 추가
- length : 길이 반환

## ✨ 반복문

- Object.keys(객체명) : key 값 반환
- Object.values(객체명) : value 값 반환

## ✨ 배열 내장 함수

- for문이나 if문 간의 의존성을 줄일 수 있다

### 배열 순회

ex)

>

```js
for (let i = 0; i < arr.length; i++> {
    console.log(arr[i]);
})
```

>

```js
// 콜백 함수
arr.forEach((elm) => console.log(elm));
```

>

```js
arr.forEach(function (elm) {
  console.log(elm);
});
```

### map

- forEach와 비슷하지만 return이 가능함

### includes()

- `===`
- 인자와 같은 값이 존재하는지 boolean으로 return

### indexOf()

- 전달 받은 인자와 일치하는 값의 인덱스 반환 (몇 번째 위치하는지 반환)
- 일치하지 않는 경우 -1 반환

### findIndex(()=>{})

- 가장 먼저 발견하는 인덱스를 반환하므로 중복 값에 주의할 것

ex)

>

```js
arr.findIndex((elm) => elm.color === "red");
```

### find

- 조건에 일치하는 인덱스 값 그대로 반환

### filter(() => {})

- 전달한 콜백 함수가 true인 모든 요소 반환 (배열)

### slice(begin, end-1)

### concat (갖다 붙일 배열)

### sort() : 배열 정렬

- 원본 배열 정렬
- 사전 순이기 때문에 숫자를 정리할 때는 `비교 함수`를 만들어야 한다
- 클 때 뒤로 보내고 (1) 작을 때 앞으로 보내고 (-1) 같을 때 그대로 (0)

### join("구분자")

- 배열 내 모든 요소를 문자열 형태로 합친다

---

# S3 : Javascript 응용

## ✨ Truthy & Falsy

### Truthy

1. Infinity

### Falsy

1. null
2. undefined // 변수에 아무것도 할당하지 않은 상태
3. 0
4. -0
5. NaN
6. 빈 문자열

- 예외 처리가 가능하다
- ex) !객체 -> 예외 처리가 쉽다!

## ✨ 삼항 연산자

- 조건식 ? true일 때 수행할 식 : false일 때 수행할 식;
- 값을 저장해서 사용해야할 때도 있으니 주의할 것
- 중첩이 가능하다 (중첩 삼항 연산자)
- 중첩 사용 시 가독성이 떨어지므로 주의할 것

## ✨ 단락회로 평가

- 왼쪽에서 오른쪽으로 연산하게 되는 논리 연산자의 순서를 이용하는 방법
- 첫 번째 피연산자가 false이고 && 인 경우 뒤의 내용을 볼 필요도 없이 종료 (false)
- Truthy와 Falsy 속성과 함꼐 사용이 가능하다
  ex)
  >

```js
return person && person.name; // 오류로 프로그램이 종료되지 않는다
```

## ✨ 조건문 업그레이드

ex)

>

```js
if (["불고기", "떡볶이", "비빔밥"].includes(food)) {
}
```

## ✨ 비 구조화 할당

- 배열의 기본 변수 비 구조화 할당
- 배열이나 JSON 객체 값을 변수에 효율적으로 할당하기 위해 사용
- 기본값 지정 가능
- swap 활용 가능
- 변수명을 바꿀 때 -> ex) name: myName
  ex)
  >

```js
let [one, two, three] = arr;
let [one, two, three] = ["one", "two", "three"];
```

## ✨ spread 연산자

- 중복된 프로퍼티를 줄여줄 수 있다
- ...객체명
- 객체의 값을 새로운 객체에 펼침

## ✨ 동기 & 비동기

### 동기적 방식 (블로킹 방식)

- 자바스크립트는 코드가 작성된 순서대로 작업을 처리함
- 이전 작업이 진행 중일 때는 다음 작업을 수행하지 않고 기다림
- 먼저 작성된 코드를 먼저 다 실행하고 나서 뒤에 작성된 코드를 실행한다
- for문 또한 동기적 방식임을 기억할 것!

### 비동기적 방식 (Asynchronous)

- MultiThread 방식의 작동
- 논 블로킹 방식
- 콜백 함수
- setTimeout() // 처리 방식 확인

> ex)

```js
function firstFunc(a, b, inFunc) {
  setTimeout(() => {
    const result = a + b;
    inFunc(result);
  }, 2000);
}
>
firstFunc(5, 5, (res) => console.log(res));
console.log("end");
----
function asyncAdd(a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 3000);
}
>
asyncAdd(1, 3, (res) => {
  console.log("결과 : ", res);
});
```

---

# ✨ 참고 자료

- https://tech-monster.tistory.com/180
