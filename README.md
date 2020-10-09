# Styli

Styli 是一个将样式集成在组件属性上的工具。它可以帮助您方便快捷的开发出满意的 UI。

## 特点

传统样式开发有以下特点

> - 样式与组件分离。分离的好处在于代码可维护性强，但当一个元素有四五个类名是常见的事，我们修改一个样式时，可能不得不在多个文件中跳来跳去找到样式位置进行修改。这极大影响了开发效率。
> - 复用性。观察项目代码可以发现，很多样式是可以复用的，但当我们提取出来取个类名，再应用到不同地方时，往往显的类名词不达意。
> - 繁琐。面对一个仅仅需要修改字体的元素，我们需要给它想一个类名，并将其添加到样式表中。

针对以上弊端，我们研究开发了 Styli, 它将一些常用 CSS 属性集成到了组件上，并内置了大量的简写属性，同时提供了完整的类型支持，在 VSCode 的强力支持下可以很方便的满足您快速还原 UI 的需求。为了满足您多样化的需求，我们也提供了个性化配置选项，您可以实现您的自定义样式属性。在使用 Styli 的同时，您也依旧可以同时使用传统内联 style 和外部 css 的方式。

## 开始

首先从 npm 安装 Styli 核心库

```bash
npm i @styli/core
```

再根据需要安装组件库

```bash
npm i @styli/react
npm i @styli/react-native
npm i @styli/taro
```

紧接着，在您的代码中导入组件、书写代码

```typescript
import { View } from '@styli/react'

export const Demo = () => {
  return (
    <View text-16 gray100 borderSolid-1 style={{ backgroundColor: 'red' }} className="demo">
      哈哈哈
    </View>
  )
}
```

## 进阶

### createStyle

当组件上样式属性非常多时，您可能想要将其提取出来。

```typescript
import { Modifiers } from '@styli/core'

const styleProps: Modifiers = {
  dangerColor: true,
  ['text-16']: true,
  ['gray100']: true,
  ['borderSolid-1']: true,
}
...

<View {...styleProps}>哈哈哈</View>
```

createStyle 方法提供了一种快捷处理方法

```typescript
import { Modifiers, createStyle } from '@styli/core'

const style = createStyle('text-16 gray100 borderSolid-1', {
  backgroundColor: 'red'
})

<View h1 style={style}>哈哈哈</View>
```

### 自定义色值

我们内置了多种颜色值来帮助您快捷的添加颜色，但这对您来说可能远远不够，因而我们提供了自定义能力来帮助您。

```typescript
import { Styli } from '@styli/core'

Styli.configColors({
  themeColor: '#FCD431'
})

...
<View h1 themeColor borderThemeColor-1>哈哈哈</View>
```

### 自定义属性

我们内置了多种样式属性来帮助您快捷开发，但这对您来说可能远远不够，因而我们提供了自定义属性的能力来帮助您。

```typescript
import { Styli, createStyle } from '@styli/core'

Styli.config({
  covertConfig: [
    {
      key: 'disabledStyle',
      style: {
        color: 'themeColor',
      },
    },
    {
      key: (prop) => {
        return /test-\d+/.test(prop)
      },
      style: (prop) => {
        const [, value] = prop.match(/test-(\d+)/)
        return createStyle(`text-${value} fontBold`)
      },
    },
  ],
})

...
<View disabledStyle test-16>取消</View>
```

### 自定义组件

当使用自定义功能时，没有办法在组件库导出的组件上利用 VSCode 的自动补全自定义属性。因而您需要定义类型，再重新包装一层

#### 定义组件

方式一:

包装组件库组件

```typescript
import React, { FC } from 'react'
import { View as StyliView, ViewProps as StyliViewProps } from '@styli/react'

interface CustomProps {
  themeColor: true
  disabledStyle: true
}

interface ViewProps extends StyliViewProps, CustomProps {}

export const View: FC<ViewProps> = ({ children, ...props }) => {
  return <StyliView {...props}>{children}</StyliView>
}
```

方式二:

包装原始标签

```typescript
import React, { FC } from 'react'
import { toFinalProps, Modifiers } from '@styli/core'

interface CustomProp {
  themeColor: true
  disabledStyle: true
}

export interface HeadingProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
    Modifiers,
    CustomProp {}

export const H1: FC<HeadingProps> = ({ children, ...props }) => {
  const finalProps: any = toFinalProps({ h1: true, ...props })
  return <div {...finalProps}>{children}</div>
}
```

我们的组件库中可能没有覆盖到您需要的标签、或者您想将样式属性能力添加到您的自定义组件中，您可以通过 toFinalProps 方法进行转换过滤

#### 使用组件

```typescript
import { View, H1 } from '@/styli/components'

...
<View themeColor disabledStyle>哈哈哈</View>
<H1>哈哈哈</H1>
```

## 文档

> - [Flex](!#)
> - [Position](!#)
> - [Margin](!#)
> - [Padding](!#)
> - [Text](!#)
> - [Border](!#)
> - [Size](!#)
