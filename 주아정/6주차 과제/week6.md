## ✨ 리액트가 필요한 이유

### 1. 컴포넌트화 방식

- 리액트는 컴포넌트 기반의 UI 라이브러리

- 중복된 파일을 줄여줌

- `Shotgun Surgery` 문제가 발생하지 않는다.

  -> Shotgun Surgery : 한 개의 문제가 여러 개의 파일을 동시에 수정하게 해야함

  -> 사유 : 중복 코드 작성

- 유지 및 보수가 편리하다

### 2. 선언형 프로그래밍

- 절차를 하나하나 다 나열해야하는 `명령형 프로그래밍`(ex, JQuery) 에 비해 목적을 바로 말하는 선언형 프로그래밍(ex, React) 이 더 간단하고 한 눈에 들어온다

=> 컴포넌트화 방식을 채택해 중복된 파일을 줄이고, 마치 레고를 조립하듯 원하는 부분을 재사용할 수 있어 편리하다. 또한, 선언형 프로그래밍 방식이기에 프로그래밍의 목적 (어떤 기능을 담당하는지) 을 한눈에 알아보기 쉽다

### 3. Virtual DOM

- DOM : 문서 객체 모델

  -> HTML을 보여주기 위해 자신 나름대로 트리 형태로 변환시켜놓은 객체를 의미한다

- 잦은 업데이트 상황에 놓였을 경우 DOM이 계속 바뀌고, 성능저하 문제가 발생하게 된다

- Virtual DOM을 사용함으로써 과다 연산을 해결할 수 있다

### React와 함께 쓰는 라이브러리 모듈

- Webpack : 다수의 자바스크립트 파일을 하나의 파일로 합쳐주는 모듈 번들 라이브러리

- Babel : JSX 등의 쉽고 직관적인 자바스크립트 문법을 사용할 수 있도록 해주는 라이브러리

  -> Boiler Plate : 빵 틀의 역할을 하는 `Create React App`를 사용해 개발

## ✨ Create React App

- npx : 설치되어 있지 않은 패키지를 일회용으로 사용하고 싶을 경우 사용

  -> npx create-react-app 프로젝트명

### React 문법

- 함수를 만들고 JSX 문법의 HTML을 리턴하며 컴포넌트를 만든다

- export default 함수명으로 내보내기

  -> 한 개만 내보낼 수 있다

- import 이름 from "경로" 로 불러오기

- `<MyHeader />` 처럼 불러와서 태그처럼 사용

## ✨ JSX

- 불러와서 사용할 때는 리턴값이 존재해야함

### 1. 닫힌 규칙

- 반드시 모든 태그를 닫아주어야 함

- `<br>` 등 예외 X

- 열자마자 닫아주는 것도 하나의 방법! (ex, `<br />`)

### 2. 최상위 태그 규칙

- 최상위 태그 : 다른 모든 태그를 감싸는 가장 바깥의 태그

- 반드시 하나의 최상위 태그로 다른 태그들을 묶어줘야 한다

- React fragment 사용하는 것도 가능

  -> `<React.Fragment>`

- 또는 <> </>처럼 빈 태그도 사용 가능

### CSS 태그 사용

1. import를 사용하여 css 파일을 불러올 수 있다

2. 인라인 방식 사용

- const style로 객체 생성

- Camel Case로 작성

>

```js
<div style={style.App}>
  <MyHeader />
  <h2 style={style.h2}>안녕 리액트 {name}</h2>
  <b style={style.bold_text} id="bold_text">
    React.js
  </b>
</div>
```

- 최상위 태그에 스타일 걸어주기

>

```js
<h2 style={style.h2}>안녕 리액트 {func()}</h2>
<h2 style={style.h2}>안녕 리액트 {1 + 2}</h2>
<h2 style={style.h2}>안녕 리액트 {[]}</h2> // 오류
```

- 중괄호 안에 숫자나 문자열, 함수 등을 넣을 수 있다

- 빈 배열, boolean 값 등을 넣으면 렌더가 안 되므로 주의할 것

### 조건부 렌더링

- 삼항연산자를 사용해 조건에 따라 다른 값을 렌더링
  >

```js
"number는:" {
  number % 2 === 0 ? "짝수" : "홀수";
}
```

## ✨ State

- 계속해서 변화하는 특정 상태

- 상태에 따라 각각 다른 동작을 함

- ex) 스위치를 통해 테마 색상 변경 (Dark -> Light)

- State는 리액트의 기능이기 때문에 React를 import 해줘야 한다

>

```js
import React, { useState } from "react";
```

### State 사용

>

```js
const [count, setCount] = useState(0);
```

- useState 메소드는 배열을 반환하고, 배열의 비 구조화 할당을 통해 0번째 인덱스 count, 1번째 인덱스 setCount 상수를 받아옴

- count는 상수의 값으로, setCount는 count의 상태를 변화시키는 상태 변화 함수로 사용

- useState 인자인 0은 초깃값으로 사용

- 중괄호를 통해 함수 사용

>

```js
const onIncrease = () => {
  setCount(count + 1);
};

<button onClick={onIncrease}>+</button>;
```

1. `-` 버튼을 눌렀을 때 onIncrease 함수 수행

2. setCount의 인자로 초깃값 0에서 0+1인 1 리턴

3. const [count, setCount]...의 count 값이 2로 바뀐다

4. return 문의 {count} 값 또한 2로 바뀌어 화면에 출력

- 자신이 가진 상태가 변화하면 `ReRender` 을 한다

- 컴포넌트가 다시 호출

- 이름이 안 겹치는 선에서 여러 개의 상태 변화 함수를 만들 수 있다

### State가 필요한 이유

- State는 상태를 변화하는 데 효과적으로 사용될 수 있다. state를 사용하지 않는다면 불필요한 코드들이 늘게 되어 가독성이 떨어진다. 따라서 React 사용 이유처럼 목적을 드러냄으로써 코드의 기능을 한눈에 파악할 수 있다.

## ✨ Props

- 컴포넌트에게 데이터를 전달하는 방법 중 하나

- Properties의 줄임말

>

```js
<Counter initialValue={5} />
```

- initialValue라는 이름으로 초깃값 지정 가능

### 사용

- 매개변수를 통해 받아옴

>

```js
// ex)
const Counter = (props) => {};
```

- 몇 개를 보내던 객체 안에 담겨오게 된다

- 점 표기법을 사용해 props 사용 가능

>

```js
const [count, setCount] = useState(props.initialValue);
```

- spread 연산자를 활용, 객체로 만들어 전달할 수도 있다

>

```js
function App() {
  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    initialValue: 5,
  };

  return (
    <div>
      <Counter {...counterProps} />
    </div>
  );
}
```

- 받는 쪽에서도 `비 구조화 할당`을 통해 받을 수 있다

>

```js
const Counter = ({ initialValue }) => {
  // Props 객체를 받아 initialValue 값만 가져다 씀
  console.log(props);
  const [count, setCount] = useState(initialValue);
};
```

- 만약 `initialValue`에 아무런 값도 전달하지 않았다면? -> undifined 전달 -> `NaN`

>

```js
Counter.defaultProps = {
  initialValue: 0,
};
```

- 이런 상황을 막기 위해 default 값을 설정해준다

### 동적 데이터 전달

- ex) State

>

```js
const [count, setCount] = useState(initialValue); // 에서의 count 값이 바로 State
// 상태 값인 count 전달
<OddEvenResult count={count} />;

// count를 받아와서 콘솔창에 출력하기
const OddEvenResult = ({ count }) => {
  console.log(count);
  return <></>;
};
```

- 부모 요소의 컴포넌트가 리렌더되면 자식 요소의 컴포넌트도 리렌더된다

- 컴포넌트 자체도 props로 전달이 가능하다

### 리렌더 조건

1. 자신의 상태가 변화하는 경우

2. 자신에게 내려오는 props가 변화하는 경우

3. 부모 요소가 리렌더되는 경우
