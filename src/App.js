import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.alert("안녕!")
  })
  return (
    <div className="App">
      <div>음식</div>
      <ul>
        <li>햄버거</li>
        <li>핫도그</li>
        <li>피자</li>
        <li>치킨</li>
        <li>짜장면</li>
        <li>라면</li>
      </ul>
    </div>
  );
}

export default App;
