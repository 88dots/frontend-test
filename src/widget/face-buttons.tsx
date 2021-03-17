import * as React from 'react'
import {Button, Row, Col, Divider} from 'antd'
import ABtn from '../prompts/XboxOne_A.png'
import BBtn from '../prompts/XboxOne_B.png'
import XBtn from '../prompts/XboxOne_X.png'
import YBtn from '../prompts/XboxOne_Y.png'

import styled from 'styled-components'

interface FaceButtonProps {
  aBtn: boolean
  bBtn: boolean
  xBtn: boolean
  yBtn: boolean
}

interface PressedImgProps extends React.ImgHTMLAttributes<any> {
  pressed: boolean
}

const BtnImg = styled.img<PressedImgProps>`
  opacity: ${({pressed}) => pressed ? '1' : 0.5};
  width: 30px;
  height: 30px
`

const FaceButtons: React.FC<FaceButtonProps> = (props) => {
  const {aBtn, bBtn, xBtn, yBtn} = props

  return (
    <div>
      <BtnImg
        pressed={xBtn}
        src={XBtn}
      />
      <BtnImg
        pressed={yBtn}
        src={YBtn}
      />
      <Divider/>
      <BtnImg
        pressed={aBtn}
        src={ABtn}
      />
      <BtnImg
        pressed={bBtn}
        src={BBtn}
      />
      <Divider/>
    </div>
  )
}

export default FaceButtons
