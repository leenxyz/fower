import React from 'react'
import { View } from '@styli/react'
import { useState } from 'react'

export default () => {
  const [r, setR] = useState(25)
  const [rt, setRT] = useState(25)
  const [rb, setRB] = useState(25)
  const [rl, setRL] = useState(25)
  const [rr, setRR] = useState(25)

  const [rtl, setRTL] = useState(25)
  const [rtr, setRTR] = useState(25)
  const [rbl, setRBL] = useState(25)
  const [rbr, setRBR] = useState(25)

  return (
    <View>
      <View row wrap between white>
        {/* rounded */}
        <View s-100 bgBlue100 m-20>
          <View s-100 rounded={r} bgBlue300 center>
            rounded-{r}
          </View>
        </View>

        {/* roundedT */}
        <View s-100 bgBlue100 m-20>
          <View s-100 roundedT={rt} bgBlue300 center>
            roundedT-{rt}
          </View>
        </View>

        {/* roundedR */}
        <View s-100 bgBlue100 m-20>
          <View s-100 roundedR={rr} bgBlue300 center>
            roundedR-{rr}
          </View>
        </View>

        {/* roundedB */}
        <View s-100 bgBlue100 m-20>
          <View s-100 roundedB={rb} bgBlue300 center>
            roundedB-{rb}
          </View>
        </View>

        {/* roundedL */}
        <View s-100 bgBlue100 m-20>
          <View s-100 roundedL={rl} bgBlue300 center>
            roundedL-{rl}
          </View>
        </View>

        {/* roundedTL */}
        <View s-100 bgBlue100 m-20>
          <View s-100 roundedTL={rtl} bgBlue300 center>
            roundedTL-{rtl}
          </View>
        </View>

        {/* roundedTR */}
        <View s-100 bgBlue100 m-20>
          <View s-100 roundedTR={rtr} bgBlue300 center>
            roundedTR-{rtr}
          </View>
        </View>

        {/* roundedBL */}
        <View s-100 bgBlue100 m-20>
          <View s-100 roundedBL={rbl} bgBlue300 center>
            roundedBL-{rbl}
          </View>
        </View>

        {/* roundedBL */}
        <View s-100 bgBlue100 m-20>
          <View s-100 roundedBR={rbr} bgBlue300 center>
            roundedBR-{rbr}
          </View>
        </View>
      </View>

      <View row centerY my-20>
        <View mr-20>Round Value: </View>
        <input type="range" value={r} max="50" min="0" onChange={(e) => { setR(+e.target.value) }} />
        <View>{r}</View>
      </View>

      <View between wrap>
        <View row centerY my-20>
          <View mr-20>Round Top Value: </View>
          <input type="range" value={rt} max="50" min="0" onChange={(e) => { setRT(+e.target.value) }} />
          <View>{rt}</View>
        </View>

        <View row centerY my-20>
          <View mr-20>Round Right Value: </View>
          <input type="range" value={rr} max="50" min="0" onChange={(e) => { setRR(+e.target.value) }} />
          <View>{rr}</View>
        </View>

        <View row centerY my-20>
          <View mr-20>Round Bottom Value: </View>
          <input type="range" value={rb} max="50" min="0" onChange={(e) => { setRB(+e.target.value) }} />
          <View>{rb}</View>
        </View>

        <View row centerY my-20>
          <View mr-20>Round Left Value: </View>
          <input type="range" value={rl} max="50" min="0" onChange={(e) => { setRL(+e.target.value) }} />
          <View>{rl}</View>
        </View>

        <View row centerY my-20>
          <View mr-20>Round Top Left Value: </View>
          <input type="range" value={rtl} max="50" min="0" onChange={(e) => { setRTL(+e.target.value) }} />
          <View>{rtl}</View>
        </View>

        <View row centerY my-20>
          <View mr-20>Round Top Right Value: </View>
          <input type="range" value={rtr} max="50" min="0" onChange={(e) => { setRTR(+e.target.value) }} />
          <View>{rtr}</View>
        </View>

        <View row centerY my-20>
          <View mr-20>Round Bottom Left Value: </View>
          <input type="range" value={rbl} max="50" min="0" onChange={(e) => { setRBL(+e.target.value) }} />
          <View>{rbl}</View>
        </View>

        <View row centerY my-20>
          <View mr-20>Round Top Left Value: </View>
          <input type="range" value={rbr} max="50" min="0" onChange={(e) => { setRBR(+e.target.value) }} />
          <View>{rbr}</View>
        </View>
      </View>

    </View>
  )
}
