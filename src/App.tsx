import React from 'react'
import './App.css'
import {AppContainer} from './styles'

import 'antd/dist/antd.dark.css'
import XboxWidget from './widget/xbox-debug-widget'

// Demo app hosted on localhost:3000. Change gamepadInd to index of xbox controller
const App: React.FC = () => {
  return (
    <AppContainer>
      <XboxWidget gamepadInd={2}/>
    </AppContainer>
  )
}

export default App
