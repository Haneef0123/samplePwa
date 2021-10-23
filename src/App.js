import React from 'react';
import HeroList from './hero-list/hero-list';
import HeroInsert from './hero-insert/hero-insert';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <button>Click Me</button> */}
      <h1>RxDB Example - React</h1>
            <HeroList/>
            <HeroInsert/>
    </div>
  );
}

export default App;
