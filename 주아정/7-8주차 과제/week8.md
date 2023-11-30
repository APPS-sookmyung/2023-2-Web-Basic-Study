# ✨ API 호출

## `async`를 활용한 API 호출

>

```js
const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments").then(
    (res) => res.json()
  );
};
```

- fetch 함수를 사용해 API를 불러온다

### 랜덤 함수

>

```js
Math.floor(Math.random() \* 5)+1,
```

- 1부터 5까지의 랜덤 숫자 추출

# ✨ React developer tools

- 크롬 확장 도구

- 페이스북이 직접 만들었다

- 도구 더보기 -> 확장 프로그램 -> React 사용 -> 모든 사이트에서 -> 파일 URL에 대한 액세스 허용

  => 개발자 도구를 오픈하면 만들었던 계층 구조를 보여준다

- 어떤 컴포넌트가 리렌더링이 일어나고 있는지 확인이 가능하다

# ✨ useMemo

## Memoization

- 이미 계산해 본 연산 결과를 기억해 두었다가 동일한 계산을 시키면 다시 연산하지 않고 기억해 두었던 데이터를 반환시키게 하는 방법

- 연산 과정을 최적화함

- 리렌더링이 된다는 건 그 함수가 다시 한 번 더 호출되는 것이다

## useMemo

- useMemo를 사용하는 순간 더 이상 함수가 아니게 된다

- `함수`가 아닌 `값`으로 사용해야함

# ✨ React.memo

- 컴포넌트 로직을 재사용하기 위한 React의 기술

- 컴포넌트를 가져와 새 컴포넌트를 반환하는 함수

## 주의사항

- React.memo를 사용할 때 `값`으로 넘기면 렌더링이 일어나지 않지만 `객체`로 넘기면 같은 값이더라도 렌더링이 일어나게 된다

- 객체를 비교할 때 `얕은 비교`를 하기 때문!

## 객체 비교 방법 (얕은 비교)

- 값에 의한 비교가 아닌 주소로 비교하기 때문에 값이 같을지라도 다른 값으로 판단하게 되는 것!

- 값을 대입하게 되면 같은 값으로 판단

# ✨ useCallback

- 메모이제이션된 콜백 반환 (값 반환 X)

- 두 번째 인자의 값이 변하지 않으면 첫 번째 인자를 계속 재사용

# ✨ useReducer

## 사용

>

```js
const [data, dispatch] = useReducer(reducer, []);
```

- dispatch를 호출하면 reducer가 실행되고, reducer이 return하는 값이 data의 값

# ✨ Context

## props drilling

- 단방향 리액트를 사용하며 발생하는 문제

- 해결 : provider 컴포넌트 사용하기 -> `Context`

## 생성

>

```js
constMycontext = React.createContext(defaultValue);

<MyContext.Provider value={전역으로 전달하고자 하는 값}>
{/_자식 컴포넌트_/}
</MyContext.Provider>
```
