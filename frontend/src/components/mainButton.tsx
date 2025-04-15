import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import "./App.css";

function clickMe() {
    alert("Oww!");
  }

export function MainButton()
{ 
    return (
    <div className = "screen-centering">
        <button className = "text-white rounded-full w-36 h-36 bg-indigo-500 shadow-lg shadow-indigo-500/50" 
        onClick={clickMe}>
        Click Me!
        </button>
    </div>
    );
}