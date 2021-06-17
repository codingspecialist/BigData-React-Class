import Top from './components/Top';
import Bottom from './components/Bottom';
import './App.css';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(1);

  return (
    <div className="container">
      <h1>최상단 화면</h1>
      <Top number={number} />
      <Bottom />
    </div>
  );
}

export default App;
