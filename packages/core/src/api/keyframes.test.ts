import { keyframes } from '.'

test('keyframes()', () => {
  const name = keyframes({
    '0%': {
      backgroundColor: 'red',
    },
  })

  expect(typeof name).toBe('string')
  expect(name).toMatch(/^keyframes-/)
})
