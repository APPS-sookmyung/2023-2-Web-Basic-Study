## ✨ 프로젝트 세팅

### 파일 생성

>

```js
const DiaryEditor = () => {
  return <></>;
};

export default DiaryEditor;
return <div className="DiaryEditor"></div>;
```

- 컴포넌트명과 최상위 태그인 div 클래스의 이름을 똑같이 맞춰준다

  -> CSS 클래스를 활용해 스타일링할 경우 직관적으로 코드를 작성할 수 있다 (강사님의 방식)

### 사용

- 중심(?) 컴포넌트(강의에서는 App.js) 에 배치시켜야 사용이 가능하다!

  -> 태그처럼 사용

  -> ex) `<DiaryEditor />

- Auto Import 기능이 동작할 경우 알아서 임포트시켜주지만 동작하지 않을 수도 있으므로 import 꼭 확인할 것

  -> import 컴포넌트명 from "경로";

## ✨ onChange

- 콜백 함수 전달

- 이벤트 `e` 매개변수 전달

- 값이 바뀌었을 때 수행하는 이벤트

- input 안에 왜 `value` 속성을 지정해야하나요?

  -> input의 값을 쉽게 받아오기 위해 input 안에 `value` 값을 써주었다

- `value`를 사용했을 경우 왜 입력이 되지 않나요?

  -> input 엘리먼트에 value 속성만 지정하면 value 속성으로 권한이 넘어가게 된다. 즉, 사용자의 입력으로 변화하는 것이 아닌, value에 들어온 값으로만 입력값이 변화하므로 아무리 사용자가 입력해도 input 안에 값이 입력되지 않는 것이다

  -> 그래서 onChange 이벤트를 사용하는 것!

### 사용

- state + onChange

>

```js
import { useState } from "react";

const DiaryEditor = () {
const [author, setAuthor] = useState(""); // 기본값 설정

return(

<div>
<input
value={author}
onChange={(e) => {
setAuthor(e.target.value);
}}
/>
</div>
);
};
```

1. import문

2. state 설정 (const [author, setAuthor] ...)

3. input에 value 속성 지정 (값 저장)

4. onChange 이벤트

   -> author은 setAuthor로만 바꿀 수 있다

- input에 name={author} 처럼 따로 지정한 것도 불러올 수 있다

  -> setAuthor(e.target.name);

- input 태그는 한 줄만 입력 받을 수 있으므로 여러 줄을 입력 받고 싶다면 `textarea` 사용

  -> input 태그와 사용 방법이 똑같다

### 하나의 state로 묶기

- 동작이 비슷한 state는 하나의 state로 묶는 것이 효율적이다

>

```js
const [state, setState] = useState({
author: "",
content: "",
});

// ... 중간 생략
value={state.author}
onChange={(e) => {
setState({
author: e.target.value,
content: state.content,
});
}}
```

1. input 태그 (혹은 textarea 태그) 안 value 속성 수정

2. (예시) setAuthor -> setState 값으로 변경

3. 객체 수정하기

   -> spread 연산자를 활용할 것

>

```js
...state,
content: e.target.value,
```

- 순서가 중요함!

- 원래 state를 먼저 펼쳐준 후 state를 바꿀 것

### OnChange Handler 합치기

- 선택

- div -> select -> option

## ✨ 함수

- alert() : 경고창

- new Date() // 객체 생성

  -> 현재 시간을 기준으로 생성

  -> .getTime() : 시간을 받아서 milliseconds로 변환

  -> 파라미터에 ms로 된 시간 쓰기 + .toLocaleString() : 2023.11.19. 오후~ 이런 식으로 나옴

## ✨useRef

- `current` 로 불러옴

- 아이디 값을 자동으로 증가시킬 때도 사용이 가능하다

### 아이디

1. useRef 호출

>

```js
//ex
const dataId = useRef(0);
```

2. id 설정

>

```js
//ex
id: dataId.current,
```

3. 증가

>

```js
//ex
dataId.current += 1;
```

- focus 기능을 사용하기 위해서는 useRef가 필요하다 -> 리액트 기능이므로 react에서 import

>

```js
import { useRef } from "react";
```

### 방법

>

```js
const authorInput = useRef();
```

### 1. useRef 함수 호출

- authorInput 상수에는 React.MutableRefObject<undefined> 가 저장되게 된다.

- MutableRefObject : HTML 돔 요소에 접근할 수 있게 한다

### 2. return 문 안, 태그 안 변수 호출

- 변수 = { useRef() 담고 있는 변수 (ex, authorInput) }

- 강의에서는 텍스트에 포커스를 주므로 포커스를 주고 싶은 태그 (ex, input, textarea) 안에 변수를 선언해줬다

### 3. 선언

authorInput.current.focus();

- 변수.current.focus(); // 사용하고 싶은 기능

## ✨ 리스트 렌더링

- 렌더링 : 화면에 표시하는 것

### map 이용

- return문에서 map으로 뿌리기

- map 관련 정리 자료 : https://ajeong7038.tistory.com/10

### 고유 키 값 설정

1. 최상위 태그 속성에 고유 키(아이디) 설정

>

```js
<div key={it.id}>// ... 내용</div>
```

2. 기본 파라미터 사용

- map 함수의 기본 파라미터를 사용한다

- 배열의 몇 번째 요소를 순회하고 있는지 인덱스로 알려준다

>

```js
{diaryList.map((it, idx) => (
// ... 내용
))};
```

- 수정, 삭제, 추가 시 인덱스에 문제가 생길 수 있으므로 고유한 아이디로 갖고 있을 경우 고유한 아이디로 키 값을 지정할 것

### 컴포넌트 트리

- 같은 레벨끼리는 데이터를 주고 받을 수 없다

- 단방향 데이터 흐름 : React는 단방향으로만 데이터가 흐른다

- 공통 부모와 `State`를 활용해 문제를 해결할 수 있다

- 추가, 수정, 삭제 같은 이벤트를 핸들링하는 setData 함수를 Props로 전달한다 (아래 -> 위) : 상태 변화 함수 호출

  -> 데이터는 위에서 아래로, 이벤트는 아래서 위로

## ✨ window.confirm

>

```js
사용;
if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
}
```

- 대화 박스가 alert와 비슷하게 나오고, 확인 취소 버튼이 있다

## ✨ 데이터 수정

- 컴포넌트 트리에 전달되는 이름을 바꾸면 데이터를 전달 받는 트리에 대한 이름도 모두 바꿔줘야 한다

  -> 이런 문제를 어떻게 해결할 수 있을까? (나중에 추가 예정\_사유 : 아직 강의를 보지 않았다)

## ✨ Lifecycle

- 프로그램이 실행되고 종료되는 과정을 나타내기 위함

### 1. Mount

- 화면에 나타나는 것

- ComponentDidMount

### 2. Update

- 업데이트 (리렌더)

- ComponentDidUpdate

### 3. UnMount

- 화면에서 사라짐

- ComponentWillUnmount

### Lifecycle 제어

- 예시

  -> 1) 초기화 작업

  -> 2) 예외 처리 작업

  -> 3) 메모리 정리 작업

## ✨ React Hooks

- `State`와 같은 기능들은 함수형 컴포넌트를 사용하지 못하지만 키워드 `use`를 붙임으로써 함수처럼 불러와 사용할 수 있게 한다

- ex) useState, useEffect, useRef

- Class형 컴포넌트의 길어지는 코드 길이 문제로 중복 코드, 가독성 문제 등을 해결하기 위해 등장했다

## ✨ useEffect

- 파라미터 2개 (콜백 함수, 의존성 배열)

>

```js
useEffect(() => {
  //todo... => 콜백 함수
}, []);
```

- useEffect의 두 번째 파라미터, 배열

  -> Dependency Arrya (의존성 배열)

- 배열 내에 들어있는 값이 변화하면 콜백 함수가 수행

- unMount : 콜백 함수의 리턴 값으로 함수를 리턴

## ✨ 참고 자료

https://kmhan.tistory.com/316

https://dukdukz.tistory.com/entry/React-input-%EC%95%88%EC%97%90-value-%EC%8D%A8%EC%95%BC%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0-value-%EC%82%AC%EC%9A%A9%EC%8B%9C-%EC%9E%85%EB%A0%A5%EC%95%88%EB%90%98%EB%8A%94-%EB%AC%B8%EC%A0%9C
