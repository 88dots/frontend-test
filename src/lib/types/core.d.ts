type GamepadsConnectedRef = {
  [ind: number]: Gamepad
}

type UseGamePadCallback = (s: GamepadsConnectedRef) => any
