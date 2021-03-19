/*
 * Helper functions for fetching XBox One controller gamepad props.
 * Same idea would apply for others (dualshock, joycon, etc...)
 */

const assertNever = (x: never): never => {
  throw new Error(`Unexpected value '${x}'. Should have been never.`);
}

/**
 * Return the GamepadButton object associated with the btnName value
 * @param gamepad
 * The gamepad object
 * @param btnName
 * The name of the target button ex. A, X, Y, ...
 */
export const button = (gamepad: Gamepad, btnName: XboxBtnName): GamepadButton  => {
  switch (btnName) {
    case 'A':
      return gamepad.buttons[0]
    case 'B':
      return gamepad.buttons[1]
    case 'X':
      return gamepad.buttons[2]
    case 'Y':
      return gamepad.buttons[3]
    case 'L-Bumper':
      return gamepad.buttons[4]
    case 'R-Bumper':
      return gamepad.buttons[5]
    case 'L-Trigger':
      return gamepad.buttons[6]
    case 'R-Trigger':
      return gamepad.buttons[7]
    case 'Windows':
      return gamepad.buttons[8]
    case 'Menu':
      return gamepad.buttons[9]
    case 'L-Joy':
      return gamepad.buttons[10]
    case 'R-Joy':
      return gamepad.buttons[11]
    case 'DPad-Up':
      return gamepad.buttons[12]
    case 'DPad-Right':
      return gamepad.buttons[15]
    case 'DPad-Left':
      return gamepad.buttons[14]
    case 'DPad-Down':
      return gamepad.buttons[13]
    default:
      return assertNever(btnName)
  }
}

export const axesVertical = (gamepad: Gamepad, axesName: XboxJoySticks): number => {
  switch (axesName) {
    case 'L-Joy':
      return gamepad.axes[1]
    case 'R-Joy':
      return gamepad.axes[3]
  }
}

export const axesHorizontal = (gamepad: Gamepad, axesName: XboxJoySticks): number => {
  switch (axesName) {
    case 'L-Joy':
      return gamepad.axes[0]
    case 'R-Joy':
      return gamepad.axes[2]
  }
}


