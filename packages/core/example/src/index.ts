import { colors } from './colors'
import bg from './bg'

export const presetDefault: any = {
  plugins: [bg()],
  unit: 'px',
  theme: {
    colors,
  },
}

export default presetDefault
