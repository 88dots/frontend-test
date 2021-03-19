import * as React from 'react'
import ABtn from '../prompts/XboxOne_A.png'
import BBtn from '../prompts/XboxOne_B.png'
import XBtn from '../prompts/XboxOne_X.png'
import YBtn from '../prompts/XboxOne_Y.png'
import {BtnImg} from './style'
import styled from 'styled-components'

interface FaceButtonProps {
  aBtn: boolean
  bBtn: boolean
  xBtn: boolean
  yBtn: boolean
}

const FaceButtonsDiamondContainer = styled.div`
  transform: rotate(-45deg);
`

const FaceButtonImg = styled(BtnImg)`
  transform: rotate(45deg);
`

const FaceButtons: React.FC<FaceButtonProps> = (props) => {
  const {aBtn, bBtn, xBtn, yBtn} = props

  return (
    <FaceButtonsDiamondContainer>
      <div>
        <FaceButtonImg
          pressed={xBtn}
          src={XBtn}
        />
        <FaceButtonImg
          pressed={yBtn}
          src={YBtn}
        />
      </div>
      <div>
        <FaceButtonImg
          pressed={aBtn}
          src={ABtn}
        />
        <FaceButtonImg
          pressed={bBtn}
          src={BBtn}
        />
      </div>
    </FaceButtonsDiamondContainer>
  )
}

export default FaceButtons
