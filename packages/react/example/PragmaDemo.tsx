/** @jsx jsx */

import { jsx } from '../src'

export const Demo = () => {
  return (
    <div p-40 bgYellow200>
      <div gray>Inner</div>
    </div>
  )
}

export const PragmaDemo = () => {
  return (
    <div p={40} className="box" bgGreen200>
      <div gray>Outer</div>
      <Demo></Demo>
    </div>
  )
}
