import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { PragmaDemo } from './PragmaDemo'

const App = () => {
  return (
    <div className="box">
      <PragmaDemo></PragmaDemo>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
