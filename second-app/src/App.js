import React, { useState } from "react";

let init = 0;

const App = () => {
  console.log("리빌드 됨");

  const [num, setNum] = useState(1);

  const increase = () => {
    setNum(num + 2);
  };

  const decrease = () => {
    setNum(num - 2);
  };

  const increase2 = () => {
    console.log("increase2");
    console.log("init 값 : " + init);
    setNum(num + Number(init));
  };

  const decrease2 = () => {
    console.log("decrease2");
    console.log("init 값 : " + init);
    setNum(num - Number(init));
  };

  const numHandle = (e) => {
    console.log(e);
    console.log("numHandle :" + e.target.value);
    init = e.target.value;
  };

  return (
    <div>
      <h1>숫자 : {num}</h1>
      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button>
      <hr />
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <hr />
      <input type="text" onChange={numHandle} />
      <button onClick={increase2}>+</button>
      <button onClick={decrease2}>-</button>
    </div>
  );
};

export default App;
