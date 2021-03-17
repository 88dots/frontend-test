import React from 'react'
import logo from './logo.svg'
import './App.css'
import {AppContainer} from './styles'
import useGamePads from './lib/hook'
import * as xbox from './lib/xbox-utils'
import FaceButtons from './widget/face-buttons'

const App: React.FC = () => {
  const [aBtn, setABtn] = React.useState<boolean>(false)
  const [bBtn, setBbtn] = React.useState<boolean>(false)
  const [xBtn, setXbtn] = React.useState<boolean>(false)
  const [yBtn, setYbtn] = React.useState<boolean>(false)

  useGamePads(gamepads => {
    const currentAButton = gamepads[2] && xbox.button(gamepads[2], 'A').pressed
    const currentBButton = gamepads[2] && xbox.button(gamepads[2], 'B').pressed
    const currentXButton = gamepads[2] && xbox.button(gamepads[2], 'X').pressed
    const currentYButton = gamepads[2] && xbox.button(gamepads[2], 'Y').pressed

    if (currentAButton !== undefined && currentAButton !== aBtn) setABtn(currentAButton)
    if (currentBButton !== undefined && currentBButton !== bBtn) setBbtn(currentBButton)
    if (currentXButton !== undefined && currentXButton !== xBtn) setXbtn(currentXButton)
    if (currentYButton !== undefined && currentYButton !== yBtn) setYbtn(currentYButton)
  })

  return (
    <AppContainer>
      <FaceButtons
        aBtn={aBtn}
        bBtn={bBtn}
        xBtn={xBtn}
        yBtn={yBtn}
      />
    </AppContainer>
  )
}

export default App
