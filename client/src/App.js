import React from 'react';
import useDarkMode from "./hooks/useDarkMode";
import useLocalStorage from "./hooks/useLocalStorage";
import {Button} from 'semantic-ui-react';

import './App.css';
import SoccerClassComponent from "./components/SoccerClassComponent";

function App() {

  const [darkMode, setDarkMode] = useDarkMode(false);
  const [buttonState, setButtonState] = useLocalStorage("key", darkMode);
  const handleClick = () =>{
    setButtonState(!buttonState)
    setDarkMode(!darkMode);
  }

  return (
    <div className="App">
      <h1>Women's World Cup</h1>
      <Button onClick={() => handleClick()}>Dark Mode</Button>
      <SoccerClassComponent/>
    </div>
  );
}

export default App;
