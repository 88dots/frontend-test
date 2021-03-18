import * as React from 'react'

import {JoyStickBtnContainer, JoyStickImg} from './style'
import useGamePads from '../lib/hook'
import * as xbox from '../lib/xbox-utils'

interface JoyStickProps {
  gamepadInd: number
  direction: XboxJoySticks
  src: React.ImgHTMLAttributes<any>['src']
}

const JoyStick: React.FC<JoyStickProps> = ({gamepadInd, direction, src}) => {
  const [verticalL, setVerticalL] = React.useState<number>(0)
  const [horizontalL, setHorizontalL] = React.useState<number>(0)

  useGamePads(gamepads => {
    const maybeXboxGamePad = gamepads[gamepadInd]
    if (maybeXboxGamePad) {
      const nextVerticalL = xbox.axesVertical(maybeXboxGamePad, direction)
      const nextHorizontalL = xbox.axesHorizontal(maybeXboxGamePad, direction)

      if (nextVerticalL !== verticalL) setVerticalL(nextVerticalL)
      if (nextHorizontalL !== horizontalL) setHorizontalL(nextHorizontalL)
    }
  })

  return (
    <JoyStickBtnContainer>
      <JoyStickImg
        src={src}
        pressed={true}
        style={{
          top: ((15 * (1 + verticalL)) - 5) + 'px',
          left: ((15 * (1 + horizontalL)) - 5) + 'px'
        }}
      />
    </JoyStickBtnContainer>
  )
}

export default JoyStick
