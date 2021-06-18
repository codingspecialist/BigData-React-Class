import React from 'react';
import { useState } from 'react';
import '../App.css';

// 숫자를 디스플레이
const SubTop = ({ number }) => {
  return (
    <div className="sub-container">
      <h1>SubTop</h1>
      번호 : {number}
    </div>
  );
};

export default SubTop;
