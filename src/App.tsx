import React from 'react';
import logo from './logo.svg';
import './App.css';
import {AppContainer} from "./styles";
import useGamePads from "./lib/hook";

const App: React.FC = () => {
  const [aBtn, setABtn] = React.useState<boolean>(false)
  useGamePads(gamepads => {
    const nextABtn = gamepads[2]?.buttons[0].pressed
    if(nextABtn !== undefined && nextABtn !== aBtn) setABtn(nextABtn)
  })
  return (
    <AppContainer>
      {aBtn ? 'Pressed' : 'Not Pressed'}
    </AppContainer>
  )
}

export default App
