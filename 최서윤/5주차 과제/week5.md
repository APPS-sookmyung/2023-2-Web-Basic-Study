# 3-8. promise

-promise 객체 : 자바스크립트의 비동기를 돕는 객체  
-비동기 작업이 가질 수 있는 3가지 상태  
 -pending (대기 상태)  
 -fulfilled (성공)  
 -rejected (실패)  
-pending -> fulfilled : resolve (해결)  
-pending -> reject : rejected (거부)  
-const 상수 = new Promise(생성자)  
-then 메서드

# 3-9. async / await | 직관적인 비동기 처리

-async : promise를 리턴하는 비동기 처리 함수로 만든다  
-await : 비동기 함수가 동기적인 함수처럼 작동하게 함.

# 3-10. API 호출하기

## API

-응용 프로그램 프로그래밍 인터페이스  
-음식 주문 -> 찾기 -> 가져오기-> 음식 서빙 //손님, 웨이터, 냉장고  
-request -> query -> query result -> response //browser(client), server, database -손님(client) : 웹브라우저로 데이터를 요청  
-서버(server) : 요청받은 데이터를 전달  
-냉장고(database) : 데이터 보관  
-데이터 요청(request) : 웨이터에게 음식을 주문  
-데이터 검색(query) : 웨이터가 냉장고에서 재료를 찾음  
-데이터 찾기(query result)  
-요청 데이터 전달(response) : 웨이터가 음식을 손님에게 전달 -데이터 요청, 요청 데이터 전달 : API 호출

# 4-1. Node.js란

-Node.js : 자바스크립트의 실행환경 / 자바스크립트를 브라우저가 아닌 곳에서도 실행시킬 수 있음(javascript's runtime)  
-자바스크립트로 웹서버 개발 가능  
-웹 서버 : 웹을 반환하는 서버  
-url : 웹서버의 주소

# 4-3. Node.js 기초

-GUI : Graphic User Interface  
-CLI : Command Line Interface

# 4-4. 프로젝트 & npm

-npm : node package manager(node.js의 패키지 관리 도구)
