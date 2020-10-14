import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { styled } from '../../core/src/styled'
import { toFinalProps, Modifiers, Styli } from '../../core/src'

export interface ViewProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    Modifiers {}

export const View: React.FC<ViewProps> = ({ children, ...props }) => {
  const finalProps = toFinalProps(props)
  return <div {...finalProps}>{children}</div>
}

Styli.setUnit('px')

const NewView = styled(View)('f-20 fontBold', 'gray600', {
  background: 'red',
})

const App = () => {
  return (
    <div className="box">
      <View s-100 bgGray100 roundedT="100px" center p-10>
        哈哈哈哈
      </View>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
