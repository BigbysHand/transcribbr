//import logo from './logo.svg';
import './App.css';
import React from 'react';

import HelloWorld from './HelloWorld';
import { MainButton } from './components/mainButton';
import { Hamburger } from './components/nav/hamburger';

function test()
{
}

function App() {
  return (
    <div className='m-2'>
      <Hamburger onClick={test}/>
      <div className= "screen-centering">
        <MainButton/>
      </div>
    </div>
    
    
  );
}

export default App;
