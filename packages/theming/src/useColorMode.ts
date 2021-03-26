import { useStore } from 'stook'

export function useColorMode() {
  return useStore('ColorMode', 'default')
}
