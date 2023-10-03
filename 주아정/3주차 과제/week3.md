# S1 : Javascript 기본

> `한입 크기로 잘라 먹는 리액트 (React.js)` 강의를 듣고 정리한 자료입니다

</br>

## ✨ 자바스크립트란?

- 웹을 개발하는 세 가지 언어

- 웹사이트에 활력을 부여하는 언어 (실질적인 일 수행)

- 자바스크립트 엔진이 자바스크립트를 실행시킨다 (ex. V8)

## ✨ 자바스크립트 기본 문법

### 출력

- console.log("안녕 자바스크립트"); : 콘솔창에 "안녕 자바스크립트" 출력

### 변수와 상수

- `let` or `var` 키워드 사용하여 변수를 선언할 수 있다

- 규칙을 지킬 것!

  -> `_`와 `$` 외 기호를 사용해서는 안 된다

  -> 변수명의 앞에 숫자를 사용할 수 없다

  -> 예약어 사용 X

### let vs var

- let은 var와 다르게 변수 중복 선언을 방지해준다

- 상수는 `const` 키워드를 통해 선언해줄 수 있다

- 상수의 경우 값을 바꿀 수 없다

  -> 선언과 동시에 초기화를 해줘야 한다

## ✨ 자바스크립트의 자료형

### 1. Primitive Type (원시 타입)

- 한 번에 하나의 값만 가질 수 있다.

- 하나의 고정된 저장 공간 이용

>

```js
let number = 12;
```

### 2. Non-Primitive Type (비 원시 타입)

- 한 번에 여러 개의 값을 가질 수 있다

- 여러 개의 고정되지 않은 동적 공간 사용

>

```js
let array = [1, 2, 3, 4];
```

## ✨ 자료형과 형 변환

### 숫자형

- 정수형과 실수형을 분리하지 않는다

  -> 모두 숫자형으로 분리

- Infinity, -Infinity, NaN 값도 포함

### Template Literal

- 백틱을 사용해 문자열 안에 변수를 사용할 수 있게 해준다

>

```js
let name = "주아정";
console.log(`안녕하세요, 저는 ${name} 입니다.`);
```

### boolean

- 참 또는 거짓

### Null

- 일반적으로 값을 선언하지 않고 출력하는 경우 null이 나오지만, JS에서는 `undifined`가 나오게 된다

- 실제로 null 대입 -> 의도적

### 형 변환

- 묵시적 형 변환과 명시적 형 변환

- 문자열 \* 숫자 -> 숫자

- 문자열 + 숫자 -> 문자

- parseInt(변수) : 형 변환 함수

## ✨ 연산자

- 대입 연산자

- 산술 연산자(+, -, \* ...)

- 연결 연산자(문자열 + 문자열 or 문자열 + 숫자열)

- 복합 연산자(+=, -= ...)

- 증감 연산자(++, --)

- 논리 연산자 (&&, || ...)

- 비교 연산자 (>=, < ...)

  -> `==` : 값만 비교

  -> `===` : 값 + 타입 비교

- typeof 연산자 : 현재 타입 반환

>

```js
console.log(typeof 변수명); // string, number...
```

- null 병합 연산자 (`??`)

>

```js
// a라는 변수에 값이 없으면 10을 대입하고, 값이 있다면 기존 값 대입
a = a ?? 10;
```

## ✨ 함수

### 1. 함수 선언식, 함수 선언 방식의 함수 생성

>

```js
function 함수명 (파라미터) {
return ~; // 생략 가능
};
```

- 함수 내부에서 선언한 변수는 함수의 바깥에서 접근이 불가하다

- 지역변수와 전역변수

### 2. 함수 표현식

>

```js
let hello = function () {
  return "안녕하세요";
};

const helloText = hello();
console.log(helloText);
```

- 함수의 이름이 없어도 된다 (무명 함수)

### 함수 선언식 vs 함수 표현식

- `호이스팅` : 함수 실행 전 코드의 최상단으로 끌어올려진다

- 함수 선언식은 호이스팅이 이루어지고, 함수 표현식은 호이스팅의 대상이 되지 않는다

- 즉, 함수 표현식은 함수 선언 전 함수 호출이 불가능하다

## ✨ 화살표 함수

>

```js
let hello = () => {
  return "안녕하세요";
};

console.log(hello());
```

- 구현부가 짧다면 더 간략하게 사용도 가능하다

>

```js
let hello = () => "안녕하세요";

console.log(hello());
```

- 호이스팅의 대상이 아니므로 주의해서 사용해야 한다

## ✨ 콜백 함수

- 함수의 파라미터로 함수를 넘겨주는 것

>

```js
function checkMood(mood, goodCallback, badCallback) {
  if (mood === "good") {
    // 기분이 좋을 때 하는 동작
    goodCallback();
  } else {
    // 기분이 안 좋을 때 하는 동작
    badCallback();
  }
}

function cry() {
  console.log("ACTION :: CRY");
  cry();
}

function sing() {
  console.log("ACTION :: SING");
}

function dance() {
  console.log("ACTION :: DANCE");
}

checkMood("good", sing, cry); // 함수 표현식 사용
```

## ✨ 객체

- Non-Primitive Type

### 객체 생성

1. 객체 생성자 사용 (new)

>

```js
let person = new Object();
```

2. 중괄호 사용

>

```js
let person = {};
```

- 객체 리터럴 방식

- key와 value 값으로 넣을 수 있다

>

```js
let person = {
key: "value" // 프로퍼티 (객체 프로퍼티)
key1: "value2"
};

console.log(person);

// {key: "value", key1: "value2"}
```

- 모든 자료형을 프로퍼티의 값으로 사용할 수 있다

- key는 항상 문자열로 이루어져야 한다

- key는 중복 가능하지만 되도록이면 그렇게 사용하지 않는다

### 프로퍼티 접근

1. 점 표기법

- 객체명.프로퍼티명

2. 괄호 표기법

- 객체명["프로퍼티명"]

  -> 큰 따옴표를 사용하지 않으면 변수로 인식

## ✨ 객체 프로퍼티 생성 이후...

### 1. 추가

- 객체명.새로운프로퍼티명 = "~"

- 객체명["새로운프로퍼티명"] = "~"

>

```js
let person = {
  name: "주아정",
  age: 20,
};

person.location = "한국";
console.log(person);

// {name: "주아정", age: 20, location: "한국"} 2. 변경
```

- 객체명.프로퍼티명 = 변경할 값

- 상수로 선언해도 안에 값을 바꿀 수 있다 (객체 안 값을 변경하는 행위일 뿐, 객체 자체를 변경하지는 않기 때문)

### 3. 삭제

- delete 객체명.프로퍼티명

- delete 객체명["프로퍼티명"]

- 연결만 끊을 뿐 메모리에서 삭제하지는 않는다

- 객체명.프로퍼티명 = null; // 메모리에서 완전히 삭제할 수 있다

- 함수가 아닌 프로퍼티는 `멤버`, 함수인 프로퍼티는 `메서드` 라 부른다

>

```js
const person = {
  name: "주아정",
  age: 20,
  say: function () {
    console.log(`안녕 나는 ${this.name}`);
  },
};

person.say(); // 안녕 나는 주아정
```

- 여기서 this == person

- `in` 연산자를 통해 프로퍼티 값 확인이 가능하다

>

```js
console.log(`name : ${"name" in person}`); // name : true
```

## ✨ 참고 자료

https://yoo11052.tistory.com/151
