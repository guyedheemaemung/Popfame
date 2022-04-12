import './App.scss';

import notpop from './img/1.jpg';
import pop from './img/2.jpg';
import { useState } from 'react';

import $ from "jquery";
// import useSound from 'use-sound';
// import pathsound from './sound/pop.mp3';

function App() {
  //play sound function
  // function playSound(sound: string) {
  //   var audio = new Audio(sound);
  //   audio.play();
  // }

  const ValuefromCookie = () => {
    const cookie:string[] = document.cookie.split('clicked=');
    const totalValue:number = parseInt(cookie[1]);
    console.log(cookie);
    console.log(totalValue);
    return totalValue;
  }
  
  const [clicked , addclick] = useState (ValuefromCookie());
  // const [clicked , addclick] = useState (0);

  const click = () => {
    // playSound('./sound/pop.mp3');
    addclick(clicked + 1);
    document.cookie = "clicked=" + (clicked + 1);
    $("#fame").css("display", "none");
    $("#famepop").css("display", "block");
    // console.log("test");
  }
  const notclick = () => {
    $("#famepop").css("display", "none");
    $("#fame").css("display", "block");
  }

  return (
    <div className="App">
      <h1 className='title'>KRU FAME</h1>
      <h1 className='number title'>{clicked}</h1>
      <div id='clickarea' onMouseDown={click} onMouseUp={notclick}>
        <img className='fame' id='fame' src={notpop} alt="notpop"/>
        <img className='famepop' id='famepop' src={pop} alt="pop"/>
      </div>
    </div>
  );
}

export default App;
