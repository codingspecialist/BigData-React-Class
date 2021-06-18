import React from 'react';
import { useDispatch } from 'react-redux';
import '../App.css';
import { decrease, increase } from '../store';

const SubBottom = () => {
  const dispatcher = useDispatch();

  return (
    <div className="sub-container">
      <h1>Bottom</h1>
      <button onClick={() => dispatcher(increase())}>증가</button>
      <button onClick={() => dispatcher(decrease())}>감소</button>
    </div>
  );
};

export default SubBottom;
