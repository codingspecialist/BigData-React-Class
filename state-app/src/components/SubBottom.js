import React from 'react';
import '../App.css';

// 번호 증가 버튼!!
const SubBottom = ({ increase }) => {
  // const id = props.id;
  // const name = props.name;
  // const increase = props.increase;

  // 구조 분할 할당
  //const { increase } = props;

  return (
    <div className="sub-container">
      <h1>Bottom</h1>
      <button onClick={increase}>증가</button>
    </div>
  );
};

export default SubBottom;
