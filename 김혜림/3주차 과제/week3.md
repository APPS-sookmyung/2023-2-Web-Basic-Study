자바 스크립트:웹페이지에 사용되는 언어(사파리,크롬,앳지...)

변수 만들기 (기호x($_제외),문자로 시작,예약어x)
let____;
var____; (중복 사용 가능)

출력
console.log();

상수만들기
const___; (선언 이후 변경x)

원시타입 자료형:한번에 하나의 값만 가질 수 있음 하나의 고정된 저장공간 이용
-숫자 -문자열 -boolean -null -undefine
숫자*문자열 도 계산이 됨(자바 스크립트의 묵시적 형변환)
숫자+문자열 이 계산이 되려면->parseInt(문자열)

연산자
대입
산술
연결 (문자열 "1"+문자열 "2"=12)
복합 (산술+대입 ex.a+=10;)
증감 (++,--) 전위/후위
논리 (!,&&,||)
비교 (== !=:값만 비교 === !==:자료형도 비교)
typeof
null병합 (변수 선언 후 할당x->undefine 할당)

조건문
if(){

}else if(){

}else(){

}

switch(){
    case:
    ____;
    break;
    default:
    ____;
    break;
}

함수
function 함수명(){

} 
함수명(); //함수 호출

함수표현식
let helloA=function(){
    return __;
}
함수선언식:코드 최상단으로 여겨짐->위치 상관x
function helloB(){
    return ___;
}

화살표함수
let helloA=()=>"_"

콜백함수
function 함수명(__,a함수,b함수){
    if()
    a함수();
    else()
    b함수();
}

함수 내부에서 return->반환값을 변수에 할당
             선언->밖에서는 사용 x
    외부에서     ->안에서 사용 ㅇ

객체:비원시타입

let __=new~~~(); //생성자
let person={     //리터럴
    key:"value",  //프로퍼티
    key1:"value1"
}; 

console.log(person.key1);
console.log(person[key1]);

person.key2="value3"; //추가
person["key3"]="value4";

delete person["key"];
person.key=null;

객체 안에 함수 있는 것도 가능
say:function(){
    console.log('나는 ${person["key1]});
}
person ["say"]();
in____