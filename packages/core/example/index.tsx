import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { styled, Styli } from '../../core/src'
import { toCss } from '../../core/src/plugins'
import { Button } from '@material-ui/core'

export const View = styled('div')
export const Text = styled('span')

Styli.config({
  plugins: [toCss],
})

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

// const StyledButton = styled(Button, 'p-10')
const StyledButton = styled(Button, 'p-10')

const NewView = styled(MyView)

// const Div = myStyled('div', {
//   background: 'red',
// })

const Div = styled('div', {})

const Input = styled('input', {
  background: 'grey',
})

const App = () => {
  return (
    <div className="box">
      <Div p-20 white bgBlue100>
        <View c-40 p-20 bgWhite>
          HH
        </View>
      </Div>
      <Input />
      <View red500>View</View>
      <Text green500>Text</Text>
      <Div f-24>
        <Div fontWeight-200>落霞与孤鹜齐飞，秋水共长天一色。</Div>
        <Div fontWeight={400}>落霞与孤鹜齐飞，秋水共长天一色。</Div>
        <Div fontBold>落霞与孤鹜齐飞，秋水共长天一色。</Div>
      </Div>
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
