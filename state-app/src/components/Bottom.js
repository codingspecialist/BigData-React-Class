import React from 'react';
import '../App.css';

// 번호 증가 버튼!!
const Bottom = () => {
  const increase = () => {};

  return (
    <div className="sub-container">
      <h1>Bottom</h1>
      <button onClick={increase}>증가</button>
    </div>
  );
};

export default Bottom;
