import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStyle, styled, Styli } from '../../core/src'
import { View, Text } from '../src'
import { Button } from '@material-ui/core'

Styli.config({
  unit: 'px',
  colors: {
    bandColor: '#FCD423',
  },
  convertConfig: [
    {
      key: 'disableStyle',
      style: {
        fontSize: 22,
        color: 'red',
      },
    },
  ],
})

Styli.config({
  colors: {
    themeColor: '#000',
  },
  convertConfig: [
    {
      name: 'theme',
      key: (prop) => {
        return /^theme-\w+$/.test(prop)
      },
      style: (prop, propValue) => {
        const [, value = ''] = prop.match(/^theme-(\w+)$/) || []
        if (value === 'dark') return createStyle('bgGray500 white')
        if (value === 'light') return createStyle('bgGray200 black')
        return {}
      },
    },
  ],
})

console.log('-------->', Styli.getConfig('convertConfig'))

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

const NewView = styled(MyView, 'fontBold')

// const Div = myStyled('div', {
//   background: 'red',
// })

const Div = styled('div', {
  background: 'red',
})

const Input = styled('input', {
  background: 'grey',
})

const mql = window.matchMedia('(max-width: 600px)')

mql.addEventListener('change', (e) => {
  if (e.matches) {
    /* the viewport is 600 pixels wide or less */
    console.log('This is a narrow screen — less than 600px wide.')
  } else {
    /* the viewport is more than than 600 pixels wide */
    console.log('This is a wide screen — more than 600px wide.')
  }
})

const App = () => {
  return (
    <div className="box">
      <Div p-20 white css={{ backgroundColor: 'yellow' }}>
        Div
      </Div>
      <Input />
      <View red500>View</View>
      <Text green500>Text</Text>
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
