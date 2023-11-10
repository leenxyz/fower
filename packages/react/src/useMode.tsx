import { fowerStore } from '@fower/core'
import { useState, useEffect } from 'react'
interface Result {
  mode: string
  setMode: (mode: string) => void
}

export function useMode(): Result {
  const [state, setState] = useState<string>(fowerStore.getMode())

  useEffect(() => {
    const cacheMode = localStorage.getItem('fower-mode')
    if (cacheMode && cacheMode !== fowerStore.config.mode.currentMode) {
      setMode(cacheMode)
    }
  }, [])
  function setMode(mode: string) {
    setState(mode)
    fowerStore.setMode(mode)
  }

  return { mode: state, setMode } as Result
}
