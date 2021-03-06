import React from 'react';
import '../App.css';
import SubBottom from './SubBottom';

// 번호 증가 버튼!!
const Bottom = ({ increase }) => {
  // const id = props.id;
  // const name = props.name;
  // const increase = props.increase;

  // 구조 분할 할당
  //const { increase } = props;

  return (
    <div className="sub-container">
      <h1>Bottom</h1>
      <SubBottom increase={increase} />
    </div>
  );
};

export default Bottom;
