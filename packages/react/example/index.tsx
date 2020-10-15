import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStyle, styled, Styli } from '../../core/src'
import { View } from '../src'
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
        color: 'red'
      },
    },
  ],
})

Styli.config({
  colors: {
    themeColor: '#000'
  },
  convertConfig: [
    {
      name: 'theme',
      key: (prop) => {
        return /^theme-\w+$/.test(prop)
      },
      style: (prop, propValue) => {
        const [, value = ''] = prop.match(/^theme-(\w+)$/) || []
        if(value === 'dark') return createStyle('bgGray500 white')
        if (value === 'light') return createStyle('bgGray200 black')
        return {}
      }
    }
  ]
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

const StyledButton = styled(Button, 'p-10')

const NewView = styled(MyView, 'fontBold')

const App = () => {
  return (
    <div className="box">
      <NewView theme-light>=============View</NewView>
      <NewView foo="foo" gooo={11} bgBandColor themeColor p-20>
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
