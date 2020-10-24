import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { PragmaDemo } from './PragmaDemo'

const App = () => {
  return (
<<<<<<< Updated upstream
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
=======
    <div className="box">
      <View red500>Helloword</View>
      <NewView foo="foo" gooo={11} pink500 bgGray200 p-20>
        就哈哈哈哈哈哈哈哈哈
      </NewView>
      <Button variant="contained" style={{ padding: '40px' }}>
        Default
      </Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <StyledButton variant="contained" p-20>
        StyledButton
      </StyledButton>
>>>>>>> Stashed changes
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
