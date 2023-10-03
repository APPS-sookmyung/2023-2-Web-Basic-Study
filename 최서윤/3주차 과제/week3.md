2-1. Hello World
Javascript란? -웹사이트를 실질적으로 움직이게 하는 언어
-safari,firefox,chrome 등에서 실행됨
2-2. 변수와 상수
변수명 규칙 1. 기호는 사용 불가(\_,$ 는 사용 가능) 2. 숫자가 아닌 문자로 시작 3. 예약어는 피하기
변수명 선언
-let(변수명 중복선언 불가)
-var(변수명 중복선언 허용/덮어씌우기 가능)
-const(상수)
2-3. 자료형과 형 변환
자료형 1. primitive -한 번에 하나의 값 -하나의 고정된 저장 공간
(1)숫자
-infinity
-(-infinity)
-nan
(2)문자
(3)boolean
-true
-false
(4)null -실제로 대입
(5)undefined -변수 선언->값 할당X 2. Non-primitive -한번에 여러개 값 -여러개의 고정되지 않은 동적 공간
형 변환 -자동으로 형 변환 1. 묵시적 형 변환
ex) 12* "2"=>24(숫자) 2. 명시적 형 변환
ex) 12+paseInt("2")=>14(숫자)
2-4. 연산자 1. 대입 연산자
ex) let a=1; 2. 산술 연산자 - (+,*,-,/,%) 3. 연결 연산자
ex) let a="1";
let b="2";
console.log(a+b);=>12 4. 복합 연산자 - (+=,-=,/=) 5. 증감 연산자 - (a++,++a,--a,a--)
ex) let a=10;
console.log(a++); => 10 (후위)
console.log(++a); => 11 (전위) 6. 논리 연산자
(1)!: not
(2)&&: and
(3)||: or 7. 비교 연산자 - ==, !=(값만 비교) - ===, !===(자료형도 비교) - >, <, >=, <= 8. 타입 연산자
-typeof 변수 9. 널병합 연산자
ex) let a;
a=a??10 => a=10
2-5. 조건문
-if, else if, else
-switch,default(조건이 많을 때)
2-6. 함수
ex) 직사각형 넓이 구하기 함수
function getArea(width,height) {
let area=width\*height; //함수 선언
console.log(area);
}
getArea(10,20); //함수호출 -전역 변수(외부 선언) -지역 변수(내부 선언)
2-7. 함수 표현식과 화살표 함수 -함수 선언식: 함수가 밑에 있어도 최상단으로 끌어올림(hoisting) -함수 표현식: 함수가 밑에 있어도 위로 끌어올리지 않음, 순서 유의 -화살표 함수: 함수를 더 간단하게 표현하는 방법
2-8. 콜백함수 -다른 함수를 매개변수로 받아서 함수 안에서 호출
2-9. 객체
-Non-primitive -객체 생성자
ex) let person=newObject(); -중괄호(객체 리터럴)
ex) let person={};
ex) let person={
key:"value1";
key1: true;
key2: [1,2]; //boolean, 숫자, 문자 등 다 들어갈 수 있다
}
person.key3="value3"; //추가
person["key4"]="value4"; //추가
delete person["key"]; //제거,메모리는 삭제되지 않음
person.key=null; //제거,메모리도 삭제됨
