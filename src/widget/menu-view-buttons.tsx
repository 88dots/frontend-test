import * as React from 'react'
import MenuBtn from '../prompts/XboxOne_Menu.png'
import WindowsBtn from '../prompts/XboxOne_Windows.png'
import {BtnImg} from './style'

interface MenuViewButtonsProps {
  windows: boolean
  menu: boolean
}

const MenuViewButtons: React.FC<MenuViewButtonsProps> = (props) => {
  const {windows, menu} = props

  return (
    <div>
      <BtnImg
        pressed={windows}
        src={WindowsBtn}
      />
      <BtnImg
        pressed={menu}
        src={MenuBtn}
      />
    </div>
  )
}

export default MenuViewButtons
