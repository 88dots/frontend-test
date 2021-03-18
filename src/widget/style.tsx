import * as React from 'react'
import styled from 'styled-components'

export interface BtnImgProps extends React.ImgHTMLAttributes<any> {
  pressed: boolean
  size?: 'small' | 'large'
}

export interface TriggerBtnImgProps extends React.ImgHTMLAttributes<any> {
  pressed: number
  size?: 'small' | 'large'
}

export const TriggerBtnImg = styled.img<TriggerBtnImgProps>`
  opacity: ${({pressed}) => Math.max(0.08, pressed) };
  width: ${({size}) => size === 'large' ? '60px' : '30px'};
  height: ${({size}) => size === 'large' ? '60px' : '30px'}
`

export const BtnImg = styled.img<BtnImgProps>`
  opacity: ${({pressed}) => pressed ? '1' : 0.5};
  width: ${({size}) => size === 'large' ? '60px' : '30px'};
  height: ${({size}) => size === 'large' ? '60px' : '30px'}
`

export const JoyStickBtnContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 1px solid #212327;
  background: #3b3d41;
  position: relative;
`

export const JoyStickImg = styled(BtnImg)`
  position: absolute;
`

export const SpaceBetweenRow = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-between;
`

export const TopControllerRow = styled.div`
  width: 180px;
  display: flex;
`

export const TriggerBumpersContainer = styled.div`
  max-width: 30px;
`

export const MenuButtonsContainer = styled.div`
  max-width: 60px;
  margin-left: 30px;
  margin-right: 30px;
`

export const JoystickContainer = styled.div`
  max-width: fit-content;
`

export const FacebuttonsContainer = styled.div`
  max-width: 60px;
`
