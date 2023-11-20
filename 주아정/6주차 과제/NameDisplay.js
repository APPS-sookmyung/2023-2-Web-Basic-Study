import React from "react";

const NameDisplay = (props) => {
  return <p>이름: {props.name}</p>;
};

// 부모 컴포넌트
const App = () => {
  return (
    <div>
      <h1>사용자 정보</h1>
      <NameDisplay name="주아정" />
    </div>
  );
};

export default App;
