import * as React from 'react'

const useGamePads = (onChangeGamePad: UseGamePadCallback) => {
  const allGamePads = React.useRef<GamepadsConnectedRef>({})
  const requestAnimationRef = React.useRef<number>()

  const hasEvents = 'ongamepadconnected' in window

  const addGamePad = (gamepad: Gamepad) => {
    allGamePads.current = {
      ...allGamePads.current,
      [gamepad.index]: gamepad
    }
    onChangeGamePad(allGamePads.current)
  }

  const onConnectGamePad = (e: GamepadEvent) => addGamePad(e.gamepad)

  const scanAllGamePads = () => {
    const detectedGamepads = navigator.getGamepads()
    for (let i = 0; i < detectedGamepads.length; i++) {
      const gamepadAtInd = detectedGamepads[i]
      gamepadAtInd && addGamePad(gamepadAtInd)
    }
  }

  React.useEffect(() => {
    window.addEventListener('gamepadconnected', onConnectGamePad)
    return () => window.removeEventListener('gamepadconnected', onConnectGamePad)
  })

  const animate: FrameRequestCallback = (time) => {
    if (!hasEvents) scanAllGamePads()
    requestAnimationRef.current = requestAnimationFrame(animate)
  }

  React.useEffect(() => {
    requestAnimationRef.current = requestAnimationFrame(animate)
    return () => {
      const currentTickerValue = requestAnimationRef.current
      currentTickerValue && cancelAnimationFrame(currentTickerValue)
    }
  })

  return allGamePads.current
}

export default useGamePads
