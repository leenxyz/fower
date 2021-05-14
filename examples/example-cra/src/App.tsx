import React from 'react'
import { Box } from '@fower/react'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <Box p4 bgRed200>
        gogo
      </Box>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
