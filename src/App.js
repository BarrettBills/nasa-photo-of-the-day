import React, { useState, useEffect } from "react";
import axios from 'axios';

import "./App.css";

import Image from './Components/Details';

function App() {
  const [info, setInfo] = useState()

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY ')
    .then(res => {
      setInfo(res.data);
    })
    .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      { info && <Image photo={info} /> }
    </div>
  );
}

export default App;

