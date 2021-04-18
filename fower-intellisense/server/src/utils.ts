import { upFirst } from '@fower/utils'

export function toPostfix(value: string) {
  const size = [
    'xs',
    'sm',
    'md ',
    'lg',
    'xl',
    '2xl',
    '3xl',
    '4xl',
    '5xl',
    '6xl',
    '7xl',
    '8xl',
    '9xl',
  ]
  if (size.includes(value)) return value.toUpperCase()
  return upFirst(value)
}
