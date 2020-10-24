import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { PragmaDemo } from './PragmaDemo'

const App = () => {
  return (
    <div
      css={{
        backgroundColor: 'hotpink',
        '&:hover': {
          color: 'lightgreen',
        },
      }}
      className="box"
    >
      <div>Home page</div>
      <PragmaDemo></PragmaDemo>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
