#promise
->콜백문제 해결
resolve:성공 reject:실패
function isPositiveP(number) {
    const executor =(resolve, reject)=>{
        setTimeout(()=>{
            if (typeof number ==="number"){
                resolve (number >=0 ? "양수":"음수");
            }else{
                reject("주어진 값이 숫자형 값이 아닙니다");
            }
        },2000);
    };
    const asyncTask =new Promise(executor); 
    return asyncTask;
}
const res=isPositive(101);
res
.then((res)=>{
    console.log("작업성공:",res);
})
.catch((err)=>{
    console.log("작업실패:",err);
});

taskA(5,1).then((a_res)=>{
    console.log("A RESULT :",a_res);
    return taskB(a_res);
}).then((b_res)=>{
    comsole.log("B RESULT:",b-res);
});

#async 
async function helloAsync(){
    await delay(3000);
    return "hello Async";
}
#api
데이터요청->데이터검색->데이터찾기->요청데이터전달
let response =fetch (링크).then((res)=>console.log(res)); //포장지처럼 데이터가 출력
제이슨값
async function getData(){
    let rawResponse=await fetch(링크);
    let jsonResponse=await rawResponse.json();
    console.log(jsonResponse);
}

#node js
자바스크립트를 어디에서든 실행 가능
module exports={
    moduleName:"calc module",
    add:add,
    sub:sub,
};
const calc=require("./calc");
console.log(calc);