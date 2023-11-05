# 4주차 강의 내용정리

## 2-7 배열

### 배열을 생성하는 방법
1. 생성자를 이용하는 방법
ex: let arr = new Array();
2. 배열 리터럴을 쓰는 방법
ex: let arr = [];
> 배열 리터럴을 많이 사용
- 배열 출력 : console.log(arr);

* let arr = [1, "2", true, null, undefined, {}, [], function() {}];
- 숫자, 문자, 불리언값, 배열, 함수 등 자료형이 달라도 다 넣을 수 있다.

### 배열 요소 각각에 접근하는 방법 - 인덱스 이용
'''js
let arr = [1,2,3,4];
console.log(arr[0]);
'''
을 실행해보면 1이 출력된다.

### 배열에 요소 추가
arr.push(5); : 배열의 가장 마지막에 원소를 추가함, 자료형이 무엇이든 상관없음

### 배열의 길이를 변수로 받기
console.log(arr.length);

## 2-11 반복문

### for 반복문
'''js
for ( let i=1; i<=100; i++ ) {
  // 반복 수행할 명령
  console.log("하예영");
}
'''
코드를 실행하면 100번 나의 이름이 출력된다. 
- 위의 코드에서 let i=1; 은 초기식이라고 부른다. 반복의 주체가 되는 변수를 선언할 수 있다.  
- i<=100;은 조건식으로 이 조건을 만족할 때까지만 반복하라는 의미가 담겨있다.  

* for 문은 배열을 순회할 때 (각 요소에 한번씩 다 접근할 때) 유용하다.
'''js
arr = ["a", "b", "c"];

for (let 1=0; i<arr.length; i++) {
  console.log(arr[i]);
}
'''

* 객체 안의 키값과 밸류값 순회하기
'''js
let person = {
  name: "하예영",
  age: 20,
  tall : 162
};

const personKeys = Object.keys(person); // 객체 안에 있는 키값들을 순서대로 배열로 반환받을 수 있음

for (let i = 0; i < personKeys.length; i++) {
  console.log(personKeys[i]); // 키값 출력

  const curKey = personKeys[i]; // curKey에 string 형태로 Key 값
  const curValue = person[curKey];

  console.log( '${curKey} : ${curValue} ); // 키값과 밸류값 출력
}
'''

* value 값만 순회하고 싶다면
'''js
let person = {
  name: "하예영",
  age: 20,
  tall: 162
};

const personValues = Object.values(person);

for(let i=0; i<personValues.length; i++) {
  console.log(personValuse[i]);
}

## 2-12 배열 내장함수

### 내장함수를 이용하여 배열 순회하기 (반복문 사용 없이)
'''js
const arr = [1,2,3,4];

arr.forEach((elm)=>console.log(elm)); // 콜백함수, 화살표함수 이용 또는 아래처럼 표현가능

arr.forEach(function (elm) {
  console.log(elm);
});
'''
- forEach라는 내장함수는 배열의 모든 요소를 한번씩 순회

### 각 배열 요소에 곱셈이나 덧셈 가능 - forEach 내장함수를 사용하여
'''js
const arr = [1,2,3,4];
arr.forEach((elm)=>console.log(elm*2));
'''
위코드를 출력하면 2,4,6,8이 출력됨


'''js
const arr = [1,2,3,4];
const newArr = [];

arr.forEach(function (elm) {
  newArr.push(elm*2);
});

console.log(newArr)
'''
arr 배열에 2를 곱한 값을 newArr 배열로 저장 -> 위 코드를 map 내장함수를 이용하면 짧게 표현 가능

### map 내장함수
'''js
const arr = {1,2,3,4};
const newArr = arr.map((elm) => {
  return elm * 2;
});

console.los(newArr);
'''

### includes 내장함수 : 주어진 배열에서 전달받은 인자와 일치하는 값이 존재하는지 확인
'''js
const arr = [1,2,3,4];
let number = 3; // 만약 let number = "3"; 이였다면 false 가 출력됨 (=== 연산을 사용해서 값을 찾음을 알 수 있음)
console.log(arr.includes(number));
'''
코드를 출력하면 ture 가 출력됨

### indexOf 내장함수 : 값이 존재하는지 확인 뿐 아니라 그 위치를 인덱스로 반환 
'''js
const arr = {1,2,3,4};
let number = 3;
console.log(arr.indexOf(number));
'''
- 위 코드를 실행하면 2가 반환됨
- 만약 일치하는 값이 없다면 -1을 반환

### findIndex 내장함수 : 배열 말고 객체에서 값이 존재하는 위치를 인덱스로 반환
'''js
const arr = {
  {color: "red"},
  {color: "black"},
  {color: "blue"},
  {color: "green"}
};

console.log(arr.findIndex((elm) => elm.color === "red")); // 아래의 코드와 같은 의미임

console.log(
  arr.findIndex((elm) => {
    return elm.color ==="red";
  }) 
); 
'''
위 코드를 실행하면 0이 출력됨.
- 만약 red 값을 가지는 요소가 또 있었다고 해도 먼저 만나는 인덱스 위치를 반환함

### find 내장함수 : 만족하는 요소 자체를 반환함
'''js
const arr = {
  {color: "red"},
  {color: "black"},
  {color: "blue"},
  {color: "green"}
};

const element = arr.find((elm) => elm.color === "red"); // 아래의 코드와 같은 의미임

console.log(element); 
'''
위 코드를 실행하면 color : "red" 가 출력됨

### filter 내장함수 : 전달한 콜백함수가 true를 반환하는 모든 요소를 배열로 반환
'''js
const arr = {
  {num:1, color: "red"},
  {num:2, color: "black"},
  {num:3, color: "blue"},
  {num:4, color: "green"}
  {num:5, color: "blue"}
};

console.log(arr.filter((elm)=>elm.color === "blue"));
''' 

### slice 내장함수 : 배열을 자르는 함수
'''js
const arr1 = {
  {num:1, color: "red"},
  {num:2, color: "black"},
  {num:3, color: "blue"},
  {num:4, color: "green"},
  {num:5, color: "blue"}
};

console.log(arr1.slice(0,2));
''' 
위 코드를 실행하면 0번 인덱스와 1번 인덱스까지만 배열로 반환

### concat 내장함수 : 주어진 배열뒤에 전달받은 인자의 배열을 이어 붙임
'''js
const arr1 = {
  {num:1, color: "red"},
  {num:2, color: "black"},
  {num:3, color: "blue"}
};

const arr2= {
  {num:4, color: "green"}
  {num:5, color: "blue"}
};

console.log(arr1.concat(arr2));
'''
위 코드를 출력하면 하나의 배열로 5개의 Object가 출력됨

### : 배열을 정렬
'''js
let chars = ["나", "다", "가"];

chars.sort(); // 원본 배열 자체를 정렬
'''
위 코드를 출력하며 가나다 순으로 잘 정렬됨

'''js
let numbers = [0,1,3,2,10,30,20];
numbers.sort();
console.log(nubmers);
'''
위 코드를 실행하면 [0,1,10,2,20,3,20] 과 같이 배열됨을 볼 수 있음.
> 그 이유는 숫자를 기준으로 정렬하는 것이 아니라 문자열 기준으로 정렬하기 때문이다. (사전순)

### sort를 이용하여 숫자 정렬하기
'''js
let numbers = [0,1,3,2,10,30,20];

const compare = (a,b)=>{
  if(a>b){
    return 1; // a가 b보다 더 뒤에 있어야 한다는 뜻, -1로 한다면 내림차순이됨
  }

  if (a<b>) {
    return -1; //a가 b보다 더 앞으로 가야한다는 뜻, 1로 한다면 내림차순이 됨
  }
  return 0;
}

numbers.sort(compare);

console.log(numbers);
'''
출력하면 오름차순으로 정렬됨을 볼 수 있다.

### join 내장함수 : 배열에 존재하는 요소를 문자열로 하나로 합쳐서 사용 가능
'''js
const arr = ["하예영', "님", "안녕하세요"];
console.log(arr.join()); // 쉼표가 출력되는 게 싫다면 arr.join(" ")로 쓰면 된다.
'''
위 코드를 출력하면 하예영,님,안녕하세요 가 출력된다.

## 3-1 Truthy & Falsy
'''js
let a ="";

if (a) {
  console.log("TRUE");
  } else {
    console.log("FALSE");
  }
'''
FALSE가 출력됨. 만약 a = "string"이라면 TRUE가 출력됨

### 자바 스크립트가 조건식에서 참으로 평가하는 값들
> 불리언 값이 TRUE가 아니더라도 참으로 평가하는 Truthy 
- 객체 리터럴 [] (빈 리터럴도 참)
- 숫자 (0을 제외)
- 문자열 (빈문자열 제외)
- Infinity도 참

### 거짓이 아니어도 거짓으로 평가하는 Falsy
- null
- undefined (변수에 아무 값도 저장하지 않은)
- 숫자 0, -0
- NaN (숫자가 아니다를 의미하는)
- "" (빈 문자열)

'''js
const getName = (person) => {
  return perosn.name;
  };

let person = {name: "하예영"}; // let person; 같이 undefined으로 저장하면 에러가 발생함. 왜냐하면 위에서 return 명령문에 점표기법(person.name)을 사용했기 때문임. undefined은 객체가 아니기 때문에 내부 프롬퍼티에 접근할 수 없음. 이런 경우에는 조건문을 사용하여 에러를 해결함

const name = getName(person);
console.log(name);
'''
실행하면 하예영이 출력됨 

### undefined이나 null 등 falsy 값을 가질 때 생기는 에러 해결
'''js
const getName = (person) => {
  if (!person) {
    // false NOT => True
    return "객체가 아닙니다";
  }
  return perosn.name;
};

let person = null;
const name = getName(person);
console.log(name);
'''
## 3-2 삼항 연산자 : 조건문을 줄여주는 역할
'''js
let a = 3;
a >= 0 ? console.log("양수") : console.log("음수"); 
// (조건문) ? (참일 때 실행문) : (거짓일 때 실행문)
'''
실행하면 양수 가 출력됨

'''js
let a = [];
a.length === 0 ? console.log("빈 배열") : console.log("안 빈 배열");
'''
실행하면 빈 배열 이 출력됨

'''js
let a = [1,2,3];
const arrayStatus = a.length === 0 ? "빈 배열" : "안 빈 배열"; // 값을 명시
console.log(arrayStatus);
'''
실행하면 빈 배열 이 출력됨

'''js
let a; // undefined 상태

const result = a ? true : false;
console.log(result);
'''
실행하면 false가 출력됨

### 삼항 연산자의 중첩 -  학점 계산 프로그램
'''js
let score = 100;

score >= 90 
  ? console.log("A+") 
  : score >= 50 // score가 90이 넘지 않는다면 이 조건을 비교
  ? console.log("B+") // 만족하면 B+
  : console.log("F"); // score가 50이 안된다면 F
'''
> 가독성이 조금 떨어지기 때문에 if 조건문으로 쓰는 것을 추천함

## 3-3 단락 회로 평가

### 논리 연산자 복습
console.log(true && false); // AND 연산자 (둘 다 true면 true)
만약 (false && true) 라면 앞에가 false 이므로 뒤에를 볼 필요 없이 결과는 false임
이런 것을 <단락 회로 평가>라고 함

console.log(true || false); // OR 연산자
console.log(!true);

### 단락 회로 평가의 응용
'''js
const getName = (person) => {
  ruturn person && person.name;
  // 양쪽 값을 truthy, falsy한 값을 주었음
  // person 은 undefined 값을 가지므로 falsy한 값이 앞에 있다. 따라서 뒤에를 볼 필요도 없이 그대로 undefined를 출력함
};

let person;
const name = getName(person);
console.log(name);
'''
실행하면 undefiend 가 출력됨

'''js
const getName = (person) => {
  const name = person && person.name; // 하예영 저장
  return name || "객체가 아닙니다"; // name이 truthy하므로 name 반환
};

let person = {name : "하예영"};
const name = getName(person);
console.log(name);
'''

'''js
const getName = (person) => {
  const name = person && person.name; // person이 falsy함
  return name || "객체가 아닙니다"; // name이 falsy 하므로 뒤에를 살펴보면 문자열 truthy 하므로 결국 "객체가 아닙니다"가 출력됨
};

let person = null;
const name = getName(person);
console.log(name);
'''
실행하면 객체가 아닙니다 가 출력됨

## 3-4 조건문 upgrade

### 여러가지 케이스 중 하나를 비교할 때 - includes 
'''js
function isKoreanFood(food) {
  if (["불고기", "떡볶이", "비빔밥"].includes(food)) {
    return true;
  }
  return false;
}

const food1 = isKoreanFood("불고기");
const food2 = isKoreanFood("파스타");
console.log(food1);
console.log(food2);
'''

'''js
const meal = {
  한식 : "불고기",
  중식 : "멘보샤",
  일식 : "초밥",
  양식 : "스테이크",
  인도식 : "카레"
}
const getMeal = (mealType) => {
  return meal(mealType) || "굶기";
}

console.log(getMeal("중식"));
'''

## 3-5 비 구조화 할당

### 배열의 기본변수 비 구조화 할당
'''js
let arr = ["one", "two", "three"];

let one = arr[0];
let two = arr[1];
let three = arr[2];

let [one, two, three] = arr; // 위의 3코드와 같은 의미
'''

'''js
let [one, two, three, four]= ["one", "two", "three"];
console.log(one, two, three, four);
'''
실행하면 four은 undefined 가 됨

'''js
let a = 10;
let b = 20;

[a,b] = [b, a]; // a와 b swap하기
'''

### 객체의 비구조화 할당
'''js
let object = { one: "one", two: "two", three: "three"};

let { one, two, three} = object;
'''

'''js
let object = { one: "one", two: "two", three: "three", name: "하예영" };

let { name : myname, one, two, three} = object;
console.log(one, two, three, myname);

## 3-6 spread 연산자

### 중복된 프롬퍼티를 계속 작성해야 할 때 - spread 연산자 이용
'''Js
const cookie = {
  bese : "cookie",
  madeIn : "korea",
};

const chocochipCookie = {
  ...cookie // spread 연산자 이용
  toping : "chocochip"
};

const blueberryCookie = {
  ...cookie
  toping : "blueberry"
};

const strawberryCookie = {
  ...cookie
  toping : "strawberry"
};

console.log(chocochipCookie);
'''
출력하면 {base: "cookie", madeIn: "korea", toping: "chocochip"} 이 출력됨

### 배열에서 spread 연산자 사용
'''js
const noTopingCookies = ['촉촉한쿠키', '안촉촉한쿠키'];
const topingCookies = ["바나나쿠키", "블루베리쿠키", "딸기쿠기", "초코칩쿠키"];

const allCookies [ ...noTopingCookies, "함정쿠키", ...topingCookies];
console.log(allCookies);
'''

## 3-7 동기 & 비동기
 
 ### 동기 방식의 처리
 <자바스크립트의 싱글 스레드 작업 수행 방식>
 - 자바스크립트는 코드가 작성된 순서대로 작업을 처리함
 - 이전 작업이 진행 중일 때는 다음 작업을 수행하지 않고 기다림
 - 먼저 작성된 코드를 먼저 다 실행하고 나서 뒤에 작성된 코드를 실행함

 - 동기적 처리의 단점
 > 하나의 작업이 너무 오래 걸리게 될 시, 모든 작업이 오래 걸리는 하나의 작업이 종료되기 전까지 올 스탑 되기 떄문에 흐름이 느려진다.
 > 웹사이트에서 버튼 하나마다 30초씩 걸리면 속터진다.

 멀티쓰레드로 동작하는 방법도 있지만 자바스크립트는 싱글 쓰레드로 동작함

 ### 비동기 방식의 처리
 - 싱글 쓰레드 방식을 이용하면서, 동기적 작업의 단점 극복을 위해 여러개의 작업을 동시 실행
 - 즉, 먼저 작성된 코드의 결과를 기다리지 않고 다음 코드를 바로 실행함
 - 논 블로킹 방식

'''js
function taskA() {
  console.log("A 작업 끝");
}

taskA();
console.log("코드 끝");
'''
출력 결과는 동기 방식임.

'''js
function taskA() {
  setTimeout(() => {
    console.log("A TASK END");
  }, 2000);
 }

 taskA();
 console.log("코드 끝"); 
 '''
 출력 결과는 "코드 끝" 이 먼저 출력되고 "A TASK END"가 출력됨. 
 비동기 방식

 ### 콜백 함수를 이용한 비동기 방식

 '''js
function taskA(a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 3000);
 }

 taskA(3,4, res)=> {
  console.log("A TASK RESULT : ", res);
 };
 console.log("코드 끝"); 
 '''
 실행하면 "코드끝" 출력 후 "A TASK RESULT"가 출력됨
