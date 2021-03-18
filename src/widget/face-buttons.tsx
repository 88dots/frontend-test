import * as React from 'react'
import ABtn from '../prompts/XboxOne_A.png'
import BBtn from '../prompts/XboxOne_B.png'
import XBtn from '../prompts/XboxOne_X.png'
import YBtn from '../prompts/XboxOne_Y.png'
import {BtnImg} from './style'

interface FaceButtonProps {
  aBtn: boolean
  bBtn: boolean
  xBtn: boolean
  yBtn: boolean
}

const FaceButtons: React.FC<FaceButtonProps> = (props) => {
  const {aBtn, bBtn, xBtn, yBtn} = props

  return (
    <div>
      <div>
        <BtnImg
          pressed={xBtn}
          src={XBtn}
        />
        <BtnImg
          pressed={yBtn}
          src={YBtn}
        />
      </div>
      <div>
        <BtnImg
          pressed={aBtn}
          src={ABtn}
        />
        <BtnImg
          pressed={bBtn}
          src={BBtn}
        />
      </div>
    </div>
  )
}

export default FaceButtons
