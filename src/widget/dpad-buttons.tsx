import * as React from 'react'

import DPadBase from '../prompts/XboxOne_Dpad.png'
import DPadUp from '../prompts/XboxOne_Dpad_Up.png'
import DPadDown from '../prompts/XboxOne_Dpad_Down.png'
import DPadLeft from '../prompts/XboxOne_Dpad_Left.png'
import DPadRight from '../prompts/XboxOne_Dpad_Right.png'
import {BtnImg} from './style'

interface DPadButtonsProps {
  up: boolean
  down: boolean
  left: boolean
  right: boolean
}

const DPadButtons: React.FC<DPadButtonsProps> = (props) => {
  const {up, down, left, right} = props
  const isPressed = up || down || left || right
  return (
    <>
      {!isPressed && <BtnImg size="large" pressed={false} src={DPadBase}/>}
      {up && <BtnImg size="large" pressed={up} src={DPadUp}/>}
      {down && <BtnImg size="large" pressed={down} src={DPadDown}/>}
      {left && <BtnImg size="large" pressed={left} src={DPadLeft}/>}
      {right && <BtnImg size="large" pressed={right} src={DPadRight}/>}
    </>
  )
}

export default DPadButtons
