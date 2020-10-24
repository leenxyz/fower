import hash from 'string-hash'
import { memorize } from '../../utils'

export const generateClassName = memorize((key: string) => `styli-${hash(key)}`)
