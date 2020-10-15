import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { styled, toFinalProps, Modifiers, Styli } from '../../core/src'
import { View } from '../src'
import { Button } from '@material-ui/core'

export const MyView: React.FC<{ style?: any; gooo?: number; foo?: string }> = ({
  children,
  ...props
}) => {
  return (
    <div style={props.style}>
      {children}
      {props.foo || ''}
    </div>
  )
}

Styli.setUnit('px')

const StyledButton = styled(Button, 'p-10')

const NewView = styled(MyView, 'fontBold')

const App = () => {
  return (
    <div className="box">
      <View red500>View</View>
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
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
