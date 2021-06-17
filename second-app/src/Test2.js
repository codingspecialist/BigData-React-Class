import React, { useState } from "react";

// 클래스형 컴포넌트 => 함수형 => hooks => 리덕스(Rx) => Mobx(Rx)

// 일반 함수
// 화살표 함수 (람다)
// 함수 이름
function Test2() {
  const [num, setNum] = useState(1);

  let count = 1;

  // 함수 생성 방법 = 기본 함수
  function add() {
    count++;
    console.log(count);

    setNum(num + 1);
    console.log(num);
  }

  // 함수 생성 방법 = 기본 함수
  const increase = () => {};

  return (
    <div>
      <h1>
        num : {num} count : {count}
      </h1>
      <button onClick={function () {}}>+</button> <br />
      <button onClick={() => {}}>+</button> <br />
      <button onClick={add}>+</button> <br />
      <button
        onClick={() => {
          return add();
        }}
      >
        +
      </button>
      <br />
      <button onClick={increase}>+</button> <br />
    </div>
  );
}

export default Test2;
