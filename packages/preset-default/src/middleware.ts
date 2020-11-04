import { Middleware } from '@styli/core'
import pseudo from 'styli-middleware-pseudo'
import designSystem from 'styli-middleware-design-system'

export const middleware: Middleware[] = [pseudo(), designSystem()]
