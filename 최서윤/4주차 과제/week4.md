# 2-10. 배열

-object,function과 같이 비원시 자료에 해당  
-동시에 여러개의 데이터 가질 수 있음  
-생성자 이용하기:let arr=new Array();  
-배열 리터럴 이용하기: let arr=[];  
-let arr=[숫자형, 문자열, boolean, undefined, {}, [], function () {}]; -배열 요소 각각에 접근하기 : 인덱스를 통해  
ex) let arr=[1,2,3,4,5];  
 console.log(arr[0]); //1  
 console.log(arr[1]); //2  
 console.log(arr[2]); //3  
 console.log(arr[3]); //4  
 console.log(arr[4]); //5  
 -배열에 요소 추가하기 : arr.push(6); //가장 마지막에 추가됨  
 -배열의 길이 받아오기 : console.log(arr.length); //배열이 바뀌면 자동으로 갱신됨

# 2-11. 반복문

-콘솔 여러번 찍기 vs 반복문 사용하기

## for 반복문

-for (let i=1; i<=100; i++) {  
 console.log("abcde");
}
-(초기식; 조건식; 연산)  
-배열을 순회할 때 유용  
ex) const arr=["a","b","c"];  
 for (let i=0; i<arr.length; i++ ) {  
 console.log(arr[i]);
} //a b c

## 객체 순회

-객체를 배열처럼 순회하기도 가능

# 2-12. 배열 내장 함수

-arr.forEach(elm) : 배열의 모든 요소를 한 번씩 불러옴  
-arr.map(elm)
arr.includes(number) : 배열 안에 number가 있는지 확인 후 true, false 출력  
-arr.indexOf(number) : 배열 안에 number가 있는지 확인 후 주어진 값의 인덱스 반환, 없을 시 -1 반환  
-arr.findIndex(elm) : 콜백함수를 전달하여 해당 콜백함수가 true를 반환하는 첫 번째 요소 인덱스 반환  
-arr.find(elm) : 배열의 요소에 직접적으로 접근  
-arr.filter(elm) :배열을 필터링, true를 반환하는 모든 요소 반환  
-arr.slice(0, 2) : 배열 자르기 , 0번부터 1번까지 자름  
-arr1.concat(arr2) : 배열 붙이기, arr1 뒤에 arr2 붙임  
-arr.sort() : 원본 배열 정렬(문자열 기준 정렬), 숫자의 경우=>sort 함수에 전달할 비교함수 만들기  
-arr.join(" ") : 배열 내 모든 요소를 문자열로 합침, " " 안에 구분 문자 넣기

# 3-1. Truthy & Falsy

-Truthy : True가 아니어도 참으로 분류하는 값들  
-Falsy : False가 아니어도 거짓으로 분류하는 값들 (null, undefined, 0, -0, NaN, "")

# 3-2. 삼항 연산자

-let a=3;  
 a >=0 ? console.log("양수") : console.log("음수");  
-조건식 ? 참일때 수행할 식 : 거짓일때 수행할 식;  
-식 대신 값을 명시할 경우 대입연산자를 이용하여 결과를 값으로 받을 수 있다  
-Truthy 와 Falsy 이용하기 : const result = a ? true : false;  
-삼항 연산자 중첩하여 사용하기 //가독성X, 가급적 if문 사용하기
ex)  
 let score = 100;  
 score >= 90  
 ? console.log("A+")  
 : score>=50  
 ? console.log("B+")  
 : console.log("F");

# 3-3. 단락 회로 평가

-뒤에 위치한 피연산자를 확인할 필요 없이 그냥 연산을 끝내버리는 것  
-|| 연산자 : 앞이 true(truthy)면 바로 연산 끝냄  
-&& 연산자 : 앞이 false(falsy)면 바로 연산 끝냄

# 3-4. 조건문 업그레이드

-조건식이 많아질 때는 입력받은 파라미터가 존재하는지 아닌지 확인하는 방식으로 : if ([].includes())  
-객체 프로퍼티에 접근하는 괄호 표기법

# 3-5. 비구조화 할당

## 배열의 비구조화 할당

-여러 줄의 할당 과정을 한 줄로  
-순서대로 배열의 요소를 변수에 쉽게 할당할 수 있음  
-기본값 설정 : 할당받지 못하는 상황에 변수의 기본값 설정  
-swap : 변수의 값을 서로 바꾸기 //[a, b]=[b, a]

## 객체의 비구조화 할당

-키 값을 기준으로 할당  
-순서 상관 없음

# 3-6. spread 연산자

-중복된 프로퍼티를 계속 작성하지 않아도 됨  
-...객체  
-배열에서도 사용 가능 : [...요소, ...요소]

# 3-7. 동기 & 비동기

## 동기 처리 방식

-코드가 작성된 순서대로 작업 처리, 앞의 작업이 끝날 때까지 기다림 //블로킹 방식  
-문제점 : 작업 처리 시간이 길면 전반적인 흐름이 느려짐  
-해결 : 멀티쓰레드 사용하여 작업 분할 //하지만 자바스크립트는 싱글쓰레드

## 비동기 작업

-싱글쓰레드 방식을 이용하면서 동기 처리 방식의 문제점을 해결하기 위함  
-여러 개의 작업을 동시에 실행시킴  
-먼저 작성된 코드의 결과를 기다리지 않고 다음 코드를 바로 실행함 //논블로킹 방식  
-콜백 함수를 붙여 작업이 정상적으로 처리되었는지, 결과를 확인할 수 있음  
-setTimeout

## JS Engine

-Heap : 메모리 할당  
-Call Stack : 코드 실행  
-Main Context 가 콜스택에 가장 먼저 들어온다  
-콜스택에 차례로 함수를 쌓임  
-종료된 함수는 바로바로 스택에서 빠짐  
-가장 마지막에 호출된 함수가 가장 먼저 종료되고 가장 먼저 제거된다  
-Web APIs : 콜백큐로 이동
-Callback Queue : 이벤트 루프로 다시 콜스택으로 이동할 수 있음  
-콜백 지옥 => promise
