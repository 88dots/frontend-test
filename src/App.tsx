import React from 'react'
import {AppContainer} from './styles'

import 'antd/dist/antd.dark.css'
import XboxWidget from './widget/xbox-debug-widget'

// todo: add dropdown to allow selecting available supported gamepads.
// Demo app hosted on localhost:3000.
// Change gamepadInd to index of xbox controller on your local machine
const App: React.FC = () => {
  return (
    <AppContainer>
      <XboxWidget gamepadInd={0}/>
    </AppContainer>
  )
}

export default App
