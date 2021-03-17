// binary (true | false)
type XBoxAbxyBtns = 'A' | 'B' | 'X' | 'Y'
type XBoxDPadBtns = 'DPad-Up' | 'DPad-Right' | 'DPad-Down' | 'DPad-Left'
type XboxBumperBtns = 'L-Bumper' | 'R-Bumper'
type XboxSysBtns = 'View' | 'Menu'
// Axes
type XboxTriggers = 'L-Trigger' | 'R-Trigger'
type XboxJoySticks = 'L-Joy' | 'R-Joy'

type XboxBtnName =
  XBoxAbxyBtns
  | XBoxDPadBtns
  | XboxBumperBtns
  | XboxSysBtns
  | XboxTriggers
  | XboxJoySticks
