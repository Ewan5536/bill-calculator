import React from 'react';
import Gas from './Gas';
import './App.css';
import Electricity from './Electricity';

function App() {
  return(
  <div>
    <div className='header'><h1>BILL CALCULATOR</h1>
    </div>
    <div className='flexitems'>
      <Gas currentUnit={0}></Gas>
      <Electricity current={0}></Electricity>
    </div>
    </div>
  );
}

export default App;
