import React from 'react'
import useGamePads from '../lib/hook'
import * as xbox from '../lib/xbox-utils'
import FaceButtons from '../widget/face-buttons'
import DPadButtons from '../widget/dpad-buttons'
import MenuViewButtons from '../widget/menu-view-buttons'
import {
  BtnImg,
  FacebuttonsContainer,
  JoystickContainer,
  MenuButtonsContainer,
  SpaceBetweenRow,
  TopControllerRow,
  TriggerBtnImg,
  TriggerBumpersContainer
} from './style'
import LeftTriggerBtn from '../prompts/XboxOne_LT.png'
import RightTriggerBtn from '../prompts/XboxOne_RT.png'
import LeftBumperBtn from '../prompts/XboxOne_LB.png'
import RightBumperBtn from '../prompts/XboxOne_RB.png'
import JoyStick from '../widget/joy-stick'
import LeftJoyStickImg from '../prompts/XboxOne_Left_Stick.png'
import RightJoyStickImg from '../prompts/XboxOne_Right_Stick.png'

import 'antd/dist/antd.dark.css'

interface ControllerWidgetProps {
  gamepadInd: number
}

const XboxWidget: React.FC<ControllerWidgetProps> = ({gamepadInd}) => {
  const [aBtn, setABtn] = React.useState<boolean>(false)
  const [bBtn, setBbtn] = React.useState<boolean>(false)
  const [xBtn, setXbtn] = React.useState<boolean>(false)
  const [yBtn, setYbtn] = React.useState<boolean>(false)

  const [windowsBtn, setWindowsBtn] = React.useState<boolean>(false)
  const [menuBtn, setMenuBtn] = React.useState<boolean>(false)

  const [dPadUp, setDpadUp] = React.useState<boolean>(false)
  const [dPadDown, setDpadDown] = React.useState<boolean>(false)
  const [dPadLeft, setDpadLeft] = React.useState<boolean>(false)
  const [dPadRight, setDpadRight] = React.useState<boolean>(false)

  const [leftTrigger, setLeftTrigger] = React.useState<number>(0)
  const [rightTrigger, setRightTrigger] = React.useState<number>(0)

  const [leftBumper, setLeftBumper] = React.useState<boolean>(false)
  const [rightBumper, setRightBumper] = React.useState<boolean>(false)

  useGamePads(gamepads => {
    const maybeXboxGamePad = gamepads[gamepadInd]
    if (maybeXboxGamePad) {
      const currentAButton = xbox.button(maybeXboxGamePad, 'A').pressed
      const currentBButton = xbox.button(maybeXboxGamePad, 'B').pressed
      const currentXButton = xbox.button(maybeXboxGamePad, 'X').pressed
      const currentYButton = xbox.button(maybeXboxGamePad, 'Y').pressed

      const currentDpadUp = xbox.button(maybeXboxGamePad, 'DPad-Up').pressed
      const currentDpadDown = xbox.button(maybeXboxGamePad, 'DPad-Down').pressed
      const currentDpadLeft = xbox.button(maybeXboxGamePad, 'DPad-Left').pressed
      const currentDpadRight = xbox.button(maybeXboxGamePad, 'DPad-Right').pressed

      const currentWindows = xbox.button(maybeXboxGamePad, 'Windows').pressed
      const currentMenu = xbox.button(maybeXboxGamePad, 'Menu').pressed

      const currentLeftTrigger = xbox.button(maybeXboxGamePad, 'L-Trigger').value
      const currentRightTrigger = xbox.button(maybeXboxGamePad, 'R-Trigger').value

      const currentLeftBumper = xbox.button(maybeXboxGamePad, 'L-Bumper').pressed
      const currentRightBumper = xbox.button(maybeXboxGamePad, 'R-Bumper').pressed

      if (currentDpadUp !== dPadUp) setDpadUp(currentDpadUp)
      if (currentDpadDown !== dPadDown) setDpadDown(currentDpadDown)
      if (currentDpadLeft !== dPadLeft) setDpadLeft(currentDpadLeft)
      if (currentDpadRight !== dPadRight) setDpadRight(currentDpadRight)

      if (currentWindows !== windowsBtn) setWindowsBtn(currentWindows)
      if (currentMenu !== menuBtn) setMenuBtn(currentMenu)

      if (currentAButton !== aBtn) setABtn(currentAButton)
      if (currentBButton !== bBtn) setBbtn(currentBButton)
      if (currentXButton !== xBtn) setXbtn(currentXButton)
      if (currentYButton !== yBtn) setYbtn(currentYButton)

      if (currentLeftTrigger !== leftTrigger) setLeftTrigger(currentLeftTrigger)
      if (currentRightTrigger !== rightTrigger) setRightTrigger(currentRightTrigger)

      if (currentLeftBumper !== leftBumper) setLeftBumper(currentLeftBumper)
      if (currentRightBumper !== rightBumper) setRightBumper(currentRightBumper)
    }
  })

  return (
    <div>
      <TopControllerRow>
        <TriggerBumpersContainer>
          <TriggerBtnImg
            src={LeftTriggerBtn}
            pressed={leftTrigger}
          />
          <BtnImg
            src={LeftBumperBtn}
            pressed={leftBumper}
          />
        </TriggerBumpersContainer>
        <MenuButtonsContainer>
          <MenuViewButtons
            windows={windowsBtn}
            menu={menuBtn}
          />
        </MenuButtonsContainer>
        <TriggerBumpersContainer>
          <TriggerBtnImg
            src={RightTriggerBtn}
            pressed={rightTrigger}
          />
          <BtnImg
            src={RightBumperBtn}
            pressed={rightBumper}
          />
        </TriggerBumpersContainer>
      </TopControllerRow>
      <SpaceBetweenRow>
        <JoystickContainer>
          <JoyStick
            direction="L-Joy"
            src={LeftJoyStickImg}
          />
        </JoystickContainer>
        <FacebuttonsContainer>
          <FaceButtons
            aBtn={aBtn}
            bBtn={bBtn}
            xBtn={xBtn}
            yBtn={yBtn}
          />
        </FacebuttonsContainer>
      </SpaceBetweenRow>
      <SpaceBetweenRow>
        <DPadButtons
          up={dPadUp}
          down={dPadDown}
          left={dPadLeft}
          right={dPadRight}
        />
        <JoystickContainer>
          <JoyStick
            direction="R-Joy"
            src={RightJoyStickImg}
          />
        </JoystickContainer>
      </SpaceBetweenRow>

    </div>
  )
}

export default XboxWidget
